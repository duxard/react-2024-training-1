import Job from "./Job.jsx";
import { useEffect, useState } from "react";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs');
                const data = await response.json();
                setJobs(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div>
            {
                loading
                    ? <h1>Loading...</h1>
                    : jobs.map((job) => {
                        return (
                            <Job key={job.id} job={job} />
                        )
                    })
            }
        </div>
    );
}

export default Jobs;