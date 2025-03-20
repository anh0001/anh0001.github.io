import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const DroneUGVAgriculture = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/drone_ugv_agriculture_2023/project_details.md')
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
      title="Drone-UGV Agriculture Revolution"
      description="An integrated drone-UGV system for precision agriculture, combining aerial surveillance with ground operations to optimize pest control, crop monitoring, and resource management"
    >
      <article className="post markdown" id="drone-ugv-agriculture">
        <header>
          <div className="title">
            <h2><Link to="/projects/drone_ugv_agriculture_2023">Drone and UGV Collaboration for Automated Agricultural Revolution</Link></h2>
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

export default DroneUGVAgriculture;
