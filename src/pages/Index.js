import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Rakesh Chowdary Y's personal website. Graduate Student at University of Colorado, Boulder. "
      + 'Former Senior Data Engineer at Target Corporation.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hello World</Link>
          </h2>
          <p>
            {' '}
            Welcome to my website. Please feel free to read more{' '}
            <Link to="/about">about me</Link>, or you can check out my{' '}
            <Link to="/resume">resume</Link>,{' '}
            <Link to="/projects">projects</Link>,{' '}
            {/* view <Link to="/stats">site statistics</Link>, {' '} */}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
