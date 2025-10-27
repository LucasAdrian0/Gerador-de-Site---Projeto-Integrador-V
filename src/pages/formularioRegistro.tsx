'use client';
import styles from './cssFormularios.module.css';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

export default function RegistrationForm() {
    return (
        <div className={styles.container}>
          <div className={styles.black}></div>
          <header className={styles.header}>
            <h1 className={styles.title}>Crie sua conta</h1>
            <p className={styles.subtitle}>Preencha seus dados para se registrar</p>
          </header>
          <main className={styles.main}>
            <form className={styles.form}>
              <fieldset className={styles.fieldset}>
                <div className={styles.titulo}>
                  <legend className={styles.legend}>Dados Pessoais</legend>
                </div>
                <div className={styles.borda}></div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="nome">Nome Completo</label>
                  <input 
                    className={styles.item_padrao} 
                    type="text" 
                    id="nome" 
                    placeholder="Digite seu nome completo"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="telefone">Telefone</label>
                  <input 
                    className={styles.item_padrao} 
                    type="tel" 
                    id="telefone" 
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className={styles.titulo}>
                  <legend className={styles.legend}>Acesso</legend>
                </div>
                <div className={styles.borda}></div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">E-mail</label>
                  <input 
                    className={styles.item_padrao} 
                    type="email" 
                    id="email" 
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="senha">Senha</label>
                  <input 
                    className={styles.item_padrao} 
                    type="password" 
                    id="senha" 
                    placeholder="Crie uma senha forte"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="confirmar_senha">Confirmar Senha</label>
                  <input 
                    className={styles.item_padrao} 
                    type="password" 
                    id="confirmar_senha" 
                    placeholder="Repita sua senha"
                  />
                </div>

                <div className={styles.container_checkbox}>
                  <input 
                    className={styles.item_checkbox} 
                    type="checkbox" 
                    id="termos" 
                  />
                  <label className={styles.item_labelcheck} htmlFor="termos">
                    Eu concordo com os <a href="#" className={styles.termsLink}>Termos de Serviço</a> e <a href="#" className={styles.termsLink}>Política de Privacidade</a>
                  </label>
                </div>
              </fieldset>
            </form>
          </main>
          <footer className={styles.footer}>
            <button className={styles.item_botao}>Criar conta</button>
            <p className={styles.loginText}>
              Já tem uma conta? <a href="/formularioLogin" className={styles.loginLink}>Faça login</a>
            </p>
          </footer>
        </div>
    );
}