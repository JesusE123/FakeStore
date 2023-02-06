import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import Image from 'next/image';
const OffCanvas = () => {
    const [show, setShow] = useState(false)
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div>

            <Cart handleShow={handleShow} items={items}/>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tus productos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isEmpty ? <h5>Su carrito esta vacio</h5> :
                        <h2 className='font-bold'>Productos : {totalUniqueItems} Total: {totalItems}</h2>
                    }
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                        <Image src={item.image} alt='producto' width={150} height={50}/>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}$</td>
                                        <td>Total {item.quantity}</td>
                                        <td>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                className='btn btn-danger'>-</button>
                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                className='btn btn-success'>+</button>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div>
                        <h2>Precio total: ${cartTotal} </h2>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default OffCanvas

