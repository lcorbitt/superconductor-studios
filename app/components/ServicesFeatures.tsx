'use client';

import { IconType } from 'react-icons';
import { FaTools, FaComments, FaUserFriends, FaStar, FaHammer, FaExpandAlt, FaTree } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHouseChimney } from 'react-icons/fa6';

interface FeatureCardProps {
  title: string;
  points: string[];
  Icon: IconType;
}

interface FeaturesProps {
  imageOnRight?: boolean;
}

const FeatureCard = ({ title, points, Icon }: FeatureCardProps) => (
  <div className="group">
    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-black mb-2 sm:mb-4" />
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-black">
      {title}
    </h3>
    <ul className="space-y-1 sm:space-y-2">
      {points.map((point, index) => (
        <li 
          key={index} 
          className="text-sm sm:text-base text-gray-600 font-light group-hover:text-black transition-colors"
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Features = ({ imageOnRight = false }: FeaturesProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const features = [
    {
      title: 'New Home Builds',
      points: [
        'Luxury Finishes',
        'Fastidious Level of Detail',
        'Your build is our build',
      ],
      Icon: FaHouseChimney,
    },
    {
      title: 'Renovations',
      points: [
        'Continual Updates',
        'Transparency',
        'Reliability',
      ],
      Icon: FaHammer,
    },
    {
      title: 'Extensions & Additions',
      points: [
        'Polite',
        'Respectful',
        'On Time',
      ],
      Icon: FaExpandAlt,
    },
    {
      title: 'Custom Outdoor Spaces',
      points: [
        'Striving for Perfection',
        'Following Through',
        'Closing Loops',
      ],
      Icon: FaTree,
    },
  ];

  const ImageSection = (
    <div ref={containerRef} className="relative h-[400px] lg:h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          style={{
            scale,
            width: '100%',
            height: '100%',
            transformOrigin: 'center center'
          }}
        >
          <Image
            src="/features.jpg"
            alt="Premium home builder craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );

  const ContentSection = (
    <div className="space-y-10">
      <h2 className="text-3xl md:text-4xl font-light text-black">
        Our <span className="font-bold">expertise</span>.
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="text-gray-600 space-y-4 text-base font-light">
        <p>
          Superconductor Studios' passion is for building amazing custom architect-designed homes. From the foundations, frame, exterior details through to luxury finishes on your floors, cabinetry and electrical, our fastidious attention to detail and "we can achieve that" attitude, we guarantee that building or renovating a home with us will be memorable for all the right reasons.
        </p>
        <p>
          We work with trades who are the best in their field. If your desire can be accomplished, we will accomplish it. If it cannot, we are able to give advice on potential alternatives to achieve the look and finish you desire. Superconductor Studios is hungry to be known for our faultless work and we will work with you, your architect and interior designer to strive for perfection.
        </p>
      </div>
    </div>
  );

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {imageOnRight ? (
            <>
              {ContentSection}
              {ImageSection}
            </>
          ) : (
            <>
              {ImageSection}
              {ContentSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features; 