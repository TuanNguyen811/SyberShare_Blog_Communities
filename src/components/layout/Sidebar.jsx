import { Hash, TrendingUp, Clock, Users } from "lucide-react";
import TagPill from '@components/ui/TagPill';

export default function Sidebar() {
  const trendingTags = [
    { name: "Security", count: 245 },
    { name: "React", count: 189 },
    { name: "JavaScript", count: 156 },
    { name: "Python", count: 134 },
    { name: "Cybersecurity", count: 98 },
    { name: "Machine Learning", count: 87 },
    { name: "DevOps", count: 76 },
    { name: "Blockchain", count: 65 }
  ];

  const topAuthors = [
    { name: "Nguyễn An", posts: 45, followers: 1230 },
    { name: "Trần Bảo", posts: 38, followers: 980 },
    { name: "Lê Minh", posts: 32, followers: 756 },
    { name: "Phạm Hùng", posts: 28, followers: 642 }
  ];

  return (
    <div className="md:col-span-4 space-y-8">
      {/* Trending Tags */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm border dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-lg">Chủ đề hot</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <TagPill key={tag.name} tag={tag.name} count={tag.count} />
          ))}
        </div>
      </div>

      {/* Top Authors */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm border dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-lg">Tác giả nổi bật</h3>
        </div>
        <div className="space-y-3">
          {topAuthors.map((author, index) => (
            <div key={author.name} className="flex items-center justify-between p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{author.name}</p>
                  <p className="text-sm text-neutral-500">{author.posts} bài viết</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {author.followers} followers
                </p>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  <TrendingUp className="w-3 h-3" />
                  #{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm border dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-orange-600" />
          <h3 className="font-semibold text-lg">Hoạt động gần đây</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm"><span className="font-medium">Mai Anh</span> đã like bài viết "React Performance Tips"</p>
              <p className="text-xs text-neutral-500 mt-1">2 phút trước</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm"><span className="font-medium">Đức Thành</span> đã comment bài viết "Cybersecurity Basics"</p>
              <p className="text-xs text-neutral-500 mt-1">5 phút trước</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm"><span className="font-medium">Hồng Nhung</span> đã chia sẻ bài viết mới</p>
              <p className="text-xs text-neutral-500 mt-1">10 phút trước</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
