'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { FaArrowDown, FaPlay } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const historyTimeline = [
  {
    year: '2018',
    description: 'Founded with a vision to create exceptional homes that reflect our commitment to quality and innovation.'
  },
  {
    year: '2019',
    description: 'Completed our first luxury residential project, setting new standards in architectural excellence.'
  },
  {
    year: '2020',
    description: 'Expanded our team of skilled craftsmen and designers, taking on larger and more ambitious projects.'
  },
  {
    year: '2021',
    description: 'Recognized for outstanding design and craftsmanship with multiple industry awards.'
  },
  {
    year: '2022',
    description: 'Established ourselves as a leading name in luxury home construction across the region.'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Working with Superconductor Studios was an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations.",
    author: "Sarah & James Thompson",
    location: "Sapphire Crescent"
  },
  {
    id: 2,
    quote: "They transformed our vision into reality with such precision and care. The craftsmanship in our home is simply outstanding.",
    author: "Michael Anderson",
    location: "Ocean Front Drive"
  },
  {
    id: 3,
    quote: "The team's expertise and professionalism made the entire building process smooth and enjoyable. We couldn't be happier with our new home.",
    author: "Emily & David Chen",
    location: "Buchanans Road"
  },
  {
    id: 4,
    quote: "Their innovative design solutions and meticulous execution have created a space that perfectly suits our lifestyle.",
    author: "Robert Wilson",
    location: "Hillside Estate"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <motion.div
      className="group relative bg-gray-50 p-8 h-full flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light italic">"{testimonial.quote}"</p>
      </div>
      <div>
        <p className="text-lg sm:text-xl text-black font-medium">{testimonial.author}</p>
        <p className="text-gray-500">{testimonial.location}</p>
      </div>
    </motion.div>
  );
};

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

const About = () => {
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);
  const heroImageRef = useRef(null);

  const { scrollYProgress: smallImageScroll } = useScroll({
    target: smallImageRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: largeImageScroll } = useScroll({
    target: largeImageRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: heroImageScroll } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });

  const getScaleTransform = (progress: MotionValue<number>) => useTransform(progress, [0, 1], [1.2, 1]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-fit lg:min-h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row min-h-fit lg:min-h-screen">
          {/* Left Side - Image */}
          <div ref={heroImageRef} className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
            <motion.div
              className="relative w-full h-full"
              style={{ scale: getScaleTransform(heroImageScroll) }}
            >
              <Image
                src="/dedication.jpg"
                alt="Modern home exterior"
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
                About
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

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Main Text */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Our <span className="font-bold">story.</span>
              </h2>
              <div className="text-base text-gray-600 max-w-none">
                <p className="mb-6">
                  We're a family-run team dedicated to designing and building high-quality custom homes. Every project is a reflection of our commitment, care, and craftsmanship, and that personal investment shows in our results.
                </p>
                <p>
                  At Superconductor Studios, you work directly with the people who own the business and build the homes. We take pride in being hands-on, transparent, and accountable from start to finish. With years of experience behind us, we're here to create beautiful, functional spaces tailored to each family's unique vision.
                </p>
              </div>

              {/* Small Image Below Text */}
              <div ref={smallImageRef} className="relative h-[400px] mt-24 lg:mt-52 overflow-hidden">
                <motion.div
                  style={{ scale: getScaleTransform(smallImageScroll) }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/about-2.jpg"
                    alt="Premium home builder detail"
                    fill
                    className="object-cover rounded-sm"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column - Large Image */}
            <div ref={largeImageRef} className="relative h-[300px] lg:h-[600px] bg-gray-100 overflow-hidden">
              <motion.div
                style={{ scale: getScaleTransform(largeImageScroll) }}
                className="relative w-full h-full"
              >
                <Image
                  src="/stairs.png"
                  alt="Premium home builder craftsmanship"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-16 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="font-bold">history.</span>
          </motion.h2>
          <div className="space-y-12">
            {historyTimeline.map((item, index) => (
              <motion.div 
                key={item.year}
                className="flex flex-col md:flex-row gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-light text-black w-48">{item.year}</h3>
                <p className="text-xl text-gray-700 flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-16 text-black text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            What our <span className="font-bold">clients</span> say.
          </motion.h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-track]:bg-black/10">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-none w-[85vw] sm:w-[60vw] md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] min-w-[300px] snap-center"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              {/* Empty div to ensure last card peeks */}
              <div className="flex-none w-8" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Awards Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-16 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Recognition.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About; 