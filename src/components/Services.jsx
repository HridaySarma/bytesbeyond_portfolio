import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  ChatBubbleBottomCenterTextIcon,
  CubeIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Web Development',
    description: 'Responsive and dynamic websites built with cutting-edge technologies.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Chatbot Development',
    description: 'Intelligent conversational AI solutions to enhance customer engagement.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'CRM Solutions',
    description: 'Custom CRM systems to streamline your customer relationship management.',
    icon: ChartBarIcon,
  },
  {
    title: 'ERP Systems',
    description: 'Comprehensive ERP solutions to optimize your business operations.',
    icon: CogIcon,
  },
  {
    title: 'Custom Software',
    description: 'Tailor-made software solutions designed to meet your specific needs.',
    icon: CubeIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-primary"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We offer a comprehensive suite of digital solutions to help your business thrive in the modern world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
