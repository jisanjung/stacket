import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Octokit } from "https://cdn.skypack.dev/octokit";
import JobListings from '../components/listings/JobListings';
import ProfileBar from '../components/user/ProfileBar';
import { useStoreActions } from "easy-peasy";

const UserPage = () => {

    const getLanguageCount = (languages) => {
        languages = languages.filter(language => language); // get only valid languages, not null
        const languageCounts = {};
        languages.forEach((val, i) => {
            if (languageCounts[val]) {
                languageCounts[val] = languageCounts[val] + 1;
            } else {
                languageCounts[val] = 1;
            }
        });
        return languageCounts;
    }

    const setStack = useStoreActions(actions => actions.setStack);
    const setStackStats = useStoreActions(actions => actions.setStackStats);
    const setOctokitLoading = useStoreActions(actions => actions.setOctokitLoading);

    const { user } = useParams();
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    
    useEffect(() => {
        setOctokitLoading(true)
        octokit.rest.repos.listForUser({
            username: user,
            per_page: 100,
        })
        .then(res => {
            setOctokitLoading(false);
            const languageCounts = getLanguageCount(res.data.map(repo => repo.language));
            setStackStats(languageCounts);
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