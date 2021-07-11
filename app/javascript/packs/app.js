import React from 'react'
import ReactDOM from 'react-dom'
import MessagesBoard from './messages'
import { Container } from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <MessagesBoard />
    </Container>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')) )
})
