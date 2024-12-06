import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import api from '../utils/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/charts/research-impact');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Research Impact Analysis</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 prose">
          <h3>About this Chart</h3>
          <p>
            This pie chart represents the expected impact distribution of UNCC's AI Research Center across different sectors. The visualization shows how the center's research initiatives are projected to influence various areas including healthcare improvements, urban development efficiency, cybersecurity enhancements, and economic growth in the Charlotte region.
          </p>
          <p>
            The data is based on initial project proposals and industry partner feedback, demonstrating the diverse applications and potential benefits of the research center's work across multiple sectors of the economy and society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;