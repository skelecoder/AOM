import type { NextPage } from 'next';
import { useState } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

const SignUp: NextPage = ({ csrfToken }: any) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameMsg, setUsernameMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (username === '') return setUsernameMsg("Entrez un Nom d'utilisateur");
        else setUsernameMsg('');
        const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regExEmail.test(email) || email === "") return setEmailMsg("Entrez un Email valide");
        else setEmailMsg('');
        if (password === '') return setPasswordMsg('Entrez un mot de pass');
        else setPasswordMsg('');
        if (password != confirmPassword) return setPasswordMsg("les mots de passes doivent être identiques");
        else setPasswordMsg('');
        const regExPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        if (!regExPassword.test(password)) return setPasswordMsg("Mot de pass doit contenir aux moins 8 caractères une majuscule une minuscule un chiffre et un caractère spécial");
        else setEmailMsg('');
        const { data } = await axios.post('../api/register', {
            username,
            email,
            password,
        });

        if (data.messageNom) return setUsernameMsg(data.messageNom)
        if (data.messageEmail) return setEmailMsg(data.messageEmail)
        
        if (data.messageSuccess) router.push('/auth/signin')
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
                    Inscription
                </Typography>
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
                    <Typography component="span" sx={{ color: 'red' }}>
                        {usernameMsg}
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Typography component="span" sx={{ color: 'red' }}>
                        {emailMsg}
                    </Typography>
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirmer mot de pass"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Typography component="span" sx={{ color: 'red' }}>
                        {passwordMsg}
                    </Typography>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        S'inscrire
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;

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
            session,
        },
    };
}
