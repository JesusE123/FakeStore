import React, {useState} from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2'
import Card from './Card'
import Search from './Search'
import { useContext } from 'react'
import { DataContext } from '@/context/dataContext'


const Cards = () => {
    const {state,dispatch} = useContext(DataContext)
  
    const { addItem }: any = useCart()
    
    return (
        <>
        
        <div className='grid grid-cols-4 gap-4'>
           
            {
                state.filteredData.map((element:any, index:any) => {
                    return (
                        <Card 
                        key={index}
                        title={element.title}
                        price={element.price}
                        description={element.description}
                        element={element}
                        image={element.image}
                        additem={addItem}
                        />

                    )
                })
            }

            
        </div>
        </>
    )
}

export default Cards