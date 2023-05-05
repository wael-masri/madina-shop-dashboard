import React from 'react'
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer
    
  } from "recharts";
const BarChartsDashboard = ({dataBar}) => {
  return (
    <ResponsiveContainer width="95%" height="90%" >
    <BarChart data={dataBar}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChartsDashboard