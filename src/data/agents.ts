import type { Agent } from '../components/AgentCard';

export const mockAgents: Agent[] = [
    {
        id: '1',
        name: 'Nexus Prime',
        role: 'Lead Researcher',
        status: 'active',
        efficiency: 98,
        tasksCompleted: 1243,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Initializing research protocols v4.2...",
            "Scanning internal knowledge base for 'CRISPR off-target effects'...",
            "Connecting to PubMed API via FortyTwoLabs Gateway...",
            "Analyzing 14,200 abstracts...",
            "Identified 3 potential matches with >95% relevance.",
            "Cross-referencing with project milestones...",
            "Drafting summary report..."
        ],
        demoResult: {
            type: 'report',
            title: 'Research Summary: CRISPR Safety',
            content: "Analysis completed. Identified 3 critical papers suggesting new off-target mitigation strategies using Cas13d. Recommended action: Schedule review with Core Science Team."
        }
    },
    {
        id: '7',
        name: 'AutoRespond Bot',
        role: 'Client Support',
        status: 'active',
        efficiency: 100,
        tasksCompleted: 8540,
        avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Detecting new message: 'What are your enterprise pricing tiers?'...",
            "Analyzing intent: PRICING_INQUIRY (Context: Enterprise)...",
            "Retrieving latest pricing sheet from Notion Database...",
            "Drafting response with Enterprise Plan details...",
            "Adding 'Schedule a Demo' CTA...",
            "Checking tone: Helpful & Professional...",
            "Message sent."
        ],
        demoResult: {
            type: 'report',
            title: 'Inquiry Resolved',
            content: "Successfully answered enterprise pricing query. Response time: 230ms. User marked query as 'Helpful'. Engagement score +5."
        }
    },
    {
        id: '8',
        name: 'Scheduler AI',
        role: 'Meeting Coordinator',
        status: 'processing',
        efficiency: 91,
        tasksCompleted: 342,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Parsing email thread: 'Re: Project Kickoff'...",
            "Identifying requested time: 'Next Tuesday afternoon'...",
            "Cross-referencing Calendars: [Dr. Chen, Pm. Sarah, Dev. Team]...",
            "Conflict detected: Dr. Chen busy 2pm-3pm...",
            "Proposing slot: Tuesday 3:30pm - 4:30pm...",
            "Sending invites via Google Calendar...",
            "Waiting for acceptances..."
        ],
        demoResult: {
            type: 'alert',
            title: 'Meeting Scheduled',
            content: "Project Kickoff confined for Tuesday, October 12th at 3:30 PM. Invites sent to 5 participants. Zoom link generated."
        }
    },
    {
        id: '2',
        name: 'Vortex Analyst',
        role: 'Data Scientist',
        status: 'processing',
        efficiency: 92,
        tasksCompleted: 856,
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Connecting to clinical trial dataset (Phase III)...",
            "Running outlier detection using Isolation Forest...",
            "Detected 12 anomalies in patient vitals...",
            "Correlation analysis with medication dosage...",
            "Generating visualization...",
            "Uploading outcome probabilities to Make.com webhook..."
        ],
        demoResult: {
            type: 'chart',
            title: 'Anomaly Detection Report',
            content: "12 Anomalies detected in Cohort B. High correlation (r=0.85) with dosage increase at week 4. Visualization ready for review."
        }
    },
    {
        id: '3',
        name: 'Echo Sentry',
        role: 'Security Monitor',
        status: 'idle',
        efficiency: 100,
        tasksCompleted: 42,
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "System Check: Security Perimeter... OK",
            "Scanning access logs (Last 24h)...",
            "Pattern matching for brute-force attempts...",
            "No threats detected.",
            "Entering standby mode."
        ],
        demoResult: {
            type: 'alert',
            title: 'Security Audit Passed',
            content: "All systems nominal. Zero intrusion attempts detected in the last 24 hours. Next scheduled complete scan in 4 hours."
        }
    },
    {
        id: '4',
        name: 'Nova Medic',
        role: 'Clinical Assistant',
        status: 'active',
        efficiency: 88,
        tasksCompleted: 3120,
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Accessing Patient #88392 records...",
            "Parsing natural language notes from last consultation...",
            "Extracting symptoms: 'Persistent fatigue', 'Vertigo'...",
            "Matching against ontology...",
            "Suggesting follow-up panel: Thyroid Function Test."
        ],
        demoResult: {
            type: 'report',
            title: 'Patient Intake Summary',
            content: "Symptoms extracted and coded. Recommended follow-up: Thyroid Panel & B12 screening. Appointment availability checked: Tomorrow 10:00 AM."
        }
    },
    {
        id: '6',
        name: 'Zenith Coordinator',
        role: 'Project Manager',
        status: 'idle',
        efficiency: 95,
        tasksCompleted: 156,
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Checking team velocity...",
            "Sprint goal completion at 78%...",
            "Identifying blockers for 'Module X'...",
            "Sending slack reminders to assignees...",
            "Updating Jira board..."
        ],
        demoResult: {
            type: 'report',
            title: 'Daily Standup Summary',
            content: "Sprint is on track. 2 blockers identified and escalated. Daily report distributed to slack channel #engineering."
        }
    },
    {
        id: '9a',
        name: 'Digital Twin (Personal)',
        role: 'Life Companion',
        status: 'active',
        efficiency: 99,
        tasksCompleted: 42,
        avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c426d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Status: Standby (Pocket Mode)...",
            "Audio Input Detected: 'Aether Awake' [SECRET CODE RECOGNIZED]",
            "Authenticating Voice Print... Verified.",
            "Selecting Profile: PERSONAL MODE...",
            "Context: Weekend approaching (Friday 4pm).",
            "Checking Hobbies Database: 'Surfing', 'Meditation'.",
            "Scanning Travel APIs: Found 3 flights to Bali...",
            "Well-being Nudge: 'Time for 10min mindfulness'.",
            "Drafting itinerary: 'Surf & Zen Weekend'..."
        ],
        demoResult: {
            type: 'report',
            title: 'Personal Mode: Weekend Plan',
            content: "Itinerary created: Bali Surf Trip. Flight options sent to phone. Meditation app launched. 'Parenting Advice' podcast queued for flight."
        }
    },
    {
        id: '9b',
        name: 'Digital Twin (Work)',
        role: 'Executive Assistant',
        status: 'idle',
        efficiency: 98,
        tasksCompleted: 128,
        avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c426d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        demoLogs: [
            "Status: Standby (Pocket Mode)...",
            "Audio Input Detected: 'Aether Awake' [SECRET CODE RECOGNIZED]",
            "Authenticating Voice Print... Verified.",
            "Selecting Profile: WORK MODE...",
            "Syncing Google Calendar & Jira...",
            "Upcoming: 'Board Meeting' in 15 mins.",
            "Pulling relevant documents: 'Q3 Financials.pdf'...",
            "Micro-learning Nudge: 'Effective Negotiation' (3 mins).",
            "Drafting meeting agenda..."
        ],
        demoResult: {
            type: 'report',
            title: 'Work Mode: Meeting Prep',
            content: "Ready for Board Meeting. Documents pre-loaded. Agenda circulated. Micro-learning completed. 'Focus Mode' activated on devices."
        }
    }
];
