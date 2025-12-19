import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material"
import LockOutlineIcon from '@mui/icons-material/LockOutline';

const LoginPage = () => {

    const handleSubmit = () => {

    }

    return (
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
                <Box component="form"
                    onSubmit={handleSubmit}
                    noValidate>
                    <TextField
                        placeholder="Enter username"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        placeholder="Enter password"
                        fullWidth
                        type="password"
                        sx={{ mb: 2 }}
                    />
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Button variant='contained'
                        fullWidth
                        sx={{ mb: 1 }}
                    >
                        Sign In
                    </Button>
                </Box>
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
    );
}

export default LoginPage;