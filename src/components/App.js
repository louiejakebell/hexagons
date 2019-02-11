import React from 'react';

import Header from './Header';
import Grid from './Grid';

const resources = [
  { type: 'Book', background: '#F4A460' },
  { type: 'Online Course', background: '#0984e3' },
  { type: 'Article', background: '#55efc4' },
  { type: 'Mentor', background: '#e84393' },
  { type: 'Video', background: '#2d3436' },
  { type: 'Online Course', background: '#0984e3' },
  { type: 'Video', background: '#2d3436' },
  { type: 'Article', background: '#55efc4' },
  { type: 'Book', background: '#F4A460' }
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
