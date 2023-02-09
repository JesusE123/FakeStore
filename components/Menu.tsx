import React from 'react'
import Link from 'next/link'
import {useContext} from "react"
import { CategoryContext } from '@/context/categoryContext'

const Menu = () => {
    const {data} = useContext(CategoryContext)
   
  return (
    <div className='grid grid-cols-4 gap-4'>
        {data?.map((element:any, index:any) => {
            return (
                <div key={index} className=''>
                    <ul className=''>
                        <li>
                        <Link href={`/dashboard/${element}`} className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
                            {element}
                        </Link>
                        </li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default Menu