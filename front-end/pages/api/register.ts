import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
const strapiPort = process.env.NEXT_PUBLIC_STRAPI_PORT;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;

    const { data: usersData } = await axios.get(`http://${strapiHost}:${strapiPort}/api/users`);

    const users = usersData.map((user) => {
        return { username: user.username, email: user.email };
    });

    const userUsername = users.some((user) => user.username === body.username);

    const userEmail = users.some((user) => user.email === body.email);

    if (userUsername) return res.status(200).json({ messageNom: "Non d'utilisateur déjà existant" });
    if (userEmail) return res.status(200).json({ messageEmail: 'Email déjà existant' });

    const { data } = await axios.post(`http://${strapiHost}:${strapiPort}/api/users`, {
        username: body.username,
        email: body.email,
        password: body.password,
    });

    if (data) res.status(200).json({ messageSuccess: 'registered' });
}
