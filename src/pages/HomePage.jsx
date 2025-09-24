import { motion } from "framer-motion";
import HeroSection from '@components/layout/HeroSection';
import Sidebar from '@components/layout/Sidebar';
import ArticleCard from '@components/ui/ArticleCard';
import { posts } from '@data/mockData';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-12 gap-10 py-10">
        {/* Articles */}
        <div className="md:col-span-8">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between py-8">
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-900 transition-colors">
              Newer
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-900 transition-colors">
              Older
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </motion.div>
  );
}
