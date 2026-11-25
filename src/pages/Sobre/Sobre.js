import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.pagina}>
      <h1 className={styles.titulo}>Sobre o projeto</h1>
      <p className={styles.texto}>
        No cenário competitivo de Valorant, muitos jogadores bons ficam sem time
        e não têm onde mostrar o que sabem fazer. O FreeAgentHub é uma vitrine
        simples: cada jogador tem um card com função, elo e agentes principais,
        e os times podem entrar em contato.
      </p>

      <h2 className={styles.subtitulo}>As quatro funções</h2>
      <div className={styles.funcoes}>
        <div className={styles.funcao}>
          <h3>Duelista</h3>
          <p>Entra primeiro no bomb e busca os abates de abertura.</p>
        </div>
        <div className={styles.funcao}>
          <h3>Iniciador</h3>
          <p>Coleta informação e prepara a entrada do time.</p>
        </div>
        <div className={styles.funcao}>
          <h3>Controlador</h3>
          <p>Corta a visão do inimigo com smokes e controla o mapa.</p>
        </div>
        <div className={styles.funcao}>
          <h3>Sentinela</h3>
          <p>Segura o bomb e protege os flancos do time.</p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
