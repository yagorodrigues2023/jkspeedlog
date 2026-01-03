import styles from "./styles.module.css";

export default function CardsFuncao({perfil}) {
  //const isDark =document.documentElement.getAttribute("data-theme") === "dark";


  return (
    <div className={styles.div}>

      <div className={styles.container}>
        <img className={styles.img} src={perfil} alt="perfil" />
        <div className={styles.containerDireita}>
          <div className={styles.containerCirculo} >

          </div>
          <div className={styles.containerCirculo} >
            
          </div>

        </div>

      </div>

      
    </div>
  );
}
