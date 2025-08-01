// DeveloperFooter.jsx
import React from 'react';

const DeveloperFooter = () => {
  return (
    <footer className="mt-12 w-full text-center text-[#DDA15E]">
      <p className="text-lg font-medium">Developed by Dhruv Desai</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/Dhruvdesai793" target="_blank" rel="noopener noreferrer" className="text-[#DDA15E] hover:text-[#FEFAE0] transition-all duration-200 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/dhruv-desai-b0779b370/" target="_blank" rel="noopener noreferrer" className="text-[#DDA15E] hover:text-[#FEFAE0] transition-all duration-200 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://x.com/blixture793" target="_blank" rel="noopener noreferrer" className="text-[#DDA15E] hover:text-[#FEFAE0] transition-all duration-200 transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153 13.916 9.5 21.5 22h-4.321l-5.696-8.794L5.64 22H0l7.986-12.92L0 1.153h5.056l4.248 6.037L13.56 1.153h5.341z"/></svg>
        </a>
      </div>
    </footer>
  );
};

export default DeveloperFooter;