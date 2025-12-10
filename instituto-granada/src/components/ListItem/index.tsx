import { FC } from "react";

import { ItemContainer, IconWrapper, Text, Divider } from "./styles";
import Icon from "../Icon";
import { Icons } from "../../assets";

interface ListItemProps {
  iconName: keyof typeof Icons;
  message: string;
  hasDivider?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  iconName,
  hasDivider = true,
  message,
}) => {
  return (
    <>
      <ItemContainer>
        <IconWrapper>
          <Icon name={iconName} width={36} height={36} />
        </IconWrapper>
        <Text>{message}</Text>
      </ItemContainer>
      {hasDivider && <Divider />}
    </>
  );
};

export default ListItem;
