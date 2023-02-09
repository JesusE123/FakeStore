import React, {useState} from 'react'
import Link from 'next/link'
import OffCanvas from './OffCanvas'
import Search from './Search'
function Navbar() {
  
    return (
        <div>
             <div className='d-flex justify-between py-3 mb-3 bg-blue-400 mt-2 shadow-xl shadow-blue-500'>
                
                    <Link href='/dashboard' className='font-bold text-3xl text-black mx-3'> Bienvenido a Fake Store</Link>
               
                <Search  />
                <OffCanvas />
            </div>
        </div>
    )
}

export default Navbar
