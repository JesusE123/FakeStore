import React, {useState} from 'react'
import dynamic from "next/dynamic"

import Menu from '@/components/Menu'
const Layout = dynamic(() => import ('@/components/Layout'))
const Cards = dynamic(() => import ( '@/components/Cards'))

function Dashboard({posts}:any) {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(posts);
  
  
  

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
        <Layout>
        <Menu/>
        <Cards data={data}/>
        </Layout> 
    </div>
  )
}



export async function getStaticProps(context:any) {
   const res = await fetch('https://fakestoreapi.com/products')
   const posts = await res.json();

   return {
    props:{
      posts
    }
   }
    
}
export default Dashboard
