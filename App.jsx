import React from 'react';
import ProjectOneHero from './components/ProjectOneHero';
import ProjectTwoReverie from './components/ProjectTwoReverie';

function MainApplicationPipeline() {
  return (
    <div className="w-full bg-black min-h-screen select-none">
      <ProjectOneHero />
      <ProjectTwoReverie />
    </div>
  );
}

export default MainApplicationPipeline;
