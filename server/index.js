import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
dotenv.config();


const resend = new Resend(process.env.RESEND_API_KEY);
const anasEmail = process.env.GMAIL_USER;
const port = process.env.PORT;
const app = express();

app.use(cors(
  {
    origin: [process.env.CLIENT_ORIGIN], 
  },
));

app.use(express.json());

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
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: anasEmail,

      subject: `New portfolio message from ${name}`,

      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>${message}</p>
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