---
title: Sesion - 3
sidebar_position: 4
---

# Lectura exhaustiva

A continuación, se presenta un repaso en profundidad de los principales conceptos abordados, organizados de forma clara y didáctica para su fácil comprensión. Este material está dirigido tanto a lectores de blog interesados en ciberseguridad como a estudiantes que buscan apuntes de estudio en un máster o curso especializado.

---

## 1. Tipos de actores en la organización

La Inteligencia de Amenazas (Cyber Threat Intelligence, CTI) beneficia a todos los niveles de una organización, ya que permite:

- **Dirección (CEO, CIO, CISO)**

  - Comprender los riesgos a los que se expone la organización.
  - Gestionar dichos riesgos y proponer medidas para minimizar su impacto.

- **Analista de inteligencia**

  - Identificar, rastrear y comprender amenazas específicas que afectan a la organización.
  - Proporcionar informes y recomendaciones accionables para la toma de decisiones.

- **CSIRT (Computer Security Incident Response Team)**

  - Agilizar la investigación de incidentes de seguridad.
  - Gestionar cada incidente mediante registro, priorización y catalogación, asegurando una respuesta eficiente.

- **SOC (Security Operations Center)**

  - Priorizar incidentes en función del riesgo y el impacto para la organización.
  - El equipo SOC es responsable de la vigilancia continua de la seguridad y la respuesta a amenazas en tiempo real.

- **Analista de seguridad**
  - Mejorar las medidas de prevención, detección y protección.
  - Implementar y supervisar las soluciones de seguridad, ajustándolas conforme evolucionan las amenazas.

---

## 2. Pirámide del dolor

Desarrollada por David Bianco en 2013, la Pirámide del Dolor (Pyramid of Pain) clasifica distintos tipos de **Indicadores de Compromiso (IoC)** según el nivel de dificultad que supone para un atacante modificar dichos indicadores. Cuanto mayor es la dificultad de cambio (y, por tanto, el “dolor” para el adversario), más efectiva es la estrategia de defensa.

1. **Valores Hash**

   - Ubicados en la base de la pirámide.
   - Muy fáciles de cambiar para un atacante (solo se necesita alterar mínimamente el archivo para cambiar el hash).

2. **Direcciones IP**

   - Más difíciles de modificar que los hashes, pero siguen siendo relativamente sencillas de alterar (por ejemplo, cambiando de proveedor o usando servicios de anonimización).

3. **Nombres de dominio**

   - Requieren mayor esfuerzo para cambiar, ya que registrarlos o configurarlos de nuevo puede ser costoso y lleva tiempo.

4. **Artefactos de red/host**

   - Incluyen patrones de tráfico o configuraciones de sistemas que son más complicados de imitar sin alterar el funcionamiento del malware o exponer la actividad maliciosa.

5. **Herramientas y TTPs (Tácticas, Técnicas y Procedimientos)**
   - Son los más costosos de modificar. Requieren cambiar la estrategia, las herramientas o incluso la capacitación de los atacantes para continuar su actividad maliciosa.

---

## 3. ¿Qué son los IoCs?

Los **Indicadores de Compromiso (IoC)** son evidencias forenses que señalan actividad potencialmente maliciosa en un sistema o red. Pueden encontrarse en:

- Entradas del Registro del sistema (Windows, por ejemplo).
- Archivos de configuración.
- Patrones de red anómalos, etc.

### Importancia de los IoCs

- **Detección temprana de ataques**: Al monitorizarlos, se identifican amenazas y se toman acciones preventivas para minimizar el daño.
- **Rapidez de respuesta**: Permiten reaccionar y detener ataques en fases iniciales, evitando fugas de información o daños mayores.
- **Guía de investigación**: Funcionan como “migas de pan” que conducen al descubrimiento de la raíz de la actividad maliciosa.

### Estándares de intercambio de IoCs

- **OpenIOC (Open Indicators of Compromise)**
- **Oasis Cyber Threat Intelligence (CTI)**
- **Cybox (Cyber Observable eXpression)**
- **MAEC (Malware Attribute Enumeration and Characterization)**

Estos sistemas facilitan el intercambio estructurado de información sobre amenazas, mejorando la colaboración entre organizaciones y profesionales de ciberseguridad.

---

## 4. Ejemplos típicos de IoCs

1. **Patrones de tráfico de red inusuales**:

   - Salida repentina de grandes volúmenes de datos o conexiones a destinos sospechosos.

