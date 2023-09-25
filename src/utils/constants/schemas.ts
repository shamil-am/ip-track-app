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

export const editSchema = yup.object().shape({
    fileId: yup.number().notRequired(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    fatherName: yup.string().notRequired(),
    birthDate: yup.string().notRequired(),
    birthPlace: yup.string().notRequired(),
    gender: yup.string().notRequired(),
    email: yup.string().email().required(),
    username: yup.string().required(),
});
