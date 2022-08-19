import { TextField, Button, Box, Alert } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from '../../store/actions/authAction'

const LoginPage = () => {
    const dispatch = useDispatch();
    const [userData, setUserdata] = useState({
        email: '',
        password: ''
    })
    const onsubmit = (e: any) => {
        e.preventDefault()
        console.log('Submit Data', userData)
        dispatch(loginUser(userData))
        return false
    }

    return <>
        <Box sx={{ mt: 1, pt: 1 }} id='login-form'>
            <form autoComplete="off" noValidate onSubmit={onsubmit}>
                <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' value={userData.email} onChange={(e) => setUserdata({...userData, email: e.target.value})}/>
                <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type='password' value={userData.password} onChange={(e) => setUserdata({...userData, password: e.target.value})}/>
                <Box>
                    <Button type="submit" variant='contained'>Login</Button>
                </Box>
            </form>
        </Box>
    </>
}

export default LoginPage