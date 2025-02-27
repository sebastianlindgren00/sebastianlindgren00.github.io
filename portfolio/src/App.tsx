import './App.css';
import ProfileCard from './components/cards/profile-card';
import ProjectsCard from './components/cards/projects-card';
import Header from './header';
import WorkExperience from './components/cards/work-experience-card';

function App() {
  return (
    <>
      <Header />
      <div id="profile">
        <ProfileCard />
      </div>
      <div className='pl-[80px] pt-20 pr-[80px] pb-[80px] justify-center items-center space-y-20'>
        <div id="projects">
          <ProjectsCard />
        </div>
        <div id="career">
          <WorkExperience />
        </div>
      </div>
    </>
  );
}

export default App;
