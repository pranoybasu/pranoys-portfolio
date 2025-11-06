'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
}
const projects = [
  {
    title: 'E-Store',
    description: 'Full-stack e-commerce platform with PayPal integration, user authentication, and admin dashboard. Features product management, shopping cart, and order tracking.',
    image: '/projectScreenshots/e-store image.png',
    liveUrl: 'https://e-storebackend.up.railway.app/',
    githubUrl: 'https://github.com/pranoybasu/E-store',
    repoName: 'E-store',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'PayPal API', 'JWT'],
    featured: true,
  },
  {
    title: 'Global Disease Tracker',
    description: 'Interactive dashboard for tracking global disease statistics with real-time data visualization, country comparisons, and comprehensive analytics.',
    image: '/projectScreenshots/global-disease-tracker image.png',
    liveUrl: 'https://global-disease-tracker.vercel.app/',
    githubUrl: 'https://github.com/pranoybasu/global-disease-tracker',
    repoName: 'global-disease-tracker',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Chart.js', 'Leaflet'],
    featured: true,
  },
  {
    title: 'COVID-19 Stats',
    description: 'Comprehensive COVID-19 statistics tracker with interactive maps, charts, and detailed country-wise data visualization.',
    image: '/projectScreenshots/covid19 image.png',
    liveUrl: 'https://coronavirus19stats.web.app/',
    githubUrl: 'https://github.com/pranoybasu/coronavirus19stats',
    repoName: 'coronavirus19stats',
    tech: ['React', 'D3.js', 'Firebase', 'Material-UI', 'REST API'],
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { data: repoStats } = useQuery<GitHubRepo>({
    queryKey: ['github', project.repoName],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/repos/pranoybasu/${project.repoName}`);
      if (!response.ok) throw new Error('Failed to fetch repo stats');
      return response.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-lg overflow-hidden border border-gray-300 dark:border-cosmic-blue/20 hover:border-cosmic-blue/60 dark:hover:border-cosmic-cyan/50 transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-cosmic-blue/20 dark:to-cosmic-cyan/20 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-cosmic-darker/90 dark:to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[60px]">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs bg-cosmic-blue/10 text-cosmic-blue dark:text-cosmic-blue border border-cosmic-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Stats */}
        {repoStats && (
          <div className="flex gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{repoStats.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🔱</span>
              <span>{repoStats.forks_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📝</span>
              <span>{repoStats.language}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg text-center font-semibold transition-all duration-200 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-white hover:shadow-lg hover:shadow-cosmic-blue/30 dark:hover:shadow-cosmic-blue/50"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border font-semibold transition-all duration-200 border-cosmic-blue/50 text-cosmic-blue hover:bg-cosmic-blue/10 dark:hover:bg-cosmic-blue/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan dark:from-cosmic-blue dark:to-cosmic-cyan bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}