import React from 'react'
import {AppBar, IconButton, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = () => {
  return (
    <Toolbar>
    <AppBar position="static">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </AppBar>
    </Toolbar>
  )
}

export default NavBar
