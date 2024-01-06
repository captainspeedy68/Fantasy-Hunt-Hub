import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicationId } from "../../Utility/LocalStorage";
import DisplayJobs from "../DisplayJobs/DisplayJobs";
const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobsFilter = (filter) => {
        if (filter === "all") {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "onsite") {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onSiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplicationId();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                // if the id is found
                if (job) {
                    jobsApplied.push(job);
                }
            }
            console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div className="">
            <h2 className="text-center m-10 text-3xl font-extrabold">Applied Jobs: {appliedJobs.length}</h2>
            <div className="p-7">
                <div className="flex justify-end">
                    <details className="dropdown">
                        <summary className="m-1 btn">Filter By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter("all")}><a >App</a></li>
                            <li onClick={() => handleJobsFilter("remote")}><a >Remote</a></li>
                            <li onClick={() => handleJobsFilter("onsite")}><a >Onsite</a></li>
                        </ul>
                    </details>
                </div>

                <div>
                    {
                        displayJobs.map(job => <DisplayJobs key={job.id} job={job}></DisplayJobs>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;