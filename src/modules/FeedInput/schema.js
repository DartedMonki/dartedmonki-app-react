import * as Yup from 'yup'

const feedInputSchema = Yup.object().shape({
  message: Yup.string().max(25, 'Message must contain maximum 25 characters'),
})

export default feedInputSchema
