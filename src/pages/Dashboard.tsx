import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">UNCC Latest News</h1>
      
      <article className="prose lg:prose-xl">
        <h2 className="text-2xl font-semibold text-gray-800">UNCC Launches New AI Research Center</h2>
        
        <p className="text-gray-600 leading-relaxed">
          The University of North Carolina at Charlotte has announced the establishment of a new Artificial Intelligence Research Center, marking a significant step forward in the institution's commitment to advancing technological innovation. The center, which opened its doors this month, will focus on developing practical AI applications in healthcare, urban planning, and cybersecurity. This initiative represents a $5 million investment in cutting-edge research infrastructure and will create opportunities for both graduate and undergraduate students to engage in groundbreaking research projects.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          The center will collaborate with local industry partners to ensure that research outcomes have practical applications in the real world. Initial projects include developing AI-powered traffic management systems for Charlotte's growing urban infrastructure and creating predictive models for healthcare outcomes in partnership with local hospitals.
        </p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Source: <a href="https://research.charlotte.edu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UNCC News Portal</a>
          </p>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Implementation Details</h3>
          <p className="text-gray-600">
            This application is built using a modern tech stack including:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
            <li>Frontend: React with TypeScript, utilizing Vite for build optimization</li>
            <li>Backend: Node.js with Express.js framework</li>
            <li>Database: MongoDB for flexible document storage</li>
            <li>Authentication: JWT (JSON Web Tokens) for secure user sessions</li>
            <li>UI Components: Tailwind CSS for responsive design</li>
            <li>Charts: Recharts for data visualization</li>
            <li>API Integration: Axios for HTTP requests</li>
            <li>State Management: React Context API</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Dashboard;