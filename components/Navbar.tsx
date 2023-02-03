import React, {useState} from 'react'
import Link from 'next/link'
import OffCanvas from './OffCanvas'
import Search from './Search'
function Navbar({handleChange, handleSearch}:any) {
    
    return (
        <div>
             <div className='d-flex justify-between py-3 mb-3 bg-blue-400 mt-2 shadow-xl shadow-blue-500'>
                <h1 className='text-center text-3xl font-bold ms-4'>Bienvenido a Fake Store</h1>
                <Search  handleChange={handleChange}/>
                <OffCanvas />
            </div>
            <ul className="flex grid grid-cols-4 gap-x-10 gap-y-10">
                <li className="flex-1">
                    <Link href="/electronics "className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Electronica</Link>
                    
                </li>
                <li className="flex-1">
                    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Joyeria</a>
                </li>
                <li className="text-center">
                    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Hombres</a>
                </li>
                <li className="text-center">
                    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Mujeres</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
