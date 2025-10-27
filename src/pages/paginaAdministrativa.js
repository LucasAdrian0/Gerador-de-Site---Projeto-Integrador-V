'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './paginaAdministrativa.module.css';
import '../app/globals.css';
import { FiUsers, FiFileText, FiSettings, FiLogOut, FiSearch, FiPlus } from 'react-icons/fi';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('sites');
  const [searchTerm, setSearchTerm] = useState('');
  const [dados, setDados] = useState({
    sites: [],
    usuarios: [],
    configuracoes: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await fetch('/dadosAdmin.json');
        
        if (!response.ok) {
          throw new Error('Erro ao carregar dados');
        }
        
        const dadosJson = await response.json();
        setDados(dadosJson);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  const handleLogout = () => {
    // Adicione lógica de logout aqui se necessário
    router.push('/');
  };

  const filteredSites = dados.sites.filter(site => 
    site.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h3>Erro ao carregar dados</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      {/* Sidebar */}
      <aside className={styles.adminSidebar}>
        <div className={styles.adminLogo}>
          <h2>Painel Meraki</h2>
        </div>
        
        <nav className={styles.adminMenu}>
          <button 
            className={`${styles.menuItem} ${activeTab === 'sites' ? styles.active : ''}`}
            onClick={() => setActiveTab('sites')}
          >
            <FiFileText /> Sites Criados
          </button>
          
          <button 
            className={`${styles.menuItem} ${activeTab === 'usuarios' ? styles.active : ''}`}
            onClick={() => setActiveTab('usuarios')}
          >
            <FiUsers /> Usuários
          </button>
          
          <button 
            className={`${styles.menuItem} ${activeTab === 'config' ? styles.active : ''}`}
            onClick={() => setActiveTab('config')}
          >
            <FiSettings /> Configurações
          </button>
        </nav>
        
        <button 
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          <FiLogOut /> Sair
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.adminMain}>
        <header className={styles.adminHeader}>
          <h1>
            {activeTab === 'sites' && 'Sites Criados'}
            {activeTab === 'usuarios' && 'Gerenciar Usuários'}
            {activeTab === 'config' && 'Configurações'}
          </h1>
          
          <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={activeTab === 'config'}
            />
          </div>
        </header>

        {/* Conteúdo Dinâmico */}
        <section className={styles.adminContent}>
          {activeTab === 'sites' && (
            <>
              <div className={styles.contentHeader}>
                <h2>Todos os Sites ({filteredSites.length})</h2>
                <button className={styles.addButton}>
                  <FiPlus /> Adicionar Site
                </button>
              </div>
              
              <div className={styles.tableContainer}>
                <table className={styles.adminTable}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome do Site</th>
                      <th>Status</th>
                      <th>Data de Criação</th>
                      <th>Visitas</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSites.map(site => (
                      <tr key={site.id}>
                        <td>{site.id}</td>
                        <td>
                          <a href={`https://${site.url}`} target="_blank" rel="noopener noreferrer">
                            {site.nome}
                          </a>
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles[site.status.toLowerCase()]}`}>
                            {site.status}
                          </span>
                        </td>
                        <td>{site.criacao}</td>
                        <td>{site.visitas.toLocaleString()}</td>
                        <td>
                          <button className={styles.actionButton}>Editar</button>
                          <button className={styles.dangerButton}>Excluir</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'usuarios' && (
            <>
              <div className={styles.contentHeader}>
                <h2>Usuários Cadastrados ({dados.usuarios.length})</h2>
                <button className={styles.addButton}>
                  <FiPlus /> Adicionar Usuário
                </button>
              </div>
              
              <div className={styles.tableContainer}>
                <table className={styles.adminTable}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>E-mail</th>
                      <th>Tipo</th>
                      <th>Último Acesso</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dados.usuarios.map(usuario => (
                      <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.tipo}</td>
                        <td>
                          {usuario.ultimoAcesso ? 
                            new Date(usuario.ultimoAcesso).toLocaleString() : 
                            'Nunca acessou'}
                        </td>
                        <td>
                          <button className={styles.actionButton}>Editar</button>
                          <button className={styles.dangerButton}>Excluir</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'config' && (
            <div className={styles.settingsContainer}>
              <h2>Configurações do Sistema</h2>
              <div className={styles.settingsForm}>
                <div className={styles.formGroup}>
                  <label>Nome do Sistema</label>
                  <input 
                    type="text" 
                    placeholder="Digite o nome do sistema" 
                    defaultValue={dados.configuracoes.nomeSistema}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>URL Base</label>
                  <input 
                    type="text" 
                    placeholder="https://seusite.com" 
                    defaultValue={dados.configuracoes.urlBase}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Manutenção</label>
                  <div className={styles.checkboxGroup}>
                    <input 
                      type="checkbox" 
                      id="maintenance" 
                      defaultChecked={dados.configuracoes.modoManutencao}
                    />
                    <label htmlFor="maintenance">Ativar modo manutenção</label>
                  </div>
                </div>
                
                <button className={styles.saveButton}>Salvar Configurações</button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
//