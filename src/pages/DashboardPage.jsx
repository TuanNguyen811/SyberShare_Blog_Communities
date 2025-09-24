import { motion } from "framer-motion";
import { 
  User, 
  Edit, 
  BarChart3, 
  Heart, 
  Bookmark, 
  TrendingUp, 
  Calendar,
  Eye,
  MessageCircle,
  Settings
} from "lucide-react";
import { useAuth } from '@contexts/AuthContext';
import { posts } from '@data/mockData';

const DashboardPage = () => {
  const { user } = useAuth();

  const userStats = {
    articles: 12,
    totalViews: '24.3k',
    totalLikes: '1.2k',
    followers: 245,
    following: 89,
    drafts: 3
  };

  const recentActivity = [
    { type: 'like', content: 'Someone liked your article "Android Malware Analysis"', time: '2 hours ago' },
    { type: 'comment', content: 'New comment on "Blue Team Playbook"', time: '4 hours ago' },
    { type: 'follow', content: 'Alice Tran started following you', time: '1 day ago' },
    { type: 'publish', content: 'You published "CTF Write-up: XSS Chain"', time: '2 days ago' },
  ];

  const myArticles = posts.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 dark:bg-neutral-900/50"
    >
      {/* Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex items-center gap-6">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-20 h-20 rounded-full border-4 border-blue-100 dark:border-blue-900"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600 dark:text-gray-300">{user?.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Member since {new Date(user?.joinDate).toLocaleDateString()}
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Write Article
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Edit className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.articles}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Articles</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Eye className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.totalViews}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Views</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.totalLikes}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Likes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.followers}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Articles */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">My Articles</h2>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium">
                    View all
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                {myArticles.map((article) => (
                  <div key={article.id} className="p-6 hover:bg-gray-50 dark:hover:bg-neutral-750 transition-colors">
                    <div className="flex items-start gap-4">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                          {article.subtitle}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {Math.floor(Math.random() * 1000 + 500)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {Math.floor(article.claps * 100)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {Math.floor(Math.random() * 20 + 5)}
                          </span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                          <Settings className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Analytics Overview
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Engagement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">+12%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Growth This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">4.8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recent Activity
                </h3>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-neutral-750 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'like' ? 'bg-red-100 dark:bg-red-900/30' :
                        activity.type === 'comment' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        activity.type === 'follow' ? 'bg-green-100 dark:bg-green-900/30' :
                        'bg-purple-100 dark:bg-purple-900/30'
                      }`}>
                        {activity.type === 'like' && <Heart className="h-4 w-4 text-red-600" />}
                        {activity.type === 'comment' && <MessageCircle className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'follow' && <User className="h-4 w-4 text-green-600" />}
                        {activity.type === 'publish' && <Edit className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-gray-100 mb-1">
                          {activity.content}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors flex items-center gap-3">
                  <Edit className="h-5 w-5 text-blue-600" />
                  <span>Write New Article</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors flex items-center gap-3">
                  <Bookmark className="h-5 w-5 text-green-600" />
                  <span>View Saved Articles</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <span>View Analytics</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors flex items-center gap-3">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span>Account Settings</span>
                </button>
              </div>
            </div>

            {/* Drafts */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Drafts ({userStats.drafts})
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-sm">Zero-Day Discovery</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Last edited 2 hours ago
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-sm">SIEM Rule Writing</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Last edited yesterday
                    </p>
                  </div>
                </div>
                <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium">
                  View All Drafts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;