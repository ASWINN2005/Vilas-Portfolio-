import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoLogoGithub, 
    IoLogoLinkedin, 
    IoMailOutline, 
    IoCallOutline, 
    IoLocationOutline, 
    IoCopyOutline, 
    IoCheckmarkOutline,
    IoSendOutline,
    IoTimeOutline,
    IoSparklesOutline
} from 'react-icons/io5';
import confetti from 'canvas-confetti';

const Contact = ({ onNotify }) => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    
    // Form State
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        purpose: 'Hiring / Job Opportunity',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            // IST: UTC+5:30
            const options = { 
                timeZone: 'Asia/Kolkata', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true 
            };
            setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("vilaspk935@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        if (onNotify) {
            onNotify({
                title: "Email Copied",
                badge: "Clipboard",
                message: "vilaspk935@gmail.com"
            });
        }
    };

    const copyPhone = () => {
        navigator.clipboard.writeText("+919746906494");
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        if (onNotify) {
            onNotify({
                title: "Phone Copied",
                badge: "Clipboard",
                message: "+91 9746906494"
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Prepare mailto fallback
        const subject = encodeURIComponent(`[${formState.purpose}] Portfolio Inquiry from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nPurpose: ${formState.purpose}\n\nMessage:\n${formState.message}`);
        
        setTimeout(() => {
            setStatus('success');

            // Celebration confetti
            try {
                confetti({
                    particleCount: 90,
                    spread: 70,
                    origin: { y: 0.65 },
                    colors: ['#0071e3', '#2997ff', '#bf5af2', '#ffffff', '#30d158']
                });
            } catch (err) {
                // ignore
            }

            if (onNotify) {
                onNotify({
                    title: "Message Ready",
                    badge: "Dispatched",
                    message: "Opening Gmail compose for Vilas PK."
                });
            }

            // Launch Gmail Web Compose in new tab
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com&su=${subject}&body=${body}`;
            window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        }, 900);
    };

    return (
        <section id="contact" className="section-container pb-20 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Contact
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    Let’s build something remarkable.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    Available for full-time Data Science & AI Engineering roles, research initiatives, and technical collaborations.
                </p>
            </div>

            {/* Main Interactive Contact Container */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Card: Direct Communication & Origin Telemetry (Span 5) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 apple-card p-7 sm:p-8 space-y-6"
                >
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-apple-gray block mb-1">
                            Direct Line
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                            Get in touch directly.
                        </h3>
                        <p className="text-apple-gray text-xs sm:text-sm mt-2 leading-relaxed">
                            Whether discussing a vacancy or brainstorming an intelligent system, my inbox is always open.
                        </p>
                    </div>

                    {/* Contact Badges */}
                    <div className="space-y-3">
                        {/* Email Pill — click opens Gmail web compose directly, plus mail app & copy options */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.16] transition-all gap-3 sm:gap-2">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 min-w-0 flex-1 group/email cursor-pointer"
                                title="Open Gmail Compose"
                            >
                                <div className="w-8 h-8 rounded-xl bg-apple-blue/10 flex items-center justify-center text-apple-blueLight flex-shrink-0 group-hover/email:bg-apple-blue/20 transition-colors">
                                    <IoMailOutline className="text-lg" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] text-apple-gray flex items-center gap-1.5">
                                        Primary Email
                                        <span className="text-[9px] text-apple-blueLight font-medium">Open in Gmail ↗</span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-white group-hover/email:text-apple-blueLight transition-colors truncate block">
                                        vilaspk935@gmail.com
                                    </span>
                                </div>
                            </a>
                            <div className="flex items-center gap-1.5 sm:ml-2 flex-shrink-0 self-start sm:self-auto">
                                <a
                                    href="mailto:vilaspk935@gmail.com"
                                    className="apple-pill text-[11px] !py-1 !px-2.5 cursor-pointer text-apple-gray hover:text-white"
                                    title="Open system mail app (Apple Mail / Outlook)"
                                >
                                    Mail App
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className="apple-pill text-[11px] !py-1 !px-2.5 cursor-pointer"
                                    title="Copy email address"
                                >
                                    {copiedEmail ? <IoCheckmarkOutline className="text-apple-green" /> : <IoCopyOutline />}
                                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                                </button>
                            </div>
                        </div>

                        {/* Phone Pill */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.16] transition-all gap-3 sm:gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-xl bg-apple-green/10 flex items-center justify-center text-apple-green flex-shrink-0">
                                    <IoCallOutline className="text-lg" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-apple-gray">Mobile Phone</div>
                                    <a href="tel:+919746906494" className="text-xs sm:text-sm font-medium text-white hover:text-apple-green transition-colors">
                                        +91 9746906494
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:ml-2 flex-shrink-0 self-start sm:self-auto">
                                <a
                                    href="tel:+919746906494"
                                    className="apple-pill text-[11px] !py-1 !px-2.5 cursor-pointer text-apple-gray hover:text-white"
                                    title="Call phone number"
                                >
                                    Call
                                </a>
                                <button
                                    onClick={copyPhone}
                                    className="apple-pill text-[11px] !py-1 !px-2.5 flex-shrink-0 cursor-pointer"
                                    title="Copy phone number"
                                >
                                    {copiedPhone ? <IoCheckmarkOutline className="text-apple-green" /> : <IoCopyOutline />}
                                    <span>{copiedPhone ? "Copied" : "Copy"}</span>
                                </button>
                            </div>
                        </div>

                        {/* Location & Real-Time Clock */}
                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-apple-purple/10 flex items-center justify-center text-apple-purple flex-shrink-0">
                                    <IoLocationOutline className="text-lg" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] text-apple-gray">Base Location</div>
                                    <div className="text-xs sm:text-sm font-medium text-white">
                                        Eachur, Kannur, Kerala, India
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-apple-gray font-mono">
                                <span className="flex items-center gap-1.5">
                                    <IoTimeOutline className="text-xs text-apple-blueLight" />
                                    <span>IST: {currentTime || "Loading..."}</span>
                                </span>
                                <span>11.87° N, 75.37° E</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Hub */}
                    <div className="pt-2 border-t border-white/[0.08]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-apple-gray block mb-3">
                            Verified Channels
                        </span>
                        <div className="flex gap-2.5">
                            <a
                                href="https://github.com/VILAS07"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 apple-btn-secondary text-xs !py-2.5"
                            >
                                <IoLogoGithub className="text-base" /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vilas-pk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 apple-btn-secondary text-xs !py-2.5"
                            >
                                <IoLogoLinkedin className="text-base text-apple-blueLight" /> LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Card: Interactive Message Dispatcher (Span 7) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="lg:col-span-7 apple-card p-7 sm:p-9"
                >
                    <div className="mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-apple-gray block mb-1">
                            Interactive Dispatch
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                            Send a message.
                        </h3>
                        <p className="text-apple-gray text-xs sm:text-sm mt-1">
                            Fill out the details below to dispatch an inquiry directly to Vilas.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8 text-center rounded-2xl bg-white/[0.04] border border-apple-green/30 space-y-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-apple-green/10 border border-apple-green/30 text-apple-green text-2xl flex items-center justify-center mx-auto">
                                <IoCheckmarkOutline />
                            </div>
                            <h4 className="text-lg font-bold text-white tracking-tight">Message Prepared</h4>
                            <p className="text-xs text-apple-gray max-w-sm mx-auto leading-relaxed">
                                Your message has been prepared for dispatch to <span className="text-white font-mono">vilaspk935@gmail.com</span>.
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 pt-2">
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=vilaspk935@gmail.com&su=${encodeURIComponent(`[${formState.purpose}] Portfolio Inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nPurpose: ${formState.purpose}\n\nMessage:\n${formState.message}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="apple-btn-primary text-xs !py-2 !px-4"
                                >
                                    Open in Gmail ↗
                                </a>
                                <a
                                    href={`mailto:vilaspk935@gmail.com?subject=${encodeURIComponent(`[${formState.purpose}] Portfolio Inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nPurpose: ${formState.purpose}\n\nMessage:\n${formState.message}`)}`}
                                    className="apple-btn-secondary text-xs !py-2 !px-4"
                                >
                                    Mail App
                                </a>
                                <button
                                    onClick={() => {
                                        setStatus('idle');
                                    }}
                                    className="apple-btn-ghost text-xs !py-2 !px-3 text-apple-gray hover:text-white"
                                >
                                    Send another
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-medium text-apple-gray uppercase tracking-wider mb-1.5">
                                        Your Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="Jane Doe"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs sm:text-sm placeholder-apple-grayMuted focus:outline-none focus:border-apple-blue transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-apple-gray uppercase tracking-wider mb-1.5">
                                        Your Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="jane@company.com"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs sm:text-sm placeholder-apple-grayMuted focus:outline-none focus:border-apple-blue transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-medium text-apple-gray uppercase tracking-wider mb-1.5">
                                    Subject / Purpose
                                </label>
                                <select
                                    value={formState.purpose}
                                    onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1c1e] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-apple-blue transition-colors cursor-pointer"
                                >
                                    <option value="Hiring / Job Opportunity">Hiring / Job Opportunity (Full-time)</option>
                                    <option value="AI Project Collaboration">AI / Machine Learning Project</option>
                                    <option value="Technical Consultation">Technical Consultation</option>
                                    <option value="General Inquiries">General Networking / Say Hello</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[11px] font-medium text-apple-gray uppercase tracking-wider mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Tell me about the role, your team, or the project you are building..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs sm:text-sm placeholder-apple-grayMuted focus:outline-none focus:border-apple-blue transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full apple-btn-primary !py-3 text-xs sm:text-sm cursor-pointer disabled:opacity-50"
                            >
                                {status === 'submitting' ? (
                                    <span>Dispatching Inquiry...</span>
                                ) : (
                                    <>
                                        <IoSendOutline className="text-sm" />
                                        <span>Dispatch Message to Vilas</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>

            {/* Minimalist Footer */}
            <footer className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-gray">
                <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-white/[0.08] border border-white/[0.12] flex items-center justify-center font-bold text-[10px] text-white">V</span>
                    <span>Copyright © 2026 Vilas PK. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-6 text-[11px] text-apple-grayLight">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#skills" className="hover:text-white transition-colors">Intelligence</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#playground" className="hover:text-white transition-colors">AI Lab</a>
                    <a href="#experience" className="hover:text-white transition-colors">Timeline</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
