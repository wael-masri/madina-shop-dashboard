import React from 'react'
import {PieChart,Pie,ResponsiveContainer } from "recharts";
const PieChartsDashboard = ({data01,data02}) => {
  return (
    <PieChart width={350} height={200}>
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#82ca9d" label />
</PieChart>
  )
}

export default PieChartsDashboard