---
title: Sesion - 2
sidebar_position: 3
---

## 1. Introducción a la Inteligencia de Amenazas

La **inteligencia**, en el contexto de la ciberseguridad y específicamente de la **Inteligencia de Amenazas (Threat Intelligence)**, se entiende como **información con valor** para la toma de decisiones. Esto implica:

- La inteligencia va más allá de la mera acumulación de datos o información; requiere **análisis**, **interpretación** y **conclusiones** que puedan influir en acciones concretas.
- Una definición resumida:

$$
INTELIGENCIA = INFORMACION + VALOR
$$

El proceso de convertir datos en inteligencia sigue la progresión:  
**Dato → Información → Experiencia → Inteligencia**.

Cada paso añade contexto, estructura o análisis, generando un valor adicional que permite la toma de decisiones más sólida.

---

## 2. Características de la Inteligencia

Para que la información se convierta en inteligencia efectiva, debe ser:

| **Atributo**        | **Descripción**                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **Relevante**       | Centrada en aspectos de riesgo que puedan afectar a la organización.                      |
| **Accionable**      | Soporta la toma de decisiones y facilita la ejecución de acciones.                        |
| **A tiempo**        | Permite anticiparnos a las amenazas y actuar antes de que impacten.                       |
| **Holística**       | Integra todos los aspectos relevantes de los riesgos (técnicos, organizativos, etc.).     |
| **Integrada**       | Muestra una **única visión** del riesgo, unificando la información de diferentes fuentes. |
| **Precisa**         | No incluye ambigüedades o información contradictoria.                                     |
| **Objetiva**        | Libre de sesgos subjetivos y sustentada en evidencia.                                     |
| **Detallada**       | Proporciona información suficiente (y necesaria) para entender el riesgo en su totalidad. |
| **Contextualizada** | Incluye el contexto necesario para que la información sea interpretada de forma correcta. |
| **Justificada**     | Permite explicar por qué se llega a las conclusiones expuestas.                           |

---

## 3. Concepto de Amenaza y sus Preguntas Clave

Una **amenaza** es cualquier cosa capaz de causar daño o peligro. En el ámbito de la ciberseguridad:

1. **Amenazas comunes**: Generalmente no dirigidas a un objetivo específico. Se suelen mitigar con medidas estándar como antivirus y cortafuegos.
2. **Amenazas avanzadas**: Más complejas y elaboradas, suelen esquivar o superar los controles de seguridad habituales.

Para entender mejor a qué nos enfrentamos, se plantea el siguiente conjunto de preguntas:

- **¿Quiénes** son los atacantes? (Actores, patrocinadores, insiders, etc.)
- **¿Qué** herramientas o capacidades utilizan? (Malware, infraestructuras, técnicas específicas)
- **¿Dónde** suelen atacar? (Sectores, industrias, regiones geográficas)
- **¿Cuándo** actúan? (Identificar sus patrones temporales o líneas de tiempo)
- **¿Por qué** atacan? (Motivaciones políticas, económicas, personales, etc.)
- **¿Cómo** operan? (Modus operandi, patrones de comportamiento, tácticas, técnicas y procedimientos)

---

## 4. Exceso de Información: Un Reto para la Inteligencia

En ciberseguridad, a menudo se dispone de **grandes volúmenes de información** (logs, SIEM, WAF, sondas, etc.). Esto puede ser un problema si no se sabe **gestionar** y **filtrar** adecuadamente:

- **Información sin valor** → Conduce a mala inteligencia.
- El verdadero propósito es **aportar valor** a partir de la información.
- Por lo tanto, la información debe **gestionar** y **utilizarse** de forma efectiva, eliminando lo superfluo.

---

## 5. ¿Qué Información Buscamos?

Podemos clasificar la información que se utiliza para generar **ciberinteligencia** en tres grandes bloques:

| Estratégica                                       | Táctica                                                                                                                   | Operativa                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Tendencias en métodos de ataque<br /> - Actores | - Campañas de ciberataques<br /> - Campañas de malware<br /> - Evolución de tecnologías de ciberseguridad<br /> - Botnets | Vulnerabilidades<br />Exploits<br />Información robada:<br />• Credenciales<br />• Medios de pago<br />• Información personal<br />• Propiedad intelectual<br />Incidentes activos<br />Campañas de phishing<br />Información para investigaciones |

