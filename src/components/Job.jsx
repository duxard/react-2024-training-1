import {useState} from "react";

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
            <a href={`/jobs/${job.id}`}>Read more</a>
            <hr/>
        </section>

    );
}

export default Job;
