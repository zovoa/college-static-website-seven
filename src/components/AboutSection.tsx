import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Award, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      title: 'Nature-Based Curriculum',
      description: 'Our curriculum integrates natural elements and outdoor learning into every subject, promoting a deeper connection with the environment.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: 'Expert Faculty',
      description: 'Our instructors are experts in both their academic fields and environmental education, providing a balanced and enriching experience.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: 'Recognized Excellence',
      description: 'Nationally recognized for our innovative approach to education that balances academic achievement with environmental stewardship.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: 'Supportive Community',
      description: 'Join a community that values collaboration, respect for nature, and creating positive change in the world around us.',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-24 relative overflow-hidden bg-white"
    >
      {/* Organic background shape */}
      <div className="absolute top-0 right-0 w-full h-64 md:h-96 bg-primary-50 -skew-y-6 transform-gpu -translate-y-24 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Nature Academy</h2>
          <p className="section-subtitle">
            We're reimagining education by integrating nature into every aspect of learning,
            creating an environment where students thrive academically and develop a deep
            connection with the natural world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card p-6 flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 aspect-video overflow-hidden rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students learning in a natural environment"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;