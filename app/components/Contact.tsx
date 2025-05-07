'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact.jpg"
          alt="Contact background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Text */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-light text-white"
            >
              Have a <span className="font-bold">project</span> to discuss?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300"
            >
              Let's create something extraordinary together. Whether you're ready to start your dream home project or just exploring possibilities, we're here to help bring your vision to life.
            </motion.p>
          </div>

          {/* Right Column - CTA Buttons */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors duration-300 group"
              >
                Start Your Project
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
              <Link 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Call Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 