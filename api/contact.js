import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PAYLOAD_BYTES = 100_000; // ~100KB ceiling for an encrypted message

// Strip CR/LF to prevent header/subject injection via the sender email.
const sanitizeHeader = (value) => value.replace(/[\r\n]+/g, ' ').trim();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { encryptedData, senderEmail } = req.body ?? {};

  if (!encryptedData || !senderEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (typeof senderEmail !== 'string' || !EMAIL_RE.test(senderEmail)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (typeof encryptedData !== 'string' || encryptedData.length > MAX_PAYLOAD_BYTES) {
    return res.status(413).json({ error: 'Payload too large' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Shlomo Contact <contact@shlomo.us>',
      to: 'hello@shlomo.us',
      replyTo: senderEmail,
      subject: `[Secure Contact] New encrypted message from ${sanitizeHeader(senderEmail)}`,
      text: encryptedData,
    });

    if (error) {
      // Log full detail server-side; return a generic message to the client.
      console.error('Resend error:', JSON.stringify(error));
      return res.status(502).json({ error: 'Unable to send message. Please try again later.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
  }
}
