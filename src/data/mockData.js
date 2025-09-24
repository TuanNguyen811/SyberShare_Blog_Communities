export const posts = [
  {
    id: 1,
    title: "Bảo mật Web Application - Top 10 lỗ hổng OWASP 2023",
    excerpt: "Tìm hiểu về 10 lỗ hổng bảo mật phổ biến nhất trong các ứng dụng web theo báo cáo OWASP 2023. Từ SQL Injection đến Broken Access Control, chúng ta sẽ đi sâu vào cách phát hiện và khắc phục.",
    author: {
      name: "Nguyễn An",
      bio: "Security Expert"
    },
    publishedAt: "2 ngày trước",
    tags: ["Security", "OWASP", "WebApp"],
    likes: 124,
    comments: 23,
    views: 890,
    category: "Security"
  },
  {
    id: 2,
    title: "React Performance Optimization - Các kỹ thuật nâng cao",
    excerpt: "Khám phá những kỹ thuật tối ưu hóa hiệu suất React từ cơ bản đến nâng cao. Bao gồm memo, useMemo, useCallback và các pattern hiện đại để xây dựng ứng dụng React nhanh chóng.",
    author: {
      name: "Trần Bảo", 
      bio: "Frontend Developer"
    },
    publishedAt: "3 ngày trước",
    tags: ["React", "Performance", "JavaScript"],
    likes: 89,
    comments: 15,
    views: 542,
    category: "Development"
  },
  {
    id: 3,
    title: "Machine Learning trong Cybersecurity - Ứng dụng thực tế",
    excerpt: "Cách Machine Learning đang thay đổi lĩnh vực an ninh mạng. Từ phát hiện anomaly đến phân tích malware, AI đang trở thành công cụ không thể thiếu trong bảo mật hiện đại.",
    author: {
      name: "Lê Minh",
      bio: "AI/ML Engineer"
    },
    publishedAt: "5 ngày trước", 
    tags: ["MachineLearning", "Cybersecurity", "AI"],
    likes: 156,
    comments: 31,
    views: 1203,
    category: "AI"
  },
  {
    id: 4,
    title: "Docker Security Best Practices - Bảo mật Container",
    excerpt: "Hướng dẫn toàn diện về bảo mật Docker container. Từ image scanning, runtime security đến network isolation, tất cả những gì bạn cần biết để triển khai container an toàn.",
    author: {
      name: "Phạm Hùng",
      bio: "DevOps Engineer"
    },
    publishedAt: "1 tuần trước",
    tags: ["Docker", "DevOps", "Security"],
    likes: 78,
    comments: 12,
    views: 456,
    category: "DevOps"
  },
  {
    id: 5,
    title: "Blockchain Security - Audit Smart Contract với Solidity",
    excerpt: "Tìm hiểu cách audit smart contract để phát hiện các lỗ hổng bảo mật phổ biến. Reentrancy, Integer Overflow, và các attack vector khác trong thế giới DeFi.",
    author: {
      name: "Võ Linh",
      bio: "Blockchain Developer"
    },
    publishedAt: "1 tuần trước",
    tags: ["Blockchain", "Security", "Solidity"],
    likes: 92,
    comments: 18,
    views: 634,
    category: "Blockchain"
  }
];

export const categories = [
  { name: "Security", count: 45, color: "bg-red-500" },
  { name: "Development", count: 38, color: "bg-blue-500" },
  { name: "AI", count: 29, color: "bg-purple-500" },
  { name: "DevOps", count: 25, color: "bg-green-500" },
  { name: "Blockchain", count: 18, color: "bg-yellow-500" }
];

export const trendingTopics = [
  "Security",
  "React", 
  "Machine Learning",
  "Docker",
  "JavaScript",
  "Python",
  "Cybersecurity",
  "DevOps"
];

// Alias for backward compatibility
export const topics = trendingTopics;
