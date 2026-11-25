import { useState } from 'react';
import styles from './Contato.module.css';

function Contato() {
  
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section className={styles.pagina}>
      <h1 className={styles.titulo}>Contato</h1>
      <p className={styles.texto}>
        Está free agent e quer aparecer na vitrine? Ou é de um time e quer
        falar com algum jogador? Mande uma mensagem.
      </p>

      {enviado ? (
        <p className={styles.sucesso}>Mensagem enviada! (simulação — não há servidor)</p>
      ) : (
        <form className={styles.formulario} onSubmit={enviarFormulario}>
          <label className={styles.rotulo}>
            Nick no jogo
            <input className={styles.campo} type="text" required />
          </label>
          <label className={styles.rotulo}>
            E-mail
            <input className={styles.campo} type="email" required />
          </label>
          <label className={styles.rotulo}>
            Mensagem
            <textarea className={styles.campo} rows="4" required />
          </label>
          <button className={styles.botao} type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}

export default Contato;
