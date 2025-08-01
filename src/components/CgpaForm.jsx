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
    <div className="p-8 sm:p-12 glass-card w-[94vw] max-w-6xl space-y-8 animate-slide-up">
      <form onSubmit={calculateCgpa} className="space-y-8 ">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <label htmlFor="student-name" className="text-xl sm:text-2xl font-bold text-[var(--accent)]">Student Name:</label>
          <input
            id="student-name"
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="flex-1 p-4 text-[var(--secondary)] bg-transparent border-2 border-[var(--accent)]/30 rounded-2xl focus:border-[var(--hover)] focus:ring-4 focus:ring-[var(--hover)]/20 transition-all duration-300"
          />
        </div>
        <div className="overflow-x-auto glass-dock rounded-3xl shadow-2xl">
          <table className="min-w-full divide-y divide-[var(--accent)]/30">
            <thead className="bg-[var(--primary)]/80">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-[var(--text)] uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-[var(--text)] uppercase tracking-wider">Credits</th>
                <th colSpan="3" className="text-center text-sm font-bold text-[var(--text)] uppercase tracking-wider border-l border-r border-[var(--accent)]/30">CE (100)</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-[var(--text)] uppercase tracking-wider border-r border-[var(--accent)]/30">LPW (100)</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-[var(--text)] uppercase tracking-wider border-r border-[var(--accent)]/30">SEE (100)</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-[var(--text)] uppercase tracking-wider">Actions</th>
              </tr>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50"></th>
                <th className="px-3 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50">Assignment (30)</th>
                <th className="px-3 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50">Class Test (20)</th>
                <th className="px-3 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50">Sessional (50)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50">Lab File (100)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50">Exam (40)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-[var(--text)]/80 uppercase tracking-wider bg-[var(--secondary)]/50"></th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-[var(--accent)]/20">
              {semesterSubjects.map((subject, index) => (
                <tr key={index} className="hover:bg-[var(--accent)]/10 transition-all duration-300">
                  <td className="px-6 py-3">
                    <input
                      type="text"
                      value={subject.name}
                      onChange={(e) => updateSubject(index, 'name', e.target.value)}
                      placeholder="Subject Name"
                      className="w-full p-2 bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={subject.credits}
                      onChange={(e) => updateSubject(index, 'credits', e.target.value)}
                      placeholder="Cr"
                      min="1"
                      max="6"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="number"
                      value={subject.ceAssignment}
                      onChange={(e) => updateSubject(index, 'ceAssignment', e.target.value)}
                      placeholder="30"
                      max="30"
                      min="0"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="number"
                      value={subject.ceClassTest}
                      onChange={(e) => updateSubject(index, 'ceClassTest', e.target.value)}
                      placeholder="20"
                      max="20"
                      min="0"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="number"
                      value={subject.ceSessional}
                      onChange={(e) => updateSubject(index, 'ceSessional', e.target.value)}
                      placeholder="50"
                      max="50"
                      min="0"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={subject.lpwLabFile}
                      onChange={(e) => updateSubject(index, 'lpwLabFile', e.target.value)}
                      placeholder="100"
                      max="100"
                      min="0"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={subject.seeExam}
                      onChange={(e) => updateSubject(index, 'seeExam', e.target.value)}
                      placeholder="40"
                      max="40"
                      min="0"
                      className="w-16 p-2 text-center bg-transparent border-none text-[var(--text)] focus:ring-2 focus:ring-[var(--hover)]/30 rounded-lg transition-all duration-300"
                    />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button type="button" onClick={() => removeSubject(index)} className="text-[var(--hover)] hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <button
            type="button"
            onClick={addSubject}
            className="flex-1 py-4 text-sm font-bold bg-[var(--accent)] text-[var(--secondary)] rounded-full hover:bg-[var(--hover)] hover:text-[var(--text)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add Subject
          </button>
          <button
            type="submit"
            className="flex-1 py-4 text-sm font-bold bg-[var(--primary)] text-[var(--text)] rounded-full hover:bg-[var(--secondary)] hover:scale-105 transition-all duration-300"
          >
            Calculate CGPA
          </button>
        </div>
      </form>
    </div>
  );
};

export default CgpaForm;