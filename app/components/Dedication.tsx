'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const Dedication = () => {
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);

  const { scrollYProgress: smallImageScroll } = useScroll({
    target: smallImageRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: largeImageScroll } = useScroll({
    target: largeImageRef,
    offset: ["start end", "end start"]
  });

  const getScaleTransform = (progress: MotionValue<number>) => useTransform(progress, [0, 1], [1.2, 1]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Main Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Dedication, experience and a{' '}
              <span className="font-bold">passion</span> for perfection.
            </h2>
            <div className="text-base text-gray-600 max-w-none">
              <p className="mb-6">
                At Superconductor Studios, our focus is on YOU and what YOU want to achieve. 
                We pride ourselves on forging strong, lasting relationships, which help us to 
                continue to thrive and develop.
              </p>
              <p>
                Our desire to work closely with those who share the same vision and values 
                is why many of our clients have a multiple project history. Exceeding client 
                expectations has resulted in continual repeat business within the Austin area, 
                which means we are building a foundation not only for our business but also 
                for our community.
              </p>
            </div>
            <Link 
              href="/about"
              className="inline-flex items-center gap-3 mt-8 text-lg font-medium group hover:text-gray-600 transition-colors"
            >
              Read More 
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
                whileHover={{ x: 5 }}
              >
                <FaArrowRight />
              </motion.span>
            </Link>

            {/* Small Image Below Text */}
            <div ref={smallImageRef} className="relative h-[300px] mt-12 overflow-hidden">
              <motion.div
                style={{ scale: getScaleTransform(smallImageScroll) }}
                className="relative w-full h-full"
              >
                <Image
                  src="/dedication-2.jpg"
                  alt="Premium home builder detail"
                  fill
                  className="object-cover rounded-sm"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={largeImageRef} className="relative h-[300px] lg:h-[600px] bg-gray-100 overflow-hidden">
            <motion.div
              style={{ scale: getScaleTransform(largeImageScroll) }}
              className="relative w-full h-full"
            >
              <Image
                src="/dedication.jpg"
                alt="Premium home builder craftsmanship"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedication;