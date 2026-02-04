import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle, Database, Link, Zap } from 'lucide-react';

interface AgentBuilderOverlayProps {
    onComplete: () => void;
}

const steps = [
    { text: "Analyzing Request Intent...", icon: <Cpu />, duration: 1500 },
    { text: "Matching Template: 'Receptionist Protocol v2'...", icon: <Database />, duration: 1500 },
    { text: "Integrating Calendar API...", icon: <Link />, duration: 1200 },
    { text: "Connecting to Knowledge Base...", icon: <Link />, duration: 1200 },
    { text: "Configuring Response Tone: 'Professional'...", icon: <Zap />, duration: 1000 },
    { text: "Finalizing Build...", icon: <CheckCircle />, duration: 1000 },
];

export const AgentBuilderOverlay: React.FC<AgentBuilderOverlayProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep < steps.length) {
            const timer = setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, steps[currentStep].duration);
            return () => clearTimeout(timer);
        } else {
            setTimeout(onComplete, 500);
        }
    }, [currentStep, onComplete]);

    return (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white p-8 overflow-hidden">
            {/* Advanced Tech Background */}
            <div className="absolute inset-0 bg-[#000510]">
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 242, 234, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 234, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <div className="w-full max-w-xl relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative">
                        <div className="absolute -inset-4 bg-[var(--primary)] opacity-20 blur-xl rounded-full animate-pulse" />
                        <Cpu size={64} className="text-[var(--primary)] relative z-10 mx-auto mb-6" />
                    </div>
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--primary)] to-[var(--secondary)] drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]">
                        Constructing Agent
                    </h2>
                    <p className="text-[var(--text-muted)] mt-4 text-lg">Initializing Neural Pathways...</p>
                </motion.div>

                <div className="space-y-6 pl-8 border-l-2 border-[rgba(255,255,255,0.1)] relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: index <= currentStep ? (index === currentStep ? 1 : 0.4) : 0,
                                x: index <= currentStep ? 0 : -20
                            }}
                            className={`flex items-center gap-6 text-lg transition-all duration-500 ${index === currentStep ? 'text-white scale-105' : 'text-gray-500'}`}
                        >
                            <div className={`
                                w-3 h-3 rounded-full shadow-[0_0_10px_current]
                                ${index < currentStep ? 'bg-[var(--primary)]' :
                                    index === currentStep ? 'bg-[var(--secondary)] animate-pulse' : 'bg-gray-800'}
                            `} />

                            <div className="flex items-center gap-3">
                                <span className="opacity-50 text-sm font-mono">{`0${index + 1}`}</span>
                                <span className={index === currentStep ? 'text-[var(--primary)] font-bold tracking-wide' : ''}>{step.text}</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Active Scan Line */}
                    <motion.div
                        className="absolute left-[-2px] top-0 w-[2px] h-12 bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
                        animate={{ top: `${currentStep * 44}px` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>

                {/* Progress Bar */}
                <div className="mt-16 h-1 w-full bg-gray-900 overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_20px_var(--primary)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    );
};
