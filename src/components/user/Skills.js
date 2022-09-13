import { useStoreState } from 'easy-peasy';
import React, { useState, useEffect } from 'react'
import SkillMeter from './SkillMeter';

const Skills = (props) => {

    const [total, setTotal] = useState(0);
    const stackStats = useStoreState(state => state.stackStats);

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
    <div className={`w-full px-4 mt-14 ${props.className}`}>
        <h2 className='mb-1'>Your skills: </h2>
        {stackStats && Object.keys(stackStats).map(language => {
            return (
                <div key={language} className="mb-2">
                    <span className='text-xs'>{language}</span>
                    <SkillMeter percent={Math.trunc(parseFloat((stackStats[language] / total) * 100))}/>
                </div>
            )
        })}
    </div>
  )
}

export default Skills