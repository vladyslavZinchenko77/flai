import React, { useRef, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'MO', "Growth": 50000, "AI Prediction": 0, amt: 2400 },
  { name: 'TU', "Growth": 70000, "AI Prediction": 0, amt: 2210 },
  { name: 'WE', "Growth": 100000, "AI Prediction": 0, amt: 2290 },
  { name: 'TH', "Growth": 120000, "AI Prediction": 150000, amt: 2000 },
  { name: 'FR', "Growth": 180000, "AI Prediction": 200000, amt: 2181 },
  { name: 'SA', "Growth": 250000, "AI Prediction": 220000, amt: 2500 },
  { name: 'SU', "Growth": 300000, "AI Prediction": 240000, amt: 2100 },
  { name: 'MO', "Growth": 0, "AI Prediction": 320000, amt: 2400 },
  { name: 'TU', "Growth": 0, "AI Prediction": 380000, amt: 2210 },
  { name: 'WE', "Growth": 0, "AI Prediction": 0, amt: 2290 },
  { name: 'TH', "Growth": 0, "AI Prediction": 0, amt: 2000 },
  { name: 'FR', "Growth": 0, "AI Prediction": 0, amt: 2181 },
];

const Chart = () => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
    };

  
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const formatYAxis = (tick) => {
    return `${tick / 1000}K`;
  };

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: 300 }}>
      <BarChart
        width={chartWidth}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 500000]} 
          ticks={[100000, 200000, 300000, 400000, 500000]} 
          tickFormatter={formatYAxis} 
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Growth" stackId="a" fill="#C704FE" label={{ formatter: formatYAxis, position: 'insideStart' }} />
        <Bar dataKey="AI Prediction" stackId="a" fill="#D1FD0A" label={{ formatter: formatYAxis, position: 'top' }} />
      </BarChart>
    </div>
  );
};

export default Chart;
