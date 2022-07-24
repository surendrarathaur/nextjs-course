import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
const Footer = () => {
    return <>
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                        Copyright@nextjs-app.com
                    </Typography>
                </Toolbar>
            </AppBar>
       </Box>
    </> 
}

export default Footer