import React from 'react'
import {
  AppBar, Toolbar, IconButton, Typography,
  InputBase, Badge,
} from '@material-ui/core'

import HideOnScroll from 'utils/HideOnScroll'
import Drawer from 'components/Drawer'
import useStyles from './style'
import useCustom from './hooks'

export default function Header(props) {
  const classes = useStyles()
  const { state, handler } = useCustom()

  const menuId = 'primary-search-account-menu'

  return (
    <HideOnScroll {...props}>
      <div className={classes.grow}>
        <AppBar className={classes.navBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handler.toggleDrawer}
            >
              <i className="fas fa-bars" />
            </IconButton>
            <Drawer
              toggleDrawer={handler.toggleDrawer}
              drawerOpen={state.drawerOpen}
            />
            <Typography className={classes.title} variant="h6">
              DartedMonki
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <i className="fas fa-search" />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <i className="fas fa-envelope" />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <i className="fas fa-bell" />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <i className="fas fa-user-circle" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </HideOnScroll>
  )
}
