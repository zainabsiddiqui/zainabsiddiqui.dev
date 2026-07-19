import type { KeyConfig } from '../types';

interface KeyProps {
  config: KeyConfig;
  isPressed: boolean;
  onClick: () => void;
}

const variantStyles: Record<KeyConfig['variant'], string> = {
  base:   'bg-keycap text-keycap-text shadow-[0_5px_0_0_var(--color-keycap-shadow),0_5px_8px_rgba(0,0,0,0.25)]',
  accent: 'bg-accent text-accent-text shadow-[0_5px_0_0_var(--color-accent-shadow),0_5px_8px_rgba(0,0,0,0.3)]',
  sakura: 'bg-sakura text-cream-text shadow-[0_5px_0_0_var(--color-sakura-shadow),0_5px_8px_rgba(0,0,0,0.3)]',
  art:    'bg-gradient-to-r from-keycap to-accent text-accent-text shadow-[0_5px_0_0_var(--color-keycap-shadow),0_5px_8px_rgba(0,0,0,0.25)]',
};

export default function Key({ config, isPressed, onClick }: KeyProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        h-10.5 min-w-10 px-3 rounded-md
        sm:h-14 sm:min-w-14 sm:px-4 sm:rounded-lg
        lg:h-16 lg:min-w-16 lg:px-5
        font-mono text-xs sm:text-sm lg:text-base font-medium
        transition-transform duration-100
        active:translate-y-0.75 active:shadow-none
        ${variantStyles[config.variant]}
        ${isPressed ? 'translate-y-0.75' : ''}
        ${config.stretch ? 'w-1/2' : ''}
      `}
    >
      {config.label}
    </button>
  );
}