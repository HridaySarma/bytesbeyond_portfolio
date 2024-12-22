import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: UserGroupIcon,
    title: 'Client-Centric',
    description: 'We put our clients first, ensuring their success through dedicated support and partnership.'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we do.'
  },
  {
    icon: HeartIcon,
    title: 'Passion',
    description: 'We love what we do and it shows in our work and commitment.'
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-primary"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We are a team of passionate developers and designers committed to delivering exceptional software solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-secondary">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded with a vision to transform businesses through technology, BytesBeyond has grown into a trusted partner for companies seeking innovative software solutions. Our journey is marked by continuous learning, adaptation, and a commitment to excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we pride ourselves on our ability to tackle complex challenges and deliver solutions that drive real business value. Our team combines technical expertise with creative problem-solving to ensure every project's success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-secondary">Our Approach</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe in a collaborative approach, working closely with our clients to understand their unique challenges and objectives. Our development process is agile and transparent, ensuring that we deliver solutions that not only meet but exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Quality is at the heart of everything we do. From initial concept to final deployment, we maintain rigorous standards and best practices to ensure robust, scalable, and maintainable solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-white dark:bg-gray-900 rounded-full shadow-lg mb-6">
                <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
