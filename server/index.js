import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const app = express();

const port = process.env.PORT || 3001;

const allowedOrigins = (
  process.env.CLIENT_ORIGIN || 'http://localhost:5173'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
  }),
);

app.use(express.json());

function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error('Missing Gmail credentials in environment variables.');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
      user,
      pass,
    },

    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

function validateContactPayload({ name, email, message }) {
  if (!name || !email || !message) {
    return 'Please fill in name, email, and message.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address.';
  }

  if (message.trim().length < 10) {
    return 'Please provide a more detailed message.';
  }

  return null;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const validationError = validateContactPayload({
    name,
    email,
    message,
  });

  if (validationError) {
    return res.status(400).json({
      message: validationError,
    });
  }

  try {
    const transporter = createTransporter();

    await transporter.verify();

    await transporter.sendMail({
      from: `"Anas Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'anas.odeh.per@gmail.com',
      replyTo: email,

      subject: `New portfolio message from ${name}`,

      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">
            New portfolio contact message
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p style="white-space: pre-line;">
            ${message}
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact email error:', error);

    return res.status(500).json({
      message:
        'The server could not send the email. Check your Gmail configuration.',
    });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distDir));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});