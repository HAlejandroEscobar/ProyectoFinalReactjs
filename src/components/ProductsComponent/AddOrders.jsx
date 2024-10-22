import { useState } from "react"
import { sendOrder } from "../firebase/firebase";


function AddOrders () {

    const [orderId, setOrderId] =  useState(null);

    const handleClick = () => {
        const newOrder = {
            buyer:{
                email: 'juan@gmail.com',
                name: 'juan',
                phone:  '+57 315 256485',
            },

            date:new Date(),
            items:[
                {
                    id:4,
                    title: 'ventilador',
                    price: 450,
                },
                {
                    id:5,
                    title: 'estufa',
                    price: 250,
                }
            ],
            total: 700
        };
        sendOrder(newOrder).then(id =>setOrderId(id));
    };


  return (
    <>
        <button onClick = {handleClick}>  Enviar nueva orden de pedido</button>
        {orderId  && <p>Orden generada: {orderId}</p>}
    </>
  )
}

export default AddOrders