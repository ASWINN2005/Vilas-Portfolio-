import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoLogoGithub, 
    IoLogoLinkedin, 
    IoMailOutline, 
    IoCallOutline, 
    IoChevronForward, 
    IoSparkles, 
    IoHardwareChipOutline,
    IoEyeOutline,
    IoChatbubbleEllipsesOutline,
    IoAnalyticsOutline,
    IoDocumentTextOutline
} from 'react-icons/io5';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ onOpenResume }) => {
    const [activeEngineMode, setActiveEngineMode] = useState('neural');

    const engineModes = {
        neural: {
            title: "Neural Core",
            metric: "99.2%",
            label: "Model Accuracy",
            subtext: "PyTorch & TensorFlow custom neural architectures",
            latency: "32ms Inference",
            status: "Online • Evaluated",
            frameworks: "PyTorch • TensorFlow • CUDA",
            badgeColor: "text-apple-blueLight bg-apple-blue/10 border-apple-blue/20"
        },
        vision: {
            title: "Vision Pipeline",
            metric: "60 FPS",
            label: "Real-time Tracking",
            subtext: "YOLOv8, MediaPipe 3D Hand Landmarks & OpenCV",
            latency: "16ms Frame Latency",
            status: "Low-latency Stream",
            frameworks: "YOLOv8 • MediaPipe • OpenCV",
            badgeColor: "text-apple-purple bg-apple-purple/10 border-apple-purple/20"
        },
        rag: {
            title: "GenAI & RAG",
            metric: "100%",
            label: "Source Grounding",
            subtext: "Hugging Face Transformers, ChromaDB & Vector Search",
            latency: "Sub-second Synthesis",
            status: "Vector Embeddings Active",
            frameworks: "Transformers • ChromaDB • LangChain",
            badgeColor: "text-apple-green bg-apple-green/10 border-apple-green/20"
        },
        analytics: {
            title: "Data Engine",
            metric: "100k+",
            label: "Records Processed",
            subtext: "Python, SQL, Feature Pipelines & Statistical Modeling",
            latency: "Optimized Vectorized Ops",
            status: "Pipelines Deployed",
            frameworks: "Pandas • NumPy • Scikit-Learn • SQL",
            badgeColor: "text-apple-teal bg-apple-teal/10 border-apple-teal/20"
        }
    };

    const currentMode = engineModes[activeEngineMode];

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left Column: Keynote Typography */}
                <div className="lg:col-span-7 text-left space-y-6">
                    {/* Status Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl shadow-apple-pill"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-medium tracking-tight text-[#d2d2d7]">
                            Available for AI & Data Science Roles • 2025
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-apple-headline leading-[1.05] text-white">
                            Vilas PK.
                        </h1>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-apple-headline leading-[1.1] mt-2 apple-text-headline">
                            Intelligence. Engineered.
                        </h2>
                    </motion.div>

                    {/* Rotating Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-lg sm:text-2xl text-apple-gray font-normal flex items-center gap-2 min-h-[36px]"
                    >
                        <span>Architecting</span>
                        <span className="text-white font-medium underline decoration-apple-blue underline-offset-4">
                            <Typewriter
                                words={[
                                    'Predictive AI Models',
                                    'Computer Vision Pipelines',
                                    'LLM & RAG Systems',
                                    'Data Science Solutions'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={65}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>

                    {/* Mission Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-[#a1a1a6] text-base sm:text-lg max-w-xl leading-relaxed"
                    >
                        Based in Kannur, Kerala. B.Tech graduate in AI & Data Science. Dedicated to bridging cutting-edge algorithmic research with scalable, practical production software.
                    </motion.p>

                    {/* Action CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3 pt-2"
                    >
                        <a
                            href="#projects"
                            className="apple-btn-primary"
                        >
                            <span>Explore Projects</span>
                            <IoChevronForward className="text-sm" />
                        </a>

                        <button
                            onClick={onOpenResume}
                            className="apple-btn-secondary"
                        >
                            <IoDocumentTextOutline className="text-base text-apple-blueLight" />
                            <span>Digital Resume</span>
                        </button>

                        <a
                            href="#contact"
                            className="apple-btn-ghost"
                        >
                            <span>Contact</span>
                        </a>
                    </motion.div>

                    {/* Social Links Pill Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-white/[0.06]"
                    >
                        <SocialPill href="https://github.com/VILAS07" icon={<IoLogoGithub />} label="GitHub" />
                        <SocialPill href="https://www.linkedin.com/in/vilas-pk" icon={<IoLogoLinkedin />} label="LinkedIn" />
                        <SocialPill 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com" 
                            icon={<IoMailOutline />} 
                            label="Email" 
                            onClick={() => {
                                try {
                                    navigator.clipboard.writeText("vilaspk935@gmail.com");
                                } catch (e) {}
                            }}
                        />
                        <SocialPill href="tel:+919746906494" icon={<IoCallOutline />} label="+91 9746906494" />
                    </motion.div>
                </div>

                {/* Right Column: Neural Core Interactive Spec Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="lg:col-span-5 flex justify-center w-full"
                >
                    <div className="w-full max-w-md bg-[#161617] border border-white/[0.1] rounded-3xl p-5 sm:p-7 shadow-apple-card relative overflow-hidden group">
                        {/* Subtle Corner Specular Sheen */}
                        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-apple-blue/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

                        {/* Top Chip Branding */}
                        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-apple-blueLight shadow-inner">
                                    <IoHardwareChipOutline className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
                                        Vilas AI Engine
                                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-apple-blue/20 text-apple-blueLight">
                                            v2.5
                                        </span>
                                    </h3>
                                    <p className="text-[11px] text-apple-gray">Multi-modal Intelligence Core</p>
                                </div>
                            </div>
                            <span className="w-2.5 h-2.5 rounded-full bg-apple-green" />
                        </div>

                        {/* Interactive Mode Tabs */}
                        <div className="grid grid-cols-4 gap-1.5 my-5 p-1 rounded-2xl bg-black/50 border border-white/[0.06]">
                            <ModeButton
                                active={activeEngineMode === 'neural'}
                                onClick={() => setActiveEngineMode('neural')}
                                icon={<IoSparkles />}
                                title="Neural"
                            />
                            <ModeButton
                                active={activeEngineMode === 'vision'}
                                onClick={() => setActiveEngineMode('vision')}
                                icon={<IoEyeOutline />}
                                title="Vision"
                            />
                            <ModeButton
                                active={activeEngineMode === 'rag'}
                                onClick={() => setActiveEngineMode('rag')}
                                icon={<IoChatbubbleEllipsesOutline />}
                                title="RAG"
                            />
                            <ModeButton
                                active={activeEngineMode === 'analytics'}
                                onClick={() => setActiveEngineMode('analytics')}
                                icon={<IoAnalyticsOutline />}
                                title="Data"
                            />
                        </div>

                        {/* Dynamic Live Spec Display */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEngineMode}
                                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-4"
                            >
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] relative overflow-hidden">
                                    <div className="flex items-baseline justify-between mb-1.5">
                                        <span className="text-xs text-apple-gray uppercase font-mono tracking-wider">
                                            {currentMode.title}
                                        </span>
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${currentMode.badgeColor}`}>
                                            {currentMode.status}
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <motion.span 
                                            key={currentMode.metric}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                            className="text-4xl font-bold tracking-tight text-white font-mono"
                                        >
                                            {currentMode.metric}
                                        </motion.span>
                                        <span className="text-xs text-apple-gray font-medium">
                                            {currentMode.label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#a1a1a6] mt-2 leading-relaxed">
                                        {currentMode.subtext}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                        <div className="text-apple-gray mb-1 text-[11px]">Compute Latency</div>
                                        <div className="font-mono font-medium text-[#f5f5f7]">
                                            {currentMode.latency}
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                        <div className="text-apple-gray mb-1 text-[11px]">Frameworks</div>
                                        <div className="font-medium text-apple-blueLight truncate text-[11px] font-mono">
                                            {currentMode.frameworks}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Interactive Footnote */}
                        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-apple-gray">
                            <span>Interactive Telemetry</span>
                            <span className="text-apple-blueLight flex items-center gap-1 font-medium">
                                Hardware Accelerated Engine
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const ModeButton = ({ active, onClick, icon, title }) => (
    <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.94 }}
        className={`relative flex flex-col items-center justify-center py-2.5 px-1 rounded-xl text-xs transition-colors duration-200 cursor-pointer ${
            active
                ? 'text-white font-medium'
                : 'text-apple-gray hover:text-white'
        }`}
    >
        {active && (
            <motion.span
                layoutId="hero-engine-mode-pill"
                className="absolute inset-0 bg-white/[0.12] border border-white/[0.14] rounded-xl shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
        )}
        <span className="relative z-10 text-base mb-1">{icon}</span>
        <span className="relative z-10 text-[10px] tracking-tight">{title}</span>
    </motion.button>
);

const SocialPill = ({ href, icon, label, onClick }) => {
    const isExternal = href.startsWith('http');
    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            onClick={onClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-xs text-apple-gray hover:text-white transition-all duration-200 cursor-pointer"
            aria-label={label}
        >
            <span className="text-sm">{icon}</span>
            <span className="font-medium">{label}</span>
        </a>
    );
};

export default Hero;
