'use client';
import styles from './cssFormularios.module.css';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

export default function WebsiteCreationForm() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.black}></div>
      <header className={styles.header}>
        <h1 className={styles.title}>Crie seu site profissional</h1>
        <p className={styles.subtitle}>Preencha os dados abaixo para iniciar a construção do seu site</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <div className={styles.titulo}>
              <legend className={styles.legend}>Informações Básicas</legend>
            </div>
            <div className={styles.borda}></div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="siteName">Nome do Site<span className={styles.span}>(como aparecerá no cabeçalho)</span></label>
              <input
                className={styles.item_padrao}
                type="text"
                id="siteName"
                placeholder="Ex: Minha Empresa LTDA"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="siteAbout">Sobre o Site</label>
              <textarea
                id="siteAbout"
                className={styles.textarea}
                placeholder="Descreva em poucas palavras o propósito do seu site"
                rows={4}
              ></textarea>
            </div>

            <div className={styles.titulo}>
              <legend className={styles.legend}>Contato da Empresa</legend>
            </div>
            <div className={styles.borda}></div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="siteEmail">E-mail Institucional</label>
              <input
                className={styles.item_padrao}
                type="email"
                id="siteEmail"
                placeholder="contato@seusite.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="sitePhone">Telefone para Contato</label>
              <input
                className={styles.item_padrao}
                type="tel"
                id="sitePhone"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="siteAddress">Endereço Completo</label>
              <input
                className={styles.item_padrao}
                type="text"
                id="siteAddress"
                placeholder="Rua, número, complemento, CEP"
              />
            </div>

            <div className={styles.titulo}>
              <legend className={styles.legend}>Preferências</legend>
            </div>
            <div className={styles.borda}></div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="siteCategory">Categoria do Site</label>
              <select className={styles.item_padrao} id="siteCategory">
                <option value="">Selecione uma categoria</option>
                <option value="business">Negócios/Empresarial</option>
                <option value="portfolio">Portfólio Pessoal</option>
                <option value="ecommerce">Loja Virtual</option>
                <option value="blog">Blog Pessoal</option>
                <option value="institutional">Institucional</option>
              </select>
            </div>

            <div className={styles.container_checkbox}>
              <input
                className={styles.item_checkbox}
                type="checkbox"
                id="hasDomain"
              />
              <label className={styles.item_labelcheck} htmlFor="hasDomain">
                Já possuo domínio próprio
              </label>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className={styles.footer}>
        <button className={styles.item_botao} onClick={() => router.push('/paginaAdministrativa')}>
          Solicitar Criação do Site
        </button>
        <p className={styles.helpText}>
          Precisa de ajuda? <a href="/" className={styles.helpLink}>Fale com nosso time</a>
        </p>
      </footer>
    </div>
  );
}