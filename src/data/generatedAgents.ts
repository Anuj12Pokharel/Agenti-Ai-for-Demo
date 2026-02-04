import type { Agent } from '../components/AgentCard';
import { mockAgents as initialMockAgents } from './agents'; // Renaming for clarity if needed, or just append

export const receptionistAgent: Agent = {
    id: 'generated-1',
    name: 'Aura Assistant',
    role: 'Client Liaison',
    status: 'active',
    efficiency: 100,
    tasksCompleted: 0,
    avatar: 'https://images.unsplash.com/photo-1642398687776-888e3678385e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    demoLogs: [
        "Monitoring inbox: support@lifescience.ai...",
        "New Thread detected: 'Inquiry about Enterprise Plan' from dr.smith@research.org",
        "Analyzing sentiment: Interested (0.89)",
        "Extracting intent: Request for Demo",
        "Checking Calendar (Google API)...",
        "Slot found: Tuesday, 10:00 AM EST.",
        "Composing reply with booking link...",
        "Sent."
    ],
    demoResult: {
        type: 'report',
        title: 'Meeting Booked',
        content: "Successfully engaged with Dr. Smith. Meeting scheduled for Tuesday 10:00 AM. Added to CRM as 'Warm Lead'."
    }
};

export { initialMockAgents };
