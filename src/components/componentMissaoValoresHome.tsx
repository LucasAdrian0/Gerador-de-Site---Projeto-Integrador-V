import React from "react";
import styles from './componentMissaoValoresHome.module.css';

function ComponentMissaoValoresHome() {
    return (
        <div className={styles.containerPrincipalMissaoValores}>
            <div className={styles.container01MissaoValores}>
                <h2>Missão, visão e valores</h2>
                <p className={styles.txtApresentacao}>Conheça os três pilares que sustentam a nossa empresa.</p>
                
                <div className={styles.subContainerMissaoValores}>
                    <div>
                        <img src="fogueteNossaMissao.png" alt="" />
                    </div>
                    <div>
                        <h4>Nossa Missão</h4>
                        <p>Conectar empreendedores ao digital com propósito e simplicidade.</p>
                    </div>
                </div>

                <div className={styles.subContainerMissaoValores}>
                    <div>
                        <img src="mapaNossaVisao.png" alt="" />
                    </div>
                    <div>
                        <h4>Nossa Visão</h4>
                        <p>Ser a ponte entre ideias locais e o futuro digital de milhares de empreendedores.</p>
                    </div>
                </div>

                <div className={styles.subContainerMissaoValores}>
                    <div>
                        <img src="maoNossaVisao.png" alt="" />
                    </div>
                    <div>
                        <h4>Nossos Valores</h4>
                        <p>Acreditamos em inovação, simplicidade e no poder de transformar realidades locais.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container02MissaoValores}>
                
                    <img src="homeNossaMissao.png" alt="" />
                
                <div className={styles.textoMissaoContainer2}>
                    <h3>Missão</h3>
                    <p>Empoderar pequenos empreendedores através da tecnologia, oferecendo ferramentas acessíveis para transformar seus negócios e suas histórias de vida.</p>
                </div>
            </div>
        </div>
    );
}

export default ComponentMissaoValoresHome;