import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, description, theme = 'light' }) => {
  const textColor = theme === 'light' ? 'text-slate-900' : 'text-white';
  const descColor = theme === 'light' ? 'text-slate-600' : 'text-gray-400';

  return (
    <div className="mb-12 lg:mb-20 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-accent font-bold text-sm uppercase tracking-widest">{label}</span>
        <div className="h-[2px] w-8 bg-accent/30">
          <div className="h-full w-1/2 bg-accent animate-pulse"></div>
        </div>
      </div>
      <h2 className={`${textColor} text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-6`}>
        {title}
      </h2>
      {description && (
        <p className={`${descColor} text-lg lg:text-xl leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;