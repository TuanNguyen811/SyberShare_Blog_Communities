import { motion } from "framer-motion";
import { Info, Shield, Users, Target, Mail, Github, Twitter, Linkedin } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Active Members", value: "2.5k+", icon: Users },
    { label: "Articles Published", value: "850+", icon: Target },
    { label: "Security Topics", value: "15+", icon: Shield },
    { label: "Countries", value: "45+", icon: Info },
  ];

  const team = [
    {
      name: "Alice Tran",
      role: "Founder & Security Researcher",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "10+ years in cybersecurity, specialized in incident response and threat hunting.",
      social: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Huy Nguyen", 
      role: "Lead Malware Analyst",
      avatar: "https://i.pravatar.cc/150?img=12",
      bio: "Expert in reverse engineering and malware family analysis.",
      social: { github: "#", twitter: "#", linkedin: "#" }
    },
    {
      name: "Minh Le",
      role: "Detection Engineer",
      avatar: "https://i.pravatar.cc/150?img=22", 
      bio: "Building detection rules and automation for enterprise security.",
      social: { github: "#", twitter: "#", linkedin: "#" }
    }
  ];

  const milestones = [
    { year: "2023", title: "SyberShare Founded", description: "Started as a small community for sharing cybersecurity knowledge." },
    { year: "2024", title: "1k Members Milestone", description: "Reached our first thousand active community members." },
    { year: "2024", title: "Expert Contributors", description: "Welcomed industry experts and thought leaders." },
    { year: "2025", title: "Global Community", description: "Expanded to serve cybersecurity professionals worldwide." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="border-b border-gray-200 dark:border-neutral-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6"
            >
              <Shield className="h-10 w-10 text-blue-600" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6">About SyberShare</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A community-driven platform where cybersecurity professionals share knowledge, 
              insights, and experiences to strengthen our collective defense against cyber threats.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-gray-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                To create a collaborative environment where cybersecurity professionals can share practical knowledge, 
                learn from real-world experiences, and stay ahead of emerging threats.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>Foster knowledge sharing in the cybersecurity community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>Provide practical insights from industry practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>Build a supportive global security community</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                To become the premier destination for cybersecurity knowledge exchange, 
                where every security professional can contribute, learn, and grow together.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">What We Believe</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  "Security is a team sport. By sharing our knowledge and experiences, 
                  we make the entire cybersecurity community stronger and more resilient."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-gray-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate cybersecurity professionals dedicated to building a better security community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-neutral-700"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Key milestones in building the SyberShare community.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to share your cybersecurity knowledge and learn from others? 
              Join thousands of security professionals already part of SyberShare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;