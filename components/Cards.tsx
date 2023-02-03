import React from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2'
import Card from './Card'

const Cards = ({data}: any) => {
    console.log(data)
    const { addItem }: any = useCart()
    
    return (
        <div>
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
    )
}

export default Cards