import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  try {
    // Brevo API call (uses HTTPS port 443, so Render won't block it)
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Contact', email: 'tsionphilipo6@gmail.com' },
        to: [{ email: 'tsionphilipo6@gmail.com', name: 'Tsion' }],
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        htmlContent: `<p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                      <p><strong>Message:</strong></p>
                      <p>${message}</p>`
      })
    });

    if (response.ok) {
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      const errorData = await response.json();
      console.error('Brevo error:', errorData);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));