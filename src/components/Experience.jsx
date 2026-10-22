import React from 'react';
import { motion } from 'framer-motion';
import { 
    IoBriefcaseOutline, 
    IoSchoolOutline, 
    IoCalendarOutline, 
    IoLocationOutline,
    IoCheckmarkCircle
} from 'react-icons/io5';

const experienceData = [
    {
        role: "AI Developer Intern",
        company: "Let’s Code AI LLC, USA",
        location: "Remote",
        period: "2024",
        status: "Completed",
        description: "Trained, evaluated, and fine-tuned machine learning and deep learning models on diverse real-world datasets. Handled end-to-end data preprocessing pipelines, hyperparameter optimization, and statistical model evaluation.",
        skills: ["Deep Learning", "Model Fine-Tuning", "Data Preprocessing", "Performance Metrics"]
    },
    {
        role: "Python Intern",
        company: "Revertech IT Solutions",
        location: "Kerala, India",
        period: "May 2023",
        status: "Completed",
        description: "Completed intensive practical internship focused on core Python programming, data structure manipulation, algorithm design, and structured problem-solving.",
        skills: ["Python", "Data Structures", "Algorithmic Analysis", "Problem Solving"]
    }
];

const educationData = [
    {
        degree: "Data Science & AI Program",
        institution: "Luminar Technolab, Kochi",
        location: "Kochi, Kerala",
        period: "2025 – Present",
        status: "Active Cohort",
        details: "Specialized post-graduate training encompassing deep learning architectures, Large Language Models (LLMs), RAG pipelines, NLP, and production model serving.",
        badge: "Post-Graduate Specialization"
    },
    {
        degree: "B.Tech in AI & Data Science",
        institution: "Vimal Jyothi Engineering College",
        location: "Kannur, Kerala",
        period: "2021 – 2025",
        status: "Graduated",
        details: "Four-year specialized engineering curriculum covering machine learning mathematics, computer vision, data structures, statistics, and artificial intelligence fundamentals.",
        badge: "Score: 70%"
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "Chembilode Higher Secondary School",
        location: "Kannur, Kerala",
        period: "2019 – 2021",
        status: "Completed",
        details: "Comprehensive science and mathematics education foundation with emphasis on analytical problem solving.",
        badge: "Score: 90%"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-container relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Milestones
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    Experience & Education.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    A chronicle of rigorous academic foundations and hands-on professional contributions in modern AI.
                </p>
            </div>

            {/* Two-Column Progression Timeline */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
                
                {/* Column 1: Industry Experience */}
                <div>
                    <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/[0.08]">
                        <div className="w-8 h-8 rounded-xl bg-apple-blue/10 border border-apple-blue/20 flex items-center justify-center text-apple-blueLight">
                            <IoBriefcaseOutline className="text-lg" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                            Industry Experience
                        </h3>
                    </div>

                    <div className="space-y-6 relative border-l border-white/[0.08] ml-4 pl-6">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                                className="relative group"
                            >
                                {/* Glowing Timeline Node */}
                                <span className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-apple-blue border-2 border-black ring-4 ring-apple-blue/20 group-hover:scale-125 transition-transform" />

                                <div className="apple-card p-6 hover:border-white/[0.2] transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono text-apple-blueLight flex items-center gap-1.5">
                                            <IoCalendarOutline /> {exp.period}
                                        </span>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-apple-gray border border-white/[0.06]">
                                            {exp.status}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-bold text-white tracking-tight mb-0.5">
                                        {exp.role}
                                    </h4>
                                    <div className="text-sm font-medium text-apple-gray mb-3 flex items-center gap-2">
                                        <span>{exp.company}</span>
                                        <span>•</span>
                                        <span className="text-xs text-apple-grayMuted">{exp.location}</span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-apple-gray leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-apple-grayLight">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Column 2: Academic Credentials */}
                <div>
                    <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/[0.08]">
                        <div className="w-8 h-8 rounded-xl bg-apple-purple/10 border border-apple-purple/20 flex items-center justify-center text-apple-purple">
                            <IoSchoolOutline className="text-lg" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                            Education & Cohorts
                        </h3>
                    </div>

                    <div className="space-y-6 relative border-l border-white/[0.08] ml-4 pl-6">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                                className="relative group"
                            >
                                {/* Glowing Timeline Node */}
                                <span className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-apple-purple border-2 border-black ring-4 ring-apple-purple/20 group-hover:scale-125 transition-transform" />

                                <div className="apple-card p-6 hover:border-white/[0.2] transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono text-apple-purple flex items-center gap-1.5">
                                            <IoCalendarOutline /> {edu.period}
                                        </span>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-apple-purple/10 text-apple-purple border border-apple-purple/20 font-medium">
                                            {edu.badge}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-bold text-white tracking-tight mb-0.5">
                                        {edu.degree}
                                    </h4>
                                    <div className="text-sm font-medium text-apple-gray mb-3 flex items-center gap-2">
                                        <span>{edu.institution}</span>
                                        <span>•</span>
                                        <span className="text-xs text-apple-grayMuted">{edu.location}</span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-apple-gray leading-relaxed">
                                        {edu.details}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
