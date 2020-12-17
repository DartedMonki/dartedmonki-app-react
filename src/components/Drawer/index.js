import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'

import useStyles from './style'

export default function Drawer({
  toggleDrawer, drawerOpen,
}) {
  const classes = useStyles()

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <i className="fas fa-envelope" /> : <i className="fas fa-envelope" />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <i className="fas fa-envelope" /> : <i className="fas fa-envelope" />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

Drawer.defaultProps = {
  drawerOpen: false,
}

Drawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool,
}
