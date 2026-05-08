import { ArrowUpRightIcon } from '../icons/Icons';

const variants = {
  primary:
    'bg-neutral-950 text-white shadow-glow hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200',
  secondary:
    'bg-white/80 text-neutral-900 ring-1 ring-neutral-200 hover:bg-white dark:bg-white/5 dark:text-neutral-100 dark:ring-white/10 dark:hover:bg-white/10',
  ghost:
    'bg-transparent text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-100 dark:text-neutral-300 dark:ring-white/10 dark:hover:bg-white/5',
};

function Button({
  as: Component = 'a',
  href,
  children,
  className = '',
  variant = 'primary',
  icon = false,
  ...props
}) {
  const componentProps = Component === 'a' ? { href } : {};

  return (
    <Component
      {...componentProps}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </Component>
  );
}

export default Button;
