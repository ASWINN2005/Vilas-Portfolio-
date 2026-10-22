import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractivePlayground from './components/InteractivePlayground';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background from './components/Background';
import NeuralCanvas from './components/NeuralCanvas';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import DynamicIsland from './components/DynamicIsland';

function App() {
    const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [notification, setNotification] = useState(null);

    // Scroll to top on mount, disable browser scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    // Global Command+K shortcut listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setCommandPaletteOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Trigger Dynamic Island notification
    const triggerNotification = (notif) => {
        setNotification(notif);
        // Auto dismiss after 3.5 seconds
        setTimeout(() => {
            setNotification((current) => (current === notif ? null : current));
        }, 3500);
    };

    return (
        <div className="relative min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3]/40 selection:text-white font-sans antialiased overflow-x-hidden">
            {/* Dynamic Island Top HUD */}
            <DynamicIsland 
                notification={notification} 
                onDismiss={() => setNotification(null)} 
            />

            {/* Atmospheric Ambient Lighting */}
            <Background />

            {/* Interactive Neural Synapse Canvas */}
            <NeuralCanvas />

            {/* Floating Navigation Header */}
            <Navbar 
                onOpenCommandPalette={() => setCommandPaletteOpen(true)}
                onOpenResume={() => setResumeOpen(true)}
                onNotify={triggerNotification}
            />

            {/* Main Content Sections */}
            <main className="relative z-10 w-full overflow-hidden">
                <Hero 
                    onOpenResume={() => setResumeOpen(true)} 
                />
                
                <About />
                
                <Skills />
                
                <Projects />

                {/* Interactive AI Neural Sandbox */}
                <div id="playground">
                    <InteractivePlayground 
                        onNotify={triggerNotification} 
                    />
                </div>
                
                <Experience />
                
                <Contact 
                    onNotify={triggerNotification} 
                />
            </main>

            {/* Global Quick Command Palette */}
            <CommandPalette 
                isOpen={commandPaletteOpen}
                onClose={() => setCommandPaletteOpen(false)}
                onOpenResume={() => setResumeOpen(true)}
            />

            {/* Digital Resume Modal */}
            <ResumeModal
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
                onNotify={triggerNotification}
            />
        </div>
    );
}

export default App;
