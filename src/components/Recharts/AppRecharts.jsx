import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
const AppRecharts = ({ratings}) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={ratings}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <YAxis dataKey="name" type="category" />
        <XAxis type="number" />
        <Tooltip />
        <Bar dataKey="count" fill="#ff9900" barSize={40}>
          <LabelList dataKey="value" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AppRecharts;