import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { encryptedData, senderEmail } = req.body;

  if (!encryptedData || !senderEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Shlomo Contact <contact@shlomo.us>',
      to: 'hello@shlomo.us',
      replyTo: senderEmail,
      subject: `[Secure Contact] New encrypted message from ${senderEmail}`,
      text: encryptedData,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}
