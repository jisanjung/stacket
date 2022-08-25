import React, { useEffect } from 'react'
import { useStoreState } from "easy-peasy";
import SingleJobCard from './SingleJobCard';

const JobListings = () => {

  const stack = useStoreState(state => state.stack);
  const mock = {
    "results": [
      {
        "id": "3422908695",
        "location": {
          "area": [
            "US",
            "New Jersey",
            "Bergen County",
            "Ridgefield Park"
          ],
          "__CLASS__": "Adzuna::API::Response::Location",
          "display_name": "Ridgefield Park, Bergen County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/3422908695?se=pLvSyNUh7RG1KPhnZGr1mw&utm_medium=api&utm_source=12ae7956&v=5B677C761B1191CD95793223BEB74D17C7374608",
        "description": "Job Description Company Description WOONGJIN. is looking for a HTML Developer for our client, a well-known company located in Ridgefield Park, NJ. Our Mission WOONGJIN. is a rapidly growing team who provides a range of unique, exceptional, and enhanced services to our clients. We have a strong moral code that includes the service of goodness without expectations of reward. We are motivated by the sense of responsibility and servant leadership. Job Description · Professional experience with HTML…",
        "company": {
          "display_name": "Woongjin, Inc",
          "__CLASS__": "Adzuna::API::Response::Company"
        },
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "category": {
          "tag": "it-jobs",
          "__CLASS__": "Adzuna::API::Response::Category",
          "label": "IT Jobs"
        },
        "title": "HTML Developer",
        "longitude": -74.021529,
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoicEx2U3lOVWg3UkcxS1BoblpHcjFtdyIsImkiOiIzNDIyOTA4Njk1In0.AHBz39ra-KKyqMyjgPz1Qn8Xuewd0nC4DMawFl38Li8",
        "created": "2022-08-21T20:19:19Z",
        "latitude": 40.857044
      },
      {
        "title": "HTML Developer",
        "longitude": -115.165201,
        "category": {
          "__CLASS__": "Adzuna::API::Response::Category",
          "tag": "it-jobs",
          "label": "IT Jobs"
        },
        "__CLASS__": "Adzuna::API::Response::Job",
        "created": "2022-08-19T04:07:54Z",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoicEx2U3lOVWg3UkcxS1BoblpHcjFtdyIsImkiOiIzNDE2NDMyNjY5In0.D4k4l5gNIfyhD3iiIOg0_olDkQw7l7LgbfZa-LpdwxY",
        "latitude": 35.920884,
        "company": {
          "display_name": "Z4",
          "__CLASS__": "Adzuna::API::Response::Company"
        },
        "salary_is_predicted": "0",
        "redirect_url": "https://www.adzuna.com/land/ad/3416432669?se=pLvSyNUh7RG1KPhnZGr1mw&utm_medium=api&utm_source=12ae7956&v=28AD3F9A954C601057F61826A68D16367E7C7C2F",
        "description": "Job Description Description : We are looking for an experienced Web Developer. The ideal candidate for this position is a hands-on professional with strong knowledge of HTML, JavaScript (ES6), Three.js, and CSS. The HTML Developer is responsible for working on our current and new game applications for desktop environments, mobile as well as existing support for backend Admin clients. At Z4 Poker you will enjoy the opportunity for long-term employment, great salary, benefits, and being part of a…",
        "location": {
          "display_name": "Las Vegas, Clark County",
          "__CLASS__": "Adzuna::API::Response::Location",
          "area": [
            "US",
            "Nevada",
            "Clark County",
            "Las Vegas"
          ]
        },
        "id": "3416432669"
      },
      {
        "location": {
          "__CLASS__": "Adzuna::API::Response::Location",
          "display_name": "Blacksburg, Montgomery County",
          "area": [
            "US",
            "Virginia",
            "Montgomery County",
            "Blacksburg"
          ]
        },
        "description": "Reporting to the Senior Director, University Relations and Creative Director, the front-end developer will play a crucial role in the Creative Studio for University Relations. The front-end developer will collaborate with designers, stakeholders, wriDeveloper, HTML, Front-End, Designer, Technology, Education",
        "redirect_url": "https://www.adzuna.com/land/ad/3422421943?se=pLvSyNUh7RG1KPhnZGr1mw&utm_medium=api&utm_source=12ae7956&v=4B0D8B20C9A73446CFFF5E174E0BB782A46E483A",
        "id": "3422421943",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoicEx2U3lOVWg3UkcxS1BoblpHcjFtdyIsImkiOiIzNDIyNDIxOTQzIn0.BbayVACRb5VhqliW-8Gf2RHOnTKyW3JbaZLxdmWwUhE",
        "created": "2022-08-21T12:33:05Z",
        "latitude": 37.229573,
        "__CLASS__": "Adzuna::API::Response::Job",
        "longitude": -80.413939,
        "title": "Front-End Developer (HTML, CSS, JS)",
        "category": {
          "label": "IT Jobs",
          "__CLASS__": "Adzuna::API::Response::Category",
          "tag": "it-jobs"
        },
        "salary_is_predicted": "0",
        "company": {
          "display_name": "Virginia Tech University",
          "__CLASS__": "Adzuna::API::Response::Company"
        }
      },
    ],
    "count": 302505,
    "__CLASS__": "Adzuna::API::Response::JobSearchResults",
    "mean": 152756.56
  }

  useEffect(() => {
    const searchParam = stack.join(" ").toLowerCase();
    console.log(searchParam);
  }, [stack]);

  return (
    <section>
      {mock.results.map(job => {
        return (
          <SingleJobCard key={job.id} job={job}/>
        )
      })}
    </section>
  )
}

export default JobListings