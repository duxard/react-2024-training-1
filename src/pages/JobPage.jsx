import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobPage = ({ deleteJobSubmit }) => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    const onDeleteClick = () => {
        const confirm = window.confirm('Are you sure you want to delete the job?');

        if(!confirm) return;

        deleteJobSubmit(id);

        return navigate('/jobs');
    }

    return (
        <>
            {
                loading
                    ? <p>Loading</p>
                    : <>
                        <pre>{JSON.stringify(job)}</pre>
                        <button
                            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                            onClick={onDeleteClick}
                        >Delete</button>
                    </>
            }
        </>
    );
}

export default JobPage;