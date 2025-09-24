import { motion } from "framer-motion";
import { Hash, Search, Filter, TrendingUp } from "lucide-react";
import TagPill from '@components/ui/TagPill';
import ArticleCard from '@components/ui/ArticleCard';
import { topics, posts } from '@data/mockData';
import { useState } from 'react';

const TopicsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesTopic = selectedTopic === 'All' || post.tag === selectedTopic;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const topicStats = topics.map(topic => ({
    name: topic,
    count: posts.filter(post => post.tag === topic).length,
    trending: Math.random() > 0.6
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-neutral-800 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Hash className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold">Topics</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Explore cybersecurity topics, from malware analysis to cloud security, organized by category.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Sidebar - Topics */}
          <div className="md:col-span-4 space-y-6">
            {/* Search */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5" />
                <h3 className="font-semibold">Search Topics</h3>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Topic Categories */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5" />
                <h3 className="font-semibold">Categories</h3>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTopic('All')}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedTopic === 'All' 
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">All Topics</span>
                    <span className="text-sm text-gray-500">{posts.length}</span>
                  </div>
                </button>
                
                {topicStats.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => setSelectedTopic(topic.name)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedTopic === topic.name 
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                        : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{topic.name}</span>
                        {topic.trending && (
                          <TrendingUp className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{topic.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50">
              <h3 className="font-semibold mb-4">🏷️ Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {topics.slice(0, 8).map((topic) => (
                  <TagPill 
                    key={topic} 
                    label={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedTopic === 'All' ? 'All Articles' : `${selectedTopic} Articles`}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <select className="px-3 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Most Claps</option>
                  </select>
                </div>
              </div>

              {/* Topic Pills */}
              {selectedTopic !== 'All' && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-gray-500">Filtered by:</span>
                  <TagPill 
                    label={selectedTopic} 
                    active={true}
                  />
                  <button
                    onClick={() => setSelectedTopic('All')}
                    className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400"
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>

            {/* Articles */}
            <div className="space-y-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-12">
                  <Hash className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Try adjusting your search or filter criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedTopic('All');
                      setSearchTerm('');
                    }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Show All Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopicsPage;