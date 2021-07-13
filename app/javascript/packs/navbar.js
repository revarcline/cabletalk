import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavPopover from './navpopover'
import SignUp from './signup'

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
    {/* put a logged_in conditional here  */}      
      <NavPopover title="Sign Up" ChildComponent={SignUp} />
    {/* end conditional */}
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default NavBar
