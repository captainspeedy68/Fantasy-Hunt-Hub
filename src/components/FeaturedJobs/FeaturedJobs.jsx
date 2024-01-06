import { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way to load large data
    const [dataLength, setDataLength] = useState(4);    

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold'>Featured Jobs</h1>
                {/* <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2> */}
                <p className='font-medium text-lg text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "text-center"}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... mb-4 text-white">See All Jobs</button>
            </div>
        </div>

    );
};

export default FeaturedJobs;