import './style.scss';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import { IUserEditData } from '@/types/user';
import { editSchema } from '@/utils/constants/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

const Edit: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserEditData>({ resolver: yupResolver(editSchema) });

    const editUserData: SubmitHandler<IUserEditData> = async (data) => {
        console.log(data);

        // const response = await userService.registerUser(data);

        // if (response?.status === 200) {
        //     toast('Hesab yaradildi!');
        //     setTimeout(() => {
        //         navigate(ERoutePaths.LOGIN);
        //     }, 1000);
        //     return;
        // }

        // toast.error(response?.data?.message);
    };

    return (
        <div className='edit'>
            <div className='profile-image'>
                <img
                    src='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
                    alt=''
                />
            </div>
            <div className='general'>
                <h3 className='title'>Ümumi məlumatlar</h3>
                <form onSubmit={handleSubmit(editUserData)}>
                    <Input name='firstName' label='Ad:' required hasError={!!errors.firstName} register={register} />
                    <Input name='lastName' label='Soyad:' required hasError={!!errors.lastName} register={register} />
                    <Input
                        name='fatherName'
                        label='Ata adı:'
                        required
                        hasError={!!errors.fatherName}
                        register={register}
                    />
                    <Input
                        name='birthDate'
                        label='Doğum tarixi:'
                        required
                        hasError={!!errors.birthDate}
                        register={register}
                    />
                    <Input
                        name='birthPlace'
                        label='Doğum yeri:'
                        required
                        hasError={!!errors.birthPlace}
                        register={register}
                    />
                    <Input name='gender' label='Cinsi:' required hasError={!!errors.gender} register={register} />
                    <Input name='email' label='E-mail:' required hasError={!!errors.email} register={register} />
                    <Input
                        name='username'
                        label='Istifadeci adi:'
                        required
                        hasError={!!errors.username}
                        register={register}
                    />
                </form>
            </div>
        </div>
    );
};

export default Edit;
