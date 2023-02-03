import React, {useState} from 'react'
import Card from '../components/Card'
import OffCanvas from '@/components/OffCanvas'
import Search from '@/components/Search'
import NavBarLayout from '@/components/NavBarLayout'
import Swal from 'sweetalert2'
import Cards from '@/components/Cards'



function Dashboard({posts}:any) {

  const [search, setSearch] = useState('')
  console.log(search)
  
  const handleChange = (e:any) => {
      setSearch(e.target.value)
  } 
 
  return (
    <div className='container-fluid'>     
        <NavBarLayout handleChange={handleChange}/>
        <Cards data={posts}/>
   
  

      
    </div>
  )
}

export async function getStaticProps() {
   const res = await fetch('https://fakestoreapi.com/products')
   const posts = await res.json();

   return {
    props:{
      posts
    }
   }
    
}
export default Dashboard
