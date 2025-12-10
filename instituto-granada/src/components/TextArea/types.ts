export type GenericTextAreaProps =
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    maxLengthMessage: string;
    placeholder: string;
    error?: string;
    labelBlack?: boolean;
  };
