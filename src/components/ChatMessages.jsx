import React from 'react'
import { ChatMessage } from './ChatMessage'

// Este componente renderiza a lista de mensagens

export function ChatMessages({ chatMessages }) {
  return (
    <>
      {chatMessages.map(chatMessage => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        )
      })}
    </>
  )
}
