import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, FileText, PieChart } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                aria-label="Dashboard"
              >
                <LayoutDashboard className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
              <Link
                to="/summary"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                aria-label="Summary"
              >
                <FileText className="w-5 h-5 mr-2" />
                Summary
              </Link>
              <Link
                to="/reports"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
                aria-label="Reports"
              >
                <PieChart className="w-5 h-5 mr-2" />
                Reports
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 text-red-600 hover:text-red-800"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;