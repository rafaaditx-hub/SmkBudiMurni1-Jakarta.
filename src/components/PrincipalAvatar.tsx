import React, { useState } from 'react';

const kepsekRealPhoto = '/assets/images/kepsek.jpg';

interface PrincipalAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

export const PrincipalAvatar: React.FC<PrincipalAvatarProps> = ({
  size = 'md',
  className = '',
  showBadge = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 text-base',
    xl: 'w-28 h-28 text-lg',
  };

  return (
    <>
      <div 
        className={`relative inline-block shrink-0 cursor-pointer group ${className}`}
        onClick={() => setIsModalOpen(true)}
        title="Klik untuk melihat foto resmi Bapak Kepala Sekolah"
      >
        {/* Main Photo Container */}
        <div 
          className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-blue-600 shadow-md ring-2 ring-blue-100/80 flex items-center justify-center bg-slate-100 transition-transform group-hover:scale-105`}
        >
          {!imageError ? (
            <img
              src={kepsekRealPhoto}
              alt="Budiman Sitorus, SE - Kepala Sekolah SMK Budi Murni 1"
              className="w-full h-full object-cover object-top"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <img
              src="/assets/images/kepsek.jpg"
              alt="Budiman Sitorus, SE"
              className="w-full h-full object-cover object-top"
            />
          )}
        </div>

        {/* Optional Verified / Principal Badge */}
        {showBadge && (
          <div 
            className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow-xs"
            title="Kepala Sekolah Resmi"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Lightbox / Modal for previewing the full photo */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 aspect-3/4 max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={kepsekRealPhoto}
                alt="Budiman Sitorus, SE - Kepala Sekolah SMK Budi Murni 1"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                title="Tutup"
              >
                ✕
              </button>
            </div>
            <div className="p-4 text-center bg-white space-y-1">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full inline-block">
                Foto Resmi Kepala Sekolah
              </span>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Budiman Sitorus, SE.
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Kepala Sekolah SMK Budi Murni 1 Jakarta
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
