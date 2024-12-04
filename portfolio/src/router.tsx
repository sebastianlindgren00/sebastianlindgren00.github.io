import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/project-page';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
    );
};

export default AppRouter;
