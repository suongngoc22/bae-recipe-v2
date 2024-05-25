import { useState } from "react";
import ButtonText from "../../../components/ButtonText"

export const FavMealTabs = () => {
    const [isTabActive, setIsTabActive] = useState('recipe');

    const handleActiveTab = (activeTab: string) => {
        setIsTabActive(activeTab);
    }

    return (
        <div className='flex justify-between items-center gap-4'>
            <ButtonText
                text='Video'
                style="small"
                type={isTabActive === 'video' ? 'primary' : 'text'}
                className="flex-1"
                onClick={() => handleActiveTab('video')}
            />
            <ButtonText
                text='Recipe'
                style="small"
                type={isTabActive === 'recipe' ? 'primary' : 'text'}
                className="flex-1"
                onClick={() => handleActiveTab('recipe')}
            />
        </div>
    )
}
