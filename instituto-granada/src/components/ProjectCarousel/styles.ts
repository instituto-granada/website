import styled from "styled-components";

export const CarouselContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spacing.XL} ${(props) => props.theme.spacing["4XL"]};
    gap: ${(props) => props.theme.spacing.L}
    background-color: ${(props) => props.theme.colors.secondary[700]};
`;

export const Header = styled.h1`
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.sora};
    font-size: ${({ theme }) => theme.typography.sora.M};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
    color: ${({ theme }) => theme.colors.extra.orange};
`;

export const CarouselContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.M};
`;

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: ${(props) => props.theme.spacing.L};
`;

export const CardTitle = styled.h2`
    width: 100%;
    text-align: left;
    font-family: ${({ theme }) => theme.fontFamily.sora};
    font-size: ${({ theme }) => theme.typography.sora.S};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
    color: ${({ theme }) => theme.colors.secondary[100]};
`;

export const CardBody = styled.p`
    width: 100%;
    text-align: left;
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.typography.outfit.M};
    font-weight: ${({ theme }) => theme.fontWeight.regular };
    line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
    color: ${({ theme }) => theme.colors.secondary[100]};
`;

export const Image = styled.img`
    border-radius: 4px;
    object-fit: cover;
    width: 420px;
    height: 492px;
`
