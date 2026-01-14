import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Input({marginButom,fontweight,fontsize ,label , type='text', value, onChange, placeholder, error, ...rest
}){
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);


    return(
        <div className={`alinhamentoColumnEsquerda ${styles.container}`}>
            {label && <label
            className={styles.label} 
            style={{ 
               ...(fontsize && {fontSize: fontsize}),
               ...(fontweight && {fontWeight: fontweight})
            }}
             >{label}</label>}

            <div className={styles.container_input} >
            <input style={(marginButom && {marginBottom: marginButom})} className={styles.input}
            type={type === 'password' ? (showPassword ? 'text' : 'password') :  {type} }
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
            /> 
            {type === 'password' && <span  onClick={togglePassword}>{showPassword ? <FaEyeSlash className={styles.icon} /> : <FaEye  className={styles.icon}/>}</span>}
            </div>
            { error && <span className={styles.error}>{error}</span>}
            

        </div>
    )

}