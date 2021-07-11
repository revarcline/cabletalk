import 'channels'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import MessagesChannel from 'channels/messages_channel'
import { csrfToken } from "@rails/ujs"

const MessagesBoard = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessagge] = useState('')

  useEffect(() => {
    MessagesChannel.recieved = (data) => setMessages(data.messages)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify({ message })
    })
  }
}

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<MessagesBoard />, document.body.appendChild(document.createElement('div')) )
  })
