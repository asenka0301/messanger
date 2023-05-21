import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageForm from './MessageForm';
import Messages from './Messages';
import AddContactModal from './AddContactModal';

const ChatPage = () => {
  const [modal, showModal] = useState(false);
  return (
    <>
      <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
          <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
            <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
              <b>Контакты</b>
              <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={() => showModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <span className="visually-hidden">+</span>
              </button>
            </div>
          </div>
          <div className="col p-0 h-100">
            <div className="d-flex flex-column h-100">
              <ChatHeader />
              <Messages />
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
      { modal && <AddContactModal showModal={showModal} modal={modal} />}
    </>
  );
};

export default ChatPage;
