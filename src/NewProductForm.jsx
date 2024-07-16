
import React, { useState } from 'react';
import useInventory from './UseInventory';
import { useNavigate } from 'react-router-dom';

const NewProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { addProduct } = useInventory();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { title, price, id: Date.now() };
    await addProduct(newProduct);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>add new product</h2>
      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProductForm;
