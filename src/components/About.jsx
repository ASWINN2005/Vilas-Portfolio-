import React from 'react';
import { motion } from 'framer-motion';
import { 
    IoSchoolOutline, 
    IoSparklesOutline, 
    IoLayersOutline, 
    IoLocationOutline,
    IoCheckmarkCircleOutline
} from 'react-icons/io5';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const About = () => {
    return (
        <section id="about" className="section-container relative z-10">
            {/* Eyebrow & Title */}
            <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Overview
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    Engineered for precision.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    A rigorous academic foundation in Artificial Intelligence paired with practical engineering experience in modern machine learning systems.
                </p>
            </motion.div>

            {/* Modular Bento Grid - Orchestrated smooth entrance */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid md:grid-cols-12 gap-5 sm:gap-6"
            >
                
                {/* Bento Card 1: Core Profile Statement (Span 7) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-7 apple-card p-7 sm:p-9 flex flex-col justify-between transform-gpu"
                >
                    <div>
                        <div className="w-10 h-10 rounded-2xl bg-apple-blue/10 border border-apple-blue/20 flex items-center justify-center text-apple-blueLight mb-6">
                            <IoSparklesOutline className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                            Bridging mathematical theory and production intelligence.
                        </h3>
                        <p className="text-apple-gray text-sm sm:text-base leading-relaxed mb-4">
                            As a Data Science graduate with a <span className="text-white font-medium">B.Tech in Artificial Intelligence & Data Science</span>, I specialize in building data pipelines, training deep learning architectures, and deploying reliable AI workflows.
                        </p>
                        <p className="text-apple-gray text-sm sm:text-base leading-relaxed">
                            My workflow integrates structured and unstructured data analysis with <span className="text-white font-medium">TensorFlow, PyTorch, and Scikit-learn</span>. Whether developing real-time computer vision models or architecting Retrieval-Augmented Generation (RAG) pipelines, my focus is delivering measurable value.
                        </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-xs">
                        {["Machine Learning", "Deep Learning", "NLP & RAG", "Computer Vision", "FastAPI Serving"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#d2d2d7]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Bento Card 2: Key Metrics Column (Span 5) */}
                <div className="md:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
                    <StatCard 
                        metric="2025" 
                        label="Graduation Year" 
                        caption="B.Tech in AI & Data Science" 
                        accent="text-apple-blueLight"
                    />
                    <StatCard 
                        metric="70%" 
                        label="B.Tech Score" 
                        caption="Vimal Jyothi Eng. College" 
                        accent="text-apple-purple"
                    />
                    <StatCard 
                        metric="90%" 
                        label="Higher Secondary" 
                        caption="Chembilode HSS" 
                        accent="text-apple-green"
                    />
                    <StatCard 
                        metric="5+" 
                        label="Deployed Systems" 
                        caption="Real-world ML & Vision" 
                        accent="text-amber-400"
                    />
                </div>

                {/* Bento Card 3: Academic Excellence & Specialized Training (Span 6) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-6 apple-card p-7 transform-gpu"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-apple-purple">
                            <IoSchoolOutline className="text-lg" />
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white tracking-tight">Continuous Specialization</h4>
                            <p className="text-xs text-apple-gray">Advanced post-graduate program</p>
                        </div>
                    </div>
                    <p className="text-apple-gray text-sm leading-relaxed mb-4">
                        Currently enrolled in the advanced <span className="text-white font-medium">Data Science & AI Program at Luminar Technolab, Kochi</span> (2025 – Present), mastering real-world deep learning, transformers, and model serving.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-apple-green font-medium">
                        <IoCheckmarkCircleOutline className="text-base" /> Active Professional Cohort
                    </div>
                </motion.div>

                {/* Bento Card 4: Origin & Work Philosophy (Span 6) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-6 apple-card p-7 transform-gpu"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-apple-blueLight">
                            <IoLocationOutline className="text-lg" />
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white tracking-tight">Origin & Availability</h4>
                            <p className="text-xs text-apple-gray">Kannur, Kerala, India • 11.87° N, 75.37° E</p>
                        </div>
                    </div>
                    <p className="text-apple-gray text-sm leading-relaxed mb-4">
                        Available for on-site, hybrid, and remote opportunities across India and globally. Ready to contribute to high-performance AI, analytics, and software engineering teams.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-apple-blueLight font-medium">
                        <span className="w-2 h-2 rounded-full bg-apple-blue" />
                        Immediate Availability for Hiring
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

const StatCard = ({ metric, label, caption, accent }) => (
    <motion.div
        variants={itemVariants}
        className="apple-card p-5 flex flex-col justify-between transform-gpu"
    >
        <span className={`text-3xl sm:text-4xl font-bold tracking-tight mb-2 ${accent}`}>
            {metric}
        </span>
        <div>
            <h4 className="text-sm font-semibold text-white tracking-tight">{label}</h4>
            <p className="text-[11px] text-apple-gray mt-0.5">{caption}</p>
        </div>
    </motion.div>
);

export default About;
