import React from 'react';

import Header from './Header';
import Hexagons from './Hexagons';

const resources = [
  { type: 'Book' },
  { type: 'Online Course' },
  { type: 'Article' },
  { type: 'Mentor' },
  { type: 'Course' }
];

const App = () => {
  return (
    <div>
      <Header />
      <Hexagons resources={resources} />
    </div>
  );
};

export default App;
