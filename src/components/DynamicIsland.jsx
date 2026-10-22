import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';

const DynamicIsland = ({ notification, onDismiss }) => {
    return (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[150] pointer-events-none flex justify-center w-full max-w-sm px-4">
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: -25 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: -25 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 30 
                        }}
                        onClick={onDismiss}
                        className="pointer-events-auto bg-[#1c1c1e]/95 text-white border border-white/[0.16] shadow-2xl rounded-full px-4 py-2.5 flex items-center gap-3 backdrop-blur-2xl cursor-pointer hover:bg-[#252528] transition-colors"
                    >
                        {/* Dynamic Icon */}
                        {notification.icon && (
                            <div className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center text-sm flex-shrink-0">
                                {notification.icon}
                            </div>
                        )}

                        <div className="flex-1 min-w-0 pr-1">
                            <div className="text-xs font-semibold tracking-tight text-white truncate flex items-center gap-1.5">
                                <span>{notification.title}</span>
                                {notification.badge && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-apple-blue/20 text-apple-blueLight border border-apple-blue/30">
                                        {notification.badge}
                                    </span>
                                )}
                            </div>
                            {notification.message && (
                                <div className="text-[11px] text-apple-gray truncate">
                                    {notification.message}
                                </div>
                            )}
                        </div>

                        <span className="text-apple-grayMuted hover:text-white text-xs p-1">
                            <IoCloseOutline />
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DynamicIsland;
