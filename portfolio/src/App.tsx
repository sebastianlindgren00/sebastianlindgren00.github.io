import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/profile-card';
import ProjectCard from './components/project-card';
import CareerCard from './components/career-card';

function App() {
  return (
    <>
        {/* Entire ProfileCard - contains components: CurlyBracesIcon, GithubIcon, LeetcodeIcon, LinkedinIcon, ResumeIcon, IconButton and TypeWriter */}
        <ProfileCard />
        {/* Entire ProjectCard - contains components: Project */}
        <ProjectCard />
        {/* Entire CareerCard - contains components: Job */}
        <CareerCard />
    </>
  );
}

export default App;