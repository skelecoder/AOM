import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
const strapiPort = process.env.NEXT_PUBLIC_STRAPI_PORT;

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Username', type: 'email', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = await axios.post(`http://${strapiHost}:${strapiPort}/api/auth/local`, {
                    identifier: credentials.username,
                    password: credentials.password,
                });

                if (user.data) {
                    return user.data;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.jwt = token.jwt;
            session.user = token.user;
            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.jwt = user.jwt;
                token.user = user.user;
            }
            return token;
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin',
    },
});
