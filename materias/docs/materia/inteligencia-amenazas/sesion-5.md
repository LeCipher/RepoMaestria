---
title: Sesion - 5
sidebar_position: 6
---

## 1. ¿Qué es OSINT?

**OSINT** (Open Source Intelligence) consiste en la **recolección y el análisis de información** que se encuentra **disponible públicamente**, con el fin de generar inteligencia accionable. Esta información puede proceder de fuentes tan diversas como:

- Páginas web indexadas en buscadores (Clear Web).
- Páginas ocultas o con acceso limitado (Deep Web).
- Foros y redes anónimas (Dark Web), entre otros.

### Aplicaciones clave de OSINT

1. **Vincular IoCs a campañas conocidas**
   - Un analista puede cruzar direcciones IP sospechosas con bases de datos OSINT para relacionarlas con grupos o campañas de amenaza.
2. **Identificar amenazas cibernéticas**
   - Fuerzas de seguridad, cuerpos policiales y organismos gubernamentales utilizan OSINT para buscar datos sobre criminales y terroristas.
3. **Recopilar pruebas e indicios en investigaciones**
   - Por ejemplo, usando Google o Maltego, se puede rastrear la estructura y relaciones en incidentes de ciberseguridad.

---

## 2. Diferentes tipos de plataformas de datos OSINT

### 2.1. Fuentes de amenazas

