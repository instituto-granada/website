import { Content, StatDescription, StatIcon, StatsContainer, StatsContent, StatValue, StyledYearlyStatsPanel, TextContainer, Title } from "./styles";


export interface YearlyStatItem {
    icon: string,
    value: string,
    description: string
}

export interface YearlyStatProps {
    title: string,
    items: YearlyStatItem[]
}

export default function YearlyStatsPanel ({
    title,
    items
}: YearlyStatProps) {
    return (
        <StyledYearlyStatsPanel>
            <Content>
                <Title> {title} </Title>
                <StatsContainer>
                {items.map((item, index) => (
                    <StatsContent>
                        <StatIcon src={item.icon} alt={item.description}/>
                        <TextContainer>
                            <StatValue> {item.value} </StatValue>
                            <StatDescription> {item.description} </StatDescription>
                        </TextContainer>
                    </StatsContent>
                ))}
                </StatsContainer>
            </Content>
        </StyledYearlyStatsPanel>        
    );
}