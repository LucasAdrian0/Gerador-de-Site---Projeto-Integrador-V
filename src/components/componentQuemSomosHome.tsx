import React from "react";
import styles from './componentQuemSomosHome.module.css';

function ComponentQuemSomos() {
    return (
        <div className={styles.containerPrincipalQuemSomos}>
            <div className={styles.containerDaImagemQuemSomos}>
                <img src="leaoFuturistaQuemSomos.png" alt="" />
            </div>
            <div className={styles.containerTextoSomosNos}>
                <h2>Quem Somos</h2>
                <p>Somos uma plataforma pensada para empreendedores locais, com soluções digitais acessíveis, práticas e feitas para transformar negócios em histórias de sucesso!</p>
                <div>
                    <button>Vamos Crescer Juntos
                    <img src="setaBtn.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComponentQuemSomos;