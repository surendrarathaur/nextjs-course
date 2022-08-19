import React, { useState } from 'react'
import { TextField, Button, Box } from "@mui/material"
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/actions/authAction'
const Registration = () => {
    const dispatch = useDispatch();
    const [userData, setUserdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        city: ''
    })

    const clear = () => {
        setUserdata({ firstName: '', lastName: '', email: '', password: '', phone: '', city: '' });
    };

    const onsubmit = async (e: any) => {
        e.preventDefault()
        console.log('Submit Data', userData)
        dispatch(registerUser(userData));
        clear();
    }

    return <>
        <Box sx={{ mt: 1, pt: 1 }}>
            <form onSubmit={onsubmit} noValidate autoComplete='off' id='login-form'>
                <TextField margin="normal" required fullWidth id="firstName" name="firstName" label='First name' value={userData.firstName} onChange={(e) => setUserdata({ ...userData, firstName: e.target.value })} />
                <TextField margin="normal" required fullWidth id="lastName" name="lastName" label='Last name' value={userData.lastName} onChange={(e) => setUserdata({ ...userData, lastName: e.target.value })} />
                <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' value={userData.email} onChange={(e) => setUserdata({ ...userData, email: e.target.value })} />
                <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type='password' value={userData.password} onChange={(e) => setUserdata({ ...userData, password: e.target.value })} />
                <TextField margin="normal" required fullWidth id="phone" name="phone" label='Phone' value={userData.phone} onChange={(e) => setUserdata({ ...userData, phone: e.target.value })} />
                <TextField margin="normal" required fullWidth id="city" name="city" label='City' value={userData.city} onChange={(e) => setUserdata({ ...userData, city: e.target.value })} />
                <Box>
                    <Button type="submit" variant='contained'>Register</Button>
                    <Button variant="contained" onClick={clear}>Clear</Button>
                </Box>
            </form>
        </Box>
    </>
}

export default Registration