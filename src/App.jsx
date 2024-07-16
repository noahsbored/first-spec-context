import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetail';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Product and Contact Management App</h1>
        <Routes>
          {/* Product Routes */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<NewProductForm />} />

          {/* Contact Routes */}
          <Route path="/" element={<ContactProviderWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

const ContactProviderWrapper = () => (
  <ContactProvider>
    <ContactList />
    <ContactDetails />
  </ContactProvider>
);

export default App;
