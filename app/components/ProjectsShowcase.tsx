'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ project, index, isActive }: { project: Project; index: number; isActive: boolean }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={`group relative aspect-[4/5] overflow-hidden cursor-pointer ${isActive ? 'z-20' : 'z-10 scale-90 opacity-50'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {isActive && (
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-light">{project.title}</h3>
            <div>
              <p className="text-lg sm:text-xl mb-2">{project.description}</p>
              <p className="text-2xl sm:text-3xl font-bold">#{index + 1}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ProjectsShowcase = ({ removeTitle }: { removeTitle?: boolean }) => {
  const projects = [
    {
      id: 1,
      title: 'Sapphire Crescent Renovation',
      description: 'Modern transformation',
      image: '/projects-1.png',
    },
    {
      id: 2,
      title: '18 Ocean Front Drive',
      description: 'Luxury beachfront living',
      image: '/projects-2.png',
    },
    {
      id: 3,
      title: '15 Ocean Front Drive',
      description: 'Contemporary coastal home',
      image: '/projects-3.png',
    },
    {
      id: 4,
      title: 'Buchanans Road',
      description: 'Hill country estate',
      image: '/projects-4.png',
    }
  ];

  return (
    <section className="pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!removeTitle && (
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-black text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Projects.
          </motion.h2>
        )}
        
        {/* Mobile Grid View */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {projects.map((project, index) => (
            <div key={project.id} className="w-full">
              <ProjectCard 
                project={project}
                index={index}
                isActive={true}
              />
            </div>
          ))}
        </div>

        {/* Desktop Scrollable List */}
        <div className="hidden lg:block relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-track]:bg-black/10">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="flex-none w-[calc(33.33%-1rem)] min-w-[400px] snap-center"
              >
                <ProjectCard 
                  project={project}
                  index={index}
                  isActive={true}
                />
              </div>
            ))}
            {/* Empty div to ensure last card peeks */}
            <div className="flex-none w-8" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase; 