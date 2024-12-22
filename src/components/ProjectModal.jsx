import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  if (!project) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 mx-1 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-200" />
    ),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-20 z-50 overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
          >
            <div className="relative p-4 md:p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>

              <div className="max-w-4xl mx-auto">
                {/* Project Images Carousel */}
                <div className="relative mb-6 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <Slider {...settings} className="project-carousel">
                    {project.images.map((image, index) => (
                      <div key={index} className="outline-none">
                        <div className="aspect-video relative">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={800}
                            height={450}
                            className="w-full h-auto rounded-lg shadow-lg"
                            priority
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <h4 className="text-xl font-semibold mb-2">Overview</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {project.features && (
                      <>
                        <h4 className="text-xl font-semibold mt-6 mb-2">Key Features</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {project.technologies && (
                      <>
                        <h4 className="text-xl font-semibold mt-6 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {project.demoLink && (
                    <div className="flex gap-4 mt-8">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        View Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200"
  >
    <ChevronRightIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200"
  >
    <ChevronLeftIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
  </button>
);

export default ProjectModal;
