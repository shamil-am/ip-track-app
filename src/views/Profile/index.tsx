import './style.scss';

import { FC, useState } from 'react';

import { ETabs, ITabElement } from '@/types/profile';

import Education from './components/EducationInfo';
import PersonalInfo from './components/PersonalInfo';
import Tabs from './components/Tabs';

const Profile: FC = () => {
    const [activeTab, setActiveTab] = useState<ETabs>(ETabs.PERSONAL);

    const tabList: ITabElement[] = [
        { value: ETabs.PERSONAL, text: 'Şəxsi məlumatlar' },
        { value: ETabs.EDUCATION, text: 'Təhsil məlumatları' },
    ];

    return (
        <div className='profile'>
            <Tabs tablist={tabList} activeTab={activeTab} changeActiveTab={setActiveTab} />
            {activeTab === ETabs.PERSONAL ? <PersonalInfo /> : <Education />}
        </div>
    );
};

export default Profile;
