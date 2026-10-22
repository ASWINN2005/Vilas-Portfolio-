import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Pure OLED Black Base */}
            <div className="absolute inset-0 bg-black" />

            {/* Atmospheric Specular Light Cones */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.18),transparent_70%)] blur-[120px] rounded-full"
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute top-[40%] -right-[15%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(191,90,242,0.1),transparent_70%)] blur-[140px] rounded-full"
            />

            <motion.div
                className="absolute bottom-[10%] -left-[10%] w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(41,151,255,0.08),transparent_70%)] blur-[130px] rounded-full"
            />

            {/* Subtle Micro-Dot Grid */}
            <div 
                className="absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Subtle Vignette Gradient for cinematic depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
        </div>
    );
};

export default Background;
