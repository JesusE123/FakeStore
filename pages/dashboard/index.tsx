import React, {useState} from 'react'
import dynamic from "next/dynamic"
import Menu from '@/components/Menu'

const Layout = dynamic(() => import ('@/components/Layout'))
const Cards = dynamic(() => import ( '@/components/Cards'))

function Dashboard({}:any) {
  return (
    <div className='container-fluid'>     
        <Layout>
        <Menu/>
        <Cards />
        </Layout> 
    </div>
  )
}

export default Dashboard
