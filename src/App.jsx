import { React } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import './styles/global.css'

export function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage message='Hello' sender='user' />

      <ChatMessage message='Hi! How can I help you?' sender='robot' />
      <ChatMessage message='What is today´s date?' sender='user' />
      <ChatMessage message='Today is saturday' sender='robot' />
      <ChatMessage message='Thanks!' sender='user' />
    </>
  )
}
