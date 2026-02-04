import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TaskInputModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAnalyze: (taskDescription: string) => void;
}

export const TaskInputModal: React.FC<TaskInputModalProps> = ({ isOpen, onClose, onAnalyze }) => {
    const [task, setTask] = useState('');

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="w-full max-w-2xl bg-[#0e0e12] border border-[var(--glass-border)] rounded-[var(--radius-lg)] p-8 relative shadow-[0_0_50px_rgba(0,242,234,0.1)]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-8 text-center">
                        <div className="w-16 h-16 bg-[var(--primary-dim)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--primary)] shadow-[0_0_20px_var(--primary-dim)]">
                            <Sparkles size={32} className="text-[var(--primary)]" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Define Your Goal</h2>
                        <p className="text-[var(--text-muted)]">Describe the task you want to delegate. Our engine will build the perfect agent for it.</p>
                    </div>

                    <div className="relative mb-8">
                        <textarea
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="e.g., I need an agent to handle all incoming client emails, answer basic questions using our FAQ, and book meetings if they seem interested..."
                            className="w-full h-40 bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-[var(--radius-md)] p-4 text-lg text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] focus:bg-[rgba(255,255,255,0.05)] transition-all resize-none"
                        />
                    </div>

                    <button
                        disabled={!task.trim()}
                        onClick={() => onAnalyze(task)}
                        className="w-full py-4 bg-[var(--primary)] hover:bg-[#00dcd4] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-lg rounded-[var(--radius-md)] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_var(--primary-dim)]"
                    >
                        <span>Analyze & Build Agent</span>
                        <ArrowRight size={20} />
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
