import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const registrationSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')])
        .required(),
});
