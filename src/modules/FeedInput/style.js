import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nameWrapper: {
    '& > span:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  name: {
    fontWeight: 700,
  },
  audio: {
    marginTop: theme.spacing(1),
  },
}))

export default useStyles
