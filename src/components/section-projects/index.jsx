import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
        />
       <p>Link: 
          description={project.description}
          link={project.link}
        </p>
      ))}
    </Section>
  );
};

export default SectionProjects;
