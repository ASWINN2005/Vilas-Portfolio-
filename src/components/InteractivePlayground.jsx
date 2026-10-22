import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    IoSparklesOutline, 
    IoEyeOutline, 
    IoAnalyticsOutline, 
    IoPlayOutline, 
    IoRefreshOutline,
    IoVolumeHighOutline,
    IoCheckmarkCircleOutline,
    IoInformationCircleOutline,
    IoPulseOutline
} from 'react-icons/io5';

// Smooth spring config used throughout
const spring = { type: 'spring', stiffness: 300, damping: 30 };

// Shared fade + slide up animation for tab panels
const tabVariants = {
    hidden:  { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
    exit:    { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2, ease: 'easeIn' } },
};

// Staggered children
const childVariants = {
    hidden:  { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] } }),
};

const InteractivePlayground = ({ onNotify }) => {
    const [activeTab, setActiveTab] = useState('onemed');

    // ── 1. OnemedAI state ────────────────────────────────────────────────────
    const medicalCases = [
        {
            title: "Cardiovascular Telemetry",
            summary: "54M presenting with acute retrosternal chest pressure, resting dyspnea, elevated troponin I (0.18 ng/mL), and hypertensive history.",
            diagnosis: "Non-ST Elevation Myocardial Infarction (NSTEMI) / Unstable Angina",
            confidence: "97.4%",
            extractedSymptoms: ["Retrosternal pressure", "Resting dyspnea", "Elevated troponin I", "Hypertension"],
            triage: "Urgent Cardiology Admission",
            icd: "I21.4",
            vectorSimilarity: "0.942 Cosine Distance",
            latency: "142ms"
        },
        {
            title: "Pulmonary Diagnostic Scan",
            summary: "32F with 4-day productive cough, purulent sputum, fever 38.8°C, and localized crepitations in right lower lung field on auscultation.",
            diagnosis: "Community-Acquired Lobar Pneumonia",
            confidence: "95.8%",
            extractedSymptoms: ["Productive cough", "Purulent sputum", "Pyrexia 38.8°C", "Lower lobe crepitations"],
            triage: "Empirical Antibiotic Protocol",
            icd: "J18.9",
            vectorSimilarity: "0.918 Cosine Distance",
            latency: "168ms"
        },
        {
            title: "Neurological Assessment",
            summary: "61M with episodic unilateral facial paresis, transient slurred speech lasting 15 minutes, blood pressure 165/95 mmHg.",
            diagnosis: "Transient Ischemic Attack (TIA) / High Stroke Risk",
            confidence: "98.1%",
            extractedSymptoms: ["Unilateral facial paresis", "Transient dysarthria", "Elevated systolic pressure"],
            triage: "Stat Neurovascular Imaging (MRI/CTA)",
            icd: "G45.9",
            vectorSimilarity: "0.963 Cosine Distance",
            latency: "129ms"
        }
    ];

    const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
    const [isAnalyzing, setIsAnalyzing]         = useState(false);
    const [analysisResult, setAnalysisResult]   = useState(medicalCases[0]);

    // Ensure switching case immediately syncs and analyzes the correct record
    const handleCaseSelect = (idx) => {
        setSelectedCaseIdx(idx);
        setAnalysisResult(medicalCases[idx]);
    };

    const runMedicalInference = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setAnalysisResult(medicalCases[selectedCaseIdx]);
            setIsAnalyzing(false);
            if (onNotify) {
                onNotify({
                    title: "RAG Pipeline Complete",
                    badge: "OnemedAI",
                    message: `Diagnosis: ${medicalCases[selectedCaseIdx].diagnosis}`
                });
            }
        }, 900);
    };

    // ── 2. Sign Language state ───────────────────────────────────────────────
    const gestures = [
        { 
            name: "Thumbs Up",   
            emoji: "👍", 
            meaning: "Affirmative / Agree",  
            confidence: "99.1%", 
            landmarks: "Thumb abducted vertically, 4 fingers flexed into palm",
            keypoints: [
                { x: 50, y: 70 }, // wrist
                { x: 45, y: 55 }, { x: 48, y: 40 }, { x: 50, y: 25 }, // thumb
                { x: 42, y: 50 }, { x: 40, y: 58 }, { x: 38, y: 64 }, // index
                { x: 48, y: 50 }, { x: 47, y: 58 }, { x: 46, y: 64 }, // middle
                { x: 54, y: 52 }, { x: 53, y: 60 }, { x: 52, y: 66 }, // ring
                { x: 60, y: 55 }, { x: 59, y: 62 }, { x: 58, y: 68 }  // pinky
            ]
        },
        { 
            name: "Peace Sign",  
            emoji: "✌️", 
            meaning: "Victory / Peace",       
            confidence: "98.4%", 
            landmarks: "Index & Middle extended in V-shape, Ring/Pinky flexed",
            keypoints: [
                { x: 50, y: 75 },
                { x: 44, y: 60 }, { x: 42, y: 65 }, { x: 40, y: 70 },
                { x: 42, y: 45 }, { x: 38, y: 32 }, { x: 35, y: 20 },
                { x: 50, y: 45 }, { x: 52, y: 32 }, { x: 55, y: 20 },
                { x: 56, y: 55 }, { x: 55, y: 63 }, { x: 54, y: 68 },
                { x: 62, y: 58 }, { x: 61, y: 65 }, { x: 60, y: 70 }
            ]
        },
        { 
            name: "Open Palm",   
            emoji: "✋", 
            meaning: "Hello / Stop",           
            confidence: "99.6%", 
            landmarks: "All 5 digits fully extended & splayed radially",
            keypoints: [
                { x: 50, y: 78 },
                { x: 36, y: 60 }, { x: 30, y: 50 }, { x: 26, y: 42 },
                { x: 40, y: 42 }, { x: 38, y: 30 }, { x: 36, y: 18 },
                { x: 48, y: 40 }, { x: 48, y: 28 }, { x: 48, y: 16 },
                { x: 56, y: 42 }, { x: 58, y: 30 }, { x: 60, y: 18 },
                { x: 64, y: 46 }, { x: 68, y: 35 }, { x: 72, y: 24 }
            ]
        },
        { 
            name: "Closed Fist", 
            emoji: "✊", 
            meaning: "Solidarity / Hold",      
            confidence: "97.8%", 
            landmarks: "All 5 digits fully clenched into central palm cluster",
            keypoints: [
                { x: 50, y: 74 },
                { x: 42, y: 58 }, { x: 45, y: 52 }, { x: 52, y: 52 },
                { x: 38, y: 50 }, { x: 40, y: 56 }, { x: 44, y: 60 },
                { x: 46, y: 48 }, { x: 48, y: 54 }, { x: 50, y: 60 },
                { x: 54, y: 50 }, { x: 54, y: 56 }, { x: 53, y: 60 },
                { x: 60, y: 54 }, { x: 59, y: 59 }, { x: 57, y: 62 }
            ]
        },
        { 
            name: "Pointing",    
            emoji: "👉", 
            meaning: "Direction / Select",     
            confidence: "98.9%", 
            landmarks: "Index digit fully extended horizontally, thumb resting",
            keypoints: [
                { x: 35, y: 65 },
                { x: 42, y: 55 }, { x: 46, y: 52 }, { x: 50, y: 52 },
                { x: 46, y: 44 }, { x: 62, y: 44 }, { x: 78, y: 44 },
                { x: 44, y: 50 }, { x: 46, y: 56 }, { x: 48, y: 60 },
                { x: 42, y: 55 }, { x: 44, y: 60 }, { x: 46, y: 64 },
                { x: 40, y: 60 }, { x: 42, y: 64 }, { x: 44, y: 68 }
            ]
        }
    ];
    const [activeGesture, setActiveGesture] = useState(gestures[0]);
    const [isSpeaking, setIsSpeaking]       = useState(false);

    const handleSpeak = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
            setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSelectGesture = (g) => {
        setActiveGesture(g);
        if (onNotify) {
            onNotify({
                title: "Landmark Classified",
                badge: "CV Stream",
                message: `${g.name} → "${g.meaning}"`
            });
        }
    };

    // ── 3. LeadRank state ────────────────────────────────────────────────────
    const [companySize, setCompanySize] = useState(350);
    const [pageVisits,  setPageVisits]  = useState(16);
    const [roleTier,    setRoleTier]    = useState('VP / C-Level');

    const roleWeight  = roleTier === 'VP / C-Level' ? 40 : roleTier === 'Director / Head' ? 30 : 15;
    const sizeWeight  = Math.min(Math.round((companySize / 1500) * 30), 30);
    const visitWeight = Math.min(Math.round((pageVisits  / 25)   * 30), 30);
    const totalScore  = Math.min(roleWeight + sizeWeight + visitWeight, 100);

    const leadTier = totalScore >= 80 
        ? 'Tier 1 • High Priority' 
        : totalScore >= 60 
            ? 'Tier 2 • Qualified' 
            : 'Tier 3 • Nurture';

    const crmAction = totalScore >= 80
        ? 'Direct Account Executive Outreach & VIP Meeting Invite'
        : totalScore >= 60
            ? 'Automated Demo Sequence & Product Specialist Assignment'
            : 'Marketing Cadence: Bi-weekly Tech Whitepapers & Case Studies';

    const scoreColor = totalScore >= 80 
        ? 'text-apple-green' 
        : totalScore >= 60 
            ? 'text-apple-blueLight' 
            : 'text-apple-gray';

    const tabs = [
        { id: 'onemed',   label: 'OnemedAI (RAG)',       icon: <IoSparklesOutline className="text-sm" /> },
        { id: 'vision',   label: 'Sign Language (CV)',   icon: <IoEyeOutline      className="text-sm" /> },
        { id: 'leadrank', label: 'LeadRank (ML)',        icon: <IoAnalyticsOutline className="text-sm" /> },
    ];

    return (
        <section className="section-container relative z-10 pt-10">
            {/* ── Section Header ── */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <span className="text-apple-blueLight text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                    Interactive Lab
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-apple-headline text-white mb-4">
                    Experience the AI live.
                </h2>
                <p className="text-apple-gray text-base sm:text-lg leading-relaxed">
                    Test interactive simulation sandboxes powered by Vilas's core architectures directly in your browser.
                </p>

                {/* ── Tab Switcher ── */}
                <div className="inline-flex p-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl shadow-apple-pill mt-8 max-w-full overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'text-black'
                                    : 'text-apple-gray hover:text-white'
                            }`}
                        >
                            {/* Sliding pill indicator */}
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="tab-pill"
                                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                                    transition={spring}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {tab.icon}
                                <span>{tab.label}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Sandbox Container Card ── */}
            <div className="apple-card p-6 sm:p-10 shadow-2xl relative overflow-hidden bg-[#161617]/90 backdrop-blur-2xl border border-white/[0.12]">

                <AnimatePresence mode="wait">
                    {/* ═══════════════════════════════════════════════════
                        1. OnemedAI Tab (RAG Pipeline)
                    ═══════════════════════════════════════════════════ */}
                    {activeTab === 'onemed' && (
                        <motion.div
                            key="onemed"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8"
                        >
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                                <div>
                                    <div className="text-xs font-mono text-apple-blueLight uppercase tracking-wider mb-1">
                                        Clinical NLP & Retrieval-Augmented Generation
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        OnemedAI Document Diagnostic Pipeline
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-green/10 text-apple-green text-xs font-mono border border-apple-green/20 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-apple-green animate-pulse" />
                                    RAG Inference Online
                                </span>
                            </div>

                            {/* Case preset selector */}
                            <div>
                                <label className="block text-xs font-medium text-apple-gray uppercase tracking-wider mb-3">
                                    Select Clinical Case Sample
                                </label>
                                <div className="grid sm:grid-cols-3 gap-3">
                                    {medicalCases.map((c, i) => (
                                        <motion.button
                                            key={i}
                                            custom={i}
                                            variants={childVariants}
                                            initial="hidden"
                                            animate="visible"
                                            onClick={() => handleCaseSelect(i)}
                                            whileTap={{ scale: 0.97 }}
                                            className={`p-3.5 rounded-2xl text-left border transition-colors duration-200 cursor-pointer ${
                                                selectedCaseIdx === i
                                                    ? 'bg-apple-blue/15 border-apple-blue text-white shadow-sm'
                                                    : 'bg-white/[0.03] border-white/[0.06] text-apple-gray hover:text-white hover:bg-white/[0.06]'
                                            }`}
                                        >
                                            <div className="text-xs font-semibold tracking-tight text-white mb-1 flex items-center justify-between">
                                                <span>{c.title}</span>
                                                <span className="text-[10px] font-mono text-apple-blueLight">ICD {c.icd}</span>
                                            </div>
                                            <div className="text-[11px] text-apple-gray line-clamp-2">{c.summary}</div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Case input stream */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCaseIdx}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-xs text-[#d2d2d7] leading-relaxed"
                                >
                                    <div className="flex items-center justify-between text-apple-gray select-none mb-1">
                                        <span>// EHR Ingestion Stream & Tokenizer</span>
                                        <span className="text-apple-blueLight">FAISS Vector Index Verified</span>
                                    </div>
                                    <div className="font-sans text-sm text-white">
                                        "{medicalCases[selectedCaseIdx].summary}"
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Run button */}
                            <div className="flex flex-wrap items-center gap-4">
                                <motion.button
                                    onClick={runMedicalInference}
                                    disabled={isAnalyzing}
                                    whileTap={{ scale: 0.96 }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={spring}
                                    className="apple-btn-primary !py-3 !px-7 text-xs sm:text-sm cursor-pointer disabled:opacity-50 select-none"
                                >
                                    {isAnalyzing ? (
                                        <span className="flex items-center gap-2">
                                            <IoRefreshOutline className="animate-spin text-lg" />
                                            Running RAG Vector Search & LLM...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <IoPlayOutline className="text-base" />
                                            Execute Transformer Diagnosis
                                        </span>
                                    )}
                                </motion.button>
                                <span className="text-xs text-apple-gray hidden sm:inline font-mono">
                                    Sub-second extraction with ICD-10 codification ({medicalCases[selectedCaseIdx].latency})
                                </span>
                            </div>

                            {/* Analysis output */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`result-${selectedCaseIdx}-${isAnalyzing}`}
                                    initial={{ opacity: 0, y: 12, scale: 0.99 }}
                                    animate={{ opacity: 1, y: 0,  scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.99 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-5"
                                >
                                    {isAnalyzing ? (
                                        <div className="flex flex-col items-center justify-center py-8 gap-3">
                                            <div className="flex gap-1.5">
                                                {[0,1,2,3].map(i => (
                                                    <motion.span
                                                        key={i}
                                                        className="w-2.5 h-2.5 rounded-full bg-apple-blue"
                                                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-apple-gray font-mono">Retrieving medical ontology embeddings & running inference…</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                                                <div>
                                                    <div className="text-[11px] text-apple-gray font-mono uppercase tracking-wider flex items-center gap-2">
                                                        <span>Extracted Clinical Diagnosis</span>
                                                        <span className="text-apple-blueLight">• {analysisResult.vectorSimilarity}</span>
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                                                        {analysisResult.diagnosis}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 shrink-0">
                                                    <div className="text-right">
                                                        <div className="text-[10px] text-apple-gray">Confidence</div>
                                                        <div className="text-lg font-bold font-mono text-apple-green">
                                                            {analysisResult.confidence}
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blueLight text-xs font-mono border border-apple-blue/20">
                                                        ICD: {analysisResult.icd}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-xs font-semibold text-apple-gray uppercase tracking-wider mb-2">
                                                        Parsed Diagnostic Entities
                                                    </div>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {analysisResult.extractedSymptoms.map((sym, idx) => (
                                                            <motion.span
                                                                key={idx}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: idx * 0.05, duration: 0.2 }}
                                                                className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-[#f5f5f7] flex items-center gap-1"
                                                            >
                                                                <IoCheckmarkCircleOutline className="text-apple-blueLight" /> {sym}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs font-semibold text-apple-gray uppercase tracking-wider mb-2">
                                                        Suggested Clinical Triage
                                                    </div>
                                                    <div className="p-3 rounded-xl bg-apple-purple/10 border border-apple-purple/20 text-xs text-purple-200 flex items-center gap-2">
                                                        <IoPulseOutline className="text-apple-purple text-base shrink-0" />
                                                        <span>{analysisResult.triage}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* ═══════════════════════════════════════════════════
                        2. Sign Language Tab (Computer Vision)
                    ═══════════════════════════════════════════════════ */}
                    {activeTab === 'vision' && (
                        <motion.div
                            key="vision"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8"
                        >
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                                <div>
                                    <div className="text-xs font-mono text-apple-purple uppercase tracking-wider mb-1">
                                        Real-time CNN & MediaPipe Landmark Geometry
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        Sign Language Hand Landmark Classifier
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-purple/10 text-apple-purple text-xs font-mono border border-apple-purple/20 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-apple-purple animate-pulse" />
                                    60 FPS Stream
                                </span>
                            </div>

                            {/* Gesture selector */}
                            <div>
                                <label className="block text-xs font-medium text-apple-gray uppercase tracking-wider mb-3">
                                    Test Gesture Classification
                                </label>
                                <div className="flex flex-wrap gap-2.5">
                                    {gestures.map((g, idx) => (
                                        <motion.button
                                            key={idx}
                                            custom={idx}
                                            variants={childVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleSelectGesture(g)}
                                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-colors duration-200 cursor-pointer ${
                                                activeGesture.name === g.name
                                                    ? 'bg-apple-purple/20 border-apple-purple text-white shadow-sm'
                                                    : 'bg-white/[0.03] border-white/[0.06] text-apple-gray hover:text-white hover:bg-white/[0.06]'
                                            }`}
                                        >
                                            <span className="text-xl">{g.emoji}</span>
                                            <span className="text-xs font-medium">{g.name}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Camera frame + results */}
                            <div className="grid md:grid-cols-12 gap-6 items-center">
                                <div className="md:col-span-7 relative aspect-video bg-black/80 rounded-3xl border border-white/[0.1] overflow-hidden flex items-center justify-center p-6">
                                    
                                    {/* Viewfinder corner crosshairs */}
                                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-apple-purple/60 rounded-tl pointer-events-none" />
                                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-apple-purple/60 rounded-tr pointer-events-none" />
                                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-apple-purple/60 rounded-bl pointer-events-none" />
                                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-apple-purple/60 rounded-br pointer-events-none" />

                                    {/* Simulated MediaPipe Spatial Keypoint Mesh */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                                        {/* Connect wrist to base fingers */}
                                        <line x1={`${activeGesture.keypoints[0].x}%`} y1={`${activeGesture.keypoints[0].y}%`} x2={`${activeGesture.keypoints[1].x}%`} y2={`${activeGesture.keypoints[1].y}%`} stroke="#bf5af2" strokeWidth="1.5" />
                                        <line x1={`${activeGesture.keypoints[0].x}%`} y1={`${activeGesture.keypoints[0].y}%`} x2={`${activeGesture.keypoints[4].x}%`} y2={`${activeGesture.keypoints[4].y}%`} stroke="#bf5af2" strokeWidth="1.5" />
                                        <line x1={`${activeGesture.keypoints[0].x}%`} y1={`${activeGesture.keypoints[0].y}%`} x2={`${activeGesture.keypoints[7].x}%`} y2={`${activeGesture.keypoints[7].y}%`} stroke="#bf5af2" strokeWidth="1.5" />
                                        <line x1={`${activeGesture.keypoints[0].x}%`} y1={`${activeGesture.keypoints[0].y}%`} x2={`${activeGesture.keypoints[10].x}%`} y2={`${activeGesture.keypoints[10].y}%`} stroke="#bf5af2" strokeWidth="1.5" />
                                        <line x1={`${activeGesture.keypoints[0].x}%`} y1={`${activeGesture.keypoints[0].y}%`} x2={`${activeGesture.keypoints[13].x}%`} y2={`${activeGesture.keypoints[13].y}%`} stroke="#bf5af2" strokeWidth="1.5" />

                                        {/* Finger links */}
                                        <polyline points={`${activeGesture.keypoints[1].x},${activeGesture.keypoints[1].y} ${activeGesture.keypoints[2].x},${activeGesture.keypoints[2].y} ${activeGesture.keypoints[3].x},${activeGesture.keypoints[3].y}`} stroke="#64d2ff" strokeWidth="1.5" fill="none" />
                                        <polyline points={`${activeGesture.keypoints[4].x},${activeGesture.keypoints[4].y} ${activeGesture.keypoints[5].x},${activeGesture.keypoints[5].y} ${activeGesture.keypoints[6].x},${activeGesture.keypoints[6].y}`} stroke="#64d2ff" strokeWidth="1.5" fill="none" />
                                        <polyline points={`${activeGesture.keypoints[7].x},${activeGesture.keypoints[7].y} ${activeGesture.keypoints[8].x},${activeGesture.keypoints[8].y} ${activeGesture.keypoints[9].x},${activeGesture.keypoints[9].y}`} stroke="#64d2ff" strokeWidth="1.5" fill="none" />
                                        <polyline points={`${activeGesture.keypoints[10].x},${activeGesture.keypoints[10].y} ${activeGesture.keypoints[11].x},${activeGesture.keypoints[11].y} ${activeGesture.keypoints[12].x},${activeGesture.keypoints[12].y}`} stroke="#64d2ff" strokeWidth="1.5" fill="none" />
                                        <polyline points={`${activeGesture.keypoints[13].x},${activeGesture.keypoints[13].y} ${activeGesture.keypoints[14].x},${activeGesture.keypoints[14].y} ${activeGesture.keypoints[15].x},${activeGesture.keypoints[15].y}`} stroke="#64d2ff" strokeWidth="1.5" fill="none" />

                                        {/* Landmark nodes */}
                                        {activeGesture.keypoints.map((pt, i) => (
                                            <circle key={i} cx={`${pt.x}%`} cy={`${pt.y}%`} r={i === 0 ? "4" : "2.5"} fill={i === 0 ? "#30d158" : "#bf5af2"} />
                                        ))}
                                    </svg>

                                    {/* Gesture display — smooth scale swap */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeGesture.name}
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.7 }}
                                            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                                            className="relative text-center z-10"
                                        >
                                            <span className="text-7xl block mb-3 select-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                                                {activeGesture.emoji}
                                            </span>
                                            <span className="text-xs font-mono text-apple-purple bg-apple-purple/20 px-3 py-1 rounded-full border border-apple-purple/30 backdrop-blur-md">
                                                Landmarks: 21 Keypoints Tracked
                                            </span>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* HUD overlays */}
                                    <div className="absolute top-4 left-4 text-[10px] font-mono text-apple-gray bg-black/70 px-2.5 py-1 rounded-md border border-white/[0.08] backdrop-blur-md">
                                        FOV: 720p • FPS: 60 • Latency: 16.4ms
                                    </div>
                                    <div className="absolute bottom-4 right-4 text-[10px] font-mono text-apple-green bg-black/70 px-2.5 py-1 rounded-md border border-white/[0.08] flex items-center gap-1.5 backdrop-blur-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-apple-green animate-pulse" />
                                        CNN Confidence: {activeGesture.confidence}
                                    </div>
                                </div>

                                {/* Classification result panel */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeGesture.name}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                        className="md:col-span-5 space-y-4"
                                    >
                                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                                            <div className="text-[10px] font-mono text-apple-gray uppercase mb-1">
                                                Interpreted Semantic Translation
                                            </div>
                                            <div className="text-2xl font-bold text-white tracking-tight mb-1">
                                                "{activeGesture.meaning}"
                                            </div>
                                            <div className="text-xs text-apple-purple font-medium">
                                                Classification: {activeGesture.name}
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-2.5">
                                            <div className="flex justify-between text-apple-gray">
                                                <span>Spatial Geometry:</span>
                                                <span className="text-[#f5f5f7] text-right ml-2 font-mono text-[11px]">{activeGesture.landmarks}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-apple-gray pt-1 border-t border-white/[0.06]">
                                                <span>Speech Synthesis:</span>
                                                <button
                                                    onClick={() => handleSpeak(activeGesture.meaning)}
                                                    className="apple-pill text-[11px] !py-1 !px-2.5 cursor-pointer text-apple-green hover:bg-apple-green/10 transition-colors flex items-center gap-1"
                                                    title="Speak with browser TTS"
                                                >
                                                    <IoVolumeHighOutline className={isSpeaking ? 'animate-bounce' : ''} />
                                                    <span>{isSpeaking ? 'Speaking…' : 'Speak Output'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}

                    {/* ═══════════════════════════════════════════════════
                        3. LeadRank Tab (Predictive Scoring Engine)
                    ═══════════════════════════════════════════════════ */}
                    {activeTab === 'leadrank' && (
                        <motion.div
                            key="leadrank"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8"
                        >
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                                <div>
                                    <div className="text-xs font-mono text-apple-green uppercase tracking-wider mb-1">
                                        Machine Learning Classification & Scoring
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        LeadRank Predictive Scoring Engine
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apple-green/10 text-apple-green text-xs font-mono border border-apple-green/20 shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-apple-green animate-pulse" />
                                    Live Formula Active
                                </span>
                            </div>

                            {/* Controls */}
                            <motion.div
                                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                                initial="hidden"
                                animate="visible"
                                className="grid sm:grid-cols-3 gap-6"
                            >
                                {/* Company size */}
                                <motion.div
                                    variants={childVariants}
                                    custom={0}
                                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3"
                                >
                                    <div className="flex justify-between text-xs">
                                        <span className="text-apple-gray">Company Headcount</span>
                                        <span className="font-mono text-white">{companySize}+ Employees</span>
                                    </div>
                                    <input
                                        type="range" min="10" max="1500" step="20"
                                        value={companySize}
                                        onChange={(e) => setCompanySize(Number(e.target.value))}
                                        className="w-full accent-apple-blue cursor-pointer"
                                    />
                                    <div className="flex justify-between text-[10px] text-apple-gray font-mono">
                                        <span>Startup (10)</span>
                                        <span>Enterprise (1500+)</span>
                                    </div>
                                </motion.div>

                                {/* Page visits */}
                                <motion.div
                                    variants={childVariants}
                                    custom={1}
                                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3"
                                >
                                    <div className="flex justify-between text-xs">
                                        <span className="text-apple-gray">Engagement Velocity</span>
                                        <span className="font-mono text-white">{pageVisits} Page Views</span>
                                    </div>
                                    <input
                                        type="range" min="1" max="25"
                                        value={pageVisits}
                                        onChange={(e) => setPageVisits(Number(e.target.value))}
                                        className="w-full accent-apple-blue cursor-pointer"
                                    />
                                    <div className="flex justify-between text-[10px] text-apple-gray font-mono">
                                        <span>Low Intent (1)</span>
                                        <span>High Intent (25+)</span>
                                    </div>
                                </motion.div>

                                {/* Role tier */}
                                <motion.div
                                    variants={childVariants}
                                    custom={2}
                                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3"
                                >
                                    <span className="text-apple-gray text-xs block">Decision Maker Authority</span>
                                    <select
                                        value={roleTier}
                                        onChange={(e) => setRoleTier(e.target.value)}
                                        className="w-full px-3 py-2 rounded-xl bg-[#1c1c1e] text-white text-xs border border-white/[0.08] focus:outline-none cursor-pointer"
                                    >
                                        <option value="VP / C-Level">VP / C-Level Executive (Weight: 40)</option>
                                        <option value="Director / Head">Director / Team Lead (Weight: 30)</option>
                                        <option value="Individual">Individual Contributor (Weight: 15)</option>
                                    </select>
                                    <span className="text-[10px] text-apple-gray block">
                                        Weight assigned via seniority taxonomy.
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Feature Contribution Breakdown */}
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                                <div className="flex items-center justify-between text-xs text-apple-gray mb-1">
                                    <span className="flex items-center gap-1.5">
                                        <IoInformationCircleOutline className="text-apple-blueLight" />
                                        Feature Attribution Contribution
                                    </span>
                                    <span className="font-mono text-white">{totalScore}/100</span>
                                </div>
                                <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden flex gap-0.5">
                                    <div 
                                        style={{ width: `${roleWeight}%` }} 
                                        className="bg-apple-purple transition-all duration-300" 
                                        title={`Role Weight: ${roleWeight} pts`}
                                    />
                                    <div 
                                        style={{ width: `${sizeWeight}%` }} 
                                        className="bg-apple-blue transition-all duration-300" 
                                        title={`Firmographic Size: ${sizeWeight} pts`}
                                    />
                                    <div 
                                        style={{ width: `${visitWeight}%` }} 
                                        className="bg-apple-green transition-all duration-300" 
                                        title={`Velocity: ${visitWeight} pts`}
                                    />
                                </div>
                                <div className="flex flex-wrap gap-4 text-[10px] font-mono text-apple-gray pt-1">
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-apple-purple" /> Authority ({roleWeight} pts)</span>
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-apple-blue" /> Headcount ({sizeWeight} pts)</span>
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-apple-green" /> Velocity ({visitWeight} pts)</span>
                                </div>
                            </div>

                            {/* Score Display Card */}
                            <motion.div
                                layout
                                transition={spring}
                                className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6"
                            >
                                <div className="space-y-1.5 text-center sm:text-left">
                                    <div className="text-[11px] font-mono text-apple-gray uppercase tracking-wider">
                                        Algorithmic Prioritization Tier
                                    </div>
                                    <motion.div
                                        key={leadTier}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-2xl font-bold text-white tracking-tight"
                                    >
                                        {leadTier}
                                    </motion.div>
                                    <p className="text-xs text-apple-gray max-w-md">
                                        <span className="text-apple-blueLight font-medium">Recommended Action:</span> {crmAction}
                                    </p>
                                </div>

                                {/* Circular gauge with animated score */}
                                <div className="flex items-center gap-4 shrink-0">
                                    <div className="relative w-28 h-28 flex items-center justify-center">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle 
                                                cx="50" cy="50" r="38" 
                                                className="stroke-white/[0.08]" 
                                                strokeWidth="7" 
                                                fill="none" 
                                            />
                                            <circle
                                                cx="50" cy="50" r="38"
                                                className={`${totalScore >= 80 ? 'stroke-apple-green' : totalScore >= 60 ? 'stroke-apple-blue' : 'stroke-apple-gray'} transition-all duration-500`}
                                                strokeWidth="7"
                                                strokeDasharray={238.76}
                                                strokeDashoffset={238.76 * (1 - totalScore / 100)}
                                                strokeLinecap="round"
                                                fill="none"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <motion.span 
                                                key={totalScore}
                                                initial={{ scale: 1.15, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                                className={`text-3xl font-bold font-mono tracking-tight ${scoreColor}`}
                                            >
                                                {totalScore}
                                            </motion.span>
                                            <span className="text-[9px] font-mono text-apple-gray uppercase">/ 100</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default InteractivePlayground;
