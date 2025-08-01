// CgpaForm.jsx
import React from 'react';

const CgpaForm = ({
  studentName,
  setStudentName,
  semesterSubjects,
  addSubject,
  updateSubject,
  removeSubject,
  calculateCgpa,
}) => {
  return (
    <div className="p-6 sm:p-8 bg-[#FEFAE0]/90 backdrop-blur-xl rounded-2xl shadow-xl w-full max-w-5xl space-y-6">
      <form onSubmit={calculateCgpa} className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <label htmlFor="student-name" className="text-lg sm:text-xl font-semibold text-[#283618]">Student Name:</label>
          <input
            id="student-name"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="flex-1 p-3 border-2 border-[#DDA15E] rounded-xl focus:border-[#BC6C25] focus:ring-2 focus:ring-[#BC6C25]/30 transition-all duration-200 text-[#283618] font-medium bg-[#FEFAE0] shadow-sm"
          />
        </div>
        <div className="overflow-x-auto rounded-xl shadow-md border border-[#DDA15E]">
          <table className="min-w-full divide-y divide-[#DDA15E]">
            <thead className="bg-[#606C38]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#FEFAE0] uppercase tracking-wider">Subject</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-[#FEFAE0] uppercase tracking-wider">Credits</th>
                <th colSpan="3" className="text-center text-xs font-bold text-[#FEFAE0] uppercase tracking-wider border-l border-r border-[#DDA15E]">CE (100)</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-[#FEFAE0] uppercase tracking-wider border-r border-[#DDA15E]">LPW (100)</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-[#FEFAE0] uppercase tracking-wider border-r border-[#DDA15E]">SEE (100)</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-[#FEFAE0] uppercase tracking-wider">Actions</th>
              </tr>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]"></th>
                <th className="px-4 py-2 text-left text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]"></th>
                <th className="px-2 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]">Assignment (30)</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]">Class Test (20)</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]">Sessional (50)</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]">Lab File (100)</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]">Exam (40)</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-[#FEFAE0] uppercase tracking-wider bg-[#283618]"></th>
              </tr>
            </thead>
            <tbody className="bg-[#FEFAE0] divide-y divide-[#DDA15E]">
              {semesterSubjects.map((subject, index) => (
                <tr key={index} className="hover:bg-[#DDA15E]/20 transition-all duration-200">
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={subject.name}
                      onChange={(e) => updateSubject(index, 'name', e.target.value)}
                      placeholder="Subject Name"
                      className="w-full p-2 border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={subject.credits}
                      onChange={(e) => updateSubject(index, 'credits', e.target.value)}
                      placeholder="Cr"
                      min="1"
                      max="6"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="number"
                      value={subject.ceAssignment}
                      onChange={(e) => updateSubject(index, 'ceAssignment', e.target.value)}
                      placeholder="30"
                      max="30"
                      min="0"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="number"
                      value={subject.ceClassTest}
                      onChange={(e) => updateSubject(index, 'ceClassTest', e.target.value)}
                      placeholder="20"
                      max="20"
                      min="0"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <input
                      type="number"
                      value={subject.ceSessional}
                      onChange={(e) => updateSubject(index, 'ceSessional', e.target.value)}
                      placeholder="50"
                      max="50"
                      min="0"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={subject.lpwLabFile}
                      onChange={(e) => updateSubject(index, 'lpwLabFile', e.target.value)}
                      placeholder="100"
                      max="100"
                      min="0"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={subject.seeExam}
                      onChange={(e) => updateSubject(index, 'seeExam', e.target.value)}
                      placeholder="40"
                      max="40"
                      min="0"
                      className="w-16 p-2 text-center border-none rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-[#BC6C25] text-[#283618]"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button type="button" onClick={() => removeSubject(index)} className="text-[#BC6C25] hover:text-[#283618] transition-all duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <button
            type="button"
            onClick={addSubject}
            className="px-6 py-3 bg-[#DDA15E] text-[#283618] font-semibold rounded-xl hover:bg-[#BC6C25] hover:text-[#FEFAE0] transition-all duration-200 shadow-md flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <span>Add Subject</span>
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-[#606C38] text-[#FEFAE0] font-bold rounded-xl hover:bg-[#283618] transition-all duration-200 shadow-lg transform hover:scale-105"
          >
            Calculate CGPA
          </button>
        </div>
      </form>
    </div>
  );
};

export default CgpaForm;