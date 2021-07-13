import React from 'react'
import {AppBar, Popover, Button, Toolbar, Typography} from '@material-ui/core'
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
      <Typography className={classes.title} variant="h6">
        CableTalk
      </Typography>
    <Button color="inherit">Login</Button>
<Popover 
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
>
  The content of the Popover.
</Popover>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
