import { ShieldCheck, Search, ChevronRight, User, LogOut } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DarkModeToggle from '@components/ui/DarkModeToggle';
import TagPill from '@components/ui/TagPill';
import { trendingTopics } from '@data/mockData';
import { useAuth } from '@contexts/AuthContext';

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200 dark:bg-neutral-950/70 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <ShieldCheck className="h-6 w-6" /> 
            SyberShare
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link className="hover:opacity-80 transition-opacity" to="/">Home</Link>
            <Link className="hover:opacity-80 transition-opacity" to="/trending">Trending</Link>
            <Link className="hover:opacity-80 transition-opacity" to="/topics">Topics</Link>
            <Link className="hover:opacity-80 transition-opacity" to="/about">About</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-neutral-700">
              <Search className="h-4 w-4" />
              <input
                className="bg-transparent outline-none text-sm w-40 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Search SyberShare"
              />
            </div>
            <DarkModeToggle />
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-lg py-1">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      to="/write"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Search className="h-4 w-4" />
                      Write
                    </Link>
                    <hr className="my-1 border-gray-200 dark:border-neutral-700" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition-opacity dark:bg-white dark:text-black"
              >
                Get started
              </Link>
            )}
          </div>
        </div>

        {/* Topics Navigation */}
        <div className="hidden md:flex items-center gap-3 py-3 overflow-x-auto">
          {trendingTopics.slice(0, 8).map((topic, index) => (
            <TagPill key={topic} tag={topic} active={index === 0} />
          ))}
          <button className="text-sm flex items-center gap-1 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-900 transition-colors">
            More <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
