import React from 'react';
import useInventory from './UseInventory';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to="/add-product">Add New Product</Link>
    </div>
  );
};

export default ProductList;
