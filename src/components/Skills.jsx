import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoHardwareChipOutline, 
    IoEyeOutline, 
    IoServerOutline, 
    IoPieChartOutline, 
    IoTerminalOutline, 
    IoCodeSlashOutline,
    IoCheckmarkOutline,
    IoSparklesOutline
} from 'react-icons/io5';

const skillsData = [
    {
        id: "ml",
        index: "01",
        category: "Machine Learning & AI",
        icon: <IoHardwareChipOutline className="text-apple-blueLight" />,
        highlight: "Core Specialization",
        description: "Designing, training, and optimizing supervised & unsupervised models, neural architectures, and RAG pipelines.",
        items: [
            { name: "PyTorch", core: true },
            { name: "TensorFlow", core: true },
            { name: "Scikit-Learn", core: true },
            { name: "LLMs & RAG", core: true },
            { name: "Hugging Face", core: true },
            { name: "Keras", core: false },
            { name: "NLP", core: true }
        ]
    },
    {
        id: "cv",
        index: "02",
        category: "Computer Vision",
        icon: <IoEyeOutline className="text-apple-purple" />,
        highlight: "Edge & Real-Time",
        description: "Object detection, gesture classification, spatial tracking, and video stream inference.",
        items: [
            { name: "YOLOv8", core: true },
            { name: "OpenCV", core: true },
            { name: "MediaPipe", core: true },
            { name: "CNNs", core: true },
            { name: "Gesture Recognition", core: false },
            { name: "Real-time Video", core: false }
        ]
    },
    {
        id: "programming",
        index: "03",
        category: "Programming & Data Analysis",
        icon: <IoCodeSlashOutline className="text-apple-green" />,
        highlight: "Algorithmic Foundation",
        description: "Vectorized data processing, exploratory analysis, statistical testing, and database architecture.",
        items: [
            { name: "Python", core: true },
            { name: "SQL", core: true },
            { name: "Pandas", core: true },
            { name: "NumPy", core: true },
            { name: "Jupyter", core: false },
            { name: "R", core: false }
        ]
    },
    {
        id: "backend",
        index: "04",
        category: "Web & Model Serving",
        icon: <IoServerOutline className="text-amber-400" />,
        highlight: "Production Ready",
        description: "Deploying machine learning models as interactive dashboards and microservice REST APIs.",
        items: [
            { name: "Streamlit", core: true },
            { name: "FastAPI", core: true },
            { name: "Django", core: false },
            { name: "REST APIs", core: true },
            { name: "Microservices", core: false }
        ]
    },
    {
        id: "visualization",
        index: "05",
        category: "Data Visualization & BI",
        icon: <IoPieChartOutline className="text-rose-400" />,
        highlight: "Insight Delivery",
        description: "Transforming complex model outputs and multi-dimensional datasets into intuitive executive visual stories.",
        items: [
            { name: "Tableau", core: true },
            { name: "Plotly", core: true },
            { name: "Seaborn", core: true },
            { name: "Matplotlib", core: true },
            { name: "Dashboard Design", core: false }
        ]
    },
    {
        id: "devops",
        index: "06",
        category: "DevOps & Engineering Tools",
        icon: <IoTerminalOutline className="text-sky-400" />,
        highlight: "Reproducible Workflows",
        description: "Containerization, environment configuration, version control, and cloud training environments.",
        items: [
            { name: "Docker", core: true },
            { name: "Git & GitHub", core: true },
            { name: "Linux CLI", core: true },
            { name: "MySQL", core: true },
            { name: "Google Colab", core: false }
        ]
    }
];

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filterButtons = [
        { id: 'all', label: 'All Capabilities', icon: <IoSparklesOutline /> },
        { id: 'ml', label: 'Machine Learning', icon: <IoHardwareChipOutline /> },
        { id: 'cv', label: 'Computer Vision', icon: <IoEyeOutline /> },
        { id: 'programming', label: 'Programming', icon: <IoCodeSlashOutline /> },
        { id: 'backend', label: 'Web', icon: <IoServerOutline /> },
        { id: 'visualization', label: 'Data Visualization', icon: <IoPieChartOutline /> },
        { id: 'devops', label: 'DevOps', icon: <IoTerminalOutline /> },
    ];

    const filteredSkills = selectedCategory === 'all' 
        ? skillsData 
        : skillsData.filter(s => s.id === selectedCategory);

    return (
        <section id="skills" className="section-container relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Capabilities
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    The Intelligence Stack.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    A multi-layered ecosystem of modern AI frameworks, edge vision toolkits, and scalable backend infrastructure.
                </p>

                {/* Filter Buttons Cluster — No slider, individual responsive tactile buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 max-w-4xl mx-auto">
                    {filterButtons.map((btn) => {
                        const isActive = selectedCategory === btn.id;
                        return (
                            <motion.button
                                key={btn.id}
                                onClick={() => setSelectedCategory(btn.id)}
                                whileHover={{ scale: 1.04, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] font-semibold border border-white'
                                        : 'bg-white/[0.05] hover:bg-white/[0.1] text-apple-gray hover:text-white border border-white/[0.08] hover:border-white/[0.2]'
                                }`}
                            >
                                <span className={`text-sm ${isActive ? 'text-black' : 'text-apple-blueLight'}`}>
                                    {btn.icon}
                                </span>
                                <span>{btn.label}</span>
                                {btn.id === 'all' && (
                                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                                        isActive ? 'bg-black/10 text-black' : 'bg-white/[0.08] text-apple-gray'
                                    }`}>
                                        {skillsData.length}
                                    </span>
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Skills Grid — fluid layout spring re-ordering */}
            <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.map((group) => (
                        <motion.div
                            layout
                            key={group.id}
                            initial={{ opacity: 0, scale: 0.88, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.88, y: -10 }}
                            transition={{
                                layout: { type: 'spring', stiffness: 350, damping: 30 },
                                opacity: { duration: 0.22 },
                                scale: { duration: 0.22 },
                                y: { duration: 0.22 }
                            }}
                            className="apple-card p-6 sm:p-7 flex flex-col justify-between group hover:border-white/[0.22] transition-colors relative overflow-hidden"
                        >
                        <div>
                            {/* Card Top Metadata */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-lg">
                                        {group.icon}
                                    </div>
                                    <span className="text-[10px] font-mono text-apple-gray uppercase tracking-widest">
                                        SYS {group.index}
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-apple-grayLight border border-white/[0.06]">
                                    {group.highlight}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                {group.category}
                            </h3>
                            <p className="text-xs text-apple-gray leading-relaxed mb-6">
                                {group.description}
                            </p>
                        </div>

                        {/* Technology Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                            {group.items.map((item, i) => (
                                <span
                                    key={i}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                                        item.core
                                            ? 'bg-white/[0.08] text-white border border-white/[0.12] font-medium'
                                            : 'bg-white/[0.03] text-apple-gray border border-white/[0.04]'
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>

            {/* Performance Infrastructure Footnote */}
            <div className="mt-12 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-gray">
                <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-apple-green animate-pulse" />
                    <span>Trained and evaluated on heterogeneous high-performance compute clusters & local accelerated GPU/MPS pipelines.</span>
                </div>
                <div className="font-mono text-apple-grayLight">
                    Status: Production Capable
                </div>
            </div>
        </section>
    );
};

export default Skills;
