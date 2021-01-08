import React from 'react'
import { Box } from '@material-ui/core'

import FeedPost from 'modules/FeedPost'
import FeedInput from 'modules/FeedInput'
import RecordInput from 'modules/RecordInput'

import useStyles from './style'
import useCustom from './hooks'

export default function DashboardPage() {
  const classes = useStyles()
  const { state, handler } = useCustom()

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
          <RecordInput
            record={state.record}
            handleOnStop={handler.handleOnStop}
            handleOnData={handler.handleOnRecording}
            handleStartRecording={handler.handleStartRecording}
            handleStopRecording={handler.handleStopRecording}
          />
          <FeedInput />
          <FeedPost />
          <FeedPost />
        </Box>
      </Box>
    </Box>
  )
}
