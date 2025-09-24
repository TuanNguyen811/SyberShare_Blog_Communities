import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section 
      className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          SyberShare
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Chia sẻ kiến thức An ninh mạng & Công nghệ
        </motion.p>
        
        <motion.p 
          className="text-lg opacity-75 mb-10 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Khám phá những bài viết chuyên sâu về bảo mật, lập trình, và các xu hướng công nghệ mới nhất từ cộng đồng chuyên gia.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            Bắt đầu đọc
          </button>
          <button className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-lg font-medium transition-colors">
            Tham gia cộng đồng
          </button>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-20 h-20 border border-white/30 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
      </div>
    </motion.section>
  );
}
