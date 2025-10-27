import React from "react";
import styles from './componentHeaderHomeApre.module.css';

function ComponentHeaderHomeApre() {
    return (
        <div className={styles.containerPrincipalHeaderHomeApre}>
            <div className={styles.containerFilhoHome}>
                <h1>Digitalize Seu <br />Negócio Hoje!</h1>
                <p>Conectamos negócios locais ao mundo com <br />tecnologia, agilidade e propósito.</p>
                <div>
                    <button>SAIBA MAIS</button>
                    <img src="imgBtn.png" alt="" />
                </div>
            </div>
            <div>
                <img className={styles.imagemLeaoHome} src="leaoDouradopreview.png" alt="" />
            </div>
        </div>
    );
}

export default ComponentHeaderHomeApre;
