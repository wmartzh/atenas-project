import Joi from "joi";
import type { CreateAccountForm } from "$lib/types";

export const CrearCuentaSchema = Joi.object<CreateAccountForm>({
	name: Joi.string().required().messages({
		'string.empty': 'Nombre es requerido'
	}),
	email: Joi.string().email({ tlds: false }).required().messages({
		'string.empty': 'Correo es requerido',
		'string.email': 'Correo no es valido'
	}),
	password: Joi.string().min(6).required().messages({
		'string.empty': 'Contraseña es requerida',
		'string.min': 'Contraseña debe tener al menos 6 caracteres',
		'any.only': 'Las contraseñas no coinciden'
	}),
	confirmPassword: Joi.ref('password'),
	phoneNumber: Joi.string().required().messages({
		'string.empty': 'Telefono es requerido'
	}),
	lastName: Joi.string().required().messages({
		'string.empty': 'Apellido es requerido'
	}),
	identification: Joi.string().required().messages({
		'string.empty': 'Identificacion es requerida'
	}),
	noCarnet: Joi.string().required().messages({
		'string.empty': 'No. Carnet es requerido'
	}),
	country: Joi.string().required().messages({
		'string.empty': 'Pais es requerido'
	}),
	gender: Joi.string().required().messages({
		'string.empty': 'Genero es requerido',
		'any.only': 'Genero no es valido'
	})
});