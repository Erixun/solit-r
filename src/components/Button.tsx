export const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ fontSize: '1rem', height: 46, width: 100, flex: 1 }}
    >
      {label}
    </button>
  );
};

export type ButtonProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
};
