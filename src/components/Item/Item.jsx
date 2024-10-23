import { Link } from 'react-router-dom';
import React from 'react';

function Item({ product }) {
  return (
    <article className='article-item'>
      <h4>{product.title}</h4>
      <img style={{ height: '120px', width: '160px' }} src={product.image} alt={product.title} />
      <p>$ {product.price}</p>
      <button>
        <Link to={`/product/${product.id}`}>Detalles</Link>
      </button>
    </article>
  );
}

export default Item;
