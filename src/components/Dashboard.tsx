import React, { useState } from 'react';
import { AgentCard, type Agent } from './AgentCard';
import { AgentExecutionModal } from './AgentExecutionModal';
import { TaskInputModal } from './TaskInputModal';
import { AgentBuilderOverlay } from './AgentBuilderOverlay';
import { mockAgents } from '../data/agents';
import { receptionistAgent } from '../data/generatedAgents';
import { Plus, Search, Filter } from 'lucide-react';

export const Dashboard: React.FC = () => {
    const [agents, setAgents] = useState<Agent[]>(mockAgents);
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isBuilding, setIsBuilding] = useState(false);

    // Flow: Task Input -> Analyze -> Build Animation -> Add Agent
    const handleAnalyzeTask = (task: string) => {
        setIsTaskModalOpen(false);
        setIsBuilding(true);
    };

    const handleBuildComplete = () => {
        // Add the new generated agent
        setAgents(prev => [receptionistAgent, ...prev]);
        setIsBuilding(false);
    };

    return (
        <div className="flex-1 h-full overflow-hidden flex flex-col relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="p-8 pb-0">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Agent Command Center</h2>
                        <p className="text-[var(--text-muted)]">Monitor and manage your autonomous workforce</p>
                    </div>
                    <button
                        onClick={() => setIsTaskModalOpen(true)}
                        className="flex items-center gap-2 bg-[var(--primary)] text-black px-5 py-3 rounded-[var(--radius-md)] font-bold hover:shadow-[0_0_20px_var(--primary-dim)] transition-all cursor-pointer"
                    >
                        <Plus size={20} />
                        Deploy New Agent
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                        <input
                            type="text"
                            placeholder="Search agents..."
                            className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-[var(--radius-sm)] py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-[var(--radius-sm)] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-8 pt-0 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                    {agents.map(agent => (
                        <AgentCard
                            key={agent.id}
                            agent={agent}
                            onViewLogs={(agent) => setSelectedAgent(agent)}
                        />
                    ))}
                </div>
            </div>

            <AgentExecutionModal
                agent={selectedAgent}
                onClose={() => setSelectedAgent(null)}
            />

            <TaskInputModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                onAnalyze={handleAnalyzeTask}
            />

            {isBuilding && (
                <AgentBuilderOverlay onComplete={handleBuildComplete} />
            )}
        </div>
    );
};
