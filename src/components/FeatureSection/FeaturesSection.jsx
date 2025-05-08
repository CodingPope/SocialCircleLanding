import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './FeaturesSection.css';

export default function FeaturesSection({ features }) {
  return (
    <section className='features'>
      <h2>Why You’ll Love Social Circle</h2>
      <p className='features-intro'>
        Whether you’re new in town or just exploring, Social Circle makes it
        easy to find people, events, and experiences you’ll actually enjoy.
      </p>
      <div className='features-grid'>
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
