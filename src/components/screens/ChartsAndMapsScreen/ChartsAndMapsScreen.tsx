import React from 'react';

import Map from '../../../components/Map';
import LineGraph from '../../../components/LineGraph';

const ChartsAndMapsScreen = () => (
  <>
    <div className="max-w-screen-lg border-0 rounded-lg shadow-lg overflow-hidden">
      <Map />
    </div>

    <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />

    <div className="max-w-screen-lg border rounded-lg shadow-lg overflow-hidden">
      <LineGraph />
    </div>
  </>
);

export default ChartsAndMapsScreen;
