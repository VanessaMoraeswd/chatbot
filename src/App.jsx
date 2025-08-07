import { React, useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './styles/global.css'

export function App() {
  const [chatMessages, setChatMessages] = useState([])
  return (
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

      <ChatMessages chatMessages={chatMessages} />
      {/* <ChatMessage message='Hello' sender='user' />

      <ChatMessage message='Hi! How can I help you?' sender='robot' />
      <ChatMessage message='What is today´s date?' sender='user' />
      <ChatMessage message='Today is saturday' sender='robot' />
      <ChatMessage message='Thanks!' sender='user' /> */}
    </>
  )
}
