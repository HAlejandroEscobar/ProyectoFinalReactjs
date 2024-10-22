import React, { useEffect, useState } from 'react'
import  {getProducts}  from  '../firebase/firebase'

// , getSingleProduct

function ProductsComponent () {
  
    const [myProds, setMyProds]  = useState([]);
    // const  [singleProd, setSingleProd]  = useState (null);

    useEffect (() =>  {
    //     getSingleProduct('hzlXQGtXiE9Fc0TfQWLd').then((response =>  setSingleProd(response))
        
    // );
    
      getProducts().then(products => setMyProds(products));


    }, []);

    const handleUpdate =  () => {};

    const handleDelete =  () => {};




    return (
    
    <>
   {/* {singleProd && (
        <p>
          Producto: {singleProd.title} - Precio $ {singleProd.price}
        </p>
      )} */}

    {myProds.map(prod  =>  <article key={prod.id}>

            <h1>{prod.title}</h1>
            <img src={prod.image} alt={prod.image} />
            <p>{prod.description}</p>
            <p>Precio: ${prod.price}</p>
            <p>Categoria: {prod.category}</p>
            <p>Stock: {prod.stock}</p>
      
      
           </article>)}   
    </>

);
}

export default ProductsComponent