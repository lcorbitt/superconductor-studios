'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={ref} className="relative lg:min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row lg:min-h-screen">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
          <motion.div
            style={{ scale }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero-bg.jpg"
              alt="Modern home exterior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 pt-12 lg:py-0 bg-white">
          <div className="max-w-xl">
            <motion.h1 
              className="text-5xl md:text-6xl xl:text-7xl font-light mb-8 text-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              We build<br />
              great <span className="font-bold">homes</span>.
            </motion.h1>
            {/* <p className="text-xl md:text-2xl xl:text-3xl font-light text-gray-600 mb-12 leading-relaxed">
              Dedication, experience,<br />
              and a <span className="font-medium">passion</span> for perfection.
            </p> */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-3 rounded-none text-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/projects"
                className="inline-block bg-transparent border-2 border-black text-black px-8 py-3 rounded-none text-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 lg:mt-16">
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
  );
};

export default Hero; 