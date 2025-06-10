import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};
export function Heading(props: HeadingProps) {
  const { children } = props;
  return <h1 className={styles.heading}>{children}</h1>;
}

// const classes = `${styles.heading} ${styles.purple}`
//return <h1 className= {`${styles.heading} ${styles.purple} `}>Ola, mundo!</h1>
/*console.log(props)
   return <h1 className= {`${styles.heading} ${styles.purple} `}>{props.children} </h1>*/
//const children = props.children
