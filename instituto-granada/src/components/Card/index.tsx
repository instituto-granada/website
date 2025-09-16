import { CardContent, CardFooter, CardHeader, StyledCard } from "./styles";
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
            <CardHeader>
                {image && (
                    <img
                        src={image}
                        alt={text || 'Card Image'}
                        className="card-image"
                    />
                )}
            </CardHeader>

            <CardContent>
                {text && (<p className="card-text">{text}</p>)}
            </CardContent>

            <CardFooter>
                <ButtonPrincipal variant="secondary" onClick={onButtonClick} className="card-button">
                    {buttonLabel}
                </ButtonPrincipal>
            </CardFooter>
        </StyledCard>
    );
}