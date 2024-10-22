import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../asyncMock';



function ItemDetailContainer ()  {

    const [product, setProduct] = useState ({})

    const  {id} = useParams();

    useEffect  (() => {
        setProduct (getProduct(id))
      }, []);

  return (
    <>
        <article style={{border:'solid 5px orange', padding:20, width:'800px', height: '600px'}}>
            <h1 style={{height: '50px'}}>{product.title}</h1>
            <img style={{height: '150px'}}src={product.image} alt={product.title} />
            <p style={{height: '50px'}}>Descripcion: {product.description}</p>
            <p style={{height: '50px'}}>Precio: {product.price}</p>
            <button  style={{width:'20px'}}>+</button><button style={{width:'20px'}}>-</button><input type="text" />
            <p style={{height: '10px'}}></p>
            <button style={{height: '50px'}}>Comprar</button>
        </article>
    </>
  )
}

export default ItemDetailContainer