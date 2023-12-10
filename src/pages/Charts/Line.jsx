import React from 'react';
import { Header, LineChart } from '../../components';

function Line() {
  return (
    <div className="mx-7">
      <div>
        <Header category="Charts" title="InFlamation Chart" />
      </div>
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line;
