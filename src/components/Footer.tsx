import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Twitter, Facebook, Youtube, Linkedin, Heart, Mail, ChevronRight } from 'lucide-react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 mb-2"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <ChevronRight className="h-3 w-3" />
    {children}
  </motion.a>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden">
      {/* Leaf Background Pattern */}
      <div className="absolute inset-0 leaf-bg opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <motion.div
              className="flex items-center gap-2 text-white font-display font-bold text-xl mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span>Nature Academy</span>
            </motion.div>
            
            <p className="text-neutral-300 mb-6">
              Pioneering a new approach to education that harmonizes academic excellence with environmental stewardship,
              preparing students for a sustainable future.
            </p>
            
            <div className="flex space-x-3">
              <SocialIcon href="#" icon={<Instagram size={18} />} />
              <SocialIcon href="#" icon={<Twitter size={18} />} />
              <SocialIcon href="#" icon={<Facebook size={18} />} />
              <SocialIcon href="#" icon={<Youtube size={18} />} />
              <SocialIcon href="#" icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          {/* Column 2: Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-primary-700 pb-2">Our Programs</h3>
            <div className="flex flex-col">
              <FooterLink href="#courses">Environmental Literature</FooterLink>
              <FooterLink href="#courses">Sustainable Sciences</FooterLink>
              <FooterLink href="#courses">Eco-Geography</FooterLink>
              <FooterLink href="#courses">Natural Arts</FooterLink>
              <FooterLink href="#courses">Applied Mathematics</FooterLink>
              <FooterLink href="#courses">Field Biology</FooterLink>
            </div>
          </div>
          
          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-primary-700 pb-2">Useful Links</h3>
            <div className="flex flex-col">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#sustainability">Sustainability</FooterLink>
              <FooterLink href="#news">Campus News</FooterLink>
              <FooterLink href="#contact">Admissions</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-primary-700 pb-2">Stay Connected</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for updates on campus events, new programs, and sustainability initiatives.
            </p>
            
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-sm rounded-full border border-primary-700 focus:border-primary-500 focus:ring focus:ring-primary-500/30 focus:outline-none text-white placeholder-white/60"
              />
              <button className="absolute right-1 top-1 h-9 w-9 flex items-center justify-center bg-primary-500 rounded-full hover:bg-primary-600 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-sm text-neutral-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our school.
            </p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nature Academy. All rights reserved.
          </p>
          
          <motion.p 
            className="text-sm text-neutral-400 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="h-3.5 w-3.5 text-primary-500 mx-1" /> for a sustainable future
          </motion.p>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden -mb-1 z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 text-primary-800"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;