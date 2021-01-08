import React from 'react'
import { Box, Avatar, Typography } from '@material-ui/core'
import useStyles from './style'

export default function FeedPost() {
  const classes = useStyles()

  return (
    <Box>
      <Box display="flex" flex={1} flexDirection="row">
        <Avatar>D</Avatar>
        <Box pl={2} pr={2} display="flex" flex={1} flexDirection="column">
          <Box className={classes.nameWrapper}>
            <span className={classes.name}>DartedMonki</span>
            <span>@dartedmonki</span>
          </Box>
          <Typography
            variant="body1"
            style={{
              wordWrap: 'break-word',
            }}
            align="justify"
          >
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <audio controls className={classes.audio}>
          <track default kind="captions" srcLang="en" src="/dummy.vtt" />
          <source src="dummy.mp3" type="audio/mpeg" />
          If you see this Error. Your browser does not support the audio
          element.
        </audio>
      </Box>
    </Box>
  )
}
