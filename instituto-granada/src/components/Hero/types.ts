import { ButtonVariant } from "~/types/componentTypes";

interface ButtonAction {
  label: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

export interface HeroProps {
  caption?: string;
  imageUrl: string;
  title: string;
  text: string;
  isHome?: boolean;
  emphasizeWordsIndex?: number[];
  buttons?: ButtonAction[];
}
