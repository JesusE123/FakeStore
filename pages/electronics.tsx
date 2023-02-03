import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import NavBarLayout from '@/components/NavBarLayout';
import { useCart } from 'react-use-cart'
function Electronics({ data }: any) {
    console.log(data)
    return (

        <div className='container-fluid'>
           hola

        </div >
    )


}
export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

export default Electronics
