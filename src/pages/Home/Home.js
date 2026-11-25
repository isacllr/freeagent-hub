import { Link } from 'react-router-dom';
import CardJogador from '../../components/CardJogador/CardJogador';
import fotoKaze from '../../assets/jogadores/jett.jpg';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.tag}>Vitrine de jogadores de Valorant</p>
        <h1 className={styles.titulo}>
          Está sem time? <span className={styles.destaque}>Mostre seu jogo.</span>
        </h1>
        <p className={styles.texto}>
          O FreeAgentHub reúne portfólios de jogadores que estão como free agent,
          para que times e coaches encontrem a peça que falta na line-up.
        </p>
        <div className={styles.botoes}>
          <Link to="/jogadores" className={styles.botaoPrincipal}>Ver jogadores</Link>
          <Link to="/contato" className={styles.botaoSecundario}>Quero me cadastrar</Link>
        </div>
      </section>

      <section className={styles.secao}>
        <h2 className={styles.subtitulo}>Destaque da semana</h2>
        <div className={styles.destaqueCard}>
          <CardJogador
            foto={fotoKaze}
            nick="Kaze"
            nome="Lucas Martins"
            idade={19}
            funcao="Duelista"
            elo="Imortal 2"
            disponivel={true}
            agentes={['Jett', 'Raze', 'Neon']}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
