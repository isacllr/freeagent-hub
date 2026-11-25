import styles from './Rodape.module.css';

function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <p className={styles.marca}>FreeAgentHub © {ano}</p>
    </footer>
  );
}

export default Rodape;
