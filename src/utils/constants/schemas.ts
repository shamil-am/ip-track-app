import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const registrationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmedPassword: yup
        .string()
        .oneOf([yup.ref('password')])
        .required(),
});
