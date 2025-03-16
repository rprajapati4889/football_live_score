
import React from 'react';
import { Search, Home, Users, MapPin, MessageSquare, Bell, Settings, Download, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-full bg-brand-dark-gray flex flex-col p-5 text-white overflow-y-auto">
      <div className="mb-6 flex items-center">
        <h1 className="text-xl font-bold">
          <span className="text-white">FOOTBALL</span>
          <span className="text-brand-yellow">SHURU</span>
        </h1>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input 
          type="search" 
          placeholder="Search" 
          className="pl-8 bg-[#2D2D2D] border-none text-white" 
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="relative">
            <a href="#" className="flex items-center gap-3 py-2 px-3 rounded bg-[#2D2D2D] border-l-4 border-brand-yellow">
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <Users size={20} />
              <span>Leader Board</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <MapPin size={20} />
              <span>Ground</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <MessageSquare size={20} />
              <span>Chat</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <Bell size={20} />
              <span>Notification</span>
            </a>
          </li>
        </ul>

        <div className="mt-8 mb-6 border-t border-gray-700"></div>

        <div className="mb-4">
          <h3 className="text-gray-400 mb-2 px-3 text-sm">Followed Team</h3>
          <ul>
            <li>
              <a href="#" className="flex items-center justify-between py-2 px-3 text-gray-400 hover:text-white">
                <span className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">T</span>
                  Team
                </span>
                <span className="text-xl">›</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-gray-400 mb-2 px-3 text-sm">Followed Players</h3>
          <ul>
            <li>
              <a href="#" className="flex items-center justify-between py-2 px-3 text-gray-400 hover:text-white">
                <span className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">P</span>
                  Players
                </span>
                <span className="text-xl">›</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-gray-400 mb-2 px-3 text-sm">Followed Ground</h3>
          <ul>
            <li>
              <a href="#" className="flex items-center justify-between py-2 px-3 text-gray-400 hover:text-white">
                <span className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">G</span>
                  Ground
                </span>
                <span className="text-xl">›</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-auto">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <Settings size={20} />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 py-2 px-3 text-gray-400 hover:text-white">
              <Download size={20} />
              <span>Download The App</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 mt-4 justify-between">
          <div className="flex items-center gap-3 px-3 py-2">
            <Sun size={20} className="text-gray-400" />
            <span className="text-gray-400">Light</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2">
            <Moon size={20} />
            <span className="text-white font-medium">Dark</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 px-3 py-2 bg-[#2D2D2D] rounded">
        <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-black font-bold">V</div>
        <div className="flex-1">
          <div className="text-sm font-medium">Ravi_Prajpati</div>
          <div className="text-xs text-gray-400">ravi@gmail.com</div>
        </div>
        <button className="text-gray-400">
          <span className="text-xl">›</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
