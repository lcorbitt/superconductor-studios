'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full py-6 flex justify-between items-center cursor-pointer group"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-6">
              <span className="text-xl font-bold text-gray-500 group-hover:text-black transition-colors duration-200">
                {String(index + 1).padStart(2, '')}.
              </span>
              <span className="text-xl font-bold text-gray-500 group-hover:text-black transition-colors duration-200">
                {item.title}
              </span>
            </div>
            <div className="relative w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-200">
              <AnimatePresence initial={false} mode="wait">
                {expandedIndex === index ? (
                  <motion.div
                    key="minus"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <FiMinus className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="plus"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <FiPlus className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15
                    }
                  }
                }}
                exit={{ 
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    opacity: {
                      duration: 0.25
                    }
                  }
                }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-gray-600">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 