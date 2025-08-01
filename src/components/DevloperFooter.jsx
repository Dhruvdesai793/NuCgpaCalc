import React from 'react';

const DeveloperFooter = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6">
      <div className="flex items-center gap-6 sm:gap-8 glass-dock px-8 py-4 rounded-full animate-fade-in">
        <h1 className="text-lg sm:text-xl font-extrabold text-[var(--accent)] tracking-tighter uppercase">NU CGPA Calc</h1>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="https://github.com/Dhruvdesai793" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--text)] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/dhruv-desai-b0779b370/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--text)] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://x.com/blixture793" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--text)] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153 13.916 9.5 21.5 22h-4.321l-5.696-8.794L5.64 22H0l7.986-12.92L0 1.153h5.056l4.248 6.037L13.56 1.153h5.341z"/>
            </svg>
          </a>
        </div>
        <p className="text-sm sm:text-base font-medium text-[var(--text)]/90">by Dhruv Desai</p>
        <a href="https://github.com/Dhruvdesai793/NuCgpaCalc" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium text-[var(--accent)] hover:text-[var(--text)] transition-all duration-300 transform hover:scale-110">Check Source Code</a>
      </div>
    </nav>
  );
};

export default DeveloperFooter;