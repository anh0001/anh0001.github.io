import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const EldercareRobotSystem = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/eldercare_robot_system_2024/eldercare_robot_system.md')
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
      title="Multi-Modal Interactive Healthcare Robot System"
      description="A comprehensive healthcare robotics system with three interconnected components targeting elderly care"
    >
      <article className="post markdown" id="eldercare-robot-system">
        <header>
          <div className="title">
            <h2><Link to="/projects/eldercare_robot_system_2024">Multi-Modal Interactive Healthcare Robot System</Link></h2>
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

export default EldercareRobotSystem;
