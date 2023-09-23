import './style.scss';

import classNames from 'classnames';
import { FC } from 'react';

import { appInputProps } from '@/types/appInput';

const Input: FC<appInputProps> = ({ label, name, placeholder, disabled, style, register, required, hasError }) => {
    return (
        <div className={classNames('app-input', { error: hasError })}>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} style={style} {...register(name, { required, disabled })} />
        </div>
    );
};

export default Input;
