'use client';

import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Contact from './Contact';
import ProjectsShowcase from './ProjectsShowcase';

export default function Projects() {
  const heroImageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

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
                src="/projects.jpg"
                alt="Projects"
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
                Projects
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

      {/* Projects Showcase */}
      <div className="pt-24">
        <ProjectsShowcase removeTitle={true} />
      </div>

      {/* CTA Section */}
      <Contact />
    </div>
  );
} 