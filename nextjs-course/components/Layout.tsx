import { CssBaseline } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

function Layout({children} : any) {
  return <>
        <CssBaseline />
        <Navbar />
        {children}
    </>
}

export default Layout