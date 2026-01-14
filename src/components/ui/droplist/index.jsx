import styles from "./styles.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"


export default function DropList({label,dados,hook,sethook}){

    const [ open, setOpen] = useState(false)
    const [ selecionado, setSelecionado] = useState("")

    return(
        <div className="alinhamentoColumnTop" style={{width:"100%"}}>
            <label style={{ color:"var(--corTexto)" ,fontSize:"1.2rem", width:"90%"}}>{label}</label>
            <div className={styles.drop}>
                <span>
                    <label>{selecionado}</label>
                    <IoIosArrowDown  className={styles.icon} onClick={() => setOpen(!open)}/>
                </span>
                {open && 
                    <ul className={styles.dropList} >
                        {dados.data.map((data, index) =>(
                            <li key={index}
                                onClick={() => {
                                    sethook(data)
                                    setSelecionado(data);
                                    setOpen(false) 
                                    console.log(hook)
                                }}
                            >
                                {data}

                            </li>
                        ))} 
                    </ul>
                }
            </div>
        </div>
    )
}