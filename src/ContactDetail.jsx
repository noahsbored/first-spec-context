
import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact Details</h2>
      {selectedContact ? (
        <div>
          <p>name {selectedContact.name}</p>
          <p>email {selectedContact.email}</p>
          <p>phone {selectedContact.phone}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ContactDetails;
