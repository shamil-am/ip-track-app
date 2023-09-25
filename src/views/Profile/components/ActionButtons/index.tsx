import './style.scss';

import { FC } from 'react';

import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import Button from '@/components/common/Button';

interface IProps {
    isEditable: boolean;
    changeEditableStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionButtons: FC<IProps> = ({ isEditable, changeEditableStatus }) => {
    return (
        <div className='actions'>
            {isEditable ? (
                <div className='editable'>
                    <Button label='İmtina' variant='gray' onClick={() => changeEditableStatus(false)} />
                    <Button label='Yadda saxla' variant='violet' form='edit-form' type='submit' />
                </div>
            ) : (
                <Button
                    label='Düzəliş et'
                    variant='gray'
                    onClick={() => changeEditableStatus(true)}
                    icon={<EditIcon />}
                />
            )}
        </div>
    );
};

export default ActionButtons;
