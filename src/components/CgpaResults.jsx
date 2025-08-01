import React from 'react';

const CgpaResults = ({ name, cgpa, shareImage, onGenerateImage, onDownloadImage, onRecalculate, loading, shareCardRef }) => {
  const message = encodeURIComponent(`${name} has achieved a CGPA of ${cgpa} in B.Tech!`);
  const url = encodeURIComponent(window?.location?.href || '');

  const whatsappLink = `https://wa.me/?text=${message}%20${url}`;
  const xLink = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 sm:p-12 glass-card max-w-lg mx-auto animate-slide-up">
      <div ref={shareCardRef} className="w-full text-center glass-dock p-8 rounded-3xl transition-all duration-500">
        <h2 className="font-bold text-2xl sm:text-3xl text-[var(--accent)] tracking-tight">{name}</h2>
        <p className="mt-3 text-sm sm:text-base text-[var(--text)]/80">has achieved a cumulative CGPA of</p>
        <p className="mt-4 text-4xl sm:text-5xl font-extrabold text-[var(--hover)] animate-pulse-glow">{cgpa}</p>
        <p className="mt-6 text-xs sm:text-sm text-[var(--text)]/60">B.Tech CGPA Calculator — 2025</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-semibold bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Share on WhatsApp
        </a>
        <a
          href={xLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-semibold bg-[#1DA1F2] rounded-full hover:bg-[#1A91DA] transition-all duration-300"
        >
          Share on X
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={onGenerateImage}
          disabled={loading}
          className="flex-1 py-3 text-sm font-semibold bg-[var(--accent)] text-[var(--secondary)] rounded-full hover:bg-[var(--hover)] disabled:opacity-50 transition-all duration-300"
        >
          {loading ? 'Generating...' : 'Generate Share Image'}
        </button>
        {shareImage && (
          <button
            onClick={onDownloadImage}
            className="flex-1 py-3 text-sm font-semibold bg-[var(--primary)] text-[var(--text)] rounded-full hover:bg-[var(--secondary)] transition-all duration-300"
          >
            Download Image
          </button>
        )}
      </div>
      <button
        onClick={onRecalculate}
        className="mt-4 text-sm font-medium text-[var(--accent)] hover:text-[var(--hover)] transition-all duration-300"
      >
        Recalculate CGPA
      </button>
    </div>
  );
};

export default CgpaResults;