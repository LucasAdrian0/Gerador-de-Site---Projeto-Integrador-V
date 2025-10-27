import React from "react";
import styles from './componentNavHeader.module.css';


function ComponentNavHeader() {
    return (
        <div className={styles.containerPrincipalNavHeader}>
            <div className={styles.containerHeaderLogo}>
                <img className={styles.logo_img} src="logoMerakipreview.png" alt="img_logo" />
                <p id={styles.textLogo}>Meraki Web</p>
            </div>
            <div className={styles.containerNav}>
                <ol>
                    <li><a  className={styles.aNavBar} href="#homeApresentacaoId">Home</a></li>
                    <li><a className={styles.aNavBar} href="#homeSobreNos">Sobre nós</a></li>
                    <li><a className={styles.aNavBar} href="#homeCreateSite">Comece já</a></li>
                </ol>
            </div>
        </div>

    );
}

export default ComponentNavHeader;