import jwt from 'jsonwebtoken';

export default function Auth(req, res) {
    try {
        const token = req.headers.authorization
        const isAuthenticated = jwt.verify(token, process.env.JWT_SECRET)
        return res.status(200).json({ isAuthenticated: true })
    } catch (error) {
        return res.status(200).json({ isAuthenticated: false })
    }
}