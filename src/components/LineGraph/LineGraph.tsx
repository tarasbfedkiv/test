import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import LoadingSpinner from '../LoadingSpinner';
import { useHistoricalCovidData } from '../../lib/hooks/useHistoricalCovidData';

const LineGraph: React.FC = () => {
  const { status, data, error } = useHistoricalCovidData();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="h-96">
      <ResponsiveContainer>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="deaths" stroke="#82ca9d" dot={false} />
          <Line type="monotone" dataKey="recovered" stroke="#ffc658" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
