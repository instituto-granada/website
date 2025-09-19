import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

type WrapperProps = {
  backgroundColor?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.extra.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  text-align: left;
  align-items: flex-start;
  background: red;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  text-align: left;

  @media (min-width: ${breakpoints.tablet}) {
    width: 20%;
  }
`;

export const ContactUs = styled.div`
  width: 100%;
  align-items: flex-end;
  text-align: left;
  background: red;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
`;
