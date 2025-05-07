'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaPlay } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Accordion from './Accordion';
import ServicesFeatures from './ServicesFeatures';

const VideoShowcase = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the video player
    if (e.target === e.currentTarget) {
      setIsVideoOpen(false);
    }
  };

  return (
    <>
      <section className="relative h-[600px] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sapphire-crescent.jpg"
            alt="Sapphire Crescent Project"
            fill
            className="object-cover opacity-70"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-white text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sapphire Crescent<br />
            <span className="font-light text-2xl md:text-3xl">project walk-through.</span>
          </motion.h2>

          {/* Play Button */}
          <motion.button
            className="group flex items-center justify-center w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors duration-300"
            onClick={() => setIsVideoOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay className="text-3xl text-white ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-6xl aspect-video">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer p-2 hover:scale-110 transform duration-200"
                aria-label="Close video"
              >
                <IoMdClose className="text-4xl" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/0L3s4-gGURI?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const accordionItems = [
  {
    title: "Initial Contact",
    content: "From concept to completion, we handle every aspect of custom home building. Our team works closely with you to create a unique design that reflects your vision while ensuring the highest standards of construction quality."
  },
  {
    title: "Consultation",
    content: "Transform your existing space with our comprehensive renovation services. We specialize in high-end finishes, structural modifications, and modern upgrades that enhance both functionality and aesthetic appeal."
  },
  {
    title: "Comprehensive Quote",
    content: "Our experienced project managers oversee every detail of your build, ensuring timely completion, budget adherence, and seamless coordination between all trades and suppliers."
  },
  {
    title: "The Green Light",
    content: "We incorporate eco-friendly materials and energy-efficient systems into our builds, creating homes that are both luxurious and environmentally conscious."
  },
  {
    title: "The Build",
    content: "Our interior design team works hand-in-hand with our construction experts to create cohesive, stunning spaces that perfectly balance form and function."
  },
  {
    title: "The Handover",
    content: "Once construction and final cleaning are complete, you'll be welcomed into your new home for a thorough walkthrough. During this handover, we'll highlight key features, address any details of note, and answer any questions you may have. After a final check of all aspects of the build, your new home will be officially handed over to you."
  },
  {
    title: "Post Completion",
    content: "Our commitment to your home doesn't end at handover. We conduct follow-up inspections at both 90 days and 12 months after completion to check for any maintenance issues or settling-related concerns, ensuring your home performs as it should through all four seasons. During these visits—or anytime in between—you're encouraged to share any questions or issues, and we'll address them promptly. After all, satisfied clients are our greatest advocates, and we'd be honored to have you recommend us after experiencing our full journey of care and craftsmanship."
  }
];

export default function Services() {
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);

  const { scrollYProgress: smallImageScroll } = useScroll({
    target: smallImageRef,
    offset: ["start end", "end start"]
  });

  useScroll({
    target: largeImageRef,
    offset: ["start end", "end start"]
  });

  const scaleValue = [1.2, 1];
  const smallImageScale = useTransform(smallImageScroll, [0, 1], scaleValue);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-fit lg:min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row min-h-fit lg:min-h-screen">
          {/* Left Side - Image */}
          <div ref={smallImageRef} className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              style={{ scale: smallImageScale }}
            >
              <Image
                src="/services.jpg"
                alt="Our Services"
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
                Services
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


      <div className="pt-24">
        <ServicesFeatures imageOnRight={true} />
      </div>

      {/* Services Accordion Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-16 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="font-bold">process.</span>
          </motion.h2>
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />
    </div>
  );
}
