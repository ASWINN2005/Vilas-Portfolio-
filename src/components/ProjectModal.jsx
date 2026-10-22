import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoCloseOutline, 
    IoLogoGithub, 
    IoOpenOutline, 
    IoHardwareChipOutline, 
    IoSpeedometerOutline,
    IoCheckmarkCircleOutline 
} from 'react-icons/io5';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {/* Fixed full-screen overlay */}
            <div className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto py-6 px-4 sm:px-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/75 backdrop-blur-2xl"
                />

                {/* Card Container — sits inside scrollable overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-2xl bg-[#161617] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
                >
                    {/* Header */}
                    <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between bg-[#1c1c1e]/60">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-apple-blue/10 text-apple-blueLight border border-apple-blue/20">
                                {project.category || "AI Project"}
                            </span>
                            <span className="text-xs text-apple-gray font-mono">
                                • {project.year}
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-apple-gray hover:text-white transition-colors cursor-pointer"
                        >
                            <IoCloseOutline className="text-lg" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-apple-gray text-base leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Architecture / Highlights Bento Box */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <div className="flex items-center gap-2 text-xs font-medium text-apple-blueLight mb-1.5">
                                    <IoHardwareChipOutline className="text-base" /> System Architecture
                                </div>
                                <p className="text-xs text-[#a1a1a6] leading-relaxed">
                                    {project.architecture || "Engineered with modular data pipelines, preprocessing, model inference, and interactive front-end."}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <div className="flex items-center gap-2 text-xs font-medium text-apple-purple mb-1.5">
                                    <IoSpeedometerOutline className="text-base" /> Key Performance
                                </div>
                                <p className="text-xs text-[#a1a1a6] leading-relaxed">
                                    {project.metrics || "Optimized for high accuracy, minimal latency, and accessible end-user interaction."}
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div>
                            <h3 className="text-xs font-semibold text-apple-gray uppercase tracking-wider mb-2.5">
                                Technology Stack & Frameworks
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs font-medium text-[#f5f5f7]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                {project.link && project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-btn-primary text-xs !py-2.5 !px-4 sm:!px-5 flex-1 sm:flex-initial"
                                    >
                                        <IoOpenOutline className="text-base" /> Launch Application
                                    </a>
                                )}
                                {project.github && project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-btn-secondary text-xs !py-2.5 !px-4 sm:!px-5 flex-1 sm:flex-initial"
                                    >
                                        <IoLogoGithub className="text-base" /> View Code
                                    </a>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="apple-btn-ghost text-xs ml-auto"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
