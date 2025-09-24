import { motion } from "framer-motion";
import { TrendingUp, Flame, Clock, Users } from "lucide-react";
import ArticleCard from '@components/ui/ArticleCard';
import TagPill from '@components/ui/TagPill';
import { posts, topics } from '@data/mockData';

const TrendingPage = () => {
  const trendingPosts = [...posts].sort((a, b) => b.claps - a.claps);
  const popularTopics = topics.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-neutral-800 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="h-8 w-8 text-orange-500" />
            <h1 className="text-4xl font-bold">Trending</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover the most popular cybersecurity stories, hot topics, and trending discussions in our community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-8">
            {/* Trending Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Trending Posts</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-green-600">1.2k</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Active Readers</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="text-2xl font-bold text-purple-600">48h</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Trending Period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Flame className="h-6 w-6 text-orange-500" />
                Hot Articles
              </h2>
              <div className="space-y-6">
                {trendingPosts.map((post, index) => (
                  <div key={post.id} className="relative">
                    <div className="absolute -left-8 top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <ArticleCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Popular Topics */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50">
              <h3 className="font-bold text-lg mb-4">🔥 Hot Topics</h3>
              <div className="space-y-3">
                {popularTopics.map((topic, index) => (
                  <div key={topic} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-neutral-800/50">
                    <TagPill label={topic} />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {Math.floor(Math.random() * 100 + 20)} posts
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Authors */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50">
              <h3 className="font-bold text-lg mb-4">📈 Rising Authors</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {(post.claps * 1000).toLocaleString()} claps this week
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Stats */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
              <h3 className="font-bold text-lg mb-4">📊 This Week</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">New Posts</span>
                  <span className="font-semibold text-indigo-600">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Views</span>
                  <span className="font-semibold text-purple-600">12.3k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">New Members</span>
                  <span className="font-semibold text-pink-600">89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingPage;