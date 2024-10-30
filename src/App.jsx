import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import JobPage from "./pages/JobPage.jsx";
import JobPageLoader, { jobLoader } from "./pages/JobPageLoader.jsx";
import AddJobPage from "./pages/AddJobPage/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";

const App = () => {
    const addJob = async (newJob) => {
        await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });
    }

    const deleteJob = async (jobId) => {
        await fetch(`/api/jobs/${jobId}`, {
            method: 'DELETE'
        });
    }

    const updateJob = async (job) => {
        await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path='/'
                element={<MainLayout />}
            >
                <Route
                    index
                    element={<HomePage />}
                />
                <Route
                    path='/jobs'
                    element={<JobsPage />}
                />
                <Route
                    path='/job-add'
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route
                    path='/job-edit/:id'
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path='/jobs/:id'
                    element={<JobPage deleteJobSubmit={deleteJob} />}
                />
                <Route
                    path='/jobsloader/:id'
                    element={<JobPageLoader />}
                    loader={jobLoader}
                />
                <Route
                    path='*'
                    element={<NotFoundPage />}
                />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
