import {createContext, useState} from 'react'
import useSWR from "swr"

export const DataContext = createContext();

const fetcher = url => fetch(url).then(res => res.json())

export const DataProvider = ({children}) => {
    const {data, error} = useSWR('https://fakestoreapi.com/products', fetcher)
return(
    <DataContext.Provider value={{data}}>
        {children}
    </DataContext.Provider>
)
}