import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Octokit } from "https://cdn.skypack.dev/octokit";
import { useStoreState, useStoreActions } from "easy-peasy";

const JobListings = () => {

  const { user } = useParams();
  const stack = useStoreState(state => state.stack);
  const setStack = useStoreActions(actions => actions.setStack);

  const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
  const saveUserStack = async () => {
    const res = await octokit.rest.repos.listForUser({
      username: user,
      per_page: 100,
    });
    setStack(res.data.map(repo => repo.language));
  }

  useEffect(() => {
    saveUserStack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log(stack)}
      {user}
    </div>
  )
}

export default JobListings