import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const classeLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.ativo}` : styles.link;

  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        FREE<span className={styles.destaque}>AGENT</span>HUB
      </NavLink>

      <nav className={styles.menu}>
        <NavLink to="/" end className={classeLink}>Início</NavLink>
        <NavLink to="/jogadores" className={classeLink}>Jogadores</NavLink>
        <NavLink to="/sobre" className={classeLink}>Sobre</NavLink>
        <NavLink to="/contato" className={classeLink}>Contato</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
