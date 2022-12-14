import React from 'react'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

const SingleJobCard = (props) => {

    dayjs.extend(relativeTime);
    const formatDate = dayjs(props.job.created).format("YYYY-MM-DD");

  return (
    <div className='relative'>
        <div className='bg-white border-2 border-black mb-4 p-4 relative z-10' style={{  borderRadius: "10px" }} onClick={() => props.setSelectedJob(props.job)}>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='bg-gray-300 w-20 h-20' style={{ borderRadius: "10px" }}></div>
                    <div className='pl-4'>
                        <div className='relative h-full w-36'>
                            <div>
                                <h5 className='text-sm overflow-hidden whitespace-nowrap'>{props.job.company.display_name}</h5>
                                <h3 className='overflow-hidden font-bold whitespace-nowrap'>{props.job.title}</h3>
                            </div>
                            <h5 className='pt-4 text-sm overflow-hidden whitespace-nowrap'>{props.job.location.display_name}</h5>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <span className='text-xs absolute bottom-0 right-0 sm:w-16 xl:w-20 text-right'>
                        {dayjs(formatDate).fromNow()}
                    </span>
                </div>
            </div>
        </div>
        {(props.job?.id === props.selectedJob?.id) && <div className='absolute bg-black top-2 -bottom-2 left-2 -right-2' style={{ borderRadius: "10px" }}></div>}
    </div>
  )
}

export default SingleJobCard