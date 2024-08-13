import { serialize } from 'cookie';

export default function handler(req, res) {
  const { theme } = req.query; // Assuming theme is passed as a query parameter
  const MAX_AGE = 365 * 24 * 60 * 60 * 10; // 10 years in seconds

  res.setHeader('Set-Cookie', serialize('currentTheme', theme, {
    maxAge: MAX_AGE,
    path: '/',
    httpOnly: false, // Set to true if you want the cookie to be accessible only by the web server
    secure: process.env.NODE_ENV === 'production', // Set to true in production
  }));

  res.status(200).json({ message: 'Theme set successfully' });
}