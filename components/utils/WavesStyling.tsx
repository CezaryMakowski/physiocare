import Curve from "@/public/curve";
import Waves from "@/public/waves";
import styles from "@/style/utils/WavesStyling.module.css";

interface WavesStylingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function WavesStyling({
  className,
  children,
  ...props
}: WavesStylingProps) {
  return (
    <div className={`${className} ${styles.wrapper}`} {...props}>
      <Waves className={styles.waves} />
      {children}
      <Curve className={styles.curve} />
    </div>
  );
}
