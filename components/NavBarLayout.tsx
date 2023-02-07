import React, {useState} from 'react'
import Navbar from './Navbar'
import OffCanvas from '@/components/OffCanvas'
import Search from '@/components/Search'


function NavBarLayout({ children, handleChange, filter, filterCategory}: any) {
    
    return (
        <>
           
            <Navbar handleChange={handleChange} filter={filter} filterCategory={filterCategory}/>
        
            <main>{children}</main>
        </>
    )
}

export default NavBarLayout
