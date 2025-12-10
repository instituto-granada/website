import { Control } from "react-hook-form";

export type GenericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
  mask?: string;
  control?: Control<any>;
  labelBlack?: boolean;
};