2. **Anomalías geográficas**:

   - Conexiones entrantes o salientes desde localizaciones con las que la organización no tiene relación comercial o actividad habitual.

3. **Aplicaciones desconocidas o hashes maliciosos**:

   - Coincidencias con feeds de inteligencia sobre amenazas.

4. **Actividad inusual de cuentas privilegiadas**:

   - Uso fuera del horario laboral o desde ubicaciones poco comunes.

5. **Intentos de inicio de sesión anómalos**:

   - Frecuencia inusual, ubicación remota inesperada, múltiples fallos seguidos.

6. **Aumento de lecturas de bases de datos o archivos corporativos**:

   - Puede indicar una fase de reconocimiento y recolección de información previa a la exfiltración.

7. **Cambios sospechosos en configuraciones o en el Registro de Windows**:

   - Creación de persistencia maliciosa o desactivación de medidas de seguridad.

8. **Solicitudes de DNS o HTTPS a dominios desconocidos o sospechosos**.

9. **Generación de un gran número de archivos comprimidos o cifrados**:
   - Podría ser síntoma de preparación de datos para filtración.

---

## 5. Cyber Security Kill Chain

La **Cyber Security Kill Chain** describe de manera sistemática las etapas que transita un ciberataque. A modo general, las fases son:

1. **Reconocimiento (Reconnaissance)**

   - El atacante investiga la organización para descubrir activos, tecnologías empleadas y posibles vulnerabilidades.

2. **Arma o Preparación (Weaponization)**

   - El atacante desarrolla o adapta el malware, exploit o vector de ataque.

3. **Entrega (Delivery)**

   - Se hace llegar el payload al objetivo (p.e., phishing, adjunto malicioso, drive-by download).

4. **Explotación (Exploitation)**

   - Se aprovecha la vulnerabilidad del sistema o del usuario para ejecutar el código malicioso.

5. **Instalación (Installation)**

   - El atacante instala puertas traseras (backdoors) o herramientas de persistencia.

6. **Comando y Control (C2)**

   - El sistema comprometido se comunica con la infraestructura del atacante para recibir órdenes.

7. **Acciones sobre el Objetivo (Actions on Objectives)**
   - Se extraen datos (exfiltración), se cifran archivos (ransomware) o se realizan otras acciones maliciosas.

Entender este ciclo ayuda a identificar en qué momento actuar para mitigar o detener el ataque.

---

## 6. APT (Amenazas Persistentes Avanzadas)

Una **APT** (Advanced Persistent Threat) es un tipo de ataque caracterizado por:

- **Acceso no autorizado y prolongado** a la red de la víctima, permaneciendo **sigiloso** el máximo tiempo posible.
- **Objetivo**: robar información sensible (propiedad intelectual, datos financieros, información confidencial, etc.).
- **Fases**:
  1. Comprometer la red de forma inicial.
  2. Esconderse y mantener persistencia.
  3. Recolectar y exfiltrar datos sin ser detectado.

Las APTs se consideran especialmente peligrosas porque:

- **Duración e impacto**: pueden mantenerse durante semanas o meses, extrayendo información crítica.
- **Recursos y sofisticación**: suelen estar respaldadas por grupos muy organizados (incluso patrocinados por Estados o grandes organizaciones criminales).

---

## 7. Tácticas, Técnicas y Procedimientos (TTPs)

Las **TTPs** describen el comportamiento o modus operandi de los actores maliciosos y engloban tres conceptos:

1. **Táctica**

   - Estrategia o proceso general para lograr un objetivo de ataque.

2. **Técnica**

   - Manera específica de ejecutar la táctica empleando un patrón conocido (ej.: phishing, inyección SQL, etc.).

3. **Procedimiento**
   - Conjunto de pasos detallados y documentados para llevar a cabo las técnicas dentro de una táctica, buscando garantizar un resultado predecible.

> **MITRE ATT&CK** es la referencia mundial donde se categorizan y documentan TTPs de forma detallada. Sirve como base de conocimiento para simular y evaluar ataques, así como para mejorar defensas.

---

## 8. Fuentes de información sobre amenazas

### 8.1 Fuentes abiertas (Open Source)

Son flujos de datos continuos que proporcionan información en tiempo real sobre la evolución de amenazas y tendencias de ciberseguridad. Ejemplos:

