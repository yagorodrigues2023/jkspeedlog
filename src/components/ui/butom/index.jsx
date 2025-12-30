import styles from "./styles.module.css";

export default function Button({ label,onClick,width,height,borderRadius}){
        return(
            <button className={styles.button}  
            style={{ width: width || "auto", height: height || "auto", borderRadius :borderRadius || '0px' }} 
            onClick={onClick}> {label} </button>
        )
}