import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  const children = props.children;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
