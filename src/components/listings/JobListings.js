import React, { useEffect, useState } from 'react'
import { useStoreState } from "easy-peasy";
import SingleJobCard from './SingleJobCard';
import MobileJobInfoCard from './MobileJobInfoCard';
import useMediaQuery from '../../hooks/useMediaQuery';
import LanguageTagSet from '../user/LanguageTagSet';
import DesktopJobInfoCard from './DesktopJobInfoCard';

const JobListings = () => {

  const filterStack = useStoreState(state => state.filterStack);
  const [selectedJob, setSelectedJob] = useState(null);
  const isLargeDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargerDesktop = useMediaQuery("(min-width: 1536px)");
  const isLargestDesktop = useMediaQuery("(min-width: 1920px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (filterStack.length > 0) {
      const searchParam = filterStack.join(" ").toLowerCase();
      // fetch job data based on user tech stack which is "searchParam"
      fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${process.env.REACT_APP_ADZUNA_APP_ID}&app_key=${process.env.REACT_APP_ADZUNA_APP_KEY}&what_or=${searchParam}&results_per_page=5`)
      .then(res => res.json())
      .then(data => setListings(data.results));
    }
  }, [filterStack]);

  useEffect(() => {
    if (isLargeDesktop && listings.length > 0) {
      setSelectedJob(listings[0]);
    }
  }, [listings, isLargeDesktop]);

  return (
    <section className='pt-20 px-5 lg:w-full lg:flex lg:justify-center lg:px-10 2xl:px-0'>
      <div className='lg:w-11/12 xl:w-4/5' style={{ 
        width: isLargerDesktop && "1024px",
        minWidth: isLargestDesktop && "1200px"
        }}>
        {isLargeDesktop && 
          <div className='flex flex-wrap items-center'>
            <h2 className='font-bold text-2xl mr-6'>Filter by skillset: </h2>
            <LanguageTagSet/>
          </div>}
        <div className='py-4 mb-4 lg:mb-6'>
          <span>{listings.length}</span> result(s)
        </div>
        <div className='lg:flex'>
          <div className='lg:w-1/2 lg:pr-3 xl:pr-5'>
            {listings.map(job => {
              return (
                <SingleJobCard key={job.id} id={job.id} job={job} selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>
              )
            })}
          </div>
          {isLargeDesktop && 
          <div className='lg:pl-3 lg:w-1/2 xl:pl-5'>
            <DesktopJobInfoCard job={selectedJob}/>
          </div>}
        </div>
        {(selectedJob !== null && isMobile) && <MobileJobInfoCard job={selectedJob} setSelectedJob={setSelectedJob}/>}
      </div>
    </section>
  )
}

export default JobListings