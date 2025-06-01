import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Student-Led Conservation Project Wins National Award',
    excerpt: 'Our students\' initiative to restore local wetland habitats has been recognized with the prestigious GreenFuture Award.',
    date: 'June 15, 2025',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Achievement',
  },
  {
    id: 2,
    title: 'New Sustainable Agriculture Program Launches This Fall',
    excerpt: 'Introducing our newest program that combines traditional farming knowledge with cutting-edge sustainable practices.',
    date: 'May 28, 2025',
    image: 'https://images.pexels.com/photos/2252894/pexels-photo-2252894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Curriculum',
  },
  {
    id: 3,
    title: 'Campus Achieves Carbon Neutrality Five Years Ahead of Schedule',
    excerpt: 'Through comprehensive sustainability initiatives, our campus has reached its carbon neutrality goal well ahead of the target date.',
    date: 'April 22, 2025',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sustainability',
  },
];

const NewsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section
      id="news"
      ref={ref}
      className="py-20 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Organic background shape */}
      <div className="absolute bottom-0 left-0 w-full h-64 md:h-96 bg-primary-50 skew-y-6 transform-gpu translate-y-24 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest News & Events</h2>
          <p className="section-subtitle">
            Stay updated with the latest happenings at Nature Academy, from student achievements
            to campus initiatives and upcoming events.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="card group overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mb-4">{item.excerpt}</p>
                <motion.a
                  href="#"
                  className="mt-auto text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read more
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
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#"
            className="btn btn-outline border-primary-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News & Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;