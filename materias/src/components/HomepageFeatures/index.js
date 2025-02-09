import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Repositorio Centralizado',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Accede a todos los recursos de las materias del máster en un único lugar.
        Encuentra fácilmente apuntes, guías, ejercicios y mucho más.
      </>
    ),
  },
  {
    title: 'Ejemplos de Tests',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Consulta ejemplos de tests, tanto de IA como recopilados de exámenes anteriores.
        ¡Prepárate para tus evaluaciones con material relevante!
      </>
    ),
  },
  {
    title: 'Proyecto Abierto',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Este proyecto es de código abierto. ¿Quieres contribuir? 
        ¡Envía tu Pull Request en GitHub y forma parte de la comunidad!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
