import 'channels'
import React, {useState, useEffect} from 'react'
import MessagesChannel from 'channels/messages_channel'
import { Button, TextField, Grid, List, ListItem, Container } from '@material-ui/core'
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
    <Container spacing={2}>
      <Grid container direction="row">
      <TextField type="text"
        fullWidth
        value={message}
        placeholder="Chat away!"
        onChange={({target: { value }}) => setMessage(value)}
        InputProps={{endAdornment: <Button variant="contained"
                     onClick={handleSubmit}>Send</Button>
                    }} />
      </Grid>

      <Grid container direction="row">
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            {message.username}:
            <br />
            {message.content}
          </ListItem>
        ))}
      </List>
      </Grid>
    </Container>
  )
}

export default MessagesBoard
