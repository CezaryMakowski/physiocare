import Image, { ImageProps } from "next/image";
import styles from "../../style/utils/RoundImg.module.css";

interface RoundImgProps extends ImageProps {
  size: number;
}

export default function RoundImg({
  src,
  alt,
  size,
  className,
  ...props
}: RoundImgProps) {
  return (
    <div className={`${styles.img} ${className}`}>
      <Image src={src} alt={alt} width={size} height={size} {...props} />
    </div>
  );
}
