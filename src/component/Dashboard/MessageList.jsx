import React from 'react'
import './MessageList.css'



/* MessageList acts bubble component to display incoming and outgoing messages  */

const MessageList = ({messages,currentUser}) => {
  return (
<div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-item ${message.sender === currentUser ? 'sender' : 'receiver'}`}
        >
          <div className="message-text">{message.text}</div>
          <div className="message-details">
            <div className="message-sender">{message.sender}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList;