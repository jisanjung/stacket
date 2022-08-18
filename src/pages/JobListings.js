import React from 'react'
import { useParams } from "react-router-dom";

const JobListings = () => {

  const { user } = useParams();

  return (
    <div>{user}</div>
  )
}

export default JobListings