- **Plataformas o feeds comunitarios** de intercambio de IoCs:

  - [AlienVault OTX](https://otx.alienvault.com/)
  - [Abuse.ch](https://abuse.ch/)

- **Integración con SIEM o plataformas de Threat Intelligence**

  - Estas fuentes se pueden automatizar y correlacionar en el entorno de seguridad de la organización.

- **Gratuitas vs. de pago**

  - Las gratuitas pueden generar más falsos positivos, pero son un buen punto de partida.
  - Las de pago a menudo incluyen análisis más profundos y mejor filtrado de eventos irrelevantes.

- **Fuentes STIX**
  - Proporcionan información estandarizada y reportes de amenazas que facilitan el intercambio de datos.

### 2.2. Plataformas de investigación

Herramientas enfocadas en la **investigación de archivos, dominios, IPs y URLs**:

1. [VirusTotal](https://www.virustotal.com/gui/home/upload)
   - Análisis colaborativo de archivos y URLs.
2. [Any.run](https://any.run/)
   - Entorno de sandbox interactiva para malware y amenazas en tiempo real.
3. [Hybrid Analysis](https://hybrid-analysis.com/)
   - Servicio de análisis de malware con motores y entornos virtualizados.
4. [URLScan](https://urlscan.io/)
   - Analiza y representa visualmente el comportamiento de una URL.
5. [Joe Sandbox](https://www.joesandbox.com/)
   - Permite hacer análisis estático y dinámico de archivos potencialmente maliciosos.
6. **Maltego**
   - Herramienta muy popular para el análisis de enlaces y visualización de relaciones entre datos (IPs, dominios, personas, etc.).

### 2.3. Redes sociales

- **Facebook, LinkedIn, X (anteriormente Twitter)**
  - Fuentes inagotables de información sobre malware, IoCs y TTPs (Tácticas, Técnicas y Procedimientos).
  - Uso de aplicaciones como TweetDeck para filtrar y centralizar la información relevante.

### 2.4. Plataformas de mensajería

- **Slack, Discord**
  - Comunidades de ciberseguridad y foros donde se comparten amenazas, vulnerabilidades y experiencias.
  - Posibilidad de resolver dudas y colaborar en tiempo real.

---

## 3. ¿Cómo investigar datos usando OSINT?

### 3.1. Infraestructura del adversario

En un contexto de CTI (Cyber Threat Intelligence), resulta esencial investigar:

- **Dominios, IPs, correos electrónicos**
- **Certificados SSL, cookies, proveedores de alojamiento**
- **Tecnologías utilizadas**
  - Herramientas como [BuiltWith](https://builtwith.com/) permiten ver qué stack tecnológico usa un dominio.
  - Con VirusTotal se puede rastrear relaciones entre dominios o IPs asociadas a campañas.

### 3.2. Actores de amenazas

- **Amenazas sofisticadas**
  - Grupos APT que ocultan su identidad y operan de forma encubierta.
- **Delincuentes cibernéticos de menor nivel**
  - Foros públicos o redes sociales donde a veces revelan información personal (nombre, alias, ubicación, etc.).
- **Perfilado de actores**
  - Un analista puede vincular un “nickname” usado en foros ilegales con su identidad real y, posteriormente, notificar a las autoridades.
- **Perfilado de ejecutivos**
  - OSINT se utiliza también para evaluar riesgos asociados a directivos o cargos relevantes.

### 3.3. Datos disponibles y Google Dorks

- **Google Dorks**: Son técnicas avanzadas de búsqueda que permiten filtrar datos específicos en internet.
  - `“término a buscar”`: obliga a Google a buscar la frase exacta.
  - `site:uax.es ciberseguridad`: busca la palabra clave en un dominio específico.
  - `filetype:pdf`: filtra un tipo de archivo concreto (pdf, docx, xlsx...).
  - `inurl:` y `allinurl:`: busca palabras clave en la URL.
  - `intitle:`: busca coincidencias en los títulos de las páginas.
  - `*`: comodín que representa cualquier término.
- **Posibles contramedidas**
  - Configurar `robots.txt` para evitar indexación no deseada (aunque no siempre es efectivo).

---

## 4. ¿Qué necesita un investigador de OSINT?

### 4.1. Entorno de trabajo seguro

- **Hardware independiente de la empresa**
  - Para evitar restricciones corporativas y salvaguardar la investigación.
- **Máquinas virtuales**
  - Se pueden descartar fácilmente o reinstalar para eliminar huellas.
- **Acceso a la dark web (Tor, i2P, Freenet)**
  - Herramientas de anonimato esenciales para investigar en foros clandestinos.
- **VPNs y conectividad 4G/5G**
  - Disminuye la geolocalización directa.

### 4.2. Uso de alias e identidades falsas

- **Separación total de identidad personal y cuentas de investigación**
  - Evitar riesgos como ser “aceptado” o rastreado por el ciberdelincuente en la cuenta personal.
- **Creación de perfiles creíbles**
  - Usar correo electrónico diferente al corporativo.
  - Dedicación a dar “me gusta”, comentar, etc., para parecer un usuario normal.

### 4.3. “Nueva cara” para redes sociales

- **Generar imágenes con IA**
  - Añadir fotos de rostro, fotos cotidianas, etc., para aumentar la credibilidad.
- **Verificación en redes**
  - Se requiere teléfono para activar 2FA y dar confianza al sistema.

### 4.4. Gestor de contraseñas

- **Uso de contraseñas únicas y seguras**
  - 1Password, KeepAss, LastPass, Bitwarden, NordPass...
- **Mantenimiento continuo**
  - Revisar las cuentas periódicamente, realizar búsquedas, comentar y reaccionar.

---

## 5. ¿Debo contactar con el “malo”?

- **OSINT vs. HUMINT**

  - La **HUMINT** (Human Intelligence) implica interacción directa con el objetivo para obtener información.
  - En ciberseguridad, es poco común que un analista OSINT participe en HUMINT activa, ya que:
    - Requiere mayor especialización y experiencia.
    - Conlleva riesgos legales y personales.
    - Puede ser más rentable contratar servicios profesionales específicos.

- **¿Cuándo podría ser útil?**
  - Al infiltrarse en foros privados y ganar la confianza del actor para extraer datos.
  - Implica construir relaciones online (a veces muy largas) y sostener una “historia de personaje” creíble.

---

## 6. Resumen

1. **OSINT**:

   - Búsqueda y análisis de información pública para generar inteligencia.
   - Útil para vincular indicadores de compromiso con campañas conocidas y apoyar investigaciones forenses.

2. **Plataformas clave**:

   - **Threat feeds** (AlienVault OTX, abuse.ch) e **investigación de malware** (VirusTotal, Any.run, Hybrid Analysis).
   - **Herramientas de visualización** como Maltego y redes sociales/foros (X, Slack, Discord).

3. **Google Dorks**:

   - Búsquedas avanzadas para encontrar datos específicos (archivos, direcciones, filtraciones).
   - Permiten descubrir información sensible mal indexada en internet.

4. **Infraestructura del adversario**:

   - Investigaciones sobre dominios, IPs, proveedores de hosting y certificados.
   - Uso de herramientas como BuiltWith para conocer las tecnologías que emplean los atacantes.

5. **Requisitos para un investigador**:

   - Separación total de identidad: alias, nuevo teléfono, cuentas falsas, hardware independiente.
   - Uso de VPNs y redes seguras para acceder a la Dark Web sin exponer información personal.

6. **HUMINT**:
   - Interacción directa con actores de amenaza.
   - Escaso uso en contextos corporativos de ciberseguridad sin equipos especializados.

En resumen, OSINT ofrece una perspectiva muy valiosa para la ciberseguridad: permite rastrear actores maliciosos, fortalecer defensas y descubrir información sensible expuesta. Sin embargo, requiere un enfoque meticuloso, conciencia de los límites legales y un cuidado extremo al manejar identidades ficticias y entornos de investigación.
