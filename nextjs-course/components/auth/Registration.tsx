import { TextField, Button, Box, Alert } from "@mui/material"
const Registration = () => {
    return <>
        <Box component='form' noValidate sx={{ mt: 1, pt: 1 }} id='login-form'>
            <TextField margin="normal" required fullWidth id="firstName" name="firstName" label='First name' />
            <TextField margin="normal" required fullWidth id="lastName" name="lastName" label='Last name' />
            <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' />
            <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type='password' />
            <TextField margin="normal" required fullWidth id="phone" name="phone" label='Phone' />
            <TextField margin="normal" required fullWidth id="city" name="city" label='City' />
            <Box>
                <Button type="submit" variant='contained'>Register</Button>
            </Box>
        </Box>
    </>
}

export default Registration