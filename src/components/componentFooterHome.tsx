import React from "react";
import styles from './componentFooterHome.module.css';

function ComponentFooterHome() {
    return (
        <div className={styles.containerPrincipalFooterHome}>
           <div className={styles.subContainerPrincipalFooterHome}>
                <h3>Fale Conosco</h3>
                <p>(14) 3099-9191</p>
                <p>faleconosco@gmail.com</p>
           </div>
           <div  className={styles.subContainerPrincipalFooterHome}>
                <h3>Links úteis</h3>
                <p>Política de privacidade</p>
                <p>Termos de uso</p>
           </div>
        </div>
    );
}

export default ComponentFooterHome;
