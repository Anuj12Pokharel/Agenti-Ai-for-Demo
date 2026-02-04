import React from 'react';
import {
    Activity,
    Clock,
    MoreVertical,
    Zap
} from 'lucide-react';

export interface Agent {
    id: string;
    name: string;
    role: string;
    status: 'active' | 'idle' | 'processing' | 'error';
    efficiency: number;
    tasksCompleted: number;
    avatar: string;
    // Demo simulation data
    demoLogs?: string[];
    demoResult?: {
        type: 'report' | 'chart' | 'alert';
        title: string;
        content: string;
    };
}

interface AgentCardProps {
    agent: Agent;
    onViewLogs?: (agent: Agent) => void;
}

const getStatusColor = (status: Agent['status']) => {
    switch (status) {
        case 'active': return 'text-[var(--primary)]';
        case 'processing': return 'text-[var(--secondary)]';
        case 'error': return 'text-[var(--accent)]';
        default: return 'text-[var(--text-muted)]';
    }
};

const getStatusGlow = (status: Agent['status']) => {
    switch (status) {
        case 'active': return 'shadow-[0_0_10px_var(--primary-dim)] border-[var(--primary)]';
        case 'processing': return 'shadow-[0_0_10px_rgba(112,0,255,0.2)] border-[var(--secondary)]';
        case 'error': return 'shadow-[0_0_10px_rgba(255,0,85,0.2)] border-[var(--accent)]';
        default: return 'border-[var(--glass-border)]';
    }
};

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onViewLogs }) => {
    return (
        <div className={`glass-panel p-5 rounded-[var(--radius-md)] relative group transition-all duration-300 hover:scale-[1.02] hover:bg-[rgba(255,255,255,0.05)] border ${getStatusGlow(agent.status)}`}>
            <div className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white cursor-pointer">
                <MoreVertical size={18} />
            </div>

            <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--glass-border)] group-hover:border-[var(--primary)] transition-colors">
                    <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-[var(--primary)] transition-colors">{agent.name}</h3>
                    <span className="text-xs font-medium text-[var(--primary)] bg-[var(--primary-dim)] px-2 py-0.5 rounded-full inline-block mt-1">
                        {agent.role}
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <Activity size={14} />
                        <span>Status</span>
                    </div>
                    <span className={`font-semibold capitalize flex items-center gap-2 ${getStatusColor(agent.status)}`}>
                        <span className={`w-2 h-2 rounded-full bg-current animate-pulse`} />
                        {agent.status}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <Zap size={14} />
                        <span>Efficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                                style={{ width: `${agent.efficiency}%` }}
                            />
                        </div>
                        <span className="font-bold text-white">{agent.efficiency}%</span>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-[var(--text-muted)]">
                        <Clock size={14} />
                        <span>Tasks Done</span>
                    </div>
                    <span className="font-bold text-white">{agent.tasksCompleted}</span>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex gap-2">
                <button
                    onClick={() => onViewLogs?.(agent)}
                    className="flex-1 py-2 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] hover:bg-[var(--primary)] hover:text-black text-xs font-bold transition-all uppercase tracking-wide cursor-pointer"
                >
                    Live Demo
                </button>
                <button className="flex-1 py-2 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] hover:bg-[var(--secondary)] hover:text-white text-xs font-bold transition-all uppercase tracking-wide cursor-pointer">
                    Assign
                </button>
            </div>
        </div>
    );
};
