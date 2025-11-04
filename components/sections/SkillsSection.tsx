'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Skills',
    icon: '💻',
    skills: [
      'Advanced SQL',
      'JavaScript',
      'Angular (Beginner)',
      'No-SQL',
      'Node.js',
      'React (Beginner)',
      'Co-Pilot',
      'AWS Console',
      'Azure Cloud',
      'Snowflake',
      'Kubernetes',
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      "Jira's",
      'Ms Office',
      'Smart Sheet',
      'IntelliJ',
      'Vs-Code',
      'GitLab',
      'GitHub',
      'Snowflake',
      'Open Lens',
      'GitHub Co-pilot (both normal and agent mode applications)',
    ],
  },
  {
    title: 'Certifications',
    icon: '🏆',
    skills: [
      'The Bits and Bytes of Computer Networking - Google',
      'AWS Academy Graduate - AWS Academy Cloud Foundations - Amazon Web Services',
      'Hands-On Essentials - Data Warehouse - Snowflake',
      'Hands-On Essentials - Data Applications - Snowflake',
    ],
  },
  {
    title: 'Hobbies',
    icon: '🎯',
    skills: [
      'Music',
      'Cooking',
      'Gaming',
      'Driving',
    ],
  },
];

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-8 rounded-lg border border-cosmic-blue/20 hover:border-cosmic-cyan/50 transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4">{category.icon}</span>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
      </div>
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
            className="flex items-start"
          >
            <span className="text-cosmic-cyan mr-2 mt-1">•</span>
            <span className="text-gray-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}