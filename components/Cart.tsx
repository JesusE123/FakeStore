import React, {useState} from 'react'
import { BsFillCartDashFill } from "react-icons/bs"

const Cart = ({handleShow, items}:any) => {
  console.log(items)
  const [count, setCount] = useState(0)
  return (
    <div className='mx-4'>
    
        <button onClick={handleShow} className=' hover:text-white'>
                <BsFillCartDashFill size={50} /> 
               
        </button>
       
    </div>
  )
}

export default Cart