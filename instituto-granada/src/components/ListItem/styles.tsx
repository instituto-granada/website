import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.XS};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  color: ${({ theme }) => theme.colors.grayscale[800]};
  margin-left: ${({ theme }) => theme.spacing.XS};
  white-space: normal;
  overflow-wrap: break-word;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale[300]};
  width: 100%;
  margin: 0;
`;
