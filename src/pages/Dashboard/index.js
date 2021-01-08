/* eslint-disable max-len */
import React from 'react'
import { Box } from '@material-ui/core'

import FeedPost from 'modules/FeedPost'
import FeedInput from 'modules/FeedInput'

import useStyles from './style'

export default function DashboardPage() {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        width={600}
        className={classes.body}
      >
        <Box className={classes.feed}>
          <FeedInput />
          <FeedPost />
          <FeedPost />
        </Box>
      </Box>
    </Box>
  )
}
