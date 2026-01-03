import styles from "./styles.module.css";
export default function Cards({img, nome, funcao} ) {

        return(
            
                <div className={styles.card}>
                    {img &&<img className={styles.img} src={img}   alt="perfil"/>}
                    <div className={styles.container}>
                        {nome && <label className={styles.nome}>{nome}</label>}

                        {funcao && <span className={styles.cardFuncao}><label className={styles.funcao}>{funcao}</label></span>}
                    </div>
                </div>

                
            
        )

}