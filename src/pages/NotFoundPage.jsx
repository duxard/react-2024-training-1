import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <p>Not Found</p>
            <NavLink to='/'>Go back</NavLink>
        </div>
    );
}

export default NotFoundPage;