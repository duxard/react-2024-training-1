import { useParams, useLoaderData } from "react-router-dom";

const JobPageLoader = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return (
        <>
            <pre>{JSON.stringify(job)}</pre>
        </>
    );
}

const jobLoader = async ({ params }) => {
    console.log(params)
    const response = await fetch(`/api/jobs/${params.id}`);
    return await response.json();
}

export { JobPageLoader as default, jobLoader };