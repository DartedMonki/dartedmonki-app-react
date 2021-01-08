import React from 'react'
import { Box, Avatar, Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'

import useStyles from './style'
import feedInputSchema from './schema'

export default function FeedInput() {
  const classes = useStyles()

  return (
    <Box>
      <Box display="flex" flex={1} flexDirection="row">
        <Avatar>D</Avatar>
        <Box pl={2} pr={2} display="flex" flex={1} flexDirection="column">
          <Formik
            initialValues={{
              message: '',
            }}
            validationSchema={feedInputSchema}
          >
            {({
              errors, handleBlur, isSubmitting, touched,
            }) => (
              <Form>
                <Box display="flex" flexDirection="column">
                  <Field
                    name="message"
                    type="text"
                    title="Status"
                    placeholder="What's On Your Thoughts?"
                    handleBlur={handleBlur}
                    error={errors.message}
                    touch={touched.message}
                  />
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      disabled={isSubmitting}
                      className={classes.button}
                      type="submit"
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  )
}
