import React, { useState, useRef } from 'react';
import domtoimage from 'dom-to-image-more';
import CgpaForm from './components/CgpaForm.jsx';
import CgpaResults from './components/CgpaResults.jsx';
import DeveloperFooter from './components/DevloperFooter.jsx';

const getInitialSubjects = () => [
  { name: 'Calculus', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Physics', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Computer Programming', credits: 4, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Communication Skills', credits: 3, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Environmental Science', credits: 3, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Workshop', credits: 2, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
  { name: 'Yoga', credits: 1, ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
];

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
      if (
        subject.credits &&
        (subject.ceAssignment || subject.ceClassTest || subject.ceSessional || subject.lpwLabFile || subject.seeExam)
      ) {
        const ceTotal =
          (parseFloat(subject.ceAssignment) || 0) +
          (parseFloat(subject.ceClassTest) || 0) +
          (parseFloat(subject.ceSessional) || 0);
        const lpwTotal = parseFloat(subject.lpwLabFile) || 0;
        const seeTotal = parseFloat(subject.seeExam) || 0;
        const totalMarks = ((ceTotal + lpwTotal + seeTotal) / 240) * 100;
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
    if (!shareCardRef.current) {
      setLoading(false);
      return;
    }

    try {
      shareCardRef.current.style.opacity = '1';
      shareCardRef.current.style.zIndex = '50';
      shareCardRef.current.style.position = 'relative';

      const stripUnsupportedColors = (root) => {
        const elements = root.querySelectorAll('*');
        elements.forEach((el) => {
          const computed = window.getComputedStyle(el);
          const props = ['color', 'backgroundColor', 'borderColor'];

          props.forEach((prop) => {
            const value = computed[prop];
            if (value?.includes('oklab') || value?.includes('color(')) {
              el.style[prop] = prop === 'color' ? '#F8F1E9' : '#1F2A15';
            }
          });
        });
      };

      stripUnsupportedColors(shareCardRef.current);

      const dataUrl = await domtoimage.toPng(shareCardRef.current, {
        quality: 1,
        bgcolor: '#1F2A15',
        cacheBust: true,
      });

      setShareImage(dataUrl);

      shareCardRef.current.style.opacity = '0';
      shareCardRef.current.style.zIndex = '-50';
      shareCardRef.current.style.position = 'absolute';
    } catch (error) {
      alert(`Failed to generate image: ${error.message}`);
    }

    setLoading(false);
  };

  const handleDownload = () => {
    if (!shareImage) return;
    const link = document.createElement('a');
    link.href = shareImage;
    link.download = `CGPA-Result-${studentName.replace(/\s/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addSubject = () => {
    setSemesterSubjects([
      ...semesterSubjects,
      { name: '', credits: '', ceAssignment: '', ceClassTest: '', ceSessional: '', lpwLabFile: '', seeExam: '' },
    ]);
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
    <div className="min-h-screen flex flex-col items-center pt-24 sm:pt-32 px-4 sm:px-8 transition-all duration-500">
      <div className="text-center animate-fade-in ">
       
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