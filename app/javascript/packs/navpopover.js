import React, {useState} from 'react'
import {Popover, Button} from '@material-ui/core'

const camelize = (str) => {
  return str.replace(/(?:^\w|\[A-Z\]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const NavPopover = ({title, ChildComponent}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? `${camelize(title)}-popover` : undefined

  return (
    <>
      <Button onClick={handleClick} aria-describedby={id} color="inherit">
        {title}
      </Button>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ChildComponent />
      </Popover>
    </>
  )
}

export default NavPopover
