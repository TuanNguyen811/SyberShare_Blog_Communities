import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@contexts/AuthContext';

// Layout Components
import AnnouncementBar from '@components/layout/AnnouncementBar';
import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';

// Pages
import HomePage from '@pages/HomePage';
import TrendingPage from '@pages/TrendingPage';
import TopicsPage from '@pages/TopicsPage';
import AboutPage from '@pages/AboutPage';
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import WritePage from "@pages/WritePage";
import DashboardPage from '@pages/DashboardPage';

// Components
import ProtectedRoute from "@components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Main Layout Routes */}
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

// Main Layout Component
const MainLayout = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/write" 
            element={
              <ProtectedRoute>
                <WritePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
