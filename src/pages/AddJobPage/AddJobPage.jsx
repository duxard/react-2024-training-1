import './AddJobPage.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobPage = ({ addJobSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('USA');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            id: Date.now().toString(),
            title,
            description,
            location
        };

        addJobSubmit(newJob);

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
                    <label htmlFor='location'>Job Location</label>
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
                        Add Job
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AddJobPage;