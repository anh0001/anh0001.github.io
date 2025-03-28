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
const HSREldercare = lazy(() => import('./pages/projects/hsr_eldercare_2024/HSREldercare'));
const EldercareRobotSystem = lazy(() => import('./pages/projects/eldercare_robot_system_2024/EldercareRobotSystem'));
const Mobile3DPhotoRobot2023 = lazy(() => import('./pages/projects/mobile_3d_photo_robot_2023/Mobile3DPhotoRobot2023'));
const HomeGardeningRobot = lazy(() => import('./pages/projects/home_gardening_robot_2025/HomeGardeningRobot'));
const DroneUGVAgriculture = lazy(() => import('./pages/projects/drone_ugv_agriculture_2023/DroneUGVAgriculture'));
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
        <Route path="/projects/hsr_eldercare_2024" element={<HSREldercare />} />
        <Route path="/projects/eldercare_robot_system_2024" element={<EldercareRobotSystem />} />
        <Route path="/projects/mobile_3d_photo_robot_2023" element={<Mobile3DPhotoRobot2023 />} />
        <Route path="/projects/home_gardening_robot_2025" element={<HomeGardeningRobot />} />
        <Route path="/projects/drone_ugv_agriculture_2023" element={<DroneUGVAgriculture />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
