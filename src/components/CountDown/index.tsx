
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type {} from "../../pages/Home";
import styles from "./styles.module.css";

//type CountDownProps = HomeProps;
export function CountDown() {
    const {state} = useTaskContext();
  return <div className={styles.countDown}>{state.formattedSecondsRemaining}</div>;
}
