
import './styles.module.css'

type GenericHtmlProps = {
    children: React.ReactNode
}
export function GenericHtml({children} : GenericHtmlProps ){
  return <div>
    {children}
  </div>
  
}