import { useState } from "react";
import { NavLink } from "react-router-dom";

const Job = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription) {
        description = description.substring(0, 50) + '...';
    }

    return (
        <section>
            <p>Title: {job.title}</p>
            <p>{description}</p>
            <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
                { showFullDescription ? 'Less' : 'More' }
            </button>
            <p>Location: {job.location}</p>
            <NavLink to={`/jobs/${job.id}`}>Read more</NavLink>
            <hr/>
        </section>

    );
}

export default Job;
