// Next.js API route for logout
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Destroy session cookie (if using cookies)
    res.setHeader('Set-Cookie', 'session=; Max-Age=0; Path=/; HttpOnly;');
    res.status(200).json({ message: 'Logged out' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
