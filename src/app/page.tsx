import ComponentNavHeader from '@/components/componentNavHeader';
import ComponentHeaderHomeApre from '@/components/componentHeaderHomeApre';
import ComponentQuemSomos from '@/components/componentQuemSomosHome';
import ComponentCrieSeuSite from '@/components/componentCrieSeuSite';
import ComponentFooterHome from '@/components/componentFooterHome';
import ComponentMissaoValoresHome from '@/components/componentMissaoValoresHome';
import ConsomeJson from '@/pages/consomeJson';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="containerPrincipal">
        <div className="containerNavHeader">
          <ComponentNavHeader />
        </div>
        <div id='homeApresentacaoId' className="containerApresentacaoHome">
          <ComponentHeaderHomeApre />
        </div>
        <div id='homeSobreNos' className="containerQuemSomos">
          <ComponentQuemSomos />
        </div>
        <div className="containerMissaoValores">
          <ComponentMissaoValoresHome />
        </div>
        <div id='homeCreateSite' className="containerCriarSite">
          <ComponentCrieSeuSite />
        </div>
        <div className="containerFooter">
          <ComponentFooterHome />
        </div>
        <div className="containerConsomeJson">
        
        </div>
      </div>
    </>
  );
}
