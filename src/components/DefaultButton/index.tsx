
import styles from './styles.module.css'
type DefaultButtonProps = {
color? : 'red' | 'green';
icon: React.ReactNode;

} & React.ComponentProps<'button'>
export function DefaultButton ({ icon, color = 'green', ...rest} : DefaultButtonProps){
return (
 <div className={styles.container}>
  <button className={`${styles.button} ${styles.color}`} {...rest} >{icon}</button>
 </div>
);
}