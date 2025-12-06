import { FC, ImgHTMLAttributes } from "react";

import { Images } from "../../assets";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: keyof typeof Images;
  alt?: string;
};

const Image: FC<ImageProps> = ({ name, alt, style, ...rest }) => {
  const src = Images[name];

  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        ...style,
      }}
    />
  );
};

export default Image;
