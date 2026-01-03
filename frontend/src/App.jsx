import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TerminalComponent from './components/TerminalComponent';
import './App.css';

function App() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(1);
  const [activeTab, setActiveTab] = useState('curriculum');
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(false);

  const workshops = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    const fetchWorkshop = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/workshops/${selectedWorkshop}`);
        if (response.ok) {
          const data = await response.json();
          setMarkdownContent(data.content);
        } else {
          setMarkdownContent('# Workshop not found');
        }
      } catch (error) {
        console.error('Error fetching workshop:', error);
        setMarkdownContent('# Error loading workshop content. Ensure the server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [selectedWorkshop]);

  return (
    <div className="flex h-screen bg-[#0d1117] text-gray-300 overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-[#161b22] border-r border-gray-800 flex flex-col shrink-0 font-sans">
        <div className="p-4 pb-2">
          <h1 className="text-lg font-bold text-gray-200 mb-4">Claude Code Curriculum</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-[#0d1117] border border-gray-700 rounded text-sm px-3 py-1.5 text-gray-300 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <svg className="w-4 h-4 absolute right-3 top-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2 px-4 custom-scrollbar">
          <div className="space-y-1">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 mt-2">Workshops</div>
            {workshops.map((num) => (
              <button
                key={num}
                onClick={() => setSelectedWorkshop(num)}
                className={`w-full text-left py-1.5 text-sm transition-colors duration-200 block ${
                  selectedWorkshop === num
                    ? 'text-orange-500 font-bold'
                    : 'text-gray-400 hover:text-gray-200 hover:underline'
                }`}
              >
                <span className="mr-2">{num}.</span>
                Workshop {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0d1117]">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 bg-[#161b22]">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-4 py-3 text-xs font-medium focus:outline-none transition-colors flex items-center gap-2 ${
              activeTab === 'curriculum'
                ? 'text-white border-b-2 border-orange-500 bg-[#0d1117]'
                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-4 py-3 text-xs font-medium focus:outline-none transition-colors flex items-center gap-2 ${
              activeTab === 'terminal'
                ? 'text-white border-b-2 border-orange-500 bg-[#0d1117]'
                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Claude Code Terminal
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative">
          <div className={`h-full overflow-y-auto p-8 bg-[#0d1117] custom-scrollbar ${activeTab === 'curriculum' ? 'block' : 'hidden'}`}>
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 prose-code:text-orange-300 prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-gray-800">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
                </div>
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdownContent}
                </ReactMarkdown>
              )}
            </div>
          </div>

          <div className={`h-full bg-[#0d1117] p-0 ${activeTab === 'terminal' ? 'block' : 'hidden'}`}>
            <TerminalComponent workshopId={selectedWorkshop} isVisible={activeTab === 'terminal'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

