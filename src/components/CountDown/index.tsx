import styles from "./styles.module.css";

type CountDownProps = {
  formattedSecondsRemaining : string;
}
export function CountDown({formattedSecondsRemaining }: CountDownProps) {
  return <div className={styles.countDown}>{formattedSecondsRemaining}</div>;
}
