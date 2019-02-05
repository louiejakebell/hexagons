import React from 'react';

import Header from './Header';
import Grid from './Grid';

const resources = [
  { type: 'Book', background: '#55efc4' },
  { type: 'Online Course', background: '#0984e3' },
  { type: 'Article', background: '#ff7675' },
  { type: 'Mentor', background: '#e84393' },
  { type: 'Video', background: '#2d3436' },
  { type: 'Book', background: '#F4A460' },
  { type: 'Video', background: '#808000' },
  { type: 'Article', background: '#2d3436' },
  { type: 'Book', background: '#40E0D0' },
  { type: 'Online Course', background: '#2d3436' },
  // { type: 'Video', background: '#e84393' },
  // { type: 'Article', background: '#2d3436' },
  // { type: 'Video', background: '#006400' },
  // { type: 'Online Course', background: '#2d3436' },
  // { type: 'Video', background: '#0984e3' },
  // { type: 'Article', background: '#2d3436' },
  // { type: 'Book', background: '#40E0D0' },
  // { type: 'Article', background: '#e84393' }
];

const App = () => {
  return (
    <div>
      <Header />
      <Grid resources={resources} />
    </div>
  );
};

export default App;
