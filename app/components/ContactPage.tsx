'use client';

import { FaArrowDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const heroImageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });

  // Move transform logic inside component
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-fit lg:min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row min-h-fit lg:min-h-screen">
          {/* Left Side - Image */}
          <div ref={heroImageRef} className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              style={{ scale }}
            >
              <Image
                src="/contact-hero.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 bg-white">
            <div className="max-w-xl">
              <motion.h1 
                className="text-5xl md:text-6xl xl:text-7xl font-bold mb-8 text-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact
              </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <div className="lg:mt-16">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-black cursor-pointer"
              >
                <FaArrowDown className="text-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-light mb-8"
            >
              Have a <span className="font-bold">project</span> to discuss?
            </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-16"
          >
            If you would like to discuss your next project, please do not hesitate to complete the enquiry form (below) or send us an email.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl" />
                <a href="tel:0401042029" className="text-xl hover:text-gray-600 transition-colors">
                  (555) 555-5555
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl" />
                <div className="space-y-2">
                  <a href="mailto:info@superconductorstudios.com" className="block text-xl hover:text-gray-600 transition-colors">
                    info@superconductorstudios.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-black outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-8 hover:bg-gray-900 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600">Thank you! Your submission has been received!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600">Oops! Something went wrong while submitting the form.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}