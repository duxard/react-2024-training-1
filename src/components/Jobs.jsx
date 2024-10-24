import jobs from '../../jobs.json';
import Job from "./Job.jsx";

const Jobs = () => {
    return (
        <div>
            {
                jobs.map((job) => {
                    return (
                        <Job key={job.id} job={job} />
                    )
                })
            }
        </div>
    );
}

export default Jobs;