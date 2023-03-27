import Joi from 'joi';

export const filmSchema = Joi.object({
    filmtitle: Joi.string().required(),
    genre: Joi.string().required(),
    mainactor: Joi.string().required(),
});