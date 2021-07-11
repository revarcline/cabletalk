import 'channels'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import MessagesChannel from 'channels/messages_channel'
import { API_ROOT, HEADERS } from '../constants'

const MessagesBoard = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const corsToken = document.querySelector('[name=csrf-token]').content

  useEffect(() => {
    MessagesChannel.received = (data) => {
      console.log(data)
      setMessages(data.messages)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'X-CSRF-TOKEN': corsToken
      },
      body: JSON.stringify({ message })
    })
    setMessage('')
  }

  return (
    <div>
      <input type="text" value={message}
        onChange={({target: { value }}) => setMessage(value)} />
      <button onClick={handleSubmit}>Send message</button>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MessagesBoard />, document.body.appendChild(document.createElement('div')) )
})
