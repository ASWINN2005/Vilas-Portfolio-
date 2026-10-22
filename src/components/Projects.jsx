import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoLogoGithub, 
    IoOpenOutline, 
    IoHardwareChipOutline, 
    IoChevronForward,
    IoSparklesOutline,
    IoEyeOutline,
    IoAnalyticsOutline,
    IoDocumentTextOutline
} from 'react-icons/io5';
import ProjectModal from './ProjectModal';

const projectsData = [
    {
        id: "onemed-ai",
        title: "OnemedAI — Medical Report Analysis",
        year: "2025",
        category: "GenAI & NLP",
        tagline: "Clinical Document Intelligence via RAG",
        description: "AI system leveraging Hugging Face Transformers and RAG pipelines to analyze, summarize, and extract structured diagnostic insights from complex medical documents.",
        architecture: "Document Parser → Vector Embeddings → Chunk Retrieval → Transformer LLM Generation → Structured JSON output.",
        metrics: "High factual accuracy with grounded clinical citations; sub-second report synthesis.",
        tech: ["Hugging Face", "RAG Pipelines", "Transformers", "NLP", "Python"],
        link: "#",
        github: "https://github.com/VILAS07"
    },
    {
        id: "sign-language",
        title: "Sign Language Recognition System",
        year: "2023",
        category: "Computer Vision",
        tagline: "Real-time Gesture Recognition & Voice Synthesis",
        description: "Applied deep learning (CNNs) and computer vision to recognize dynamic hand sign language gestures in real time with high accuracy, paired with voice audio synthesis for accessibility.",
        architecture: "Webcam Stream → MediaPipe Hand Landmark Extraction → CNN Classifier → Speech Audio Engine.",
        metrics: "60 FPS real-time classification with >95% gesture validation precision.",
        tech: ["CNN", "Computer Vision", "MediaPipe", "OpenCV", "Python"],
        link: "#",
        github: "https://github.com/VILAS07"
    },
    {
        id: "lead-rank",
        title: "LeadRank — Smart Lead Scoring System",
        year: "2023",
        category: "Data Analytics",
        tagline: "Predictive Conversion Prioritization Engine",
        description: "Built a data-driven scoring model to analyze lead attributes (email domains, job titles, firmographics) and generate automated prioritization rankings for high-velocity marketing pipelines.",
        architecture: "Data Ingestion → Feature Engineering → Logistic/RandomForest Model → Streamlit Executive Dashboard.",
        metrics: "Accelerated sales lead qualification by over 35% with automated tier scoring.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Feature Engineering"],
        link: "#",
        github: "https://github.com/VILAS07"
    },
    {
        id: "ai-assistant-visually-impaired",
        title: "AI Assistant for Visually Impaired",
        year: "2023",
        category: "Computer Vision",
        tagline: "Contextual Scene Analysis & Spoken Guidance",
        description: "Designed an accessibility-first assistant combining YOLOv8 object detection with NLP to generate contextual audio descriptions of surrounding environments.",
        architecture: "Camera Capture → YOLOv8 Object Detection → Spatial Proximity Estimator → Audio Synthesis Pipeline.",
        metrics: "Ultra-low latency detection with immediate spatial speech feedback.",
        tech: ["YOLOv8", "NLP", "Speech Synthesis", "OpenCV", "Python"],
        link: "#",
        github: "https://github.com/VILAS07"
    },
    {
        id: "expense-tracker",
        title: "Expense Tracker Web Application",
        year: "2024",
        category: "Data Analytics",
        tagline: "Personal Finance Telemetry & Analysis",
        description: "Python-based expense analytics application deployed live on Streamlit Cloud to record, categorize, and visually breakdown personal cashflows and financial health metrics.",
        architecture: "Interactive Streamlit App → SQLite / Pandas Engine → Plotly Interactive Charts → Streamlit Cloud.",
        metrics: "100% cloud availability with instant data reactivity and export options.",
        tech: ["Python", "Streamlit", "Plotly", "Pandas", "Analytics"],
        link: "https://expense-tracker-935.streamlit.app/",
        github: "https://github.com/VILAS07/Expense-Tracker"
    }
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [inspectedProject, setInspectedProject] = useState(null);

    const categories = ['All', 'GenAI & NLP', 'Computer Vision', 'Data Analytics'];

    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="section-container relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Portfolio
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    Engineered for impact.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    A curated selection of machine learning architectures, real-time computer vision systems, and deployed data products.
                </p>

                {/* Category Filter Pills — Apple-style floating segment pill */}
                <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-apple-pill mt-8 max-w-full overflow-x-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                                selectedCategory === cat
                                    ? 'text-black'
                                    : 'text-apple-gray hover:text-white'
                            }`}
                        >
                            {selectedCategory === cat && (
                                <motion.span
                                    layoutId="project-category-pill"
                                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5">
                                <span>{cat}</span>
                                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                                    selectedCategory === cat ? 'bg-black/10 text-black' : 'bg-white/[0.08] text-apple-gray'
                                }`}>
                                    {cat === 'All' 
                                        ? projectsData.length 
                                        : projectsData.filter(p => p.category === cat).length}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid — fluid layout spring re-ordering */}
            <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 12 }}
                            transition={{
                                layout: { type: 'spring', stiffness: 320, damping: 30 },
                                opacity: { duration: 0.25 },
                                scale: { duration: 0.25 },
                                y: { duration: 0.25 }
                            }}
                            className="apple-card p-6 sm:p-7 flex flex-col justify-between group hover:border-white/[0.22] relative overflow-hidden"
                        >
                            {/* Card Top Metadata */}
                            <div>
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-apple-blue/10 text-apple-blueLight border border-apple-blue/20">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-mono text-apple-gray">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-apple-blueLight transition-colors mb-2">
                                    {project.title}
                                </h3>

                                <div className="text-xs font-medium text-apple-grayLight mb-3">
                                    {project.tagline}
                                </div>

                                <p className="text-apple-gray text-xs sm:text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Card Bottom: Tech Pills & Actions */}
                            <div>
                                <div className="flex flex-wrap gap-1.5 pb-5 mb-5 border-b border-white/[0.06]">
                                    {project.tech.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-apple-gray"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => setInspectedProject(project)}
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-apple-blueLight transition-colors cursor-pointer"
                                    >
                                        <span>Inspect System</span>
                                        <IoChevronForward className="text-xs group-hover:translate-x-0.5 transition-transform" />
                                    </button>

                                    <div className="flex items-center gap-2">
                                        {project.github && project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.12] flex items-center justify-center text-apple-gray hover:text-white transition-colors cursor-pointer"
                                                title="View GitHub Repository"
                                            >
                                                <IoLogoGithub className="text-base" />
                                            </a>
                                        )}
                                        {project.link && project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-apple-blue/20 hover:bg-apple-blue flex items-center justify-center text-apple-blueLight hover:text-white transition-all cursor-pointer"
                                                title="Launch Live Application"
                                            >
                                                <IoOpenOutline className="text-base" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Inspect Modal */}
            <ProjectModal
                project={inspectedProject}
                isOpen={!!inspectedProject}
                onClose={() => setInspectedProject(null)}
            />
        </section>
    );
};

export default Projects;
