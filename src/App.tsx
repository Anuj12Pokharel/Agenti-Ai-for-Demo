import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="flex h-screen w-full bg-[var(--bg-dark)] text-white font-sans selection:bg-[var(--primary)] selection:text-black">
      <Sidebar />
      <main className="flex-1 h-full relative z-10">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
