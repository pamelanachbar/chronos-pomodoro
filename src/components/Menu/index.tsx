import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";

type AvalibleThemes =  'dark' | 'light'
export function Menu() {
const [theme, setTheme] = useState<AvalibleThemes>(() => {
  const storageTheme = localStorage.getItem('theme') as AvalibleThemes || 'dark'
  return storageTheme
});

const nextThemeIcon = {
  dark: <SunIcon/>,
  light: <MoonIcon/>
}

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
     setTheme(prevTheme => {const nextTheme = prevTheme === 'dark' ? 'light' :  'dark';
  
  return nextTheme;
 });
  }
 
useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}, [theme])

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Historico"
        title="Ver Historico"
      >
        <HistoryIcon />
      </a>
{
  //const [theme, setTheme] = useState();\
  //setTheme((event : tal) => {
  // event : blabla
  // event.preventDefault
  // } 
  //})

  /*
  useEffect(() => {
  
  })
  
  */
}
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configuracoes"
        title="Configuracoes"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
