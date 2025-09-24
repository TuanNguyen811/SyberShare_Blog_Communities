import { TrendingUp, X } from "lucide-react";
import { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="border-b bg-yellow-200/50 border-yellow-300 text-yellow-900 dark:border-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-200">
      <div className="mx-auto max-w-7xl px-4 py-2 text-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <span>
            Welcome to <strong>SyberShare</strong> — a community for Cyber Security stories & insights.
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-yellow-700 hover:text-yellow-900 dark:text-yellow-300 dark:hover:text-yellow-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
