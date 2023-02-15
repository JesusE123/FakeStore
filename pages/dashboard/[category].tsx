import React, {useState, useEffect, useContext} from 'react'
import dynamic from "next/dynamic"
import Menu from '@/components/Menu'
import { SearchContext } from '@/context/searchContext'
import Layout from '@/components/Layout'
import Cards from '@/components/Cards'

function Category({posts}:any) {
  const { data, dispatch } = useContext(SearchContext)

  useEffect(() => {
    dispatch({type: 'SET_DATA' , data: posts})
  }, [posts, dispatch])
  return (
    <div className='container-fluid'>     
        <Layout>
        <Menu />
        <Cards posts={data?.data || []}/>
        </Layout>
    </div>
  )
}

export async function getStaticPaths() {

  return {
    paths: [],
    fallback:"blocking"
  }
}

export async function getStaticProps(context:any) {
  console.log(context.params)
   const res = await fetch(`https://fakestoreapi.com/products/category/${context.params.category}`)
   const posts = await res.json();

   return {
    props:{
      posts
    }
   }
    
}
export default Category
