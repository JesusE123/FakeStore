import {createContext, useState} from 'react'
import useSWR from "swr"

export const CategoryContext = createContext();
const fetcher = url => fetch(url).then(res => res.json())
export const CategoryProvider = ({children}) => {
   const {data, error} = useSWR('https://fakestoreapi.com/products/categories', fetcher)
    return (
        <CategoryContext.Provider value={{data}}>
            {children}
        </CategoryContext.Provider>
    )
}



