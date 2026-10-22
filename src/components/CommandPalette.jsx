import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoSearchOutline, 
    IoCloseOutline, 
    IoDocumentTextOutline, 
    IoMailOutline, 
    IoCallOutline, 
    IoLogoGithub, 
    IoLogoLinkedin, 
    IoSparklesOutline, 
    IoBriefcaseOutline, 
    IoFolderOpenOutline, 
    IoSchoolOutline,
    IoCheckmarkOutline
} from 'react-icons/io5';

const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
    const [query, setQuery] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (isOpen) onClose();
                else onClose(false); // toggle trigger handled from parent
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const items = [
        {
            category: "Navigation",
            id: "nav-about",
            title: "About Vilas PK",
            subtitle: "Background, AI engineering focus & education stats",
            icon: <IoSparklesOutline className="text-apple-blueLight" />,
            action: () => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            category: "Navigation",
            id: "nav-skills",
            title: "Technical Stack & Intelligence",
            subtitle: "Machine learning, PyTorch, YOLOv8, NLP & tools",
            icon: <IoBriefcaseOutline className="text-apple-purple" />,
            action: () => {
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            category: "Navigation",
            id: "nav-projects",
            title: "Featured Projects",
            subtitle: "LeadRank, OnemedAI, Sign Language, Expense Tracker",
            icon: <IoFolderOpenOutline className="text-apple-green" />,
            action: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            category: "Navigation",
            id: "nav-experience",
            title: "Experience & Education",
            subtitle: "Let's Code AI LLC, Revertech, VJEC B.Tech AI & DS",
            icon: <IoSchoolOutline className="text-amber-400" />,
            action: () => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        },
        {
            category: "Actions",
            id: "action-resume",
            title: "View Digital Resume / CV",
            subtitle: "Instant interactive preview & print-to-PDF",
            icon: <IoDocumentTextOutline className="text-apple-blue" />,
            action: () => {
                onClose();
                onOpenResume();
            }
        },
        {
            category: "Actions",
            id: "action-send-email",
            title: "Send Email (Gmail)",
            subtitle: "Open Gmail compose to vilaspk935@gmail.com",
            icon: <IoMailOutline className="text-apple-blue" />,
            action: () => {
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com", "_blank", "noopener,noreferrer");
                onClose();
            }
        },
        {
            category: "Actions",
            id: "action-copy-email",
            title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
            subtitle: "vilaspk935@gmail.com",
            icon: copied ? <IoCheckmarkOutline className="text-apple-green" /> : <IoMailOutline className="text-apple-grayLight" />,
            action: () => {
                navigator.clipboard.writeText("vilaspk935@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        },
        {
            category: "External Links",
            id: "ext-github",
            title: "GitHub Profile",
            subtitle: "github.com/VILAS07 — Repositories & open-source",
            icon: <IoLogoGithub className="text-white" />,
            action: () => {
                window.open("https://github.com/VILAS07", "_blank");
                onClose();
            }
        },
        {
            category: "External Links",
            id: "ext-linkedin",
            title: "LinkedIn Profile",
            subtitle: "linkedin.com/in/vilas-pk",
            icon: <IoLogoLinkedin className="text-apple-blueLight" />,
            action: () => {
                window.open("https://www.linkedin.com/in/vilas-pk", "_blank");
                onClose();
            }
        },
        {
            category: "External Links",
            id: "ext-expense",
            title: "Launch Live Demo: Expense Tracker",
            subtitle: "expense-tracker-935.streamlit.app",
            icon: <IoFolderOpenOutline className="text-emerald-400" />,
            action: () => {
                window.open("https://expense-tracker-935.streamlit.app/", "_blank");
                onClose();
            }
        }
    ];

    const filtered = items.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-xl"
                    />

                    {/* Spotlight Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -20 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-xl bg-[#161617]/95 border border-white/[0.14] rounded-2xl shadow-2xl backdrop-blur-3xl overflow-hidden z-10"
                    >
                        {/* Search Input Bar */}
                        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08]">
                            <IoSearchOutline className="text-apple-gray text-xl mr-3 flex-shrink-0" />
                            <input
                                autoFocus
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search sections, projects, contacts, or actions..."
                                className="w-full bg-transparent text-[#f5f5f7] placeholder-apple-gray text-sm focus:outline-none tracking-tight"
                            />
                            {query && (
                                <button 
                                    onClick={() => setQuery('')}
                                    className="text-apple-gray hover:text-white text-xs px-1.5 py-0.5 rounded bg-white/[0.06] ml-2"
                                >
                                    Clear
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="ml-3 text-apple-gray hover:text-white p-1 rounded-full hover:bg-white/[0.06] transition-colors"
                            >
                                <IoCloseOutline className="text-lg" />
                            </button>
                        </div>

                        {/* Results List */}
                        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04]">
                            {filtered.length > 0 ? (
                                filtered.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={item.action}
                                        className="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/[0.08] transition-colors text-left group cursor-pointer"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium text-[#f5f5f7] tracking-tight truncate flex items-center gap-2">
                                                {item.title}
                                                <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-white/[0.05] text-apple-gray border border-white/[0.04]">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className="text-xs text-apple-gray truncate">
                                                {item.subtitle}
                                            </div>
                                        </div>
                                        <span className="text-xs text-apple-gray group-hover:text-white transition-colors">
                                            ↵
                                        </span>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center py-10 text-apple-gray text-sm">
                                    No results found for "{query}".
                                </div>
                            )}
                        </div>

                        {/* Footer Quick Keys */}
                        <div className="px-4 py-2 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-apple-gray">
                            <span className="flex items-center gap-2">
                                <span className="px-1.5 py-0.5 rounded bg-white/[0.06] font-mono text-[10px]">ESC</span> to close
                            </span>
                            <span>Quick Command Navigation</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
