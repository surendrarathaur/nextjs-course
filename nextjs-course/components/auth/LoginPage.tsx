import { TextField, Button, Box, Alert } from "@mui/material"

const LoginPage = () => {
    return <>
        <Box component='form' noValidate sx={{mt:1, pt: 1}} id='login-form'>
            <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' />
            <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type='password' />
            <Box>
                <Button type="submit" variant='contained'>Login</Button>
            </Box>
        </Box>
    </>
}

export default LoginPage