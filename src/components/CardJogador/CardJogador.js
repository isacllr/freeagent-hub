import styles from './CardJogador.module.css';

function CardJogador({ foto, nick, nome, idade, funcao, elo, disponivel, agentes }) {
  return (
    <article className={styles.card}>
      <img src={foto} alt={`Foto do jogador ${nick}`} className={styles.foto} />

      <div className={styles.conteudo}>
        {}
        <span className={disponivel ? styles.livre : styles.ocupado}>
          {disponivel ? 'Free Agent' : 'Em teste'}
        </span>

        <h3 className={styles.nick}>{nick}</h3>
        <p className={styles.nome}>{nome}, {idade} anos</p>

        <p className={styles.info}><strong>Função:</strong> {funcao}</p>
        <p className={styles.info}><strong>Elo:</strong> {elo}</p>

        <p className={styles.info}><strong>Agentes principais:</strong></p>
        <ul className={styles.agentes}>
          {agentes.map((agente) => (
            <li key={agente} className={styles.agente}>{agente}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default CardJogador;
