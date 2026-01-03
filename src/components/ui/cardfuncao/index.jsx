import styles from "./styles.module.css";

export default function Cards({ funcionarios }) {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";

  // Verifica se existe array
  if (!funcionarios || funcionarios.length === 0) {
    return <p>Nenhum funcionário cadastrado</p>;
  }

  return (
    <div className={styles.divCards}>
      {funcionarios.map((funcionario, index) => (
        <div
          key={index}
          className={styles.card}
          style={{
            boxShadow: isDark ? "none" : "0px 0px 7px rgba(0,0,0,0.4)",
          }}
        >
          {funcionario.img && (
            <img className={styles.img} src={funcionario.img} alt="perfil" />
          )}

          <div className={styles.container}>
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
