import React from 'react'
import '../styles/ChatInput.css'

export function ChatInput() {
  return (
    <>
      <input placeholder='Send a message do Pierce Chatbot' size={30} />
      <button>Send</button>
    </>
  )
}
