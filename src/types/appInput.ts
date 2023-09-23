import { CSSProperties } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface appInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    style?: CSSProperties;
    required?: boolean;
    hasError?: boolean;
    register: UseFormRegister<any>;
}
