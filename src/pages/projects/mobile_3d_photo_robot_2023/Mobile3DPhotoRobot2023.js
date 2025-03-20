import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const Mobile3DPhotoRobot2023 = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/mobile_3d_photo_robot_2023/project_details.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }, []);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Metaverse-Ready 3D Photography Robot"
      description="A mobile robot system for automated 3D photography and object reconstruction for e-commerce and metaverse applications"
    >
      <article className="post markdown" id="mobile-3d-photo-robot-2023">
        <header>
          <div className="title">
            <h2><Link to="/projects/mobile_3d_photo_robot_2023">Metaverse-Ready 3D Photography: Mobile Robot for Automated 3D Object Reconstruction</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Mobile3DPhotoRobot2023;
