// ContactContext.jsx
import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, ] = useState([
    { id: 1, name: 'noach', email: 'noach@yooo', phone: '12345678' },
    { id: 2, name: 'john', email: 'jane@yo', phone: '239439843' },
    
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  const selectContact = (contactId) => {
    const contact = contacts.find(contact => contact.id === contactId);
    setSelectedContact(contact);
  };

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, selectContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
