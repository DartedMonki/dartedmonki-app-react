import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  text: {
    wordWrap: 'break-word',
  },
  body: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
}))

export default useStyles
