import React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ( { 
  root: { 
    flexGrow: 1
  },
  menuButton: { 
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
} ))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant="h6">
        CableTalk
      </Typography>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
