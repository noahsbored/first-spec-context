import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact Details</h2>
      {selectedContact ? (
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      ) : (
        <p>Please select a contact to see details.</p>
      )}
    </div>
  );
};

export default ContactDetails;
