import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { register } from "redux/auth/authOperations";
import { authSchema } from "constants";
import { FormLink } from "./RegisterForm.styled";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const form = e.currentTarget.elements;
            const user = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            };
            await dispatch(register(user));
            e.target.reset();
        } catch (error) {
            toast.error('User with such email already exist!');
        }
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
                                    Registration
                                </Typography>
                            </Box>
                            <TextField
                                margin="normal"
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                type="text"
                            />
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
                                sx={{ mt: 3, mb: 2, bgcolor: "bgcolor" }}
                            >
                                Sign In
                            </Button>
                            <FormLink to="/login">
                                Do you have an account? Log in
                            </FormLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Formik>
    );
};

export default RegisterForm;