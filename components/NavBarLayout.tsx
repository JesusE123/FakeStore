import React, {useState} from 'react'
import Navbar from './Navbar'
import OffCanvas from '@/components/OffCanvas'
import Search from '@/components/Search'


function NavBarLayout({ children,  handleChange }: any) {
    
    return (
        <>
           
            <Navbar handleChange={handleChange}/>
            <main>{children}</main>
        </>
    )
}

export default NavBarLayout
