import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer ,
} from "recharts";
const LineCharts = ({ LineChartsData }) => {
  return (
    <ResponsiveContainer width="95%" height="85%" >
     <LineChart
      data={LineChartsData}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{stroke: 'red', strokeWidth: 1}} dataKey="name" />
      <YAxis tick={{stroke: 'red', strokeWidth: 1}} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
   
  );
};

export default LineCharts;
