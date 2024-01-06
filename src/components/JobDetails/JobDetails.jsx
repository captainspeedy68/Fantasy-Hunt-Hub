
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/LocalStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_title, logo, job_description, job_responsibility, educational_requirements, experiences, contact_information, salary } = job;
    // console.log(job);
    const handleApplyNow = () => {
        saveJobApplication(idInt);
        toast("You have applied successfully!...")
    }
    return (
        <div className='mb-20' >
            <div className='relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${logo})` }}>
                <div className='absolute inset-0 bg-opacity-80 bg-white'></div>
                <h3 className='relative rounded-md shadow-md text-center font-extrabold text-3xl p-8 z-10 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent '>
                    {job_title}
                </h3>
            </div>
            <div className='gap-4 grid md:grid-cols-3 my-4'>
                <div className='border md:col-span-2 p-6'>
                    <h2 className='p-2'><span className='font-extrabold'>Job Description: </span>{job_description}</h2>
                    <h2 className='p-2'><span className='font-extrabold'>Job Responsibility: </span>{job_responsibility}</h2>
                    <section className='p-2'>
                        <h2 className='font-extrabold'>Educational Requirements: </h2>
                        <p>{educational_requirements}</p>
                    </section>
                    <section className='p-2'><h2 className='font-extrabold'>Experiences: </h2>
                        <p>{experiences}</p></section>

                </div>
                <div className=' flex flex-col justify-between w-fit '>
                    <div className='border p-3 '>
                        <div className='m-1'>
                            <h2 className='text-xl font-extrabold text-center my-1'>Job Details</h2>
                            <hr />
                            <h2 className='flex items-center'>
                                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                                <p><span className='text-l font-bold my-2'>Salary:</span> {salary} (Per Month)</p>
                            </h2>
                            <h2 className='flex items-center my-2'>
                                <IoCalendarOutline></IoCalendarOutline>
                                <p><span className='text-l font-bold'>Job Title:</span> {job_title}</p>
                            </h2>
                        </div>

                        <h2 className='text-xl font-bold mt-2 text-center mb-2'>Contact Information</h2>
                        <p><span className='text-l font-bold my-2'>Phone:</span> {contact_information.phone}</p>
                        <p><span className='text-l font-bold my-2'>Email: </span>{contact_information.email}</p>
                        <p><span className='text-l font-bold my-2'>Address:</span>{contact_information.address}</p>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleApplyNow} className=' btn btn-primary w-11/12 items-center bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... text-white flex justify-center'>Apply Now</button>
                    </div>

                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default JobDetails;