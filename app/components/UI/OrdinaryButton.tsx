import { ReactNode } from "react";

export enum OrdinaryButtonBackgroundColor {
  RED = 'bg-red-500',
  BLUE = 'bg-blue-500',
  GREEN = 'bg-green-500',
}

export enum OrdinaryButtonSize {
  SMALL = 'h-32 w-32',
  MEDIUM = 'h-40 w-40',
  LARGE = 'h-52 w-52',
}

export default function OrdinaryButton({
  children,
  color,
  size,
  disabled,
  onClick,
}: Readonly<{
  children: ReactNode | ReactNode[];
  color: OrdinaryButtonBackgroundColor;
  size: OrdinaryButtonSize;
  disabled: boolean;
  onClick: () => void;
}>) {
  const backgroundColor = disabled ? 'bg-gray-500' : color
  return (
    <button
      className={`${backgroundColor} ${size} rounded-md shadow-md`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
