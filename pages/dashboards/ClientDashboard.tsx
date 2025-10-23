import React, { useState } from 'react';
import { LayoutDashboard, Building, FileText, Award, Truck, Settings, LifeBuoy, Bell, User } from 'lucide-react';

// FIX: Define props with an interface and type the component as React.FC to ensure TS recognizes it as a React component, which allows the 'key' prop.
interface SidebarLinkProps {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, text, active }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-3 text-gray-700 rounded-lg transition-colors duration-200 ${
      active ? 'bg-teal-100 text-teal-700 font-bold' : 'hover:bg-gray-100'
    }`}
  >
    {icon}
    <span className="mx-4 font-medium">{text}</span>
  </a>
);

const ClientDashboard: React.FC = () => {
    const [activePage, setActivePage] = useState('Dashboard');
    const menuItems = [
        { icon: <LayoutDashboard className="h-5 w-5" />, text: 'Dashboard' },
        { icon: <Building className="h-5 w-5" />, text: 'Branch Management' },
        { icon: <FileText className="h-5 w-5" />, text: 'Reports' },
        { icon: <Award className="h-5 w-5" />, text: 'Certificates' },
        { icon: <Truck className="h-5 w-5" />, text: 'Tasks' },
    ];
    const bottomMenuItems = [
        { icon: <Settings className="h-5 w-5" />, text: 'Settings' },
        { icon: <LifeBuoy className="h-5 w-5" />, text: 'Support' },
    ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-2xl font-bold text-teal-700">Belza</h1>
        </div>
        <div className="flex flex-col justify-between flex-grow p-4">
          <nav>
            {menuItems.map(item => (
                 <SidebarLink key={item.text} icon={item.icon} text={item.text} active={activePage === item.text} />
            ))}
          </nav>
          <nav>
            {bottomMenuItems.map(item => (
                 <SidebarLink key={item.text} icon={item.icon} text={item.text} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white border-b">
          <h2 className="text-2xl font-semibold text-gray-800">{activePage}</h2>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-1 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500"/>
                </div>
                <div>
                    <div className="text-sm font-medium">Al Baik Restaurant</div>
                    <div className="text-xs text-gray-500">Client Account</div>
                </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Overall Score</h3>
                    <p className="text-3xl font-bold text-green-500">92%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Active Branches</h3>
                    <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Pending Tasks</h3>
                    <p className="text-3xl font-bold">3</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Certificates</h3>
                    <p className="text-3xl font-bold">5</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="p-3 text-sm font-semibold">Branch</th>
                                <th className="p-3 text-sm font-semibold">Report Type</th>
                                <th className="p-3 text-sm font-semibold">Date</th>
                                <th className="p-3 text-sm font-semibold">Score</th>
                                <th className="p-3 text-sm font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">Jeddah Main Branch</td>
                                <td className="p-3">Mystery Shopper</td>
                                <td className="p-3">2023-10-26</td>
                                <td className="p-3 font-bold text-green-600">95%</td>
                                <td className="p-3"><span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Completed</span></td>
                            </tr>
                             <tr className="border-b">
                                <td className="p-3">Riyadh Olaya</td>
                                <td className="p-3">Hygiene Audit</td>
                                <td className="p-3">2023-10-24</td>
                                <td className="p-3 font-bold text-yellow-600">82%</td>
                                <td className="p-3"><span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Completed</span></td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3">Dammam Corniche</td>
                                <td className="p-3">Mystery Shopper</td>
                                <td className="p-3">2023-10-22</td>
                                <td className="p-3 font-bold text-red-600">71%</td>
                                <td className="p-3"><span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">Action Required</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
