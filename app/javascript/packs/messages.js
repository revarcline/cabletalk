import 'channels'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import MessagesChannel from 'channels/messages_channel'

const MessagesBoard = () => {

}

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<MessagesBoard />, document.body.appendChild(document.createElement('div')) )
  })
