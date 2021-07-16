import { useRouter } from 'next/router'

export default async function Users(req, res) {
    if (req.query.user_name) {
        const userName = req.query.user_name;
        const githubResponse = await fetch(`https://api.github.com/users/${userName}`)
        if (githubResponse.status === 200) {
            return res.status(200).json(await githubResponse.json())
        }
    }

    return res.status(404).send()
}
