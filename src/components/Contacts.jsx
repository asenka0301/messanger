import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { setCurrentContactId } from '../slice/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const AllContacts = useSelector((state) => {
    const { contacts } = state.contactsReducer;
    return contacts;
  });
  const activeContact = useSelector((state) => {
    const { currentContactId } = state.contactsReducer;
    return currentContactId;
  });

  const handleClick = (id) => {
    dispatch(setCurrentContactId(id));
  };

  return (
    <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {AllContacts && AllContacts.map((contact) => (
        <li key={contact.contactId} className="nav-item w-100">
          <button
            type="button"
            className={cn(
              'w-100',
              'rounded-0',
              'text-start',
              'border-0',
              'btn',
              {
                'btn-secondary': contact.contactId === activeContact,
              },
            )}
            onClick={() => handleClick(contact.contactId)}
          >
            {contact.contactName}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contacts;
