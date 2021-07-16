import jwt from 'jsonwebtoken';

export default async function Login(req, res) {
    if (req.method === 'POST' && req.body.githubUser) {
        const { githubUser } = req.body
        const githubData = await fetch(`https://api.github.com/users/${githubUser}`)
        if (githubData.status === 200) {
            const githubInfo = await githubData.json();
            const payload = {
                githubUser,
                roles: [
                    githubInfo.type
                ],
                iat: 1626444022,
                exp: 1627048822
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            return res.status(200).json({ token })
        }
    }
    return res.status(404).send()
}