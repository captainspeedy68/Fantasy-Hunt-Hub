// this function gets the saved items and turns them into json then returns the item
const getStoredJobApplicationId = () => {
    const storedJobApplicationId = localStorage.getItem("job-applications");
    if (storedJobApplicationId){
        return JSON.parse(storedJobApplicationId);
    }
    else return [];

}
// the following function saves job application request in local storage if the item is not already selected
// always remember to save an item first we always need to stringify the item
const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplicationId();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if (!exists){
        storedJobApplication.push(id);
        // set the item to local storage and turn it into a string before that
        localStorage.setItem("job-applications", JSON.stringify(storedJobApplication));
    }
}

export { getStoredJobApplicationId, saveJobApplication}