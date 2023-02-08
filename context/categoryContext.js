import {createContext, useState} from 'react'

export const CategoryContext = createContext();

export const CategoryProvider = ({children, datos}) => {
 
   

    return (
        <CategoryContext.Provider value={{datos}}>
            {children}
        </CategoryContext.Provider>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const datos = await res.json();

    return {
        props: {
           datos ,
        }
    }
}



