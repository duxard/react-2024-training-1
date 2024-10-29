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
                path='/jobs/:id'
                element={<JobPage />}
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

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
