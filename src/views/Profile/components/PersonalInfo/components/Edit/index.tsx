import './style.scss';

import { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { ReactComponent as UploadIcon } from '@/assets/icons/upload-photo.svg';
import Input from '@/components/common/Input';
import { useAppSelector } from '@/hooks';
import userService from '@/services/userService';
import { IUserEditData } from '@/types/user';
import { editSchema } from '@/utils/constants/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

const Edit: FC = () => {
    const { userData } = useAppSelector((state) => state.user);
    const uploadInputRef = useRef<HTMLInputElement | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IUserEditData>({
        defaultValues: {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            fatherName: userData?.fatherName ?? '',
            birthDate: userData?.birthDate ?? '',
            birthPlace: userData?.birthPlace ?? '',
            gender: userData?.gender ?? '',
            fileId: 0,
            email: userData?.email,
            username: userData?.username,
        },
        resolver: yupResolver(editSchema),
    });

    const openImageLoader = () => {
        if (uploadInputRef.current) {
            uploadInputRef.current.click();
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (file.size >= 2 * 1024 * 1024) return toast.error('Sekilin olcusu 2MB cox ola bilmez!');

        if (!file.type.startsWith('image/')) return toast.error('Yalnis format!');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('description', file.name);
        const { data, status } = await userService.uploadProfileImage(formData);

        if (status === 200) {
            toast.success('Sekil elave edildi!');
            setValue('fileId', data.data.id);
            return;
        }

        toast.error(data?.message);
    };

    const editUserData: SubmitHandler<IUserEditData> = async (data) => {
        const response = await userService.updateUserData(data);

        if (response?.status === 200) {
            toast.success('Qeyd edildi');
            return;
        }
        toast.error('Xeta bas verdi');
    };

    return (
        <div className='edit'>
            <div className='profile-image'>
                <img
                    src='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
                    alt='profile'
                />
                <button className='upload-image' onClick={openImageLoader}>
                    <UploadIcon />
                    <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageUpload}
                        ref={uploadInputRef}
                        style={{ display: 'none' }}
                    />
                </button>
            </div>
            <div className='general'>
                <h3 className='title'>Ümumi məlumatlar</h3>
                <form onSubmit={handleSubmit(editUserData)} id='edit-form'>
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
            <ToastContainer
                position='top-right'
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    );
};

export default Edit;
