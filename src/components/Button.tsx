import { ReactNode } from 'preact/compat';

export const Button = ({ label, disabled, onClick, children }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        fontSize: 16,
        height: 46,
        width: 100,
        flex: 1,
        // touchAction: 'none',
      }}
    >
      {label || children}
    </button>
  );
};

export type ButtonProps = {
  label?: string;
  disabled: boolean;
  onClick: () => void;
  children?: ReactNode;
};
