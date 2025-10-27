'use client';
import { useRouter } from 'next/navigation';
import styles from './ApresentacaoTemplate.module.css';
import '../app/globals.css';

export default function ApresentacaoTemplate() {
  const router = useRouter();

  const templates = [
    {
      id: 1,
      title: "Template Profissional",
      url: "https://mauro-roque.github.io/template_exemplo01/",
      image: "imagemPrincipal1.png",
      description: "Design moderno para negócios"
    },
    {
      id: 2,
      title: "Template Criativo",
      url: "https://mauro-roque.github.io/template_exemplo02/",
      image: "imagemPrincipal2.png",
      description: "Ideal para portfólios"
    },
    {
      id: 3,
      title: "Template Minimalista",
      url: "https://mauro-roque.github.io/template_exemplo03/",
      image: "imagemPrincipal3.png",
      description: "Simplicidade e elegância"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Explore Nossos Templates</h1>
          <p className={styles.subTitle}>Selecione um modelo que combine com seu estilo</p>
        </div>

        <div className={styles.templatesGrid}>
          {templates.map((template) => (
            <div key={template.id} className={styles.templateCard}>
              <a 
                href={template.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.templateLink}
              >
                <div className={styles.imageContainer}>
                  <img 
                    src={template.image} 
                    alt={`Preview do template ${template.title}`} 
                    className={styles.templateImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span>Visualizar Template</span>
                  </div>
                </div>
                <div className={styles.templateInfo}>
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.actionSection}>
          <button 
            onClick={() => router.push('/formularioLogin')}
            className={styles.ctaButton}
          >
            Começar Agora
            <span className={styles.buttonArrow}>→</span>
          </button>
        </div>
      </main>
    </div>
  );
}