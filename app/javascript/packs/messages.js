import 'channels'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import MessagesChannel from 'channels/messages_channel'
import { Button, TextField } from '@material-ui/core'
import { API_ROOT, HEADERS } from '../constants'

const MessagesBoard = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const corsToken = document.querySelector('[name=csrf-token]').content

  useEffect(() => {
    MessagesChannel.received = (data) => {
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
      <TextField type="text" value={message} placeholder="Chat away!"
        onChange={({target: { value }}) => setMessage(value)} />
      <Button variant="contained" onClick={handleSubmit}>Send message</Button>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default MessagesBoard
