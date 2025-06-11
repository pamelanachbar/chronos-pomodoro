import styles from './styles.module.css'
type DefaultInput={
   id: string
   labelText :string 
   
} & React.ComponentProps<'input'>
export function DefaultInput({type, id, labelText, ...rest}: DefaultInput){
//const children = props.children
// const type = props.type
// const id = props.id
// const labelText = props.labelText

return (
   <div className={styles.container}>
     <label className={styles.label}htmlFor={id}>{labelText}</label> 
       <input className={styles.input} type={type} id={id} {...rest}/>
     </div>
);
}