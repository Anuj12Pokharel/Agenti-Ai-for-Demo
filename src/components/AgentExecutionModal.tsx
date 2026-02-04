import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, CheckCircle, FileText, AlertTriangle, Activity } from 'lucide-react';
import type { Agent } from './AgentCard';
import { motion, AnimatePresence } from 'framer-motion';

interface AgentExecutionModalProps {
    agent: Agent | null;
    onClose: () => void;
}

export const AgentExecutionModal: React.FC<AgentExecutionModalProps> = ({ agent, onClose }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Reset state when agent changes
    useEffect(() => {
        if (agent) {
            setLogs([]);
            setIsComplete(false);

            const allLogs = agent.demoLogs || ["Initializing..."];
            let currentLogIndex = 0;

            const interval = setInterval(() => {
                if (currentLogIndex < allLogs.length) {
                    setLogs(prev => [...prev, allLogs[currentLogIndex]]);
                    currentLogIndex++;
                } else {
                    setIsComplete(true);
                    clearInterval(interval);
                }
            }, 1000); // Add a log every second

            return () => clearInterval(interval);
        }
    }, [agent]);

    // Auto-scroll to bottom of logs
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    if (!agent) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-4xl bg-[#0e0e12] border border-[var(--glass-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[600px]"
                >
                    {/* Header (Mobile only) / Close Button */}
                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Left Panel: Execution Stream */}
                    <div className="flex-1 flex flex-col p-6 border-r border-[var(--glass-border)] bg-[#050507]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full border border-[var(--glass-border)] overflow-hidden">
                                <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">{agent.name}</h3>
                                <div className="flex items-center gap-2 text-xs text-[var(--primary)]">
                                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                                    LIVE EXECUTION
                                </div>
                            </div>
                        </div>

                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto font-mono text-sm space-y-3 pr-2 custom-scrollbar"
                        >
                            {logs.map((log, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex gap-3 text-[var(--text-muted)]"
                                >
                                    <span className="text-[var(--primary)] opacity-50">[{new Date().toLocaleTimeString()}]</span>
                                    <span>{log}</span>
                                </motion.div>
                            ))}
                            {!isComplete && (
                                <div className="flex gap-2 items-center text-[var(--text-muted)] mt-4 animate-pulse">
                                    <span className="w-2 h-4 bg-[var(--primary)] block" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel: Live Result */}
                    <div className="flex-1 p-8 bg-[var(--bg-card)] flex flex-col relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--secondary)] opacity-[0.05] rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Terminal size={20} className="text-[var(--secondary)]" />
                            Output Console
                        </h3>

                        <div className="flex-1 flex items-center justify-center">
                            {!isComplete ? (
                                <div className="text-center">
                                    <div className="w-16 h-16 border-4 border-[var(--glass-border)] border-t-[var(--secondary)] rounded-full animate-spin mx-auto mb-6" />
                                    <h4 className="text-lg font-medium text-white mb-2">MyAI is thinking...</h4>
                                    <p className="text-[var(--text-muted)] text-sm mb-8">Processing high-dimensional data streams</p>

                                    {/* Fake "Metrics" that animate */}
                                    <div className="grid grid-cols-2 gap-4 text-left w-full max-w-[200px] mx-auto opacity-70">
                                        <div className="bg-[randint(0,10)]">
                                            <div className="text-xs text-[var(--text-muted)]">Tokens</div>
                                            <div className="font-mono text-[var(--primary)]">{logs.length * 142}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-[var(--text-muted)]">Latency</div>
                                            <div className="font-mono text-[var(--secondary)]">42ms</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-[var(--radius-md)] p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4 text-[var(--primary)]">
                                        {agent.demoResult?.type === 'alert' ? <AlertTriangle size={24} className="text-[var(--accent)]" /> :
                                            agent.demoResult?.type === 'chart' ? <Activity size={24} /> :
                                                <FileText size={24} />}
                                        <span className="font-bold text-lg text-white">{agent.demoResult?.title || "Execution Complete"}</span>
                                    </div>

                                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                                        {agent.demoResult?.content || "Task completed successfully."}
                                    </p>

                                    <div className="flex gap-3">
                                        <button className="flex-1 py-2 rounded-[var(--radius-sm)] bg-[var(--primary)] text-black font-bold text-sm hover:opacity-90 transition-opacity">
                                            Download Report
                                        </button>
                                        <button className="flex-1 py-2 rounded-[var(--radius-sm)] border border-[var(--glass-border)] text-white font-bold text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                                            View Source
                                        </button>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                                        <div className="flex items-center gap-1">
                                            <CheckCircle size={12} className="text-green-500" />
                                            <span>Verified by Cortex</span>
                                        </div>
                                        <span>{(logs.length * 1.2).toFixed(1)}s execution time</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
