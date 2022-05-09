import type { NextPage } from 'next';
import { useState } from 'react';
import { getCsrfToken, signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

const SignIn: NextPage = ({ csrfToken }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { error } = useRouter().query;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        signIn('credentials', { username, password });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Identification
                </Typography>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                {error && (
                    <Typography component="p" sx={{ color: 'red', fontWeight: '500' }}>
                        Identification Incorrecte
                    </Typography>
                )}
                <Typography></Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nom d'utilisateur"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de pass"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Connexion
                    </Button>
                </Box>
                <Typography sx={{ fontSize: 'body1', fontWeight: '600', ml: 1 }}>
                    Vous n'avez pas de compte
                    <NextLink href={'/auth/signup'} passHref>
                        <Link sx={{ ml: 1 }}>S'inscrire Ici</Link>
                    </NextLink>
                </Typography>
            </Box>
        </Container>
    );
};

export default SignIn;

export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (session) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
