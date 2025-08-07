import { React, useState } from 'react'
import { Chatbot } from '../chatbotApi'
import '../styles/ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  async function sendMessage() {
    if (!inputText) {
      return
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages)

    const response = await Chatbot.getResponse(inputText)
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('')
  }

  return (
    <>
      <input
        placeholder='Send a message do Pierce Chatbot'
        size={30}
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}
