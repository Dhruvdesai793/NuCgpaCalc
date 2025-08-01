// CgpaResults.jsx
import React from 'react';

const CgpaResults = ({
  cgpa,
  studentName,
  shareImage,
  onGenerateImage,
  onDownloadImage,
  onRecalculate,
  loading,
  shareCardRef,
}) => {
  return (
    <div className="p-6 sm:p-8 bg-[#FEFAE0]/90 backdrop-blur-xl rounded-2xl shadow-xl w-full max-w-lg space-y-6 flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#606C38]">CGPA Result</h2>
      <p className="text-xl sm:text-2xl font-semibold text-[#283618] mt-4">
        Hey {studentName || 'Student'}, your CGPA is:
      </p>
      <div className="bg-[#606C38] text-[#FEFAE0] rounded-full h-32 w-32 sm:h-40 sm:w-40 flex items-center justify-center shadow-xl">
        <span className="text-5xl sm:text-6xl font-black">{cgpa}</span>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 w-full">
        <button
          onClick={onGenerateImage}
          className="px-6 py-3 bg-[#DDA15E] text-[#283618] font-semibold rounded-xl shadow-md hover:bg-[#BC6C25] hover:text-[#FEFAE0] transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-[#FEFAE0]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
              <span>Generate Share Image</span>
            </>
          )}
        </button>
        <button
          onClick={onRecalculate}
          className="px-6 py-3 bg-[#DDA15E] text-[#283618] font-semibold rounded-xl shadow-md hover:bg-[#BC6C25] hover:text-[#FEFAE0] transition-all duration-200 transform hover:scale-105"
        >
          Recalculate
        </button>
      </div>
      {shareImage && (
        <div className="mt-8 space-y-4 w-full">
          <div className="bg-[#DDA15E]/20 p-4 rounded-xl shadow-inner">
            <img src={shareImage} alt="CGPA Result" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button onClick={onDownloadImage} className="px-6 py-3 bg-[#606C38] text-[#FEFAE0] font-semibold rounded-xl shadow-lg hover:bg-[#283618] transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Download Image</span>
            </button>
            <a href={`https://twitter.com/intent/tweet?text=Just calculated my CGPA for B.Tech at Nirma University! My CGPA is ${cgpa}. Check out the app here: [App Link]`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#606C38] text-[#FEFAE0] font-semibold rounded-xl shadow-lg hover:bg-[#283618] transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153 13.916 9.5 21.5 22h-4.321l-5.696-8.794L5.64 22H0l7.986-12.92L0 1.153h5.056l4.248 6.037L13.56 1.153h5.341z"/></svg>
              <span>Share on X</span>
            </a>
            <a href={`https://wa.me/?text=Just calculated my CGPA for B.Tech at Nirma University! My CGPA is ${cgpa}. Check out the app here: [App Link]`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#606C38] text-[#FEFAE0] font-semibold rounded-xl shadow-lg hover:bg-[#283618] transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.956.55 3.864 1.597 5.53l-1.39 5.372 5.516-1.44C10.136 21.45 12 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.27 12.33c-.223-.111-.876-.433-1.01-.483-.135-.05-.23-.075-.325.075-.095.15-.367.483-.45.58-.083.095-.166.106-.31.03-.14-.075-.59-.215-1.127-.695-.417-.375-.7-.83-.787-.97-.087-.135-.01-.21.066-.3-.06-.067-.145-.16-.217-.25-.075-.09-.04-.15-.01-.215.025-.067.2-.508.275-.6.075-.09.037-.16-.018-.225-.054-.067-.23-.55-.316-.76-.087-.21-.18-.18-.25-.18-.072 0-.155-.008-.238-.008-.083 0-.21.03-.32.16-.11.135-.42 1.3-.42 1.58 0 .28.43.71.49.79.06.08.835 1.442 2.01 1.96.16.07.29.11.39.14.47.16 1.07.45 1.29.58.21.117.33.097.45.065.12-.03.88-.36 1.008-.705.128-.35.128-.65.09-.705-.035-.05-.13-.075-.27-.15z"/></svg>
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
      <div ref={shareCardRef} className="absolute inset-0 -z-50 opacity-0 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-[#606C38] to-[#283618] rounded-3xl shadow-xl transform scale-125 text-[#FEFAE0]">
        <div className="absolute top-8 left-8 text-[#FEFAE0]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
            <path d="M12 2L1 12H5.6L5.6 22H18.4V12H23L12 2Z" fill="#FEFAE0" stroke="#FEFAE0" strokeWidth="1"/>
          </svg>
        </div>
        <div className="text-center space-y-4">
          <p className="text-lg font-medium tracking-wide text-[#DDA15E]">Congratulations!</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter">Your CGPA</h1>
          <p className="text-7xl sm:text-8xl font-black drop-shadow-lg">{cgpa}</p>
          <p className="text-xl sm:text-2xl font-bold mt-4">{studentName}</p>
        </div>
        <p className="absolute bottom-8 right-8 text-[#DDA15E] font-semibold text-sm">Nirma University CGPA Calculator</p>
      </div>
    </div>
  );
};

export default CgpaResults;