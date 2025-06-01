import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
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
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our programs or want to schedule a campus tour?
            Reach out to us, and we'll be happy to help you on your educational journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring focus:ring-primary-200 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring focus:ring-primary-200 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring focus:ring-primary-200 transition"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="programs">Programs & Curriculum</option>
                    <option value="tour">Campus Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring focus:ring-primary-200 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-neutral-900">Email Us</h4>
                    <p className="text-neutral-600">info@natureacademy.edu</p>
                    <p className="text-neutral-600">admissions@natureacademy.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-neutral-900">Call Us</h4>
                    <p className="text-neutral-600">Main: (555) 123-4567</p>
                    <p className="text-neutral-600">Admissions: (555) 123-8910</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-neutral-900">Visit Us</h4>
                    <p className="text-neutral-600">123 Nature Way</p>
                    <p className="text-neutral-600">Greenville, CA 98765</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-900 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Office Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;