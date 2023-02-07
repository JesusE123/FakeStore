import React, {useState} from 'react'
import Link from 'next/link';
import dynamic from "next/dynamic"
const NavBarLayout = dynamic(() => import ('@/components/NavBarLayout'))
const Cards = dynamic(() => import ( '@/components/Cards'))
function Jewels ({ posts }: any) {
    console.log(posts)

    const [data, setData] = useState(posts);
    const [search, setSearch] = useState('')
  
const filter = (search:any) => {
    const filterResult = posts.filter((element:any) => {
      return search.toString().toLowerCase() === '' ? element : element.title.toLowerCase().includes(search)
    })
  setData(filterResult)

      console.log(data)
} 
const handleChange = (e:any) => {
    setSearch(e.target.value)
    filter(e.target.value)
    
    
  }
    return (

        <div className='container-fluid'>
         <NavBarLayout handleChange={handleChange} filter={filter} />
         <Cards data={data}/>

        </div >
    )


}
export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const posts = await res.json()

    return {
        props: {
            posts,
        }
    }
}

export default Jewels