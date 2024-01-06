import { Link } from "react-router-dom";

const DisplayJobs = ({ job }) => {
    const { job_title, id, logo, remote_or_onsite, location, job_type, salary, company_name } = job;
    return (
        <div className="m-4">
            <div className="card card-side bg-base-100 shadow-xl sm:max-md:flex-row ">
                <figure className="p-2 w-24"><img src={logo} alt="Movie" /></figure>
                <div className="card-body md:flex-row justify-between sm:max-md:flex-col">
                    <div>
                        <h2 className="card-title">{job_title}</h2>
                        <p>{company_name}</p>
                    </div>
                    <Link to={`/job/${id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... text-white">View Details</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default DisplayJobs;