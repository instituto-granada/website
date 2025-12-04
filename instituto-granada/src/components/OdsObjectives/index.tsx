import { OdsObjectiveIcon, StyledOdsObjectives } from "./styles"

export interface OdsObjective {
    description: string
    icon: string
}

export interface OdsObjectivesProps {
    items: OdsObjective[]
}

export default function OdsObjectives ({
    items
}: OdsObjectivesProps) {
    return (
        <StyledOdsObjectives>
            {items.map((item, index) =>(
                <OdsObjectiveIcon
                    src={item.icon}
                    alt={item.description}
                />
            ))}
        </StyledOdsObjectives>
    )
}