import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Publications = lazy(() => import('./pages/Publications'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const Eros = lazy(() => import('./pages/projects/eros/Eros'));
const FinalProjects = lazy(() => import('./pages/projects/finalProjects/FinalProjects'));
const Worldskills = lazy(() => import('./pages/projects/worldskills/Worldskills'));
const NoTillNavigation = lazy(() => import('./pages/projects/no_till_navigation/NoTillNavigation'));
const EldercareRobotSystem = lazy(() => import('./pages/projects/eldercare_robot_system_2024/EldercareRobotSystem'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Patent = lazy(() => import('./pages/Patent'));

const App = () => (
  <HashRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/patent" element={<Patent />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/eros" element={<Eros />} />
        <Route path="/projects/finalprojects" element={<FinalProjects />} />
        <Route path="/projects/worldskills" element={<Worldskills />} />
        <Route path="/projects/no_till_navigation" element={<NoTillNavigation />} />
        <Route path="/projects/eldercare_robot_system_2024" element={<EldercareRobotSystem />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
