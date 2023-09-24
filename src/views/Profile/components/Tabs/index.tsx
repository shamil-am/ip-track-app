import './style.scss';

import classNames from 'classnames';
import { FC } from 'react';

import { ETabs, ITabElement } from '@/types/profile';

interface IProps {
    tablist: ITabElement[];
    activeTab: ETabs;
    changeActiveTab: (activeTab: ETabs) => void;
}

const Tabs: FC<IProps> = ({ tablist, activeTab, changeActiveTab }) => {
    return (
        <div className='tabs'>
            {tablist.map((tab) => (
                <button
                    key={tab.value}
                    className={classNames('tab-element', { active: tab.value === activeTab })}
                    onClick={() => changeActiveTab(tab.value)}
                >
                    {tab.text}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
