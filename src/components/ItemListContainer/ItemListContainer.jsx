import React, { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import Item from '../Item/Item';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';


function ItemListContainer ()  {

    const {category} = useParams();
    // console.log(category);
    
    const [products, setProducts] = useState([]);

    // useEffect  (()  => {
    //     getProducts.then(data => setProducts(data));
    // }, []);

    useEffect  (()  => {
        getProducts.then ((res) => {
                if (category){
                    setProducts( res.filter((products) => products.category === category));
                }
                else {
                    setProducts(res);
                }
            })

    }, [category])



    return (
        <>
        <section style={{display:'flex', gap: 50, margin: 20, padding: 5, border:' solid, black, 10px'}}>
        {products.map(product  =>  <Item key={product.id} product={product}/>)}


        </section>
    


    </>
    )
  }
  
  export default ItemListContainer