// App.jsx
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import CgpaForm from './components/CgpaForm.jsx';
import CgpaResults from './components/CgpaResults.jsx';
import DeveloperFooter from './components/DevloperFooter.jsx';

const getInitialSubjects = () => {
  return [
    { name: 'Calculus', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Physics', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Computer Programming', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Communication Skills', credits: 3, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Environmental Science', credits: 3, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Workshop', credits: 2, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    { name: 'Yoga', credits: 1, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  ];
};

const gradingScale = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 45) return 5;
  return 0;
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('form');
  const [studentName, setStudentName] = useState('');
  const [semesterSubjects, setSemesterSubjects] = useState(getInitialSubjects());
  const [cgpa, setCgpa] = useState(null);
  const [shareImage, setShareImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const shareCardRef = useRef(null);

  const calculateCgpa = (e) => {
    e.preventDefault();
    let totalCreditPoints = 0;
    let totalCredits = 0;

    for (const subject of semesterSubjects) {
      if (subject.credits && (subject.ceAssignment || subject.ceClassTest || subject.ceSessional || subject.lpwLabFile || subject.seeExam)) {
        const ceTotal = (parseFloat(subject.ceAssignment) || 0) + (parseFloat(subject.ceClassTest) || 0) + (parseFloat(subject.ceSessional) || 0);
        const lpwTotal = parseFloat(subject.lpwLabFile) || 0;
        const seeTotal = parseFloat(subject.seeExam) || 0;
        const totalMarks = (ceTotal + lpwTotal + seeTotal) / (30 + 20 + 50 + 100 + 40) * 100;
        const gpa = gradingScale(totalMarks);

        totalCreditPoints += gpa * subject.credits;
        totalCredits += subject.credits;
      }
    }

    if (totalCredits > 0) {
      const finalCgpa = (totalCreditPoints / totalCredits).toFixed(2);
      setCgpa(finalCgpa);
      setCurrentPage('results');
    }
  };

  const generateShareImage = async () => {
    setLoading(true);
    const element = shareCardRef.current;
    if (element) {
      try {
        const canvas = await html2canvas(element, { useCORS: true });
        const image = canvas.toDataURL('image/png');
        setShareImage(image);
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = shareImage;
    link.download = `CGPA-Result-${studentName.replace(/\s/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addSubject = () => {
    setSemesterSubjects([...semesterSubjects, { name: '', credits: '', ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' }]);
  };

  const updateSubject = (index, field, value) => {
    const newSubjects = [...semesterSubjects];
    newSubjects[index][field] = value;
    setSemesterSubjects(newSubjects);
  };

  const removeSubject = (index) => {
    const newSubjects = semesterSubjects.filter((_, i) => i !== index);
    setSemesterSubjects(newSubjects);
  };

  return (
    <div className="min-h-screen bg-[#283618] text-[#FEFAE0] flex flex-col items-center p-4 sm:p-8 font-sans transition-all duration-500">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#DDA15E]">
          Nirma University
        </h1>
        <p className="text-xl sm:text-2xl font-light text-[#FEFAE0] mt-2">
          B.Tech First Year CGPA Calculator
        </p>
      </div>
      {currentPage === 'form' && (
        <CgpaForm
          studentName={studentName}
          setStudentName={setStudentName}
          semesterSubjects={semesterSubjects}
          addSubject={addSubject}
          updateSubject={updateSubject}
          removeSubject={removeSubject}
          calculateCgpa={calculateCgpa}
        />
      )}
      {currentPage === 'results' && (
        <CgpaResults
          cgpa={cgpa}
          studentName={studentName}
          shareImage={shareImage}
          onGenerateImage={generateShareImage}
          onDownloadImage={handleDownload}
          onRecalculate={() => {
            setCurrentPage('form');
            setShareImage(null);
          }}
          loading={loading}
          shareCardRef={shareCardRef}
        />
      )}
      <DeveloperFooter />
    </div>
  );
};

export default App;