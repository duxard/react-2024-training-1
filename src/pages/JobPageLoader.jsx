import { Link, useLoaderData } from "react-router-dom";

const JobPageLoader = () => {
    const job = useLoaderData();

    return (
        <>
            <pre>{JSON.stringify(job)}</pre>
            <Link
                to={`/job-edit/${job.id}`}
                className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
            >
                Edit Job
            </Link>
        </>
    );
}

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    return await response.json();
}

export { JobPageLoader as default, jobLoader };