Esta tabla orientativa muestra cómo, según el **nivel** (estratégico, táctico u operativo), se priorizan diferentes tipos de información.

---

## 6. Inteligencia + Amenazas

La **Inteligencia de Amenazas** (Threat Intelligence) es el conocimiento detallado acerca de las amenazas, que incluye:

- Capacidades e infraestructura de los atacantes.
- Motivación, objetivos y recursos.
- Fuentes internas (datos de la propia organización) y externas (servicios, feeds, comunidades de intercambio de inteligencia, etc.).

El objetivo final es **afinar** y **priorizar** las amenazas concretas que afectan a la organización, para que la inteligencia resultante sea **accionable**.

### Características de la Inteligencia de Amenazas Útil

1. **Oportuna**: Que ayude a problemas actuales o inminentes.
2. **Precisa**: Debe representar fielmente la actividad o situación analizada.
3. **Procesable**: Debe ser comprensible y utilizable por la organización.
4. **Relevante**: Debe aportar valor real al negocio u organización.

---

## 7. Concepto de CTI (Cyber Threat Intelligence)

El **CTI** se basa en la premisa de **"conocer al enemigo"** (Sun Tzu, “El arte de la guerra”):

> Si conoces a tu enemigo y te conoces a ti mismo, no debes temer el resultado de cien batallas....

- **CTI** implica adoptar una **defensa proactiva**.
- Con la información adecuada sobre quién, por qué y cómo ataca, es posible diseñar estrategias que **reduzcan** el impacto de las amenazas.

### Definiciones destacadas

1. **CERT-UK / Centro de la Seguridad de la Internet (CIS)**:

   > Conocimiento sobre las amenazas basándose en evidencias concretas, incluyendo capacidades, infraestructura, motivación, objetivos y recursos del atacante. El CTI ayuda a detectar indicadores de ciberamenazas, extraer información sobre métodos de ataque e identificar amenazas de seguridad para tomar decisiones con antelación.

2. **CIS (Ciber Threat Intelligence)**:
   > La inteligencia de amenazas cibernéticas es en lo que se convierte la información una vez que se ha recopilado, evaluado en contexto y analizado por expertos. Todo ello reduce la incertidumbre, ayuda a identificar amenazas y oportunidades, y a detectar engaños.

---

## 8. Tipos de Inteligencia según su Fuente

1. **OSINT (Open Source Intelligence)**: Información de fuentes abiertas (medios, redes sociales, buscadores, etc.).
2. **HUMINT (Human Intelligence)**: Información obtenida a través de relaciones personales o contactos.
3. **SIGINT (Signals Intelligence)**: Interceptación de señales de comunicaciones (teléfono, radio, datos electromagnéticos).
4. **FININT (Financial Intelligence)**: Inteligencia financiera con fines competitivos, espionaje industrial o análisis de mercado.
5. **GEOINT (Geospatial Intelligence)**: Información de carácter geoespacial (imágenes satelitales).
6. **CYBINT (Cyber Intelligence)**: Inteligencia basada en datos relacionados con la actividad maliciosa en el entorno cibernético.

---

## 9. El Ciclo de Inteligencia

El **ciclo de inteligencia** es el proceso sistemático mediante el cual se transforma la información en conocimiento para el **usuario final**. Incluye:

1. **Metas y Objetivos**: Definir qué queremos saber y para qué.
2. **Fuentes**: Identificar y seleccionar las fuentes más relevantes.
3. **Recopilación**: Limpieza, normalización y recolección de datos.
4. **Datos**: Filtrado, correlación y enriquecimiento.
5. **Información**: Procesamiento, verificación, contraste y obtención de conclusiones iniciales.
6. **Inteligencia**: Análisis profundo, comunicación y generación final de conocimiento útil.

### Relación entre datos, información e inteligencia

1. **Datos**: Elementos básicos y sin procesar.
2. **Información**: Datos procesados y organizados.
3. **Inteligencia**: Información contextualizada y analizada, enfocada a la toma de decisiones.

---

## 10. Tipos y Niveles de Inteligencia en Ciberseguridad

### 10.1 Inteligencia

- **Información relevante** convertida en **ciberinteligencia** a través de un ciclo dinámico de colección, análisis, integración y producción.
- Debe **adaptarse** a las necesidades de **equipos técnicos** y **altos cargos**.
- **Ajustar el mensaje** al receptor: un directivo no necesita el mismo nivel de detalle que un analista de ciberseguridad.

