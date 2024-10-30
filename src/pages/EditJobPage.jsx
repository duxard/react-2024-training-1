
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();
    const { id } = useParams();
    const [title, setTitle] = useState(job.title);
    const [description, setDescription] = useState(job.description);
    const [location, setLocation] = useState(job.location);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
            title,
            description,
            location
        };

        updateJobSubmit(updatedJob);

        return navigate('/jobs');
    }

    return (
        <section>
            <form className="add-job" onSubmit={submitForm}>
                <div>
                    <label htmlFor="title">Job Title</label>
                    <input
                        className="add-job__input"
                        type='text'
                        id='title'
                        name='title'
                        placeholder='eg. Title'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Job Description</label>
                    <textarea
                        className="add-job__input"
                        id='description'
                        name='description'
                        rows='4'
                        placeholder='Add any description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor='location'>Job Type</label>
                    <select
                        className="add-job__input"
                        id='location'
                        name='location'
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value='USA'>USA</option>
                        <option value='Cyprus'>Cyprus</option>
                        <option value='Germany'>Germany</option>
                        <option value='Italy'>Italy</option>
                        <option value='Spain'>Spain</option>
                    </select>
                </div>
                <div>
                    <button
                        className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Update Job
                    </button>
                </div>
            </form>
        </section>
    )
}

export default EditJobPage;