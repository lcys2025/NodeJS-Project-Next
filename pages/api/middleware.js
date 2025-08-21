// pages/api/middleware.js
// Simple authentication middleware for Next.js API routes

export function requireAuth(handler) {
  return async (req, res) => {
    // Example: check for session cookie
    const session = req.cookies.session;
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // Optionally, validate session here
    return handler(req, res);
  };
}
