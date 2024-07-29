import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    pc: 88,
  },
  {
    name: 'Day 2',
    pc: 85,
  },
  {
    name: 'Day 3',
    pc: 70,
  },
  {
    name: 'Day 4',
    pc: 99,
  },
  {
    name: 'Day 5',
    pc: 82,
  },
  {
    name: 'Day 6',
    pc: 87,
  },
  {
    name: 'Day 7',
    pc: 99,
  },
  {
    name: 'Day 8',
    pc: 90,
  },
  {
    name: 'Day 9',
    pc: 85,
  },
  {
    name: 'Day 10',
    pc: 90,
  },
 
];

function BarCharts() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart   width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
             <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
      <Bar dataKey="pc" fill="#bacff7" />
    </BarChart>
  </ResponsiveContainer>
  );
}

export default BarCharts
