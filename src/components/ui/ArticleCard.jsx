import { Clock, Eye, MessageCircle, Bookmark, Heart } from "lucide-react";
import UserChip from './UserChip';

export default function ArticleCard({ post }) {
  return (
    <article className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border dark:border-neutral-800 p-6 mb-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <UserChip user={post.author} />
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Clock className="w-4 h-4" />
          <span>{post.publishedAt}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer transition-colors">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t dark:border-neutral-800">
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{post.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{post.views}</span>
          </div>
        </div>
        
        <button className="text-neutral-500 hover:text-blue-600 transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
