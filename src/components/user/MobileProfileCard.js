import React, { useEffect, useState } from 'react'
import MenuCard from '../globals/MenuCard';
import { BsChevronCompactLeft } from "react-icons/bs";
import ProfilePic from './ProfilePic';
import SkillMeter from './SkillMeter';
import { useStoreState } from 'easy-peasy';

const MobileProfileCard = (props) => {

    const stackStats = useStoreState(state => state.stackStats);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sumObjectValues = obj => {
            let sum = 0;
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    sum += parseInt(obj[key]);
                }
            }
            return sum;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setTotal(sumObjectValues(stackStats))
    }, [stackStats]);

  return (
    <MenuCard className="-left-10 right-1/4 bottom-0 top-0 overflow-scroll pt-6">
        <div className='flex justify-end'>
            <button onClick={() => props.setOpenProfileCard(false)}>
                <BsChevronCompactLeft className='text-3xl'/>
            </button>
        </div>
        <div className='ml-10'>
            <div className='flex flex-col justify-center items-center'>
                <ProfilePic className="w-32 h-32"/>
                <SkillMeter percent={50}/>
            </div>
        </div>
    </MenuCard>
  )
}

export default MobileProfileCard