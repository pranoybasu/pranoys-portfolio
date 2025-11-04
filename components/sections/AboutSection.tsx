'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const educationData = [
  {
    year: '2018',
    title: '12th Class',
    institution: 'Delhi Public School, Newtown',
    location: 'West Bengal, IN',
    description: 'Passed with Computer Science and Mathematics',
    logo: '/logos/Delhi Public School.jpg',
  },
  {
    year: '2016',
    title: '10th Class',
    institution: 'Delhi Public School, Newtown',
    location: 'West Bengal, IN',
    description: 'Passed with Science, Computer Science and Mathematics',
    logo: '/logos/Delhi Public School.jpg',
  },
];

const professionalData = [
  {
    period: 'Jun 2025 – Present',
    title: 'Software Engineer I',
    company: 'PowerSchool',
    location: 'Bangalore, IN',
    logo: '/logos/Powerschool.svg',
    achievements: [
      'Developing scalable and maintainable code for Assessments_ETL codebase',
      'Implemented debugging strategies through JIRA\'s for Junior Engineers',
      'Managed time effectively to meet project deadlines',
      'Collaborated on Engine defects and CI/CD pipeline enhancements',
      'Reduced system downtime through proactive maintenance',
    ],
  },
  {
    period: 'Feb 2025 – Jun 2025',
    title: 'Associate Software Engineer II',
    company: 'PowerSchool',
    location: 'Bangalore, IN',
    logo: '/logos/Powerschool.svg',
    achievements: [
      'Sprint planning, task estimation, work prioritization',
      'Authored code fixes and enhancements',
    ],
  },
  {
    period: 'Mar 2024 – Feb 2025',
    title: 'Associate Software Engineer I',
    company: 'PowerSchool',
    location: 'Bangalore, IN',
    logo: '/logos/Powerschool.svg',
    achievements: [
      'Cross-functional collaboration for software solutions',
      'Testing and deployment of high-quality software',
    ],
  },
  {
    period: 'Jun 2022 – Mar 2024',
    title: 'Associate Application Specialist',
    company: 'PowerSchool',
    location: 'Bangalore, IN',
    logo: '/logos/Powerschool.svg',
    achievements: [
      'Implementation of "Unified Insights" product line',
      'Data aggregation from multiple PowerSchool products',
      'Placed 3rd at 2023 PowerSchool Hackathon',
    ],
  },
];

const internshipData = [
  {
    period: 'Oct 2021 – Nov 2021',
    title: 'Software Development Intern',
    company: 'Balmer Lawrie & Co. Ltd.',
    location: 'Remote',
    logo: '/logos/balmer-lawrie-investment.png',
    achievements: [
      'Built Admin Analytics Dashboard with React, Node, Express',
      'Integrated MySQL and MongoDB for role-based insights',
    ],
  },
  {
    period: 'May 2020 – Sep 2020',
    title: 'Data Analyst Intern',
    company: 'Invisible Technologies',
    location: 'Remote',
    logo: '/logos/invisible-technologies-logo.png',
    achievements: [
      'Aggregated data from 20+ sources',
      'Built in-house OCR tool for food menu recognition',
      'Supported DoorDash/UberEATS platforms',
    ],
  },
];

interface ExperienceItem {
  period?: string;
  year?: string;
  title: string;
  company?: string;
  institution?: string;
  location: string;
  logo: string;
  achievements?: string[];
  description?: string;
}

function ExperienceCard({ 
  item, 
  index,
  type = 'professional'
}: { 
  item: ExperienceItem;
  index: number;
  type?: 'professional' | 'internship' | 'education';
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass p-6 rounded-lg border border-cosmic-blue/20 hover:border-cosmic-cyan/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Company/Institution Logo */}
        <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden bg-white/5 p-2">
          <Image
            src={item.logo}
            alt={type === 'education' ? item.institution || '' : item.company || ''}
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-cosmic-cyan font-semibold">
                {type === 'education' ? item.institution : item.company}
              </p>
              <p className="text-gray-400 text-sm">{item.location}</p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
              {type === 'education' ? item.year : item.period}
            </span>
          </div>

          {type === 'education' ? (
            <p className="text-gray-300 mt-2">{item.description}</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {item.achievements?.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start">
                  <span className="text-cosmic-cyan mr-2 mt-1">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From classroom fundamentals to professional excellence - a journey of continuous learning and growth
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-cosmic-blue to-cosmic-cyan rounded-full" />
            Education
          </h3>
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} type="education" />
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-cosmic-blue to-cosmic-cyan rounded-full" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {professionalData.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} type="professional" />
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-cosmic-blue to-cosmic-cyan rounded-full" />
            Internships
          </h3>
          <div className="space-y-6">
            {internshipData.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} type="internship" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}