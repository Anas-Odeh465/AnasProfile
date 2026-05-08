function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-[28px] border border-neutral-200/70 bg-white/80 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-white/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
