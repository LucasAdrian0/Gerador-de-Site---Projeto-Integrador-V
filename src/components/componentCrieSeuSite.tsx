'use client';

import Link from 'next/link';
import styles from './componentCrieSeuSite.module.css';

import { useRouter } from 'next/navigation';

function ComponentCrieSeuSite() {
    const router = useRouter();
    return (
        <div className={styles.containerPrincipalCrieSeuSite}>
            <div className={styles.subContainerPrincipalCrieSeuSite}>
                <h2>Crie seu negócio digital no botão abaixo</h2>
                <p>Aproveite nossa plataforma e transforme sua presença digital hoje mesmo.</p>

                <button
                    onClick={() => router.push('/apresentacaoTemplate')}>
                    Começar
                </button>

            </div>
        </div>
    );
}

export default ComponentCrieSeuSite;