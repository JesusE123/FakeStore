import React, {useState} from 'react'
import Link from 'next/link'
import OffCanvas from './OffCanvas'
import Search from './Search'
function Navbar({ handleChange, filter}:any) {
  
    return (
        <div>
             <div className='d-flex justify-between py-3 mb-3 bg-blue-400 mt-2 shadow-xl shadow-blue-500'>
                <h1 className='text-center text-3xl font-bold ms-4'>Bienvenido a Fake Store</h1>
                <Search handleChange={handleChange} filter={filter} />
                <OffCanvas />
            </div>
            <ul className="flex grid grid-cols-5 gap-x-10 gap-y-10">
                <li className="flex-1">
                    <Link href={`/dashboard/electronics`} className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Electronica</Link>
                </li>
                <li className="flex-1">
                    <Link href={"/dashboard/jewelery"} className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Joyeria</Link>
                </li>
                <li className="text-center">
                    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Hombres</a>
                </li>
                <li className="text-center">
                    <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Mujeres</a>
                </li>
                <li className="text-center">
                    <Link href="/dashboard" className='text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'>Principal</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
