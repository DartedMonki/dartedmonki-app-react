import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@material-ui/core'
import { ReactMic } from 'react-mic'
import { red } from '@material-ui/core/colors'

import useStyles from './style'

export default function RecordInput({
  record,
  handleOnStop,
  handleOnData,
  handleStartRecording,
  handleStopRecording,
}) {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <ReactMic
        record={record}
        className={classes.recordWrapper}
        onStop={handleOnStop}
        onData={handleOnData}
        strokeColor="#000000"
        backgroundColor={red[600]}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleStartRecording}>Start</Button>
        <Button onClick={handleStopRecording}>Stop</Button>
      </Box>
    </Box>
  )
}

RecordInput.defaultProps = {
  record: false,
  handleOnStop: () => {},
  handleOnData: () => {},
  handleStartRecording: () => {},
  handleStopRecording: () => {},
}

RecordInput.propTypes = {
  record: PropTypes.bool,
  handleOnStop: PropTypes.func,
  handleOnData: PropTypes.func,
  handleStartRecording: PropTypes.func,
  handleStopRecording: PropTypes.func,
}
