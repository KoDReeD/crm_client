import { Alert, Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material"
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "../features/auth/slices/authSlice";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.auth)

    const [showError, setShowError] = useState();

    const {
        // прикрепляю к полям, чтобы react-hook-form знал
        register,
        // обёртка для функции отправки формы.Она автоматически соберёт данные и передаст их
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login(data))
    };

    useEffect(() => {
        if (error) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
                dispatch(resetError());
            }, 2000)

            // очищаем таймер при размонтировании или новом запуске
            return () => clearTimeout(timer);
        }
    }, [error])


    return (
        <>
            <Container maxWidth='xs'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}>
                <Paper sx={{ p: 2 }}>
                    <Avatar sx={{
                        mx: 'auto',
                        bgcolor: 'secondary.main',
                        mb: 1
                    }}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            mb: 1
                        }}>
                        Sign In
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            placeholder="Enter username"
                            fullWidth
                            {...register('email', {
                                required: 'укажите email',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Неверный формат email'
                                }
                            })}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                        <TextField
                            placeholder="Enter password"
                            fullWidth
                            type="password"
                            sx={{ mt: 2 }}
                            {...register('password', {
                                required: 'укажите пароль',
                                minLength: {
                                    value: 6,
                                    message: 'Пароль должен быть не короче 6 символов'
                                }
                            })}
                        />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                            sx={{ mt: 2 }} />
                        <Button variant='contained'
                            fullWidth
                            sx={{ mb: 1 }}
                            type="submit"
                            disabled={loading}
                        >
                            Sign In
                        </Button>
                    </form>
                    <Grid container
                        sx={{
                            justifyContent: "space-between",
                            mt: 1
                        }}>
                        <Link>Forgot password?</Link>
                        <Link>Sign Up</Link>
                    </Grid>
                </Paper>
            </Container>

            {showError && (
                <Alert
                    severity="error"
                    sx={{
                        // фиксирует элемент относительно окна браузера, а не документа
                        position: 'fixed',
                        bottom: 16,
                        // сдвинуть левый край элемента на 50% ширины родителя
                        left: '50%',
                        // сдвинуть элемент влево на 50% его собственной ширины
                        transform: 'translateX(-50%)',
                        maxWidth: 400,
                        zIndex: 1300
                    }}
                >
                    {error}
                </Alert>
            )}
        </>
    );
}

export default LoginPage;