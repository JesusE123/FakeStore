import React, {useState} from 'react'
import Navbar from './Navbar'

function Layout({ children}: any) {
    
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout
