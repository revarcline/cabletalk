import 'channels'
import React, {useState, useEffect} from 'react'
import MessagesChannel from 'channels/messages_channel'
import { Button, TextField, Grid, List, ListItem, Container } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core/styles'
import { API_ROOT, HEADERS } from '../constants'

  //const useStyles = makeStyles()

const MessagesBoard = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const corsToken = document.querySelector('[name=csrf-token]').content
  //const classes = useStyles()

  useEffect(() => {
    MessagesChannel.received = (data) => {
      setMessages(data.messages)
      console.log(data.messages)
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
        <Grid container item xs={9}>
      <TextField type="text" value={message} placeholder="Chat away!"
        onChange={({target: { value }}) => setMessage(value)} />
        </Grid>
        <Grid container item xs={3}>
      <Button variant="contained" onClick={handleSubmit}>Send message</Button>
        </Grid>
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
