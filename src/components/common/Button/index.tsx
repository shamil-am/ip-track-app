import './style.scss';

import classNames from 'classnames';
import { FC, MouseEvent, ReactElement } from 'react';

interface IProps {
    icon?: ReactElement<any, any>;
    label: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    variant: 'violet' | 'gray' | 'silver';
}
const Button: FC<IProps> = ({ label, icon, onClick, variant }) => {
    return (
        <button className={classNames('app-button', { [variant]: true })} onClick={onClick}>
            {icon && <>{icon}</>}
            <span>{label}</span>
        </button>
    );
};

export default Button;
