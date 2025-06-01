import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wind, Droplets, Sun, Recycle } from 'lucide-react';
import { SustainabilityInitiative } from '../types';

const initiatives: SustainabilityInitiative[] = [
  {
    id: 1,
    title: 'Renewable Energy Campus',
    description: 'Our campus is powered by 100% renewable energy through solar panels and wind turbines, reducing our carbon footprint.',
    icon: 'Sun',
  },
  {
    id: 2,
    title: 'Water Conservation',
    description: 'Advanced rainwater harvesting systems and water-efficient fixtures reduce our water consumption by 60%.',
    icon: 'Droplets',
  },
  {
    id: 3,
    title: 'Zero Waste Initiative',
    description: 'Comprehensive recycling and composting programs divert over 90% of campus waste from landfills.',
    icon: 'Recycle',
  },
  {
    id: 4,
    title: 'Native Landscaping',
    description: 'Our grounds feature native plants that support local wildlife and require minimal water and maintenance.',
    icon: 'Wind',
  },
];

const iconComponents = {
  Sun,
  Droplets,
  Recycle,
  Wind,
};

const SustainabilitySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return <IconComponent className="h-10 w-10 text-white" />;
  };

  return (
    <section
      id="sustainability"
      ref={ref}
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-800/90" />
        <img
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Forest background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">Nature & Sustainability</h2>
          <p className="section-subtitle text-white/80">
            At Nature Academy, we're committed to environmental stewardship through innovative campus initiatives
            and by instilling ecological awareness in our students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Sustainable campus initiatives"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Our Eco-Initiatives</h3>
            
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.id}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center">
                    {renderIcon(initiative.icon)}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{initiative.title}</h4>
                    <p className="text-white/70">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              className="btn btn-accent mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Join Our Eco-Efforts
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;