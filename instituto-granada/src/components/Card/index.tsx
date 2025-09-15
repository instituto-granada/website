import { StyledCard } from "./styles";
import ButtonPrincipal, {ButtonProps} from "../ButtonPrincipal";

export interface CardProps {
    image?: string;
    text?: string;
    buttonLabel: string;
    onButtonClick: ButtonProps['onClick'];
}

export default function Card({
    image,
    text,
    onButtonClick,
    buttonLabel,
}: CardProps) {
    return (
        <StyledCard>
            {image}
            {text}
            <ButtonPrincipal variant="secondary" onClick={onButtonClick}>
                {buttonLabel}
            </ButtonPrincipal>
        </StyledCard>
    );
}