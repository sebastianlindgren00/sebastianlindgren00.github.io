import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/cards/profile-card';
import ProjectCard from './components/cards/project-card';
import CareerCard from './components/cards/career-card';

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