import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'
import { API_ROOT, HEADERS } from '../constants'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const corsToken = document.querySelector('[name=csrf-token]').content

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`${API_ROOT}/signup`, {
      method: 'POST',
      headers: {
        ...HEADERS,
        'X-CSRF-TOKEN': corsToken
      }, 
      body: JSON.stringify({})
    })
  }

  return (
    <div>sign up form</div>
  )
}

export default SignUp
