import './style.scss';

import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { appCheckboxProps } from '@/types/appCheckbox';

// import { ReactComponent as Logo } from '@/assets/icons/tick.svg';

const Checkbox: FC<appCheckboxProps> = ({ variant, label, checked, onchange }) => {
    const id = uuidv4();

    return (
        <div className={`app-checkbox ${variant}`}>
            <input type='checkbox' id={id} onChange={onchange} checked={checked} />
            <label htmlFor={id}>
                <div className='svg'>X</div>
            </label>
            {label && <span>{label}</span>}
        </div>
    );
};

export default Checkbox;
