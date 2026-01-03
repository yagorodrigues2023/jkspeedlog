import styles from "./styles.module.css";
export default function Cards({img, nome, funcao} ) {
    const isDark =
    document.documentElement.getAttribute('data-theme') === 'dark';


        return(
                <div className={`${styles.card}`} style={{boxShadow: isDark ? ' none' : '-0px -0px 7px 0px rgb(0,0,0,0.4)'}}>
                    {img &&<img className={styles.img} src={img}   alt="perfil"/>}
                    <div className={styles.container}>
                        {nome && <label className={styles.nome}>{nome}</label>}
                        {funcao && <span className={styles.cardFuncao}><label className={styles.funcao}>{funcao}</label></span>}
                    </div>
                </div>

                
            
        )

}