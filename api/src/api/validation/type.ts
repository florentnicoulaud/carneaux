import Joi from 'joi'

export const typeValidator = Joi.object({
  nom: Joi.string().required()
})
