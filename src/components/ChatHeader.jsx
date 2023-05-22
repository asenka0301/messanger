import React from 'react';
import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const allContacts = useSelector((state) => {
    const { contacts } = state.contactsReducer;
    return contacts;
  });

  const contactId = useSelector((state) => {
    const { currentContactId } = state.contactsReducer;
    return currentContactId;
  });
  const currentContact = allContacts.find((contact) => contact.contactId === contactId);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          {currentContact && currentContact.contactName}
        </b>
      </p>
    </div>
  );
};

export default ChatHeader;
