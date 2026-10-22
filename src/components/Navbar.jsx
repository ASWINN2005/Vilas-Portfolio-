import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
    IoSearchOutline, 
    IoMenuOutline, 
    IoCloseOutline, 
    IoDocumentTextOutline,
    IoChevronForward
} from 'react-icons/io5';

const Navbar = ({ onOpenCommandPalette, onOpenResume, onNotify }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001
    });

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Intelligence', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Lab', href: '#playground' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Top Hairline Scroll Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-apple-blue via-apple-purple to-apple-blueLight origin-left z-[80]"
                style={{ scaleX }}
            />

            {/* Floating Navigation Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 pointer-events-none">
                <nav
                    className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
                        scrolled
                            ? 'bg-black/85 backdrop-blur-2xl border border-white/[0.14] shadow-apple-pill'
                            : 'bg-black/50 backdrop-blur-md border border-white/[0.08]'
                    }`}
                >
                    {/* Brand Logo */}
                    <a 
                        href="#" 
                        className="flex items-center gap-2.5 group text-white font-medium text-sm tracking-tight"
                    >
                        <span className="w-6 h-6 rounded-lg bg-white/[0.08] border border-white/[0.14] flex items-center justify-center font-bold text-xs text-white group-hover:border-apple-blue/60 group-hover:bg-apple-blue/15 group-hover:text-apple-blueLight transition-all">
                            V
                        </span>
                        <span className="font-semibold text-white tracking-tight group-hover:text-apple-blueLight transition-colors">
                            Vilas PK
                        </span>
                        <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/[0.08] text-apple-gray border border-white/[0.06] group-hover:border-apple-blue/30 group-hover:text-apple-blueLight transition-colors">
                            AI • DS
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 sm:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 text-xs font-medium text-apple-gray hover:text-apple-blueLight transition-colors rounded-full hover:bg-apple-blue/10"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Action Cluster */}
                    <div className="flex items-center gap-1.5 sm:gap-2">

                        {/* Search / Command Palette Button */}
                        <button
                            onClick={() => {
                                onOpenCommandPalette();
                            }}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-apple-gray hover:text-apple-blueLight bg-white/[0.04] hover:bg-apple-blue/15 border border-white/[0.08] hover:border-apple-blue/40 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(0,113,227,0.25)]"
                            title="Search"
                        >
                            <IoSearchOutline className="text-sm transition-transform group-hover:scale-110" />
                        </button>

                        {/* Resume Modal Trigger */}
                        <button
                            onClick={() => {
                                onOpenResume();
                            }}
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight text-white bg-apple-blue hover:bg-apple-blueHover hover:shadow-[0_0_15px_rgba(0,113,227,0.4)] transition-all shadow-sm active:scale-95 cursor-pointer"
                        >
                            <IoDocumentTextOutline className="text-sm" />
                            <span>Resume</span>
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => {
                                setMobileMenuOpen(!mobileMenuOpen);
                            }}
                            className="md:hidden w-8 h-8 rounded-full bg-white/[0.06] hover:bg-apple-blue/15 border border-transparent hover:border-apple-blue/40 flex items-center justify-center text-apple-gray hover:text-apple-blueLight transition-all cursor-pointer"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <IoCloseOutline className="text-lg" /> : <IoMenuOutline className="text-lg" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Dropdown Sheet */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#161617]/95 border border-white/[0.12] rounded-3xl p-5 shadow-2xl backdrop-blur-3xl max-h-[calc(100vh-6rem)] overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                    }}
                                    className="group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-apple-gray hover:text-apple-blueLight hover:bg-apple-blue/10 transition-colors"
                                >
                                    <span>{link.name}</span>
                                    <IoChevronForward className="text-xs text-apple-grayMuted group-hover:text-apple-blueLight transition-colors" />
                                </a>
                            ))}
                            <div className="pt-3 border-t border-white/[0.08] flex gap-2">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onOpenResume();
                                    }}
                                    className="flex-1 apple-btn-primary text-xs !py-2.5"
                                >
                                    <IoDocumentTextOutline /> Digital Resume
                                </button>
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onOpenCommandPalette();
                                    }}
                                    className="apple-btn-secondary text-xs !py-2.5 !px-3 hover:text-apple-blueLight hover:bg-apple-blue/15 hover:border-apple-blue/40 transition-colors"
                                >
                                    <IoSearchOutline />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
