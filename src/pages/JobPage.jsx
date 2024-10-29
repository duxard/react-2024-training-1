import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);


    return (
        <>
            { loading ? <p>Loading</p> : <pre>{JSON.stringify(job)}</pre> }
        </>
    );
}

export default JobPage;