import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoCloseOutline, 
    IoPrintOutline, 
    IoCopyOutline, 
    IoCheckmarkOutline, 
    IoMailOutline,
    IoCallOutline,
    IoLocationOutline,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5';
import confetti from 'canvas-confetti';

const ResumeModal = ({ isOpen, onClose, onNotify }) => {
    const [copied, setCopied] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCopyText = () => {
        const resumeText = `
VILAS PK
Data Scientist & AI Engineer
Email: vilaspk935@gmail.com | Phone: +91 9746906494
Location: Eachur, Kannur, Kerala
GitHub: https://github.com/VILAS07 | LinkedIn: https://www.linkedin.com/in/vilas-pk

PROFILE
Data Science graduate (B.Tech in Artificial Intelligence & Data Science, 2025) with a strong foundation in machine learning, statistical modeling, computer vision, and real-world AI applications. Experienced in developing predictive models, processing structured/unstructured datasets, and deploying machine learning pipelines with Streamlit & FastAPI.

EDUCATION
• B.Tech in Artificial Intelligence & Data Science (2021 – 2025)
  Vimal Jyothi Engineering College, Kannur | Score: 70%
• Data Science & AI Program (2025 – Present)
  Luminar Technolab, Kochi | Hands-on ML, DL, NLP, and Deployment
• Higher Secondary Education (12th) (2019 – 2021)
  Chembilode Higher Secondary School | Score: 90%

EXPERIENCE
• AI Developer Intern — Let's Code AI LLC, USA (2024)
  Trained and fine-tuned machine learning and deep learning models on real-world datasets with preprocessing, hyperparameter optimization, and evaluation.
• Python Intern — Revertech IT Solutions (May 2023)
  Completed intensive 10-day internship in Python programming, algorithm analysis, and practical data manipulation.

TECHNICAL SKILLS
• Programming & Data: Python, SQL, R, Pandas, NumPy, Jupyter
• Machine Learning & AI: Scikit-learn, TensorFlow, Keras, PyTorch, NLP, LLMs (RAG), Hugging Face
• Computer Vision: YOLOv8, OpenCV, MediaPipe
• Web & Serving: Streamlit, FastAPI, Django
• Visualization: Matplotlib, Seaborn, Plotly, Tableau
• Tools: Git, GitHub, Docker, Linux CLI, MySQL, Google Colab

KEY PROJECTS
• LeadRank: Smart Lead Scoring System (Python, Streamlit, Predictive Analytics)
• OnemedAI: Medical Report Analysis with Transformers & RAG pipelines
• Sign Language Recognition System: Real-time CNN + Computer Vision + Voice
• AI Assistant for Visually Impaired: YOLOv8 Scene Analysis + Audio Feedback
• Expense Tracker: Personal finance analytics web application
        `.trim();

        navigator.clipboard.writeText(resumeText);
        setCopied(true);
        try {
            confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 } });
        } catch (e) {}
        if (onNotify) {
            onNotify({
                title: "Resume Copied",
                badge: "Clipboard",
                message: "Full resume copied in structured plain text."
            });
        }
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
                />

                {/* Modal Document */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-3xl max-h-[92vh] bg-[#161617] border border-white/[0.14] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 m-2 sm:m-0"
                >
                    {/* Header Controls */}
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.08] bg-[#1c1c1e] flex items-center justify-between gap-2">
                        <div className="hidden xs:flex items-center gap-2 min-w-0">
                            <span className="text-xs font-medium text-apple-gray truncate">Vilas_PK_Resume.pdf</span>
                            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-apple-grayMuted border border-white/[0.08]">Preview</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                            <button
                                onClick={handleCopyText}
                                className="apple-pill hover:bg-white/[0.1] text-xs !py-1 !px-2.5 sm:!px-3.5 cursor-pointer"
                                title="Copy plain text"
                            >
                                {copied ? <IoCheckmarkOutline className="text-apple-green text-sm" /> : <IoCopyOutline className="text-sm" />}
                                <span className="text-[11px] sm:text-xs">{copied ? "Copied!" : "Copy"}</span>
                            </button>
                            <button
                                onClick={handlePrint}
                                className="apple-pill hover:bg-white/[0.1] text-xs !py-1 !px-2.5 sm:!px-3.5 cursor-pointer"
                                title="Print or Save as PDF"
                            >
                                <IoPrintOutline className="text-sm" />
                                <span className="text-[11px] sm:text-xs">PDF</span>
                            </button>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-apple-gray hover:text-white transition-colors cursor-pointer"
                            >
                                <IoCloseOutline className="text-lg" />
                            </button>
                        </div>
                    </div>

                    {/* Resume Body */}
                    <div className="p-5 sm:p-10 overflow-y-auto space-y-8 text-[#f5f5f7] bg-[#121214]">
                        {/* Title Header */}
                        <div className="border-b border-white/[0.08] pb-6">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">VILAS PK</h1>
                            <p className="text-apple-blueLight font-medium text-lg mb-4">
                                Data Scientist & AI Engineer
                            </p>
                            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-apple-gray">
                                <a 
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 hover:text-apple-blueLight transition-colors"
                                    title="Open Gmail Compose"
                                >
                                    <IoMailOutline className="text-apple-blue" /> vilaspk935@gmail.com
                                </a>
                                <a 
                                    href="tel:+919746906494"
                                    className="flex items-center gap-1.5 hover:text-apple-green transition-colors"
                                >
                                    <IoCallOutline className="text-apple-blue" /> +91 9746906494
                                </a>
                                <span className="flex items-center gap-1.5">
                                    <IoLocationOutline className="text-apple-blue" /> Kannur, Kerala
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <IoLogoGithub className="text-white" /> github.com/VILAS07
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <IoLogoLinkedin className="text-apple-blueLight" /> linkedin.com/in/vilas-pk
                                </span>
                            </div>
                        </div>

                        {/* Summary */}
                        <div>
                            <h2 className="text-xs font-semibold tracking-wider text-apple-gray uppercase mb-3">Executive Summary</h2>
                            <p className="text-sm text-[#d2d2d7] leading-relaxed">
                                AI and Data Science graduate (B.Tech in Artificial Intelligence & Data Science, Class of 2025) with proven competencies in building predictive models, computer vision systems, and modern Generative AI (LLMs & RAG pipelines). Committed to engineering robust, performant machine learning solutions deployed via modern microservices.
                            </p>
                        </div>

                        {/* Experience */}
                        <div>
                            <h2 className="text-xs font-semibold tracking-wider text-apple-gray uppercase mb-4">Professional Experience</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                                        <h3 className="text-sm font-semibold text-white">AI Developer Intern</h3>
                                        <span className="text-xs text-apple-blueLight font-mono">2024</span>
                                    </div>
                                    <div className="text-xs text-apple-gray mb-2">Let’s Code AI LLC, USA</div>
                                    <p className="text-xs text-[#a1a1a6] leading-relaxed">
                                        Trained, evaluated, and fine-tuned machine learning and deep learning models on real-world production datasets. Performed end-to-end data cleansing, feature engineering, and model validation.
                                    </p>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                                        <h3 className="text-sm font-semibold text-white">Python Intern</h3>
                                        <span className="text-xs text-apple-blueLight font-mono">May 2023</span>
                                    </div>
                                    <div className="text-xs text-apple-gray mb-2">Revertech IT Solutions</div>
                                    <p className="text-xs text-[#a1a1a6] leading-relaxed">
                                        Conducted intensive work on core Python architecture, algorithmic data structures, data manipulation libraries, and modular software design.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h2 className="text-xs font-semibold tracking-wider text-apple-gray uppercase mb-4">Education & Specialized Training</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-xs text-apple-blueLight font-mono mb-1">2021 – 2025</div>
                                    <h3 className="text-sm font-semibold text-white">B.Tech in AI & Data Science</h3>
                                    <div className="text-xs text-apple-gray mb-2">Vimal Jyothi Engineering College</div>
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-apple-blue/10 text-apple-blueLight text-[11px] font-medium border border-apple-blue/20">
                                        Score: 70%
                                    </span>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-xs text-apple-purple font-mono mb-1">2025 – Present</div>
                                    <h3 className="text-sm font-semibold text-white">Data Science & AI Program</h3>
                                    <div className="text-xs text-apple-gray mb-2">Luminar Technolab, Kochi</div>
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-apple-purple/10 text-apple-purple text-[11px] font-medium border border-apple-purple/20">
                                        Advanced ML, DL, NLP & Deployment
                                    </span>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] sm:col-span-2">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-apple-gray font-mono mb-1">2019 – 2021</div>
                                            <h3 className="text-sm font-semibold text-white">Higher Secondary (12th)</h3>
                                            <div className="text-xs text-apple-gray">Chembilode Higher Secondary School</div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                                            Score: 90%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <h2 className="text-xs font-semibold tracking-wider text-apple-gray uppercase mb-3">Technical Skills</h2>
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "Python", "SQL", "PyTorch", "TensorFlow", "Scikit-Learn", 
                                    "YOLOv8", "OpenCV", "MediaPipe", "Hugging Face", "RAG Pipelines", 
                                    "Streamlit", "FastAPI", "Pandas", "NumPy", "Docker", "Git", "Tableau"
                                ].map(skill => (
                                    <span key={skill} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-[#e5e5ea]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Projects Summary */}
                        <div>
                            <h2 className="text-xs font-semibold tracking-wider text-apple-gray uppercase mb-3">Key Projects</h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-sm font-semibold text-white">OnemedAI — Medical Report Analysis</div>
                                    <div className="text-xs text-apple-gray">Transformers, RAG, NLP document intelligence.</div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Sign Language Recognition System</div>
                                    <div className="text-xs text-apple-gray">CNN-driven gesture recognition with audio accessibility feedback.</div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">LeadRank — Smart Lead Scoring</div>
                                    <div className="text-xs text-apple-gray">Data analysis prioritization system built with Python and Streamlit.</div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Expense Tracker</div>
                                    <div className="text-xs text-apple-gray">Streamlit analytics platform deployed live on streamlit.app.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResumeModal;
