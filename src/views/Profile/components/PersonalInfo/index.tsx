import './style.scss';

import { FC, useState } from 'react';

import ActionButtons from '../ActionButtons';
import Edit from './components/Edit';
import Info from './components/Info';

const PersonalInfo: FC = () => {
    const [isEditable, setIsEditable] = useState(false);
    return (
        <div className='personal-info'>
            <ActionButtons isEditable={isEditable} changeEditableStatus={setIsEditable} />
            {isEditable ? <Edit /> : <Info />}
        </div>
    );
};

export default PersonalInfo;
