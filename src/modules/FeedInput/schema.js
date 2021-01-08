import * as Yup from 'yup'

const feedInputSchema = Yup.object().shape({
  message: Yup.string().max(100, 'Message must contain maximum 100 characters'),
})

export default feedInputSchema
