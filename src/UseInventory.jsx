import { useState, useEffect } from 'react';
import axios from 'axios';

const useInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const response = await axios.post('https://fakestoreapi.com/products', product);
    setProducts([...products, response.data]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return {
    products,
    addProduct,
    removeProduct,
  };
};

export default useInventory;
