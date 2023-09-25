import './style.scss';

import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, MouseEvent, ReactElement } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactElement<any, any>;
    label: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    variant: 'violet' | 'gray' | 'silver';
}

const Button: FC<IProps> = ({ label, icon, onClick, variant, ...props }) => {
    return (
        <button className={classNames('app-button', { [variant]: true })} onClick={onClick} {...props}>
            {icon && <>{icon}</>}
            <span>{label}</span>
        </button>
    );
};

export default Button;
