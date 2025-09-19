import { FC, ImgHTMLAttributes } from "react";

import { Icons } from "~/assets";

type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: keyof typeof Icons;
  alt?: string;
  width?: number | string;
  height?: number | string;
};

const Icon: FC<IconProps> = ({ name, alt, width, height }) => {
  const src = Icons[name];

  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
