import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'
import { API_ROOT, HEADERS } from '../constants'

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers: {
        ...HEADERS,
      }, 
      body: JSON.stringify({})
    })
  }

  return (
    <div>login form</div>
  )
}

export default LogIn
