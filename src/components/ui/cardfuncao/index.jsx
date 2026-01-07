import styles from "./styles.module.css";
import Img from "../img/img";

export default function Cards({ funcionarios }) {

  if (!funcionarios || funcionarios.length === 0) {
    return <p>Nenhum funcionário cadastrado</p>;
  }

  return (
    <div className={styles.divCards}>
      {funcionarios.map((funcionario, index) => (
        <div
        key={index}
        className={styles.card}>

          {funcionario.img && (
            <Img src={funcionario.img} />
          )}

          <div className={`alinhamentoColumnCentro ${styles.container}`}>
            {funcionario.nome && (
              <label className={styles.nome}>{funcionario.nome}</label>
            )}
            {funcionario.funcao && (
              <span className={styles.cardFuncao}>
                <label className={styles.funcao}>{funcionario.funcao}</label>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
