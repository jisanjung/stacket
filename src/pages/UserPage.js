import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Octokit } from "https://cdn.skypack.dev/octokit";
import JobListings from '../components/listings/JobListings';
import ProfileBar from '../components/listings/ProfileBar';
import { useStoreActions } from "easy-peasy";

const UserPage = () => {

    const setStack = useStoreActions(actions => actions.setStack);

    const { user } = useParams();
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    
    useEffect(() => {
        octokit.rest.repos.listForUser({
            username: user,
            per_page: 100,
        })
        .then(res => {
            const validLanguages = res.data.map(repo => repo.language).filter(language => language);
            const languageSet = new Set(validLanguages);
            setStack([...languageSet]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

  return (
    <main>
        <ProfileBar user={user}/>
        <JobListings user={user}/>
    </main>
  )
}

export default UserPage