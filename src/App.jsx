
import React from 'react';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetail';

const App = () => {
  return (
    <ContactProvider>
      <div className="App">
        <h1>Contact Management App</h1>
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;
