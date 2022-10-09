import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { logIn } from "redux/auth/authOperations";
import { authSchema } from "constants";
import { FormLink } from "./LoginForm.styled";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget.elements;
        const user = {
            email: form.email.value,
            password: form.password.value,
        };
        dispatch(logIn(user));
        e.target.reset();
    };

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={authSchema}
        >
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    minHeight: '100%',
                }}>
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            <Box sx={{ my: 2 }}>
                                <Typography variant="h4">
                                    Log in
                                </Typography>
                            </Box>
                            <TextField
                                margin="normal"
                                autoComplete="email"
                                name="email"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                autoComplete="password"
                                name="password"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                autoFocus
                                type="password"
                            />
                            <Button
                                type="submit"
                                size="l"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Log In
                            </Button>
                            <FormLink to="/login">
                                Do'nt have an account? Sign up
                            </FormLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Formik>
    );
};

export default LoginForm;