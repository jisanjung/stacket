import React, { useEffect } from 'react'
import { useStoreState } from "easy-peasy";

const JobListings = () => {

  const stack = useStoreState(state => state.stack);

  useEffect(() => {
    console.log(stack);
  }, [stack]);

  return (
    <section>
      job listings
    </section>
  )
}

export default JobListings