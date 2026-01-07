import styles from "./styles.module.css"


export default function Img({src}){
    return(
        <img src={src} alt="imagen" className={styles.img}/> 
    )
}