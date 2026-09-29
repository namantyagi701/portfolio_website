import React from 'react';

export default function Button({
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  type = 'button',
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 px-6 py-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 rounded-none cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-red-500 active:scale-[0.98]';

  const variants = {
    primary:
      'bg-[#d90f1e] text-white hover:bg-[#b50b17] shadow-[0_0_20px_rgba(217,15,30,0.35)] hover:shadow-[0_0_25px_rgba(217,15,30,0.55)]',
    secondary:
      'bg-[#141414] text-neutral-200 border border-neutral-700 hover:border-neutral-400 hover:text-white hover:bg-neutral-800',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white border border-transparent hover:border-neutral-800',
    pill:
      'bg-[#d90f1e] text-white px-4 py-2 text-xs font-bold tracking-widest hover:bg-[#b50b17] shadow-lg',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
      >
        {Icon && <Icon className="w-3.5 h-3.5 stroke-[2.5]" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {Icon && <Icon className="w-3.5 h-3.5 stroke-[2.5]" />}
      <span>{children}</span>
    </button>
  );
}
