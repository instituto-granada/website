import { FC, ImgHTMLAttributes } from "react";

import { Images } from "../../assets";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: keyof typeof Images;
  alt?: string;
  width?: number | string;
  height?: number | string;
};

const Image: FC<ImageProps> = ({ name, alt, width, height }) => {
  const src = Images[name];

  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Image;