### 10.2 Niveles de Inteligencia

1. **Estratégica**

   - Visión de alto nivel de amenazas que afectan a un sector, industria o a la organización.
   - No técnica; orientada a la toma de decisiones (CEO, CIO...).
   - Normalmente se entrega en informes que describen tendencias y análisis de riesgos.

2. **Táctica**

   - Describe **cómo** la empresa puede ser atacada y cómo protegerse ante los últimos tipos de ataques.
   - **TTPs**: tácticas, técnicas y procedimientos de atacantes.
   - Dirigido a departamentos técnicos y de protección de recursos.

3. **Técnica**

   - Información más detallada sobre señales de un ataque (patrones, eventos, anomalías).
   - Se utilizan datos de múltiples fuentes (logs, redes sociales, tráfico de red...).
   - Permite actuar de forma **inmediata** (reglas de firewall, sistemas de detección, etc.).

4. **Operativa**
   - Se enfoca en la **respuesta inmediata** y en la **anticipación** de ataques concretos.
   - Suele implicar la utilización de **tecnologías disruptivas** (IA, Machine Learning) para procesar grandes volúmenes de datos no estructurados.
   - Permite acciones preventivas como actualización de reglas de detección o cambios de configuración en tiempo real.

---

## 11. Tipos de Actores de Amenazas

En la práctica, existen diferentes **perfiles** de ciberatacantes o actores de amenaza:

| **QUIÉN**                                 | **POR QUÉ**                                                              | **CÓMO**                                       |
| ----------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------- |
| **Atacantes oportunistas** (por hobby)    | Curiosidad, malicia                                                      | Hacking ocasional, defacement                  |
| **Hacktivistas** (Anonymous, etc.)        | Ideológicos, políticos, disruptivos                                      | Denegaciones de servicio, brechas de seguridad |
| **Crimen organizado**                     | Beneficio económico (fraude, extorsión)                                  | Malware, troyanos, ransomware                  |
| **Amenazas persistentes avanzadas** (APT) | Robo de propiedad intelectual, espionaje económico o corporativo         | Malware dirigido, técnicas avanzadas           |
| **Estados** (ciberguerra, ciberespionaje) | Disrupción de infraestructuras críticas, espionaje diplomático, sabotaje | Ciber sabotaje, técnicas de espionaje          |

Así mismo, podemos dividirlos según **motivación principal**:

| **Actor de Amenaza Cibernética** | **Motivación**         |
| -------------------------------- | ---------------------- |
| **Estados-Nación**               | Geopolítica            |
| **Cibercriminales**              | Lucro                  |
| **Hacktivistas**                 | Ideológica             |
| **Grupos Terroristas**           | Violencia ideológica   |
| **Buscadores de Emoción**        | Satisfacción personal  |
| **Amenazas Internas**            | Descontento / Venganza |

---

# Resumen

1. $$Inteligencia = Informacion + Valor$$:

   - El objetivo final es tomar **decisiones informadas**.

2. **Características de la inteligencia**:

   - **Relevante**, **Accionable**, **A tiempo**, **Precisa** y **Objetiva**.

3. **Amenazas: Conocer el quién, qué, dónde, cuándo, por qué y cómo**:

   - Sirve para **entender** la naturaleza del ataque y **anticipar** respuestas.

4. **Clasificación por niveles** (Estratégico, Táctico, Técnico, Operativo):

   - Ajustar la información a **diferentes audiencias** y **diferentes propósitos**.

5. **Ciclo de inteligencia**:

   - **Recopilar → Procesar → Analizar → Difundir**
   - Iterar y actualizar constantemente.

6. **Tipos de actores**:

   - **Conocer motivaciones** y **objetivos** (profit, ideológico, geopolítico, etc.) para entender la amenaza.

7. **CTI (Cyber Threat Intelligence)**:
   - **Proactividad** para adelantarse al atacante.
   - Basada en el principio de **“conoce a tu enemigo y conócete a ti mismo”**.

---

## Conclusión

La Inteligencia de Amenazas es un elemento clave en la estrategia de ciberseguridad de cualquier organización. Va más allá de recolectar datos: implica transformar la información en valor real para la toma de decisiones, mediante procesos de análisis y verificación contínuos. Conocer quién ataca, por qué, cómo y con qué objetivos, permite optimizar los recursos de defensa y reaccionar de forma efectiva ante incidentes de seguridad.
