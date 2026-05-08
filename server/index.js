import nodemailer from 'nodemailer';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors(
  {
    origin: [process.env.CLIENT_ORIGIN], 
  },
));

app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth:{
      user: process.env.AUTH_MAIL,
      pass: process.env.AUTH_PASS
    }
});

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
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.AUTH_MAIL,
      subject: `🔥 New Message from ${name}`,
      text: message,
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
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});