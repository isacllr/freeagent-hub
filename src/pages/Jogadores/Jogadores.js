import CardJogador from '../../components/CardJogador/CardJogador';
import fotoKaze from '../../assets/jogadores/jett.jpg';
import fotoMuralha from '../../assets/jogadores/raze.jpg';
import fotoNebula from '../../assets/jogadores/omen.png';
import fotoRadar from '../../assets/jogadores/Viper.png';
import styles from './Jogadores.module.css';

function Jogadores() {
  return (
    <section className={styles.pagina}>
      <h1 className={styles.titulo}>Jogadores disponíveis</h1>
      <p className={styles.texto}>
        Confira quem está procurando time. Cada card é o mesmo componente,
        reutilizado com dados diferentes.
      </p>

      <div className={styles.grade}>
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

        <CardJogador
          foto={fotoMuralha}
          nick="Muralha"
          nome="Ana Beatriz Costa"
          idade={21}
          funcao="Sentinela"
          elo="Ascendente 3"
          disponivel={true}
          agentes={['Killjoy', 'Cypher', 'Sage']}
        />

        <CardJogador
          foto={fotoNebula}
          nick="Nébula"
          nome="Rafael Souza"
          idade={18}
          funcao="Controlador"
          elo="Diamante 3"
          disponivel={true}
          agentes={['Omen', 'Astra', 'Brimstone']}
        />

        <CardJogador
          foto={fotoRadar}
          nick="Radar"
          nome="Júlia Ferreira"
          idade={20}
          funcao="Iniciador"
          elo="Imortal 1"
          disponivel={false}
          agentes={['Sova', 'Fade', 'Skye']}
        />
      </div>
    </section>
  );
}

export default Jogadores;
