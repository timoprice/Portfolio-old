import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
        <p>{about2}</p>
        <p>{about3}</p>
        <p>{about4}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
