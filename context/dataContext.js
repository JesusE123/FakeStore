
import { createContext, useState } from "react";
import useSWR from "swr"

export const DataContext = createContext();
const fetcher = url => fetch(url).then(res => res.json())
export const DataProvider = ({ children }) => {
  const {data, error} = useSWR('https://fakestoreapi.com/products', fetcher)
  const [posts, setPosts] = useState(data)


  const handleFilterData = (searchTerm) => {
    if(searchTerm === '') {
      setPosts(data)
    } else {
      const filteredData = posts.filter((element) => {
        return searchTerm.toLowerCase() === '' ? element : element.title.toLowerCase().includes(searchTerm)
      })
      setPosts(filteredData)
      
    }

  }

  return (
  <DataContext.Provider value={{posts, handleFilterData}}>{children}</DataContext.Provider>
  )
};
