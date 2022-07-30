import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material"
import Pic1 from "../public/images/pc1.png"
import Image from 'next/image'
import Head from 'next/head'
import { useState } from "react";
import LoginPage from "../components/auth/LoginPage";
import Registration from "../components/auth/Registration";

const TabPanel = (props: any) => {
    const {children, value, index} = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    )
}

const Login = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    }
    return <>
        <Head>
            <title>Login/Registration</title>
            <meta name="description" content="next js app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid container sx={{ height: '90vh' }}>
            <Grid item lg={7} sm={5} sx={{display: {xs: 'none', sm: 'block'}}}>
                <Image
                    alt="Mountains"
                    src={Pic1}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </Grid>
            <Grid item lg={5} sm={7} xs={12}>
                <Card sx={{width:'100%', height:'100%'}}>
                   <Box>
                        <Box sx={{}}>
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                                <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            </Tabs>
                            <TabPanel value={value} index={0}><LoginPage /></TabPanel>
                            <TabPanel value={value} index={1}><Registration /></TabPanel>
                        </Box>
                   </Box>
                </Card>
            </Grid>
        </Grid>

    </>
}

export default Login