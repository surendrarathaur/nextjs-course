import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
const Navbar = () => {
    const router = useRouter();
    return <>
       <Box sx={{flexGrow:1}}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                        Next Js App
                    </Typography>
                    
                    <Link href="/"><Button sx={{color:'white', textTransform:'none'}}>Home</Button></Link>
                    <Link href="/aboutus"><Button sx={{color:'white', textTransform:'none'}}>About Us</Button></Link>
                    <Link href="/contactus"><Button sx={{color:'white', textTransform:'none'}}>Contact Us</Button></Link>
                    <Link href="/login"><Button sx={{color:'white', textTransform:'none'}}>Login/Registration</Button></Link>
                </Toolbar>
            </AppBar>
       </Box>
    </>
}

export default Navbar