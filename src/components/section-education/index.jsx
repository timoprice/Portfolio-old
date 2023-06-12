import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  if (!experience.length) return null;

  return (
    <Section title="Education">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          description={item.description}
          name={item.name}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
