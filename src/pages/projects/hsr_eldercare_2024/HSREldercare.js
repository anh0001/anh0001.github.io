import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const HSREldercare = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/hsr_eldercare_2024/project_details.md')
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
      title="Empowering Elders: HSR Robot Eldercare"
      description="A comprehensive eldercare robotics project using Toyota's HSR robot for assisted living environments"
    >
      <article className="post markdown" id="hsr-eldercare">
        <header>
          <div className="title">
            <h2><Link to="/projects/hsr_eldercare_2024">Empowering Elders: HSR Robot in Assisted Living Environments</Link></h2>
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

export default HSREldercare;
