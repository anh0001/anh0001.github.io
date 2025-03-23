import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const HomeGardeningRobot = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/home_gardening_robot_2025/project_details.md')
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
      title="Intelligent Mobile Manipulator for Home Gardening"
      description="Advanced ceiling-mounted and mobile robot system for home gardening with computer vision and affordance detection capabilities"
    >
      <article className="post markdown" id="home-gardening-robot-2025">
        <header>
          <div className="title">
            <h2><Link to="/projects/home_gardening_robot_2025">Intelligent Mobile Manipulator for Home Gardening Applications</Link></h2>
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

export default HomeGardeningRobot;
