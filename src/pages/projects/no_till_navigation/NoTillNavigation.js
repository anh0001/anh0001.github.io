import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../../../layouts/Main';

const NoTillNavigation = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../../data/projects/no_till_navigation/no_till_navigation.md')
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
      title="Deep Learning for No-Till Agriculture Navigation"
      description="A neurocognitive-inspired deep learning approach for autonomous navigation in challenging no-till agricultural environments"
    >
      <article className="post markdown" id="no-till-navigation">
        <header>
          <div className="title">
            <h2><Link to="/projects/no_till_navigation">Deep Learning for No-Till Agriculture Navigation</Link></h2>
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

export default NoTillNavigation;
