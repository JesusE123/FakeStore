import React, {useState} from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2'
import Card from './Card'
import Search from './Search'


const Cards = ({data}: any) => {
  
    const { addItem }: any = useCart()
    
    return (
        <>
        
        <div className='grid grid-cols-4 gap-4'>
           
            {
                data.map((element:any, index:any) => {
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