- **Yeti**: [https://yeti-platform.io/](https://yeti-platform.io/)
- **MISP (Malware Information Sharing Platform)**: [https://www.misp-project.org/](https://www.misp-project.org/)
- **OpenCTI**: [https://github.com/OpenCTI-Platform/opencti](https://github.com/OpenCTI-Platform/opencti)
- **TheHive**: [https://github.com/TheHive-Project/TheHive](https://github.com/TheHive-Project/TheHive)
- **Cuckoo Sandbox**: [https://cuckoosandbox.org/](https://cuckoosandbox.org/)
- **Harpoon**: [https://github.com/Te-k/harpoon](https://github.com/Te-k/harpoon)
- **GOSINT**: [https://github.com/ciscocsirt/GOSINT](https://github.com/ciscocsirt/GOSINT)
- **MITRE Framework**: [https://attack.mitre.org/](https://attack.mitre.org/)
- **VirusTotal**: [https://www.virustotal.com/gui/home/upload](https://www.virustotal.com/gui/home/upload)

### 8.2 Fuentes de pago

- Cisco AMP Threat Grid
- DeepSight
- Anomali
- SIS
- Blueliv
- Cofense
- CrowdStrike
- Georgia Tech
- Flashpoint
- Fox IT
- FireEye

Estas fuentes comerciales suelen ofrecer un servicio más robusto y especializado, incluyendo alertas avanzadas y soporte dedicado.

---

## 9. Profundidad en la obtención de información para generar inteligencia

La búsqueda de información en Internet se clasifica en **tres niveles de profundidad**:

1. **Clear Web**

   - Contenido indexado por motores de búsqueda convencionales (Google, Bing...).
   - Acceso normalmente directo (algunas webs requieren pago o suscripción).
   - El contenido suele permanecer disponible por períodos largos.

2. **Deep Web**

   - No indexada por motores de búsqueda tradicionales.
   - Acceso restringido, a menudo requiere registro.
   - En ocasiones, solo por invitación, lo que dificulta la localización de la información.

3. **Dark Web**
   - No indexada por motores de búsqueda convencionales.
   - Acceso mediante redes y protocolos específicos (Tor, I2P, Freenet...).
   - Alta volatilidad; el contenido puede desaparecer a los pocos minutos u horas.
   - Suele utilizarse para actividades ilegales, tráfico de datos robados, etc.

La exploración controlada y legal de estos ámbitos es esencial para obtener inteligencia detallada sobre amenazas potenciales y actores maliciosos.

---

# Resumen

1. **La Inteligencia de Amenazas (CTI)**

   - Beneficia a todos los niveles organizativos (Dirección, SOC, CSIRT, analistas...).
   - Facilita la toma de decisiones informada para prevenir y responder a incidentes de ciberseguridad.

2. **Pirámide del Dolor**

   - Cuanto más complejo sea el indicador (TTPs, artefactos de red/host), más “dolor” causa al atacante y más efectiva resulta la defensa.

3. **IoCs**

   - Indicadores críticos para detectar y responder ante amenazas (patrones de tráfico, hashes maliciosos, anomalías de cuentas…).
   - Su intercambio mediante estándares (OpenIOC, STIX, MISP, etc.) mejora la colaboración entre organizaciones.

4. **Cyber Kill Chain**

   - Visión clara de las fases de un ataque (Reconocimiento, Entrega, Explotación, Comando y Control...).
   - Identificar dónde detener o contener la amenaza es fundamental.

5. **APT**

   - Amenaza sofisticada, persistente y diseñada para permanecer sin ser detectada durante largo tiempo.
   - Requiere defensas proactivas y monitorización continua.

6. **TTPs**

   - Conocer las tácticas, técnicas y procedimientos de los atacantes (e.g., MITRE ATT&CK) permite robustecer la seguridad.

7. **Fuentes de inteligencia**

   - Existen fuentes abiertas y comerciales para recopilar información y mantenerse actualizado.
   - Uso de plataformas (MISP, VirusTotal, etc.) para validar y correlacionar indicadores.

8. **Clear Web, Deep Web, Dark Web**
   - Tres niveles de la web donde buscar información.
   - La Dark Web puede ser crucial para descubrir amenazas reales (filtración de datos, venta de exploits), pero requiere precaución y métodos especializados.

En conjunto, estos elementos conforman el núcleo de la Inteligencia de Amenazas y constituyen la base de la defensa cibernética moderna.
