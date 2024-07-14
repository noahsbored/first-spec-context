
import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactList = () => {
  const { contacts, selectContact } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => selectContact(contact.id)} style={{ cursor: 'pointer' }}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
