'use client';

import { useState } from 'react';
import styles from './cssFormularios.module.css';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

export default function FormularioLogin() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function verificacaoLogin() {
    if (email === 'admin' && senha === 'admin') {
      router.push('/formularioCriarSite'); // ajuste para a rota correta
    } else {
      alert('E-mail ou senha incorretos');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.black}></div>
      <header className={styles.header}>
        <h1 className={styles.title}>Acesse sua conta</h1>
        <p className={styles.subtitle}>Entre com seu e-mail e senha para continuar</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={styles.fieldset}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input
                className={styles.item_padrao}
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Senha</label>
              <input
                className={styles.item_padrao}
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className={styles.container_checkbox}>
              <input
                className={styles.item_checkbox}
                type="checkbox"
                id="remember"
              />
              <label className={styles.item_labelcheck} htmlFor="remember">
                Lembrar de mim
              </label>
            </div>

            <div className={styles.forgotPassword}>
              <a href="#" className={styles.forgotLink}>Esqueci minha senha</a>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className={styles.footer}>
        <button onClick={verificacaoLogin} className={styles.item_botao}>
          Entrar
        </button>
        <p className={styles.registerText}>
          Não tem uma conta? <a href="/formularioRegistro" className={styles.registerLink}>Cadastre-se</a>
        </p>
      </footer>
    </div>
  );
}
