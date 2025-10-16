import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

const PageStructure: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageStructure;
