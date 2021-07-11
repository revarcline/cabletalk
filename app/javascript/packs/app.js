import React from 'react'
import ReactDOM from 'react-dom'
import MessagesBoard from './messages'

const App = () => {
  return (<MessagesBoard />)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')) )
})
