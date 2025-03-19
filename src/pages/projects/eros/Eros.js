import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import Main from '../../../layouts/Main';

import Achievements from '../../../components/Projects/Eros/Achievements';
import Members from '../../../components/Projects/Eros/Members';
import FormerMembers from '../../../components/Projects/Eros/FormerMembers';
import ProjectOverview from '../../../components/Projects/Eros/ProjectOverview';

import teamMembers from '../../../data/projects/eros/teamMembers';
import formerMembers from '../../../data/projects/eros/formerMembers';
import erosImages from '../../../data/projects/eros/erosImages';

const sections = [
  'Project Overview',
  'Achievements',
  'Team Members',
  'Former Members',
];

const Eros = () => {
  const [achievementsMarkdown, setAchievementsMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/eros/achievements.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setAchievementsMarkdown);
      });
  }, []);

  // Image gallery settings to ensure proper display
  const gallerySettings = {
    showPlayButton: true,
    showFullscreenButton: true,
    slideInterval: 5000,
    slideDuration: 450,
    showThumbnails: true,
    thumbnailPosition: 'bottom',
    showNav: true,
    showBullets: false,
    showIndex: true,
    autoPlay: false,
    useBrowserFullscreen: true,
    renderItem: (item) => (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt || 'EROS Robot'}
          style={{ maxHeight: '400px', width: 'auto', margin: '0 auto' }}
        />
      </div>
    ),
  };

  return (
    <Main
      title="EROS Humanoid Robot Soccer"
      description="Learn about EROS Humanoid Robot Soccer."
    >
      <article className="post" id="eros">
        <header>
          <div className="title">
            <h2><Link to="./">EROS Humanoid Soccer Robot</Link></h2>
            <div className="link-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>
          </div>
        </header>

        <div className="gallery-container">
          <ImageGallery
            items={erosImages}
            {...gallerySettings}
            additionalClass="eros-image-gallery"
          />
        </div>

        <div className="title" style={{ textAlign: 'center', margin: '1em 0 2em 0' }}>
          <h2>
            <a href="https://eepis-robotsoccer.github.io/index.html">
              Official Website of EROS Humanoid Soccer Robot
            </a>
          </h2>
        </div>

        <ProjectOverview />
        <Achievements data={achievementsMarkdown} />
        <Members data={teamMembers} />
        <FormerMembers data={formerMembers} />

      </article>
    </Main>
  );
};

export default Eros;
