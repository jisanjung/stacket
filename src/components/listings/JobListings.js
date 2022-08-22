import React, { useEffect } from 'react'
import { useStoreState } from "easy-peasy";

const JobListings = () => {

  const stack = useStoreState(state => state.stack);

  useEffect(() => {
    const searchParam = stack.join(" ").toLowerCase();
    console.log(searchParam);
  }, [stack]);

  return (
    <section>
      job listings
    </section>
  )
}

export default JobListings