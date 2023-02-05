import React, {useState} from 'react'
import Navbar from './Navbar'
import OffCanvas from '@/components/OffCanvas'
import Search from '@/components/Search'


function NavBarLayout({ children, handleChange, filter}: any) {
    
    return (
        <>
           
            <Navbar handleChange={handleChange} filter={filter}/>
        
            <main>{children}</main>
        </>
    )
}

export default NavBarLayout
