import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern technologies. This platform offers a seamless shopping experience with features like real-time inventory management, secure payments, and an intuitive admin dashboard.',
    images: [
      'https://i.imgur.com/8kCSLmx.png',  // E-commerce dashboard
      'https://i.imgur.com/QvYwvN5.png',  // Product listing
      'https://i.imgur.com/L4Lsm1h.png'   // Shopping cart
    ],
    thumbnail: 'https://i.imgur.com/8kCSLmx.png',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    category: 'Web Development',
    features: [
      'Real-time inventory tracking',
      'Secure payment gateway integration',
      'Advanced search and filtering',
      'Responsive admin dashboard',
      'Customer review system',
      'Order tracking and management'
    ],
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS S3', 'Stripe', 'Docker'
    ],
    demoLink: 'https://ecommerce-demo.bytesbeyond.com'
  },
  {
    title: 'Healthcare Management System',
    description: 'A comprehensive ERP solution designed specifically for healthcare institutions. This system streamlines hospital operations, manages patient records, and facilitates efficient communication between departments.',
    images: [
      'https://i.imgur.com/JQYtmMC.png',  // Healthcare dashboard
      'https://i.imgur.com/W0KndU4.png',  // Patient records
      'https://i.imgur.com/pN3UV6R.png'   // Appointment system
    ],
    thumbnail: 'https://i.imgur.com/JQYtmMC.png',
    tags: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    category: 'ERP Systems',
    features: [
      'Electronic Health Records (EHR)',
      'Appointment scheduling',
      'Billing and insurance management',
      'Pharmacy inventory control',
      'Laboratory management',
      'Real-time bed availability tracking'
    ],
    technologies: [
      'Angular', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'
    ]
  },
  {
    title: 'AI Customer Service Bot',
    description: 'An intelligent chatbot powered by advanced natural language processing. This solution helps businesses automate customer support while maintaining a personal touch.',
    images: [
      'https://i.imgur.com/dV4ROT4.png',  // Chatbot interface
      'https://i.imgur.com/YKyuGVn.png',  // Conversation flow
      'https://i.imgur.com/H6hS1tR.png'   // Analytics dashboard
    ],
    thumbnail: 'https://i.imgur.com/dV4ROT4.png',
    tags: ['Python', 'TensorFlow', 'NLP', 'Azure'],
    category: 'Chatbot',
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Context-aware responses',
      'Integration with CRM systems',
      'Analytics dashboard',
      'Custom training capabilities'
    ],
    technologies: [
      'Python', 'TensorFlow', 'BERT', 'Azure Cognitive Services', 'Node.js', 'MongoDB'
    ]
  },
  {
    title: 'Real Estate CRM',
    description: 'A custom CRM system built specifically for real estate professionals. This platform helps manage property listings, client relationships, and streamline the entire property transaction process.',
    images: [
      'https://i.imgur.com/RKyXNWF.png',  // Real estate dashboard
      'https://i.imgur.com/UxT2s4P.png',  // Property listing
      'https://i.imgur.com/mN5d9Nj.png'   // Client management
    ],
    thumbnail: 'https://i.imgur.com/RKyXNWF.png',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    category: 'CRM',
    features: [
      'Property listing management',
      'Client portal',
      'Document management',
      'Automated follow-ups',
      'Marketing automation',
      'Analytics and reporting'
    ],
    technologies: [
      'Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS', 'ElasticSearch'
    ]
  },
  {
    title: 'Fitness Tracking App',
    description: 'A comprehensive mobile application for fitness enthusiasts. This app helps users track their workouts, nutrition, and connect with like-minded individuals.',
    images: [
      'https://i.imgur.com/qb5tIYP.png',  // Fitness app dashboard
      'https://i.imgur.com/XcG8FjS.png',  // Workout tracking
      'https://i.imgur.com/DK4P2Yr.png'   // Progress stats
    ],
    thumbnail: 'https://i.imgur.com/qb5tIYP.png',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    category: 'Mobile App',
    features: [
      'Workout tracking',
      'Nutrition planning',
      'Social networking',
      'Progress analytics',
      'Custom workout plans',
      'Integration with fitness devices'
    ],
    technologies: [
      'React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB', 'Google Fit API'
    ]
  },
  {
    title: 'Supply Chain Management',
    description: 'An end-to-end solution for managing complex supply chain operations. This system provides real-time visibility and control over the entire supply chain process.',
    images: [
      'https://i.imgur.com/ZWTXPkF.png',  // Supply chain dashboard
      'https://i.imgur.com/V9AJWn1.png',  // Inventory tracking
      'https://i.imgur.com/K4TqmcB.png'   // Analytics view
    ],
    thumbnail: 'https://i.imgur.com/ZWTXPkF.png',
    tags: ['Java', 'Spring Boot', 'Oracle', 'Kubernetes'],
    category: 'Custom Software',
    features: [
      'Real-time tracking',
      'Inventory management',
      'Supplier portal',
      'Predictive analytics',
      'Route optimization',
      'Compliance management'
    ],
    technologies: [
      'Java', 'Spring Boot', 'Oracle', 'Kubernetes', 'Apache Kafka', 'Elasticsearch'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
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
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
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
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
