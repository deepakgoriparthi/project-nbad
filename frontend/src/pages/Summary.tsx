import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import api from '../utils/api';

const Summary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/charts/research-funding');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Research Funding Distribution</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4F46E5" name="Funding Amount ($M)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 prose">
          <h3>About this Chart</h3>
          <p>
            This chart illustrates the distribution of research funding across different departments at UNCC's new AI Research Center. The data shows the initial allocation of the $5 million investment across various research initiatives, including healthcare AI, urban planning, and cybersecurity projects.
          </p>
          <p>
            The funding distribution reflects the university's strategic priorities in AI research and development, with a significant portion allocated to infrastructure and collaborative projects with industry partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;