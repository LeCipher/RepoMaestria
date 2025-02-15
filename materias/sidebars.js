// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: '.'
  //   },
  // ],
  
    analisisDeRiesgosSidebar: [
      {
        type: 'autogenerated',
        dirName: 'materia/analisis-de-riesgo',
        
      }
    ],
  
    InteligenciaDeAmenazasSidebar: [
      {
        type: 'autogenerated',
        dirName: 'materia/inteligencia-amenazas',
        
      }
    ],

    CriptografiaGICA: [
      {
        type: 'autogenerated',
        dirName: 'materia/criptografia',
        
      }
    ],
    MarcoNormativo: [
      {
        type: 'autogenerated',
        dirName: 'materia/marco-normativo',
        
      }
    ],

    Horarios: [
      {
        type: 'autogenerated',
        dirName: 'materia/horarios',
        
      }
    ],
    ControlDelRiesgoCiberseguridad: [
      {
        type: 'autogenerated',
        dirName: 'materia/control-ciberseguridad',
        
      }
    ],
    Privacidad: [
      {
        type: 'autogenerated',
        dirName: 'materia/privacidad',
        
      }
    ], 
    SeguridadEnProcesos: [
      {
        type: 'autogenerated',
        dirName: 'materia/seguridad-tecnologia',
        
      }
    ],
    ArquitecturaCiberseguridad: [
      {
        type: 'autogenerated',
        dirName: 'materia/arquitectura-ciberseguridad',
        
      }
    ],
    CadenaDeSuministro: [
      {
        type: 'autogenerated',
        dirName: 'materia/cadena-suministro',
        
      }
    ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
