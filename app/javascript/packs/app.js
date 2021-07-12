import React from 'react'
import ReactDOM from 'react-dom'
import MessagesBoard from './messages'
import NavBar from './navbar'
import { Container, Grid } from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <NavBar />
      <MessagesBoard />
    </Container>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')) )
})
