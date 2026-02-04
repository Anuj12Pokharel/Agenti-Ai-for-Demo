import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Settings, 
  LifeBuoy 
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => (
  <div 
    className={`
      flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 group
      ${active 
        ? 'bg-gradient-to-r from-[rgba(0,242,234,0.1)] to-transparent border-l-2 border-[var(--primary)]' 
        : 'hover:bg-[var(--glass-bg)] hover:pl-4 opacity-70 hover:opacity-100'}
    `}
  >
    <div className={`${active ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] group-hover:text-white'}`}>
      {icon}
    </div>
    <span className={`font-medium ${active ? 'text-white' : 'text-[var(--text-muted)] group-hover:text-white'}`}>
      {label}
    </span>
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full glass-panel flex flex-col p-6 rounded-r-[var(--radius-lg)] border-l-0 z-50">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex-center shadow-[0_0_15px_var(--primary)]">
          <Activity size={18} className="text-black" />
        </div>
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-[var(--primary)]">AETHER</span>
          <span className="text-white opacity-50">.AI</span>
        </h1>
      </div>

      <div className="space-y-2 flex-1">
        <SidebarItem icon={<LayoutDashboard size={20} />} label="Command Center" active />
        <SidebarItem icon={<Users size={20} />} label="Agent Fleet" />
        <SidebarItem icon={<Activity size={20} />} label="Analytics" />
      </div>

      <div className="mt-auto space-y-2 pt-6 border-t border-[var(--glass-border)]">
        <SidebarItem icon={<Settings size={20} />} label="Configuration" />
        <SidebarItem icon={<LifeBuoy size={20} />} label="Support" />
      </div>
    </div>
  );
};
