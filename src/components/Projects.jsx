import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import Image from 'next/image';
import LegalModal from './LegalModal';

const projects = [
  {
    title: 'Watchpoint',
    description: 'WatchPoint is a modern security guard management system. It\'s designed to help security companies manage their operations, track guards, and optimize security services through a comprehensive web and mobile platform',
    images: [
      'https://i.imgur.com/8kCSLmx.png',  // E-commerce dashboard
      'https://i.imgur.com/QvYwvN5.png',  // Product listing
      'https://i.imgur.com/L4Lsm1h.png'   // Shopping cart
    ],
    thumbnail: 'https://i.imgur.com/AZ1NEJC.png',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    category: 'Web Development',
    features: [
      'GPS tracking and location history.',
      'QR code-based location verification.',
      'Live guard monitoring.',
      'Staff and role management.',
      'Shift scheduling and assignment.',
      'Native guard mobile app.',
      'Clock in/out functionality',
    ],
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS S3', 'Stripe', 'Docker'
    ],
    url: 'https://watchpoint.bytesbeyond.in'
  },
  {
    title: 'Bbot',
    description: 'A comprehensive AI chatbot platform designed to revolutionize business communication through accessible, intelligent converssational agents. This solution enables business of all sized to implement powerful AI-driven customer interaction systems across multiple channels.',
    images: [
      'https://imgur.com/0w5HxlS', 
      'https://i.imgur.com/W0KndU4.png', 
      'https://i.imgur.com/pN3UV6R.png' 
    ],
    thumbnail: 'https://i.imgur.com/0w5HxlS.png',
    tags: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    category: 'Chat bot',
    features: [
      'AI-Powered Conversations',
      'Multi-Platform Integration',
      '24/7 Availability',
      'Analytics Dashboard', 
      'Automated Workflows'
    ],
    technologies: [
      'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts'
    ],
    url: 'https://bbot.bytesbeyond.in'
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('terms');

  const handleProjectClick = (projectUrl) => {
    window.open(projectUrl, '_blank');
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-primary"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects delivered across various industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Update the Terms and Privacy Policy Links */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>By using our services, you agree to our</p>
          <div className="flex justify-center gap-4 mt-2">
            <button 
              onClick={() => openModal('terms')}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>|</span>
            <button 
              onClick={() => openModal('privacy')}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </section>
  );
};

export default Projects;
