import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// 2D Minimalist Badge Logo for Futsal
export const FutsalLogo2D: React.FC<LogoProps> = ({ className = "w-16 h-16", size = 64 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    {/* 2D Shield Background */}
    <path 
      d="M50 8L86 22V50C86 72 50 92 50 92C50 92 14 72 14 50V22L50 8Z" 
      fill="#0284C7" 
      stroke="#0369A1" 
      strokeWidth="3"
    />
    <path 
      d="M50 14L80 26V49C80 67 50 84 50 84C50 84 20 67 20 49V26L50 14Z" 
      fill="#0EA5E9" 
    />
    {/* Inner 2D Soccer/Futsal Ball */}
    <circle cx="50" cy="46" r="22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5"/>
    {/* Pentagon center */}
    <polygon points="50,38 58,44 55,53 45,53 42,44" fill="#0F172A" />
    {/* Lines connecting to edges */}
    <line x1="50" y1="38" x2="50" y2="24" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="44" x2="70" y2="40" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <line x1="55" y1="53" x2="64" y2="62" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <line x1="45" y1="53" x2="36" y2="62" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    <line x1="42" y1="44" x2="30" y2="40" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    {/* Banner text pill */}
    <rect x="26" y="70" width="48" height="12" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5"/>
    <text x="50" y="79" fill="#0F172A" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">FUTSAL</text>
  </svg>
);

// 2D Minimalist Badge Logo for Hadroh
export const HadrohLogo2D: React.FC<LogoProps> = ({ className = "w-16 h-16", size = 64 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    {/* 2D Octagon/Islamic Star Badge Background */}
    <circle cx="50" cy="50" r="42" fill="#10B981" stroke="#047857" strokeWidth="3" />
    <circle cx="50" cy="50" r="36" fill="#059669" />
    
    {/* 2D Rebana / Tambourine Frame */}
    <circle cx="50" cy="45" r="24" fill="#FEF3C7" stroke="#78350F" strokeWidth="3"/>
    <ellipse cx="50" cy="45" rx="18" ry="18" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 3"/>
    
    {/* Jingle Bells / Kecrek */}
    <circle cx="30" cy="35" r="3.5" fill="#F59E0B" stroke="#78350F" strokeWidth="1"/>
    <circle cx="70" cy="35" r="3.5" fill="#F59E0B" stroke="#78350F" strokeWidth="1"/>
    <circle cx="28" cy="55" r="3.5" fill="#F59E0B" stroke="#78350F" strokeWidth="1"/>
    <circle cx="72" cy="55" r="3.5" fill="#F59E0B" stroke="#78350F" strokeWidth="1"/>
    
    {/* Music notes / Noor crescent */}
    <path d="M44 38C44 38 48 34 56 37" stroke="#92400E" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Banner text pill */}
    <rect x="24" y="70" width="52" height="12" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5"/>
    <text x="50" y="79" fill="#0F172A" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">HADROH</text>
  </svg>
);

// 2D Minimalist Badge Logo for Basket
export const BasketLogo2D: React.FC<LogoProps> = ({ className = "w-16 h-16", size = 64 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    {/* 2D Diamond/Shield Background */}
    <path 
      d="M50 8L88 32V64L50 92L12 64V32L50 8Z" 
      fill="#EA580C" 
      stroke="#C2410C" 
      strokeWidth="3"
    />
    <path 
      d="M50 15L81 36V60L50 84L19 60V36L50 15Z" 
      fill="#F97316" 
    />
    {/* 2D Basketball */}
    <circle cx="50" cy="46" r="22" fill="#FB923C" stroke="#431407" strokeWidth="2.5"/>
    {/* Basketball Ribs / Lines */}
    <line x1="28" y1="46" x2="72" y2="46" stroke="#431407" strokeWidth="2"/>
    <line x1="50" y1="24" x2="50" y2="68" stroke="#431407" strokeWidth="2"/>
    <path d="M34 30C42 38 42 54 34 62" stroke="#431407" strokeWidth="2" fill="none"/>
    <path d="M66 30C58 38 58 54 66 62" stroke="#431407" strokeWidth="2" fill="none"/>
    
    {/* Banner text pill */}
    <rect x="25" y="70" width="50" height="12" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5"/>
    <text x="50" y="79" fill="#0F172A" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">BASKET</text>
  </svg>
);

// 2D Minimalist Badge Logo for Pramuka
export const PramukaLogo2D: React.FC<LogoProps> = ({ className = "w-16 h-16", size = 64 }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
  >
    {/* 2D Circle Badge Background */}
    <circle cx="50" cy="50" r="42" fill="#6B21A8" stroke="#581C87" strokeWidth="3"/>
    <circle cx="50" cy="50" r="36" fill="#7E22CE"/>
    
    {/* 2D Tunas Kelapa / Coconut Sprout Silhouette & Compass Star */}
    {/* Sprout Silhouette */}
    <path 
      d="M50 20C47 28 43 33 39 36C35 39 33 44 34 50C35 56 40 60 47 61V67H53V61C60 60 65 56 66 50C67 44 65 39 61 36C57 33 53 28 50 20Z" 
      fill="#FACC15" 
      stroke="#CA8A04" 
      strokeWidth="1.5"
    />
    <circle cx="50" cy="46" r="5" fill="#78350F" />
    {/* Compass / Star accent */}
    <path d="M50 26L52 33L59 35L52 37L50 44L48 37L41 35L48 33L50 26Z" fill="#FFFFFF"/>
    
    {/* Banner text pill */}
    <rect x="22" y="70" width="56" height="12" rx="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5"/>
    <text x="50" y="79" fill="#0F172A" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">PRAMUKA</text>
  </svg>
);

export const getEkskulLogo2D = (id: string, className = "w-16 h-16") => {
  switch (id) {
    case 'futsal':
      return <FutsalLogo2D className={className} />;
    case 'hadroh':
      return <HadrohLogo2D className={className} />;
    case 'basket':
      return <BasketLogo2D className={className} />;
    case 'pramuka':
      return <PramukaLogo2D className={className} />;
    default:
      return <FutsalLogo2D className={className} />;
  }
};
