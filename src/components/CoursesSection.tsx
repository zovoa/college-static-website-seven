import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Book, FlaskConical, Globe, Palette, Calculator, Microscope } from 'lucide-react';
import { CourseCard } from '../types';

const courses: CourseCard[] = [
  {
    id: 1,
    title: 'Environmental Literature',
    description: 'Explore classic and contemporary literature that examines humanity\'s relationship with the natural world.',
    icon: 'Book',
    color: 'bg-primary-500',
  },
  {
    id: 2,
    title: 'Sustainable Sciences',
    description: 'Learn the principles of biology, chemistry, and physics through the lens of sustainability and ecological systems.',
    icon: 'Flask',
    color: 'bg-secondary-500',
  },
  {
    id: 3,
    title: 'Eco-Geography',
    description: 'Study the relationships between human societies and their physical environment across different regions.',
    icon: 'Globe',
    color: 'bg-accent-500',
  },
  {
    id: 4,
    title: 'Natural Arts',
    description: 'Develop artistic skills using natural materials and drawing inspiration from the beauty of the natural world.',
    icon: 'Palette',
    color: 'bg-success-500',
  },
  {
    id: 5,
    title: 'Applied Mathematics',
    description: 'Apply mathematical concepts to real-world environmental challenges and natural phenomena.',
    icon: 'Calculator',
    color: 'bg-warning-500',
  },
  {
    id: 6,
    title: 'Field Biology',
    description: 'Hands-on study of local ecosystems, biodiversity, and conservation practices through field work.',
    icon: 'Microscope',
    color: 'bg-error-500',
  },
];

const iconComponents = {
  Book,
  Flask: FlaskConical,
  Globe,
  Palette,
  Calculator,
  Microscope
};

const CoursesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return <IconComponent className="h-7 w-7 text-white" />;
  };

  return (
    <section
      id="courses"
      ref={ref}
      className="py-20 md:py-24 bg-neutral-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 leaf-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            Discover our innovative curriculum that seamlessly blends academic excellence with environmental awareness,
            preparing students for a future where both humanity and nature can thrive.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="card flex flex-col h-full overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-6 flex-grow">
                <div className={`${course.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {renderIcon(course.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{course.title}</h3>
                <p className="text-neutral-600">{course.description}</p>
              </div>
              <div className="mt-auto p-6 pt-4 border-t border-neutral-100">
                <motion.a
                  href="#"
                  className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;