import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/profile-card';
import ProjectCard from './components/project-card';

function App() {
  return (
    <>
        {/* Entire ProfileCard - contains components: CurlyBracesIcon, GithubIcon, LeetcodeIcon, LinkedinIcon, ResumeIcon, IconButton and TypeWriter */}
        <ProfileCard />
        {/* Entire ProjectCard - contains components: Project */}
        <ProjectCard />
    </>
  );
}

export default App;