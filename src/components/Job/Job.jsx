import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-4">
            <div className="flex items-start m-3 mr-1">
                <img src={logo} alt="Company Logo" className="w-full h-svh object-cover " />
            </div>
            <div className="card-body ">
                <h2 className="card-title max-md:flex max-md:justify-center">{job_title}</h2>
                <p className="max-md:flex justify-center">{company_name}</p>
                <div className="max-md:flex justify-center">
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] rounded text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="my-4 flex max-md:justify-center">
                    <h2 className="flex mr-4">
                        <GrLocation className="text-2xl mr-1"></GrLocation>
                        {location}
                    </h2>
                    <h2 className="flex">
                        <AiOutlineDollarCircle className="text-2xl mr-1"></AiOutlineDollarCircle>
                        Salary: {salary}
                    </h2>
                </div>
                <Link to={`/job/${id}`}>
                    <div className="card-actions max-md:flex max-md:justify-center">
                        <button className="btn btn-primary border-none bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... text-white">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Job;
