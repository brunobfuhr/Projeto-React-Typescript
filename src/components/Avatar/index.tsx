import styles from "./index.module.css";


interface avatarProps {
  src: string;
  hasBorder: boolean;
}

export function Avatar({ hasBorder = true, src }:avatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
