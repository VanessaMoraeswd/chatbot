import robotImg from '../assets/images/robot-img.jpeg'
import userImg from '../assets/images/user-img.jpeg'

import '../styles/Chatmessage.css'

export function ChatMessage({ message, sender }) {
  return (
    <>
      <div>
        {sender === 'robot' && <img src={robotImg} />}
        {message}
        {sender === 'user' && <img src={userImg} />}
      </div>
    </>
  )
}
