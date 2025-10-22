import { ButtonVariant } from "~/types/componentTypes";

interface ButtonAction {
  label: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

export interface HeroProps {
  imageUrl: string;
  title: string;
  text: string;
  isHome?: boolean;
  emphasizeWordIndex?: number;
  buttons?: ButtonAction[];
}
