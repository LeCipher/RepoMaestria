---
sidebar_position: 0
title: Preguntas de Seguridad en Redes
---
import InteractiveQuiz from '@site/src/components/InteractiveQuiz';

<InteractiveQuiz
  question="¿Cuál es el propósito principal de la asignatura 'Seguridad en Redes de Comunicaciones'?"
  options={{
    A: "Diseñar nuevos protocolos de comunicación seguros para Internet.",
    B: "Explorar la historia de los ciberataques y sus implicaciones legales.",
    C: "Presentar los principales retos de ciberseguridad en las redes de comunicaciones de las organizaciones y la forma de afrontarlos.",
    D: "Gestionar exclusivamente la seguridad física de los equipos de red."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según los objetivos de la unidad, ¿cuál de las siguientes afirmaciones NO es un objetivo principal de la asignatura?"
  options={{
    A: "Conocer de forma general la arquitectura y los componentes principales de las redes de comunicaciones.",
    B: "Conocer los principios de seguridad que se deben aplicar a las arquitecturas de red.",
    C: "Desarrollar herramientas de hacking ético para la penetración de redes.",
    D: "Conocer las principales amenazas de los principales protocolos de comunicaciones utilizados en Internet."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué filosofía se recomienda para la fortificación de una infraestructura de red en ciberseguridad?"
  options={{
    A: "Seguridad basada en un único punto de control centralizado.",
    B: "Seguridad en capas, implementando medidas en todas las 'capas' posibles en un sentido lógico.",
    C: "Seguridad por oscuridad, manteniendo las vulnerabilidades en secreto.",
    D: "Seguridad reactiva, actuando solo después de un ataque."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la filosofía de seguridad en capas, ¿qué implica la fortificación a 'Nivel de red' para una aplicación Web?"
  options={{
    A: "Realizar una programación segura de la Web para impedir ataques de inyección SQL.",
    B: "Concienciar al personal tecnológico sobre la importancia de la seguridad.",
    C: "Imponer un firewall de paquetes de red que impida ataques como Denegación de Servicios.",
    D: "Fortificar la máquina que alberga la Web a nivel de sistema operativo."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques se basan en el principio de que casi todos los dispositivos electrónicos emiten señales de mayor o menor volumen, que podrían ser interceptadas o modificadas?"
  options={{
    A: "Ataques de fuerza bruta a contraseñas.",
    B: "Ataques de denegación de servicio volumétricas.",
    C: "Ataques de pulso electromagnético o TEMPEST.",
    D: "Ataques de inyección SQL."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de un cortafuegos o firewall en una red?"
  options={{
    A: "Almacenar copias de seguridad de los datos de la organización.",
    B: "Filtrar el tráfico de red entrante y saliente mediante una serie de reglas.",
    C: "Encriptar todas las comunicaciones entre dispositivos.",
    D: "Proporcionar acceso remoto seguro a los empleados."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es una Zona Desmilitarizada (DMZ) o Screened Subnet?"
  options={{
    A: "Una red dedicada exclusivamente al tráfico interno de la empresa.",
    B: "Una red aislada dentro de la red interna de la organización, donde se ubican recursos accesibles desde Internet.",
    C: "Un área de la red donde no se aplican medidas de seguridad.",
    D: "Una copia de seguridad de la red principal de la organización."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué las conexiones de la DMZ a la red local de la empresa suelen estar prohibidas?"
  options={{
    A: "Para reducir el tráfico interno de la red.",
    B: "Porque los servidores en la DMZ son más susceptibles a ataques, y bloquear estas conexiones dificulta el acceso a la red local si un servidor DMZ es comprometido.",
    C: "Para simplificar la configuración del firewall.",
    D: "Porque la DMZ no tiene acceso a la red local."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el principal beneficio de implementar un 'doble firewall' en una arquitectura de red?"
  options={{
    A: "Disminuir los costos de equipamiento de red.",
    B: "Aumentar aún más la seguridad de la red interna frente a un ataque proveniente de la DMZ.",
    C: "Facilitar el acceso remoto de los empleados.",
    D: "Eliminar la necesidad de sistemas de detección de intrusos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué no es muy recomendable habilitar una DMZ directamente en un router proporcionado por un proveedor de Internet?"
  options={{
    A: "Los routers no tienen suficiente capacidad de procesamiento para una DMZ.",
    B: "Depender la protección de red exclusivamente del router, cuyas características de seguridad son reducidas, aumenta el riesgo.",
    C: "Es una configuración muy compleja para usuarios domésticos.",
    D: "Los routers no son compatibles con los servidores web o de correo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Además de firewalls, ¿qué otras herramientas de monitorización, detección y prevención se recomiendan para una DMZ debido a su mayor propensión a ataques?"
  options={{
    A: "Servidores de bases de datos.",
    B: "Sistemas de prevención y detección de intrusos (IDS e IPS).",
    C: "Dispositivos de almacenamiento en red (NAS).",
    D: "Impresoras de red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué característica es clave para la seguridad de una red, que consiste en separar los sistemas en zonas para evitar comunicaciones innecesarias entre ellos?"
  options={{
    A: "Centralización de servidores.",
    B: "Uso de un único protocolo de red.",
    C: "Segmentación de redes.",
    D: "Conectividad total."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la política recomendada para el control de acceso en una red corporativa?"
  options={{
    A: "Permitir todo por defecto y luego restringir.",
    B: "La política del mínimo privilegio, controlando todo acceso a cualquier recurso.",
    C: "Otorgar permisos de administrador a todos los usuarios para facilitar el trabajo.",
    D: "Basar el control de acceso únicamente en la ubicación física."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué se recomienda para todas las comunicaciones a través de la red, especialmente aquellas que tratan con información confidencial?"
  options={{
    A: "Que se realicen en texto claro para facilitar la depuración.",
    B: "Que estén cifradas.",
    C: "Que se envíen por múltiples rutas.",
    D: "Que utilicen un único puerto de comunicación."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Si un administrador desea que todas las comunicaciones de salida de la red pasen obligatoriamente por un proxy, ¿qué opción de configuración se recomienda?"
  options={{
    A: "Mantener el firewall interno e introducir un proxy en la parte de la red interna.",
    B: "Sustituir el firewall interno por un proxy.",
    C: "No utilizar ningún proxy.",
    D: "Configurar un IDS en el firewall interno."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un Honeypot?"
  options={{
    A: "Un dispositivo de seguridad que bloquea todos los ataques de forma automática.",
    B: "Un sistema diseñado para atraer los intentos de intrusión de posibles atacantes y servir como sistema de monitorización de ataques.",
    C: "Una red de producción utilizada para servicios críticos.",
    D: "Un software para cifrar comunicaciones en tiempo real."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ventaja ofrece la virtualización de honeypots?"
  options={{
    A: "Aumenta la necesidad de hardware físico.",
    B: "Permite instalar diversas máquinas virtuales con distintos sistemas, abaratando costos y facilitando el restablecimiento rápido del sistema atacado.",
    C: "Elimina completamente el riesgo de compromiso de seguridad.",
    D: "Requiere una configuración de red más compleja y específica."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes no es un uso extendido de los honeypots?"
  options={{
    A: "Detección de nuevos ataques, exploits y malware.",
    B: "Protección de elementos críticos y análisis forense.",
    C: "Generación automática de contraseñas seguras para los usuarios.",
    D: "Formar perfiles de atacantes y sus métodos de ataque preferidos."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Si un honeypot se ubica 'Detrás del firewall', ¿cuál es una de las contrapartidas destacables?"
  options={{
    A: "No podrá ser atacado desde el exterior.",
    B: "Generará una gran cantidad de alertas de seguridad en otros sistemas como el firewall o IDS.",
    C: "No necesitará modificaciones en las reglas del firewall.",
    D: "Será menos propenso a ser comprometido."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo pueden los honeypots ayudar a prevenir ataques automatizados, como los basados en gusanos?"
  options={{
    A: "Bloqueando directamente el tráfico de entrada.",
    B: "Ralentizando su rastreo e interactuando con ellos para disminuirlos (Sticky Honeypots).",
    C: "Eliminando las vulnerabilidades del sistema automáticamente.",
    D: "Alertando a los usuarios sobre correos electrónicos maliciosos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el concepto que describe la forma en que los honeypots confunden a un atacante humano y le hacen perder tiempo y recursos?"
  options={{
    A: "Análisis forense.",
    B: "Engaño o disuasión.",
    C: "Replicación de servicios.",
    D: "Generación de tráfico legítimo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques pueden detectar los honeypots de forma precisa, reduciendo falsos positivos y capturando datos de gran importancia?"
  options={{
    A: "Ataques de fuerza bruta repetitivos.",
    B: "Ataques desconocidos y nuevos métodos de explotación de vulnerabilidades (zero-days).",
    C: "Ataques de phishing a través de correo electrónico.",
    D: "Errores de configuración de red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo ayudan los honeypots en las labores ciber-forenses?"
  options={{
    A: "Permiten realizar análisis forenses extensos en sistemas críticos sin causar impacto en las operaciones empresariales diarias, al poder ser sacados rápidamente de la red.",
    B: "Almacenan automáticamente todas las contraseñas robadas para su recuperación.",
    C: "Previenen la necesidad de realizar análisis forenses.",
    D: "Cifran los datos después de un incidente para proteger la evidencia."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal diferencia entre los honeypots 'para producción' y 'para investigación' según su ambiente de implementación?"
  options={{
    A: "Los de producción usan hardware real, los de investigación solo virtualización.",
    B: "Los de producción protegen organizaciones en ambientes reales, mientras que los de investigación estudian patrones de ataque y amenazas.",
    C: "Los de producción son de alta interacción, los de investigación son de baja interacción.",
    D: "Los de producción son más baratos de implementar que los de investigación."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué caracteriza a los 'honeypots de baja interacción'?"
  options={{
    A: "Utilizan sistemas operativos y aplicaciones reales montados en hardware real.",
    B: "Permiten capturar grandes cantidades de información sobre el modus operandi de los atacantes.",
    C: "Trabajan únicamente emulando, parcialmente, servicios y sistemas operativos, con actividad limitada del atacante.",
    D: "Incrementan el riesgo de que los atacantes los utilicen para lanzar ataques a sistemas internos."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal desventaja de los honeypots de baja interacción?"
  options={{
    A: "Son difíciles de utilizar y mantener.",
    B: "Requieren una configuración muy compleja.",
    C: "Registran únicamente información limitada y no pueden anunciar una amplia gama de opciones.",
    D: "Son más costosos que los de alta interacción."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué caracteriza a los 'honeypots de alta interacción'?"
  options={{
    A: "Son simples y fáciles de mantener con un riesgo mínimo.",
    B: "Emulan parcialmente servicios y sistemas operativos.",
    C: "Utilizan sistemas operativos y aplicaciones reales montados en hardware real, permitiendo capturar gran cantidad de información sobre atacantes.",
    D: "No requieren tecnología adicional para prevenir ataques a otros sistemas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es un riesgo significativo de los honeypots de alta interacción?"
  options={{
    A: "Que no atraigan a los atacantes.",
    B: "Que registren muy poca información.",
    C: "Que los atacantes puedan utilizarlos para lanzar ataques a sistemas internos que no forman parte de los Honeypots.",
    D: "Que sean detectados fácilmente por los sistemas de seguridad."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es una Honeynet?"
  options={{
    A: "Un producto de software específico para la detección de intrusos.",
    B: "Un tipo concreto de Honeypot altamente interactivo diseñado para la investigación y obtención de información sobre atacantes.",
    C: "Una red de producción con altos niveles de seguridad.",
    D: "Un servicio web que emula vulnerabilidades para pruebas de seguridad."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué es esencial que el control del flujo de datos en una Honeynet sea estricto?"
  options={{
    A: "Para acelerar las comunicaciones dentro de la Honeynet.",
    B: "Para evitar que el atacante la utilice contra terceros o contra la red de producción.",
    C: "Para simplificar su configuración y mantenimiento.",
    D: "Para asegurar que solo se capturen datos encriptados."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Dónde se debería almacenar la información capturada de una Honeynet, y por qué?"
  options={{
    A: "Dentro de la Honeynet para facilitar el acceso rápido.",
    B: "En el mismo sistema comprometido para análisis in situ.",
    C: "Fuera de la Honeynet, para que un atacante no la encuentre, falsee o borre.",
    D: "En la nube sin ninguna medida de seguridad adicional."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una ventaja de los Honeypots en comparación con los sistemas clásicos de seguridad (Firewalls, IDS) en cuanto al volumen de datos?"
  options={{
    A: "Generan cientos de megabytes de ficheros de logs con información no necesaria.",
    B: "Generan un volumen pequeño de datos, pero de altísimo valor.",
    C: "No generan ningún tipo de log.",
    D: "Requieren una gran cantidad de recursos de almacenamiento."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una de las principales desventajas de los Honeypots?"
  options={{
    A: "Son elementos totalmente activos y generan mucho tráfico.",
    B: "Son muy costosos de implementar y mantener.",
    C: "Son elementos totalmente pasivos; si no reciben ningún ataque no sirven de nada.",
    D: "No permiten la identificación de cuentas obsoletas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un IDS (Intrusion Detection System)?"
  options={{
    A: "Un software que previene intrusiones en tiempo real.",
    B: "Una aplicación para detectar accesos no autorizados, monitorizando el tráfico y emitiendo alertas ante actividad sospechosa.",
    C: "Un dispositivo que encripta todo el tráfico de red.",
    D: "Una herramienta para la gestión de usuarios y sus permisos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal desventaja de un sistema IDS?"
  options={{
    A: "No permite ver lo que sucede en la red en tiempo real.",
    B: "No están diseñados para prevenir o detener los ataques que detectan, y son vulnerables a ataques DDoS.",
    C: "Generan muy pocos datos, lo que dificulta el análisis.",
    D: "Requieren una intervención manual constante para su funcionamiento."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un IPS (Intrusion Prevention System)?"
  options={{
    A: "Un sistema que solo detecta intrusiones y lanza alarmas.",
    B: "Un software que analiza conexiones y protocolos en tiempo real para prevenir incidentes, identificando ataques y permitiendo el control de acceso, incluso descartando paquetes.",
    C: "Un dispositivo para la gestión de parches de seguridad.",
    D: "Una herramienta para el análisis forense de sistemas comprometidos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo se distinguen principalmente los IPS de los cortafuegos en la toma de decisiones sobre los paquetes?"
  options={{
    A: "Los cortafuegos basan sus decisiones en encabezados, mientras que los IPS lo hacen en encabezados y contenido de datos del paquete.",
    B: "Los IPS solo analizan la capa de red, mientras que los cortafuegos analizan todas las capas.",
    C: "Los cortafuegos no pueden descartar paquetes, a diferencia de los IPS.",
    D: "Los IPS requieren siempre intervención humana, los cortafuegos no."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes es una ventaja de un IPS?"
  options={{
    A: "Solo protege sistemas parcheados.",
    B: "Vulnerabilidad a ataques DDoS.",
    C: "Protección preventiva al comprobarse de forma automatizada comportamientos anómalos.",
    D: "Generación de un alto volumen de falsas alarmas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el tipo de IPS que monitoriza redes inalámbricas?"
  options={{
    A: "IPS basado en host (HIPS).",
    B: "IPS basado en red (NIPS).",
    C: "IPS basado en red Wireless (WIPS).",
    D: "IPS basado en Análisis de Comportamiento de Red (NBA)."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un SIEM (Security Information and Event Management)?"
  options={{
    A: "Una solución que solo se encarga de la gestión de la información de seguridad.",
    B: "Una solución híbrida centralizada que analiza en tiempo real alertas de seguridad de diversos dispositivos, correlaciona logs y detecta eventos de seguridad.",
    C: "Un sistema exclusivo para la prevención de ataques DDoS.",
    D: "Un software para la recuperación de datos después de un incidente."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una ventaja clave de contar con un SIEM?"
  options={{
    A: "Bajos costos de implantación.",
    B: "Una curva de aprendizaje corta para el personal propio.",
    C: "Centralización de la información y eventos, permitiendo automatizar tareas y detectar anomalías.",
    D: "Integración ilimitada con el resto del sistema sin esfuerzo."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una desventaja de mantener el mantenimiento de un SIEM internamente en una empresa?"
  options={{
    A: "Fatiga por la alta recepción de notificaciones.",
    B: "Bajos costes de implantación.",
    C: "Soporte técnico limitado.",
    D: "Acceso ilimitado a toda la información generada."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué problema fundamental resuelven las Redes Privadas Virtuales (VPN) para la comunicación entre sedes geográficamente separadas?"
  options={{
    A: "La necesidad de una red dedicada de alto costo, permitiendo un canal seguro sobre Internet.",
    B: "La incompatibilidad de protocolos de red.",
    C: "La falta de conectividad a Internet en ubicaciones remotas.",
    D: "La lentitud inherente de las redes públicas."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué permite a los empleados acceder a los recursos internos de la entidad desde cualquier ubicación geográfica con una VPN?"
  options={{
    A: "La instalación de hardware especializado en cada ubicación.",
    B: "La única condición de tener conectividad a Internet.",
    C: "La necesidad de un servidor de correo local.",
    D: "La configuración manual de rutas de red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para un atacante, ¿cuáles son los dos aspectos fundamentales por los que el anonimato es importante?"
  options={{
    A: "Aumentar la velocidad del ataque y reducir el consumo de recursos.",
    B: "Ocultar su identidad desde las fases iniciales y borrar sus huellas para dificultar análisis forenses.",
    C: "Facilitar la automatización de los ataques y la compartición de herramientas.",
    D: "Evitar la detección por parte de los sistemas de seguridad tradicionales."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'anonimato por uso de bouncer o de equipo zombie'?"
  options={{
    A: "Acceder a la red desde un lugar público como un cibercafé.",
    B: "El atacante toma el control de un sistema sin que su propietario lo sepa y lo usa como puerta de entrada para su conexión.",
    C: "Usar la Deep Web a través de proyectos como TOR.",
    D: "Utilizar un proxy corporativo para ocultar el origen."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'footprinting' en la fase de recogida de información para un ataque hacker?"
  options={{
    A: "La explotación de vulnerabilidades conocidas en sistemas operativos.",
    B: "La recogida de información en medios o fuentes de acceso público (web, redes sociales, foros, etc.).",
    C: "El cifrado de datos robados de la víctima.",
    D: "La generación de tráfico malicioso para sobrecargar una red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿A qué se refieren los 'metadatos' en el contexto de la información públicamente accesible que puede ser usada para un ataque?"
  options={{
    A: "Datos de registro de tráfico de red.",
    B: "Información como el autor de un documento, la aplicación usada para editarlo, direcciones IP de estaciones de trabajo, o geolocalización en fotos.",
    C: "Firmas de ataques conocidos almacenadas en bases de datos.",
    D: "Datos cifrados en los discos duros de las víctimas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el contexto de la pila TCP/IP, ¿qué protocolo se encarga de traducir una dirección IP a una dirección MAC en IPv4?"
  options={{
    A: "DNS (Domain Name System).",
    B: "ARP (Address Resolution Protocol).",
    C: "ICMP (Internet Control Message Protocol).",
    D: "TCP (Transmission Control Protocol)."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué se basan las técnicas de 'envenenamiento' o 'poisoning' en los protocolos dinámicos como ARP?"
  options={{
    A: "En cifrar las traducciones para que sean ilegibles.",
    B: "En utilizar estos protocolos para que el atacante 'envenene' la traducción empleada por la víctima con una traducción falsa.",
    C: "En la modificación del hardware de red.",
    D: "En la denegación de servicio a los servidores DNS."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un ataque 'Man in the Middle (MitM)' o 'Janus'?"
  options={{
    A: "Un ataque que solo afecta la disponibilidad del servicio.",
    B: "Un ataque que impide que dos equipos se comuniquen entre sí.",
    C: "Un patrón de ataque típico que se construye sobre un envenenamiento y suplantación ARP para interceptar/modificar comunicaciones.",
    D: "Un ataque de fuerza bruta a contraseñas cifradas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ataque puede afectar a la confidencialidad, integridad y control de acceso, siendo difícil de detectar y fácil de automatizar con herramientas existentes?"
  options={{
    A: "Denegación de servicio por pulso electromagnético.",
    B: "Man in the Middle (MitM) básico.",
    C: "Inyección SQL a ciegas.",
    D: "Ataque TEMPEST."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuáles son las dos medidas esenciales para protegerse de los ataques Man in the Middle (MitM)?"
  options={{
    A: "Desactivar el protocolo ARP y usar solo direcciones IP estáticas.",
    B: "La encriptación de las comunicaciones a diferentes niveles y la autenticación de los extremos de las comunicaciones.",
    C: "Aumentar el ancho de banda y reducir las latencias.",
    D: "Realizar escaneos de puertos periódicos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En un ataque 'Man in the Middle sin visibilidad', si la víctima no está en el mismo segmento de red que el atacante, ¿qué tipo de impacto se espera?"
  options={{
    A: "Afecta a la confidencialidad, en algunos casos al control de acceso, pero no a la integridad.",
    B: "Afecta a la integridad y la disponibilidad exclusivamente.",
    C: "Solo afecta la capacidad del atacante para robar credenciales.",
    D: "No tiene ningún impacto, ya que no hay visibilidad."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques son muy a menudo utilizados para robar credenciales y todo tipo de datos e información en un nivel superior al de la capa de enlace?"
  options={{
    A: "Denegación de servicios volumétricas.",
    B: "Ataques de fuerza bruta a contraseñas.",
    C: "Envenenamiento, suplantación y MitM en capas superiores.",
    D: "Ataques de pulso electromagnético."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la capa de red, ¿cuál es la identidad de un extremo que puede ser suplantada en ataques de suplantación de identidad?"
  options={{
    A: "Su nombre de dominio.",
    B: "Su dirección MAC.",
    C: "Su dirección IP.",
    D: "Su puerto de transporte."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el ataque que se basa en comprobar qué puertos tiene abiertos la máquina víctima y suele ser el paso previo para ataques más profundos?"
  options={{
    A: "Suplantación de identidad en la capa de aplicación.",
    B: "Inyección SQL.",
    C: "Escaneo de puertos.",
    D: "Ataque de denegación de servicio."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la herramienta ampliamente usada para el escaneo de puertos, mencionada en la fuente?"
  options={{
    A: "Ettercap.",
    B: "Metasploit.",
    C: "Nmap.",
    D: "Wireshark."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa el parámetro '-S' en el comando 'nmap' para un atacante?"
  options={{
    A: "Indicar el interfaz de red.",
    B: "No usar ping.",
    C: "Fijar la dirección IP de la máquina que se quiere establecer como falso atacante (suplantar IP).",
    D: "Especificar el puerto a escanear."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ataque se centra en hacer un servicio, aplicación o sistema no disponible para sus usuarios o clientes?"
  options={{
    A: "Compromiso de credenciales.",
    B: "Denegación de Servicios (DoS) o Denegación de Servicios Distribuida (DDoS).",
    C: "Insecure Insiders.",
    D: "Ataques de fuerza bruta a contraseñas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué consiste el ataque 'Syn Flood'?"
  options={{
    A: "El atacante envía un único paquete SYN-ACK para bloquear el servidor.",
    B: "El atacante envía numerosos paquetes SYN desde direcciones IP origen falsificadas, saturando la tabla de conexiones 'medio abiertas' del servidor.",
    C: "El atacante intercepta las respuestas ACK del servidor.",
    D: "El atacante roba las credenciales de los usuarios mediante la inundación de paquetes SYN."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué herramienta, con una versión gratuita completamente funcional, integra diversas funcionalidades y metodologías de ataque, incluyendo módulos auxiliares para ataques de Denegación de Servicios como SYN Flood?"
  options={{
    A: "Wireshark.",
    B: "Ettercap.",
    C: "Metasploit Framework.",
    D: "Netcat."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En los ataques de denegación de servicio actuales, ¿en qué suelen basarse los atacantes para inundar al objetivo con tráfico?"
  options={{
    A: "En el envío directo de grandes volúmenes de datos desde una única fuente.",
    B: "En el reflejo (reflection) a través de víctimas que contribuyen involuntariamente al ataque.",
    C: "En la explotación de vulnerabilidades en la capa de aplicación sin usar la capa de red.",
    D: "En el uso de herramientas manuales sin automatización."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué implica la 'amplificación por tamaño de paquete' en un ataque de denegación de servicio?"
  options={{
    A: "Se busca que más de una víctima colabore en el ataque.",
    B: "Se aumenta en todo lo posible el tamaño de cada paquete que llega al objetivo durante la construcción del ataque.",
    C: "Se reduce el tamaño de los paquetes para evitar la detección.",
    D: "Se envía un número limitado de paquetes para no levantar sospechas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es la 'amplificación por distribución' en un ataque DDoS?"
  options={{
    A: "Aumentar el tamaño de cada paquete para consumir ancho de banda.",
    B: "Conseguir que más de una víctima colabore en el ataque, haciendo que el tráfico provenga de muchas fuentes diferentes.",
    C: "Fragmentar los paquetes en la capa de enlace de datos.",
    D: "Utilizar un único servidor para lanzar un ataque masivo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el protocolo de transporte que NTP (Network Time Protocol) utiliza, y en qué puerto?"
  options={{
    A: "TCP, puerto 80.",
    B: "UDP, puerto 123.",
    C: "ICMP, puerto 7.",
    D: "HTTP, puerto 443."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para mitigar los ataques en la capa de aplicación (como DNS, NTP, SSDP), ¿qué tipo de proveedores han surgido?"
  options={{
    A: "Proveedores de hardware de red.",
    B: "Proveedores específicos con 'cleaning-centers' o 'laundry servers' que distinguen entre tráfico legítimo y malicioso.",
    C: "Proveedores de sistemas de cifrado punto a punto.",
    D: "Proveedores de VPNs gratuitas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de tecnología de seguridad aprende el comportamiento 'normal' de personas y entidades para detectar cuando algo inusual ocurre?"
  options={{
    A: "Firewall tradicional.",
    B: "Sistema de Prevención de Intrusiones (IPS).",
    C: "UEBA (User and Entity Behavior Analytics).",
    D: "Antivirus basado en firmas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de riesgos puede detectar UEBA según el texto?"
  options={{
    A: "Problemas de hardware en los servidores.",
    B: "Compromiso de credenciales, usuarios privilegiados inseguros e incumplimientos.",
    C: "Errores de configuración en routers.",
    D: "Fallos en el suministro eléctrico."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué UEBA ha surgido como una solución, dado que la mayoría de las soluciones de análisis basadas en registros, como SIEM, no se vuelven más precisas con el tiempo ni aprenden?"
  options={{
    A: "Para aumentar la cantidad de logs generados.",
    B: "Para reducir la visibilidad del comportamiento del usuario.",
    C: "Para proporcionar una mayor visibilidad y conocimientos que detecten amenazas más rápidamente y reduzcan la superficie de ataque.",
    D: "Para depender más de la intervención manual del equipo de seguridad."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una de las principales diferencias entre los 'firewalls conductuales' y las soluciones UEBA tradicionales?"
  options={{
    A: "Los firewalls conductuales se sitúan debajo de un SIEM.",
    B: "Los firewalls conductuales combinan UEBA con una respuesta adaptativa a políticas flexibles en tiempo real.",
    C: "Los firewalls conductuales solo miran la actividad hacia atrás en los registros.",
    D: "Los firewalls conductuales no analizan el comportamiento del usuario."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de comportamiento es fundamental detectar para contrarrestar ataques y evitar compromisos, según las capacidades clave de los firewalls conductuales?"
  options={{
    A: "Cambios en la velocidad de la red.",
    B: "Cambios sospechosos en la red y el comportamiento del usuario.",
    C: "Variaciones en la temperatura de los servidores.",
    D: "El volumen total de datos transmitidos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué acciones automáticas puede aplicar un firewall de comportamiento cuando detecta un comportamiento anormal?"
  options={{
    A: "Solo notificar al administrador.",
    B: "Permitir, bloquear, notificar, aislar o desafiar con autenticación de segundo factor/MFA, todo en tiempo real.",
    C: "Deshabilitar el acceso a Internet para toda la organización.",
    D: "Eliminar el historial de navegación del usuario."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo pueden los firewalls de comportamiento ser desplegados inicialmente si hay dudas sobre su implementación en línea?"
  options={{
    A: "Solo en modo bloqueo directo.",
    B: "En modo sniffer pasivo, con la posibilidad de reconfigurarlo posteriormente en modo proxy.",
    C: "Como un servicio en la nube sin conexión a la red local.",
    D: "Requiriendo la intervención manual para cada alerta."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es uno de los principales beneficios de UEBA, especialmente en la reducción de riesgos?"
  options={{
    A: "Aumentar la superficie de ataque de la organización.",
    B: "Proactivamente, ayudar a los clientes a reducir su superficie de ataque y facilitar la investigación de incidentes.",
    C: "Eliminar la necesidad de monitoreo constante de la red.",
    D: "Ralentizar la detección de amenazas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En ciberseguridad, ¿a qué se refiere la 'inyección de comandos o de código'?"
  options={{
    A: "A un ataque donde se cifra el código fuente de una aplicación.",
    B: "A un ataque en el que una aplicación acepta una entrada del usuario sin filtrarla adecuadamente, permitiendo inyectar comandos o códigos maliciosos.",
    C: "A la creación de nuevos comandos para el sistema operativo.",
    D: "A la sobrecarga de un servidor con un gran número de comandos legítimos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el proyecto OWASP Top10, ¿cuál es la primera amenaza en el caso de aplicaciones web?"
  options={{
    A: "Deneagación de Servicio (DoS).",
    B: "Compromiso de Credenciales.",
    C: "Inyección de comandos (como SQL Injection).",
    D: "Cross-site scripting (XSS)."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es SQL (Structured Query Language)?"
  options={{
    A: "Un lenguaje de programación para aplicaciones web.",
    B: "Un lenguaje declarativo de acceso a bases de datos relacionales para efectuar consultas e interactuar con ellas.",
    C: "Un protocolo de red para la transmisión de archivos.",
    D: "Una herramienta para la detección de vulnerabilidades."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué puede traer consigo la alteración de sentencias SQL mediante una inyección de SQL?"
  options={{
    A: "Solo la interrupción temporal de la base de datos.",
    B: "Acceso no autorizado a la información almacenada y control del sistema operativo que la soporta.",
    C: "Una mejora en el rendimiento de la base de datos.",
    D: "La encriptación automática de toda la base de datos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué los ataques de código SQL inyectado suelen ser exitosos?"
  options={{
    A: "Porque los gestores de bases de datos son inherentemente inseguros.",
    B: "Porque muchas aplicaciones no están programadas con buenas prácticas de seguridad, priorizando funcionalidad sobre seguridad.",
    C: "Porque los administradores de bases de datos no tienen conocimientos adecuados.",
    D: "Porque el lenguaje SQL es demasiado complejo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal y más efectiva defensa contra los ataques de inyección SQL?"
  options={{
    A: "Filtrar las respuestas desde la base de datos.",
    B: "La comprobación de los parámetros antes de la construcción de la consulta o la parametrización de estas consultas.",
    C: "Deshabilitar el acceso a la base de datos desde la web.",
    D: "Usar contraseñas muy largas para la base de datos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal desventaja de que las empresas confíen únicamente en cortafuegos y antivirus para su seguridad?"
  options={{
    A: "Son demasiado caros para la mayoría de las organizaciones.",
    B: "Son solo obstáculos eludibles; si un troyano evade la detección, la empresa podría ser comprometida sin saberlo.",
    C: "Ralentizan el rendimiento de la red de manera significativa.",
    D: "No ofrecen protección contra amenazas internas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En una red, ¿qué identificador único físico se utiliza para las tarjetas de red y es fundamental para la comunicación en la capa de enlace?"
  options={{
    A: "Dirección IP.",
    B: "Dirección MAC (Media Access Control).",
    C: "Nombre de host.",
    D: "Número de puerto."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Cuando un ordenador necesita la dirección física de otro terminal para comunicarse, ¿qué tipo de paquete envía a la dirección de difusión de la red?"
  options={{
    A: "ARP-Reply.",
    B: "TCP SYN.",
    C: "ARP-Request.",
    D: "ICMP Echo Request."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En una red no conmutada (con HUB), ¿qué acción puede tomar un observador para visualizar los paquetes de toda la red, incluso aquellos no dirigidos a su máquina?"
  options={{
    A: "Conectar un switch gestionable.",
    B: "Activar la tarjeta de red en modo promiscuo.",
    C: "Implementar un firewall en línea.",
    D: "Cifrar todo el tráfico de la red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es TCPDump?"
  options={{
    A: "Un programa para configurar routers y switches.",
    B: "Una herramienta de línea de comandos para leer paquetes capturados en una interfaz de red.",
    C: "Un software para cifrar datos en tránsito.",
    D: "Un sistema de prevención de intrusiones."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué librería requiere TCPDump para funcionar, permitiéndole capturar paquetes?"
  options={{
    A: "OpenSSL.",
    B: "Libpcap (packet capture).",
    C: "Netfilter.",
    D: "GTK."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué opción de TCPDump se utiliza para especificar la interfaz de red desde la que se desea capturar paquetes?"
  options={{
    A: "-v.",
    B: "-x.",
    C: "-i.",
    D: "-w."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para visualizar el contenido de los paquetes capturados en TCPDump, mostrando la información en hexadecimal y su correspondiente ASCII, ¿qué opción se utiliza?"
  options={{
    A: "-v.",
    B: "-x.",
    C: "-X.",
    D: "-w."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué opción de TCPDump se utiliza para guardar los paquetes capturados en un fichero binario para su uso posterior?"
  options={{
    A: "-r nombre_archivo.",
    B: "-w nombre_archivo.",
    C: "-h.",
    D: "-vv."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el formato de las cabeceras TCP en TCPDump, ¿qué significa el campo 'bits_de_control' si muestra 'S'?"
  options={{
    A: "FIN (Finalizar conexión).",
    B: "ACK (Acuse de recibo).",
    C: "SYN (Sincronizar secuencia).",
    D: "RST (Restablecer conexión)."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el 'three-way handshake' de TCP, ¿cuál es el primer mensaje enviado por el cliente al servidor para establecer una conexión?"
  options={{
    A: "SYN-ACK.",
    B: "ACK.",
    C: "SYN.",
    D: "FIN."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el RFC 768, ¿qué protocolo de transporte se caracteriza por tener paquetes con un formato simple, como 'origen > destino: bits_de_control [udp tamaño_en_bytes]'?"
  options={{
    A: "TCP.",
    B: "ICMP.",
    C: "UDP.",
    D: "ARP."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la razón principal para crear un filtro de captura en TCPDump en lugar de capturar todos los paquetes?"
  options={{
    A: "Aumentar la cantidad de información para un análisis más exhaustivo.",
    B: "Generar registros más concisos y aligerar la carga sobre el sensor de red.",
    C: "Permitir la captura en modo promiscuo.",
    D: "Evitar la necesidad de analizar los protocolos de alto nivel."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué filtro de TCPDump se usaría para capturar todos los paquetes que se originan o se destinan al ordenador con IP 192.168.0.1?"
  options={{
    A: "src host 192.168.0.1.",
    B: "dst host 192.168.0.1.",
    C: "host 192.168.0.1.",
    D: "net 192.168.0.0."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para capturar todos los paquetes que provengan de un puerto 80 (tráfico Web) en TCPDump, ¿qué filtro se utilizaría?"
  options={{
    A: "port 80.",
    B: "dst port 80.",
    C: "src port 80.",
    D: "net 80."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando de TCPDump se usaría para capturar todos los paquetes del protocolo ARP (Address Resolution Protocol)?"
  options={{
    A: "tcpdump ip.",
    B: "tcpdump icmp.",
    C: "tcpdump arp.",
    D: "tcpdump tcp."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes operadores de combinación de reglas en TCPDump niega un filtro?"
  options={{
    A: "And o &&.",
    B: "Or o ||.",
    C: "Not o !.",
    D: "Xor."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Cuando se usa TCPDump, ¿por qué es importante escribir el filtro entre comillas simples al utilizar caracteres especiales?"
  options={{
    A: "Para que la shell no interprete los caracteres especiales.",
    B: "Para que el filtro sea más legible.",
    C: "Para aumentar la velocidad de la captura.",
    D: "Para cifrar el filtro."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la notación offset de bytes de TCPDump, si se desea capturar el puerto origen de un paquete TCP, ¿cuál sería la sintaxis para el desplazamiento inicial y la cantidad de bytes a leer?"
  options={{
    A: "tcp[2:2].",
    B: "tcp[0:2].",
    C: "tcp[13:1].",
    D: "tcp[0:4]."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué signo se utiliza en TCPDump para aplicar una máscara en la notación offset de bytes?"
  options={{
    A: "||.",
    B: "&&.",
    C: "&.",
    D: "!."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el ejemplo de TCPDump y FTP, ¿cuál es la grave consecuencia de tener comunicaciones sin utilizar cifrado?"
  options={{
    A: "La comunicación será más lenta.",
    B: "Cualquier persona que sepa usar un sniffer de red podrá capturar datos sensibles de terceros (como usuario y contraseña).",
    C: "El servicio FTP dejará de funcionar.",
    D: "Solo se podrá acceder al servicio desde la red local."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques se clasifican como 'Hombre en el Medio' o MITM (Man In The Middle)?"
  options={{
    A: "Ataques que solo afectan la capa física.",
    B: "Ataques que impiden la comunicación entre dos equipos.",
    C: "Ataques donde un actor se sitúa en medio de una comunicación para redirigir el tráfico y leerlo.",
    D: "Ataques que solo modifican las direcciones IP."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la especialización principal de Ettercap, una herramienta de código libre para la captura de paquetes?"
  options={{
    A: "Análisis de vulnerabilidades web.",
    B: "Ataques Man in the Middle (MITM).",
    C: "Configuración de firewalls avanzados.",
    D: "Recuperación de datos perdidos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el modo de Ettercap que utiliza dos interfaces de red y redirige el tráfico de una a otra mientras captura y filtra paquetes, actuando como un puente transparente?"
  options={{
    A: "Unified.",
    B: "Bridged.",
    C: "Promiscuous.",
    D: "Transparent."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Antes de iniciar cualquier tipo de ataque en Ettercap, ¿qué tarea se debe realizar para informar al programa sobre los hosts en la red?"
  options={{
    A: "Configurar manualmente cada dirección IP.",
    B: "Seleccionar del menú 'Hosts -> Scan for hosts' para escanear la red.",
    C: "Esperar a que los hosts se conecten automáticamente.",
    D: "Importar una lista de hosts desde un archivo externo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué consiste la vulnerabilidad en la que se basa el envenenamiento ARP?"
  options={{
    A: "En que el sistema operativo no tiene caché ARP.",
    B: "En que el sistema operativo acepta los ARP-Reply aun cuando nunca antes solicitó el identificador MAC mediante un ARP-Request.",
    C: "En que el protocolo ARP utiliza cifrado débil.",
    D: "En que el identificador MAC cambia constantemente."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ocurre con las tablas ARP de los sistemas operativos cuando Ettercap lanza un ataque de envenenamiento ARP, y cómo asegura Ettercap que persista?"
  options={{
    A: "Se borran todas las entradas y no se restauran.",
    B: "Las direcciones IP tienen la misma MAC (la del atacante), y Ettercap envía periódicamente ARP-Reply para mantener el engaño.",
    C: "Las direcciones MAC se cifran y descifran automáticamente.",
    D: "Solo se ven afectadas las direcciones IP de la puerta de enlace."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando de Ettercap se utiliza para visualizar los ficheros de registro creados después de detener un ataque y la captura de paquetes?"
  options={{
    A: "tcpdump.",
    B: "wireshark.",
    C: "etterlog.",
    D: "cat."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal del fichero con extensión '.eci' generado por Ettercap?"
  options={{
    A: "Almacenar los paquetes capturados en formato binario.",
    B: "Contener información relevante a cada ordenador descubierto, como sistema operativo, puertos abiertos y servicios.",
    C: "Registrar los errores de Ettercap durante el ataque.",
    D: "Guardar el tráfico cifrado para su posterior análisis."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una de las principales funcionalidades de los cortafuegos?"
  options={{
    A: "Creación de copias de seguridad automáticas.",
    B: "Bloqueo de paquetes que se originan en un determinado rango de IP o que son reconocidos como firmas de ataques.",
    C: "Optimización del rendimiento de la CPU de los servidores.",
    D: "Sincronización de relojes entre sistemas informáticos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el modelo de arquitectura, ¿qué nombre recibe el firewall que se encuentra situado internamente y protege redes internas?"
  options={{
    A: "Firewall de contención.",
    B: "Firewall bastión.",
    C: "Firewall perimetral.",
    D: "Firewall de aplicación."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal diferencia entre un 'firewall software' y un 'appliance'?"
  options={{
    A: "El firewall software se instala y configura, mientras que el appliance es una solución hardware embebida que requiere mínimas configuraciones.",
    B: "El firewall software es más caro que el appliance.",
    C: "El appliance es solo para entornos domésticos.",
    D: "El firewall software no es compatible con Linux."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de firewall se clasifica por proteger solo los sistemas donde están instalados?"
  options={{
    A: "Firewalls de red.",
    B: "Firewalls de host.",
    C: "Firewalls perimetrales.",
    D: "Firewalls de contención."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de filtrado de firewall se realiza a nivel de la capa IP, examinando la cabecera del paquete?"
  options={{
    A: "Filtrado a nivel de circuito.",
    B: "Filtrado a nivel de aplicación (proxy).",
    C: "Filtrado a nivel de paquete de red.",
    D: "Filtrado a nivel de transporte."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué protocolo es el encargado de realizar una traducción de direcciones IP, normalmente entre incompatibles privadas y públicas?"
  options={{
    A: "DNS.",
    B: "ARP.",
    C: "NAT (Network Address Translation).",
    D: "ICMP."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de direcciones IP pueden ser utilizadas por cualquier usuario dentro de su red privada sin necesidad de solicitar permiso a las autoridades de Internet?"
  options={{
    A: "Direcciones IP públicas.",
    B: "Direcciones IP estáticas.",
    C: "Direcciones IP dinámicas.",
    D: "Direcciones IP privadas."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el tipo de NAT donde varias direcciones IP internas se enmascaran detrás de una única dirección IP pública del firewall (relación varios a uno)?"
  options={{
    A: "NAT estático.",
    B: "NAT dinámico.",
    C: "NAT de destino (DNAT).",
    D: "NAT de origen (SNAT)."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el método de traducción de NAT más utilizado actualmente, especialmente en los proveedores de acceso a Internet, que almacena IP destino, IP origen interno, puertos y protocolo?"
  options={{
    A: "Usar una única dirección IP.",
    B: "Usar un conjunto de direcciones IP.",
    C: "Usar direcciones IP y número de puertos.",
    D: "No usar tabla de traducción."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'spoofing'?"
  options={{
    A: "La técnica de encriptación de datos en tiempo real.",
    B: "El envío de paquetes con información falsa, para suplantar una dirección MAC o IP y hacer creer que el origen es otro.",
    C: "La fragmentación de paquetes IP en la capa de transporte.",
    D: "La monitorización pasiva del tráfico de red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué los ataques de fragmentación IP se utilizaban para intentar burlar las técnicas de supervisión de los datagramas IP?"
  options={{
    A: "Porque los sistemas de seguridad reensamblaban los paquetes incorrectamente.",
    B: "Porque los sistemas de seguridad más básicos solo comprueban la cabecera del primer fragmento y no reensamblan el paquete completo.",
    C: "Porque la fragmentación IP estaba cifrada.",
    D: "Porque aumentaba el rendimiento de la red, pasando desapercibidos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de un 'ransomware'?"
  options={{
    A: "Borrar todos los datos del disco duro de una víctima.",
    B: "Cifrar los datos contenidos en el disco duro de un equipo y exigir un 'rescate' para su descifrado.",
    C: "Realizar un escaneo de puertos en la red.",
    D: "Actuar como un honeypot para atraer atacantes."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál fue la vulnerabilidad que el ataque WannaCry explotó para propagarse por las redes?"
  options={{
    A: "Una vulnerabilidad en el protocolo HTTP/S.",
    B: "Una vulnerabilidad en el protocolo SMBv1, denominada MS17-010.",
    C: "Una vulnerabilidad en el sistema de correo electrónico.",
    D: "Una vulnerabilidad en el protocolo ARP."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un 'rootkit'?"
  options={{
    A: "Un tipo de malware que cifra archivos y pide un rescate.",
    B: "Una herramienta o conjunto de herramientas utilizadas por los atacantes para obtener el control remoto de un equipo informático, a menudo con permisos de administrador.",
    C: "Un software que detecta intrusiones en la red.",
    D: "Un programa que monitoriza el tráfico de red en modo promiscuo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué es complicada la eliminación de un rootkit?"
  options={{
    A: "Porque el rootkit se cifra a sí mismo.",
    B: "Porque el propio sistema operativo desconoce los ficheros del rootkit, o el rootkit ha modificado el SO para que lo ignore.",
    C: "Porque requiere hardware especializado para ser removido.",
    D: "Porque el rootkit borra automáticamente todos los archivos del sistema."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es IPtables?"
  options={{
    A: "Una aplicación web para la gestión de bases de datos.",
    B: "Un programa en línea de comandos usado para configurar reglas de filtrado de paquetes en los kernels de sistemas operativos GNU/Linux.",
    C: "Una herramienta para la creación de redes virtuales privadas.",
    D: "Un servicio de monitorización de red en tiempo real."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En IPtables, ¿qué tabla se utiliza para realizar manipulaciones de los paquetes, como modificar los campos TOS, TTL o MARK?"
  options={{
    A: "NAT.",
    B: "RAW.",
    C: "FILTER.",
    D: "MANGLE."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la tabla de IPtables empleada para labores de NAT (Network Address Translation), es decir, para modificar la dirección de origen o destino de los paquetes?"
  options={{
    A: "MANGLE.",
    B: "FILTER.",
    C: "RAW.",
    D: "NAT."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué cadena de IPtables engloba todo el tráfico que pasa por la máquina, pero que no es generado por la misma ni enviado directamente a ella?"
  options={{
    A: "INPUT.",
    B: "OUTPUT.",
    C: "FORWARD.",
    D: "PREROUTING."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué cadena de IPtables se refiere al tráfico de salida, que puede haber sido generado por la misma máquina o por cualquier otra?"
  options={{
    A: "INPUT.",
    B: "OUTPUT.",
    C: "PREROUTING.",
    D: "POSTROUTING."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la acción de IPtables que descarta un paquete, pero envía al emisor un mensaje de error ICMP con el código 'port unreachable'?"
  options={{
    A: "ACCEPT.",
    B: "DROP.",
    C: "REJECT.",
    D: "QUEUE."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para evitar que una máquina Linux sea detectada a través de la red mediante el comando 'ping', descartando todo el tráfico ICMP entrante por la interfaz 'eth0', ¿cuál sería la regla correcta en IPtables?"
  options={{
    A: "iptables -t nat -A POSTROUTING -o eth0 -j DROP.",
    B: "iptables -A INPUT -i eth0 -p icmp -j DROP.",
    C: "iptables -A OUTPUT -o eth0 -p icmp -j DROP.",
    D: "iptables -A FORWARD -p icmp -j DROP."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué acción debe tomar el administrador del sistema para permitir que un equipo Linux ejerza de 'intermediario' (router) entre dos redes locales?"
  options={{
    A: "Instalar un software de enrutamiento propietario.",
    B: "Ejecutar `echo 1 > /proc/sys/net/ipv4/ip_forward` para habilitar el forwarding de paquetes.",
    C: "Deshabilitar todos los servicios de red.",
    D: "Reiniciar el equipo sin guardar la configuración."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En IPtables, ¿qué tipo de NAT se utiliza para modificar la dirección del emisor del paquete, cambiando así el host que inició la conexión, y se realiza después de las decisiones de encaminamiento?"
  options={{
    A: "DNAT (Destination NAT).",
    B: "SNAT (Source NAT).",
    C: "REDIRECT.",
    D: "MASQUERADE."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función del parámetro '--to' en una regla SNAT de IPtables?"
  options={{
    A: "Indicar el puerto de destino.",
    B: "Especificar la dirección IP a la que se va a traducir la dirección de origen.",
    C: "Definir la interfaz de red de entrada.",
    D: "Establecer el protocolo de la conexión."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando se utiliza para borrar todas las reglas existentes en IPtables y evitar conflictos con configuraciones anteriores?"
  options={{
    A: "iptables -S.",
    B: "iptables -L.",
    C: "iptables -F; iptables -X; iptables -Z; iptables -t nat -F.",
    D: "iptables -P ACCEPT."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para permitir que los clientes de una red interna con rango 10.10.10.0/24 accedan a Internet con enmascaramiento a través de la interfaz 'eth0', ¿cuál sería la regla de IPtables correcta?"
  options={{
    A: "iptables -t nat -A PREROUTING -s 10.10.10.0/24 -i eth0 -j MASQUERADE.",
    B: "iptables -t nat -A POSTROUTING -s 10.10.10.0/24 -o eth0 -j MASQUERADE.",
    C: "iptables -A FORWARD -s 10.10.10.0/24 -j ACCEPT.",
    D: "iptables -A INPUT -i eth0 -j ACCEPT."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para bloquear el acceso de los clientes de una red interna a una dirección IP específica (ej. 193.146.27.134) en IPtables, ¿en qué cadena se aplicaría la regla?"
  options={{
    A: "INPUT.",
    B: "OUTPUT.",
    C: "FORWARD.",
    D: "PREROUTING."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Si se quiere bloquear completamente todo el protocolo ICMP para los clientes de la red interna a través del cortafuegos, ¿cuál sería la regla en IPtables?"
  options={{
    A: "iptables -A INPUT -p icmp -j DROP.",
    B: "iptables -A OUTPUT -p icmp -j DROP.",
    C: "iptables -A FORWARD -p icmp -j DROP.",
    D: "iptables -t nat -A POSTROUTING -p icmp -j DROP."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para bloquear el uso del protocolo FTP (puertos 20/TCP y 21/TCP) a los clientes de la red interna, dirigiéndose a servidores remotos, ¿qué puertos y dirección se usarían en la regla de IPtables?"
  options={{
    A: "Puertos origen 20 y 21, y dirección de origen de los clientes.",
    B: "Puertos destino 20 y 21, y dirección de destino de los servidores remotos.",
    C: "Puertos destino 20 y 21, y dirección de origen de los clientes.",
    D: "Puertos origen 20 y 21, y dirección de destino de los servidores remotos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué es recomendable utilizar scripts de bash para configuraciones avanzadas de IPtables en lugar de escribir las reglas una a una en la línea de comandos?"
  options={{
    A: "Los scripts son más seguros y evitan errores de sintaxis.",
    B: "Los scripts permiten recoger numerosas acciones, ejecutar reglas en orden, e incluir comentarios, facilitando la gestión de configuraciones exhaustivas.",
    C: "Los scripts ofrecen una interfaz gráfica para la configuración.",
    D: "Las reglas en scripts se aplican automáticamente sin necesidad de ejecución."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la misión fundamental de un cortafuegos?"
  options={{
    A: "Ocultar las direcciones IP de los equipos internos.",
    B: "Filtrar los paquetes que quieren 'salir' o 'entrar' de la red.",
    C: "Almacenar en caché el contenido de Internet.",
    D: "Actuar como un sistema de detección de intrusos pasivo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de un servidor proxy, que lo diferencia de un firewall en cuanto a la comunicación?"
  options={{
    A: "El proxy solo bloquea paquetes, mientras el firewall los filtra.",
    B: "El proxy actúa como intermediario, registrando peticiones y convirtiéndolas en suyas, 'invisibilizando' al peticionario frente al servidor final.",
    C: "El proxy es un dispositivo de hardware, mientras el firewall es software.",
    D: "El proxy siempre es transparente para el usuario."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes es una ventaja adicional de los servidores proxy?"
  options={{
    A: "Los costos son siempre menores que los de un firewall.",
    B: "El servicio proporcionado a los usuarios mantiene el mismo grado de transparencia.",
    C: "Proporcionan registros (logs) detallados de todas las comunicaciones que pasan por el proxy.",
    D: "No requieren autenticación de usuario."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué función adicional suelen llevar aparejados los 'proxy web caché'?"
  options={{
    A: "Un sistema de autenticación de doble factor.",
    B: "Una caché donde se almacenan temporalmente las páginas solicitadas por los usuarios para servir copias repetitivas.",
    C: "Un firewall incorporado para filtrar paquetes.",
    D: "Un sistema de prevención de intrusiones (IPS)."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de proxy se instala en un ordenador cliente y está orientado a controlar el tráfico para evitar que la información privada del sistema salga de la computadora?"
  options={{
    A: "Proxy externo.",
    B: "Proxy transparente.",
    C: "Proxy inverso.",
    D: "Proxy interno o local."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué característica distingue a un 'proxy transparente'?"
  options={{
    A: "Que los usuarios deben configurarlo manualmente en sus equipos.",
    B: "Que los usuarios no saben que están navegando a través de él porque no necesitan configurar nada.",
    C: "Que solo maneja tráfico HTTP.",
    D: "Que almacena copias de seguridad de todos los datos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una de las funciones principales que se consigue con un 'proxy inverso'?"
  options={{
    A: "Proporcionar acceso directo a Internet a los usuarios internos.",
    B: "Ofrecer una capa adicional de seguridad al recibir las conexiones de los usuarios y distribuirlas entre servidores, y distribuir la carga.",
    C: "Permitir la navegación anónima en la web.",
    D: "Almacenar en caché el contenido solicitado por los usuarios."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué un 'proxy abierto' es considerado un tipo de proxy 'peligroso'?"
  options={{
    A: "Porque solo acepta peticiones de la red interna.",
    B: "Porque exige una configuración muy compleja.",
    C: "Porque acepta cualquier tipo de petición y la hace suya sin examinarla, lo que puede llevar a que sea usado para ataques informáticos.",
    D: "Porque no registra las comunicaciones."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la implementación de un servidor proxy web con caché de software libre más famosa y robusta mencionada en las fuentes?"
  options={{
    A: "Nginx.",
    B: "Apache.",
    C: "Squid.",
    D: "HAProxy."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué estándares de Internet se basa Squid para la política de cacheado de recursos?"
  options={{
    A: "RFC 793 y RFC 768 (TCP y UDP).",
    B: "RFC 2186 y RFC 2187 (protocolo ICP y su aplicación).",
    C: "RFC 6749 (OAuth 2.0).",
    D: "RFC 1918 (Direcciones IP privadas)."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Dónde se encuentra el fichero de configuración de Squid por defecto?"
  options={{
    A: "/var/log/squid/squid.conf.",
    B: "/etc/squid/squid.conf.",
    C: "/opt/squid/config.conf.",
    D: "/usr/local/etc/squid.conf."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué puerto TCP escucha el servicio de Squid por defecto para las peticiones HTTP?"
  options={{
    A: "80.",
    B: "443.",
    C: "8080.",
    D: "3128."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué opción de configuración en Squid se utiliza para almacenar una línea por cada solicitud de comunicación que hagan los clientes del proxy?"
  options={{
    A: "cache_dir.",
    B: "http_port.",
    C: "access_log.",
    D: "error_directory."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Mediante qué mecanismo se controlan los permisos de acceso y se filtran las comunicaciones en Squid?"
  options={{
    A: "Reglas de IPtables.",
    B: "Listas de Control de Acceso (ACLs).",
    C: "Tablas de enrutamiento.",
    D: "Firmas de antivirus."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Cuando se configura el formato de fichero de la caché de Squid, ¿cuál opción se recomienda para entornos de alta carga y para evitar el bloqueo del proceso Squid?"
  options={{
    A: "UFS (Unix File System).",
    B: "AUFS (Asíncrono UFS).",
    C: "FAT32.",
    D: "NTFS."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa la opción 'cache_swap_low' en la configuración de la caché de Squid?"
  options={{
    A: "El tamaño máximo de los objetos a almacenar.",
    B: "El porcentaje a partir del cual se comenzará a limpiar la caché.",
    C: "El número de directorios subordinados de la caché.",
    D: "El valor de la caché que no se puede superar."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la política de reemplazo de caché utilizada por Squid de modo predeterminado, que elimina los objetos accedidos hace mucho tiempo y mantiene los más recientes?"
  options={{
    A: "LFUDA (Least Frequently Used with Dynamic Aging).",
    B: "GDSF (GreedyDual Size Frequency).",
    C: "LRU (Least Recently Used).",
    D: "FIFO (First In, First Out)."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando se utiliza para comprobar si el fichero de configuración de Squid tiene errores antes de iniciar el servicio?"
  options={{
    A: "service squid status.",
    B: "squid -k parse.",
    C: "squid -s.",
    D: "cat /etc/squid/squid.conf."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Una vez que se ha configurado Squid, ¿qué paso fundamental debe realizarse en los clientes para que utilicen el proxy para sus comunicaciones HTTP y HTTPS?"
  options={{
    A: "Instalar un firewall adicional en cada cliente.",
    B: "Configurar el cliente para que utilice el proxy Squid para sus comunicaciones HTTP y HTTPS.",
    C: "Desactivar la configuración de red en el cliente.",
    D: "Asignar una dirección IP estática a cada cliente."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para filtrar el acceso a páginas web con Squid, ¿qué método se considera más sencillo y potente que usar direcciones IP en listas ACL?"
  options={{
    A: "Bloquear todos los puertos de comunicación.",
    B: "Crear listas de palabras o dominios prohibidos y referenciarlas en el fichero de configuración.",
    C: "Desactivar completamente el servicio HTTP.",
    D: "Usar un firewall adicional para el filtrado."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En las reglas de filtrado de Squid, ¿cómo se aplican las reglas en relación con las de IPtables?"
  options={{
    A: "Se aplican de forma aleatoria.",
    B: "Se aplican de forma lineal, lo que significa que si una regla deniega el acceso, una posterior que lo permita no servirá de nada.",
    C: "Se aplican solo si el usuario las autoriza.",
    D: "Se aplican en paralelo, y la más permisiva tiene prioridad."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Dónde se registran todas las conexiones, incluidas las denegadas, cuando se utiliza Squid?"
  options={{
    A: "En el fichero de configuración de Squid.",
    B: "En el registro de accesos de Squid (access.log).",
    C: "Solo en la caché de Squid.",
    D: "En los logs del sistema operativo."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes es un objetivo principal de la asignatura 'Seguridad en Redes de Comunicaciones'?"
  options={{
    A: "Gestionar el ciclo de vida del software en organizaciones.",
    B: "Conocer los principales elementos de seguridad que se despliegan en las redes de comunicaciones, su finalidad y su utilización.",
    C: "Desarrollar hardware específico para redes.",
    D: "Realizar auditorías financieras de sistemas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el contexto de la seguridad en capas, ¿qué significa fortificar a 'Nivel humano'?"
  options={{
    A: "Implementar un firewall de paquetes de red.",
    B: "Fortificar debidamente la máquina que alberga la Web.",
    C: "Realizar una programación segura de la Web.",
    D: "Concienciar al personal tecnológico y a los usuarios sobre la importancia de la seguridad y el uso de contraseñas robustas."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según la configuración básica de un firewall con DMZ, ¿qué tipo de conexiones se permiten generalmente desde Internet a la DMZ, y desde la red local a la DMZ?"
  options={{
    A: "Solo desde Internet.",
    B: "Solo desde la red local.",
    C: "Ambas, desde Internet y desde la red local de la empresa.",
    D: "Ninguna de las anteriores, la DMZ es una zona aislada."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa 'Insecure Insiders' en el contexto de las amenazas que UEBA ayuda a detectar?"
  options={{
    A: "Hackers maliciosos externos que atacan la red.",
    B: "Empleados o personal interno que representa un riesgo de seguridad por comportamiento inadecuado o malicioso.",
    C: "Vulnerabilidades en el hardware de red.",
    D: "Servidores no actualizados con parches de seguridad."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué medida de seguridad se recomienda para las comunicaciones a través de la red que tratan con información confidencial?"
  options={{
    A: "Enviar la información en texto plano para que sea fácilmente legible.",
    B: "Cifrar todas las comunicaciones.",
    C: "Limitar la cantidad de información transmitida.",
    D: "Almacenar la información en un servidor sin acceso a Internet."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes afirmaciones es una desventaja de los Honeypots?"
  options={{
    A: "Generan un volumen de datos demasiado grande.",
    B: "Necesitan recursos mínimos.",
    C: "Son fuentes potenciales de riesgo si no se calibran y controlan adecuadamente, pudiendo ser usados para atacar otras redes.",
    D: "Su utilidad es altísima incluso sin recibir ataques."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de los IPS que los diferencia de los IDS?"
  options={{
    A: "Solo detectan intrusiones, sin prevenir.",
    B: "Son reactivos y no pueden bloquear paquetes.",
    C: "Llevan a cabo un análisis en tiempo real para prevenir incidentes, permitiendo descartar paquetes y desconectar conexiones.",
    D: "Únicamente monitorizan el tráfico entrante."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataque se basa en la suplantación o spoofing en una o varias capas de red y en la colaboración involuntaria de servidores o equipos vulnerables/infectados?"
  options={{
    A: "Ataques de fuerza bruta.",
    B: "Inyección SQL.",
    C: "Ataques de denegación de servicio actuales (por ejemplo, volumétricos).",
    D: "Man in the Middle básico."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es lo que un firewall no realiza, salvo contadísimas ocasiones, que permite a un tercero espiar las comunicaciones y averiguar qué equipos se encuentran detrás de él?"
  options={{
    A: "El filtrado de paquetes.",
    B: "El ocultamiento de las direcciones IP que participan en la comunicación (NAT MASQUERADE).",
    C: "La denegación de servicio.",
    D: "El control de acceso."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando de IPtables se utiliza para especificar el protocolo encapsulado en el campo de datos del paquete IP?"
  options={{
    A: "-s.",
    B: "-d.",
    C: "-p.",
    D: "-i."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de filtrado de firewall se realiza a nivel de la capa de transporte, examinando el flujo de datos TCP y los datagramas UDP?"
  options={{
    A: "Filtrado a nivel de paquete de red.",
    B: "Filtrado a nivel de circuito.",
    C: "Filtrado a nivel de aplicación (proxy).",
    D: "Filtrado a nivel físico."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes IPtables chains se refiere al tráfico entrante a la máquina, incluido el dirigido a la máquina en sí, antes de que se tome cualquier decisión de encaminamiento?"
  options={{
    A: "INPUT.",
    B: "FORWARD.",
    C: "OUTPUT.",
    D: "PREROUTING."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función del comando `echo 1 > /proc/sys/net/ipv4/ip_forward` en un sistema Linux?"
  options={{
    A: "Deshabilitar el forwarding de paquetes.",
    B: "Activar el forwarding de paquetes para permitir que el equipo actúe como intermediario.",
    C: "Limpiar la caché ARP.",
    D: "Reiniciar el servicio de red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de NAT se utiliza, por ejemplo, para ocultar los servidores de acceso público a Internet, ya que se oculta detrás de una dirección IP del firewall?"
  options={{
    A: "NAT dinámico.",
    B: "NAT estático.",
    C: "MASQUERADE.",
    D: "REDIRECT."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la técnica de envío de paquetes con información falsa, suplantando una dirección MAC, que solo puede ser utilizada cuando ambos usuarios están en la misma red local?"
  options={{
    A: "IP spoofing.",
    B: "MAC spoofing.",
    C: "DNS spoofing.",
    D: "DHCP spoofing."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el valor máximo de MTU (Maximum Transmission Unit) típico para Ethernet?"
  options={{
    A: "576 bytes.",
    B: "1492 bytes.",
    C: "1518 bytes.",
    D: "8190 bytes."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el contexto de ataques de denegación de servicio, ¿qué se entiende por 'víctimas' que contribuyen involuntariamente al ataque?"
  options={{
    A: "Los atacantes que lanzan el ataque directamente.",
    B: "Servidores o equipos vulnerables o infectados con malware que son controlados por el atacante para construir el ataque.",
    C: "Los usuarios finales que son el objetivo del ataque.",
    D: "Los administradores de red que intentan mitigar el ataque."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es un Honeynet en relación con un Honeypot?"
  options={{
    A: "Son términos sinónimos.",
    B: "Una Honeynet es un tipo específico de Honeypot, altamente interactivo, diseñado para la investigación y obtención de información sobre atacantes.",
    C: "Una Honeynet es una red de producción para servicios críticos.",
    D: "Una Honeynet es un software antivirus avanzado."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la ventaja de los honeypots en cuanto a los falsos positivos?"
  options={{
    A: "Generan muchos falsos positivos para confundir a los atacantes.",
    B: "No necesitan ser monitorizados, por lo que no generan falsos positivos.",
    C: "Permiten revelar cualquier acceso o configuración errónea sin existir falsos positivos, ya que ningún usuario normal debe acceder a ellos.",
    D: "Solo detectan ataques conocidos, reduciendo los falsos positivos."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de SIEM integra gestión de información de seguridad (SIM) y gestión de eventos (SEM)?"
  options={{
    A: "SIEM pasivo.",
    B: "SIEM reactivo.",
    C: "SIEM híbrido centralizado.",
    D: "SIEM distribuido."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes es un tipo de ataque de inyección SQL a ciegas?"
  options={{
    A: "Inyección in-band SQL.",
    B: "Time-based SQL injection.",
    C: "Inyección de comandos del sistema operativo.",
    D: "Inyección de XML."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué la autenticación de los extremos de las comunicaciones es una medida esencial contra ataques como Man in the Middle?"
  options={{
    A: "Porque verifica que los datos no han sido modificados.",
    B: "Porque asegura que el emisor y el receptor son quienes dicen ser.",
    C: "Porque impide que se realicen escaneos de puertos.",
    D: "Porque acelera el flujo de datos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el contexto de la monitorización de redes, ¿qué sucede cuando la interfaz de red en el ordenador local obtiene un paquete cuya dirección MAC destino no coincide con la MAC de la propia tarjeta?"
  options={{
    A: "Lo reenvía a la puerta de enlace.",
    B: "Lo almacena en la caché ARP.",
    C: "Simplemente lo ignora, discriminando tráfico no dirigido a él.",
    D: "Lo procesa de igual modo y lo reenvía a su destino."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué opción de TCPDump se utiliza para mostrar un mayor detalle en la captura, combinándose con '-v'?"
  options={{
    A: "-x.",
    B: "-X.",
    C: "-vv.",
    D: "-w."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo se representa el valor de una máscara en hexadecimal en TCPDump para la notación offset de bytes?"
  options={{
    A: "Anteponiendo un 'h'.",
    B: "Anteponiendo un 'x'.",
    C: "Anteponiendo un '0x'.",
    D: "Con un signo de dólar '$'."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué opción de Ettercap permite guardar todos los paquetes capturados y la información pertinente a cada ordenador?"
  options={{
    A: "Mitm > ARP poisoning.",
    B: "Hosts > Scan for hosts.",
    C: "Logging > Log all packets and infos.",
    D: "Start > Start Sniffing."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa la opción 'Sniff remote connection' en las opciones de ataque de envenenamiento ARP de Ettercap?"
  options={{
    A: "Solo envenenar las conexiones locales.",
    B: "Capturar paquetes de una dirección IP remota envenenando la puerta de enlace (router de salida).",
    C: "Envenenar solo en una dirección.",
    D: "Deshabilitar la captura remota."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ocurre cuando se detiene un ataque de envenenamiento ARP lanzado desde Ettercap?"
  options={{
    A: "Ettercap elimina todos los registros del ataque.",
    B: "Ettercap restaura las tablas ARP con los valores originales para evitar denegación de servicios.",
    C: "Las tablas ARP permanecen envenenadas indefinidamente.",
    D: "El equipo atacante se desconecta de la red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el tipo de firewall que examina la cabecera del paquete en la capa IP para realizar el filtrado?"
  options={{
    A: "Firewall a nivel de circuito.",
    B: "Firewall a nivel de aplicación.",
    C: "Firewall a nivel de paquete de red.",
    D: "Firewall bastión."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando de IPtables se utiliza para establecer las políticas por defecto de las cadenas, como INPUT, OUTPUT y FORWARD?"
  options={{
    A: "iptables -F.",
    B: "iptables -A.",
    C: "iptables -P.",
    D: "iptables -j."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el principal inconveniente de la fragmentación IP para las tecnologías de filtrado de paquetes básicas?"
  options={{
    A: "Aumenta la velocidad de la red, dificultando el análisis.",
    B: "Impide que los sistemas de seguridad reensamblen los paquetes, no permitiendo conocer su contenido real.",
    C: "Cifra los fragmentos, haciéndolos ilegibles.",
    D: "Requiere un mayor ancho de banda del firewall."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes es una medida para minimizar las consecuencias de un ataque de ransomware?"
  options={{
    A: "Desactivar los sistemas operativos.",
    B: "Tener siempre sus sistemas operativos y aplicaciones de terceros actualizados a la última versión.",
    C: "Abonar el rescate inmediatamente.",
    D: "Compartir las claves de cifrado con los atacantes."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En IPtables, ¿qué parámetro se utiliza para indicar la interfaz de red local por la que se ha recibido el paquete?"
  options={{
    A: "-o.",
    B: "-s.",
    C: "-d.",
    D: "-i."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando se utiliza para comprobar las reglas activas de IPtables en un sistema Linux?"
  options={{
    A: "iptables -h.",
    B: "iptables -S.",
    C: "iptables -L -n.",
    D: "iptables --version."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la deficiencia intrínseca de un cortafuegos que el proxy busca solucionar?"
  options={{
    A: "No puede filtrar paquetes por puerto.",
    B: "No realiza un ocultamiento de las direcciones IP que participan en la comunicación, permitiendo espiar equipos internos.",
    C: "Es demasiado costoso para pequeñas organizaciones.",
    D: "Requiere demasiada configuración manual."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué sucede cuando un cliente lanza una petición a un servidor proxy y este la analiza, filtra y registra?"
  options={{
    A: "El proxy reenvía la petición directamente al cliente original.",
    B: "El proxy solicita el recurso al servidor final, actuando como el solicitante.",
    C: "El proxy ignora la petición y la descarta.",
    D: "El proxy devuelve un error al cliente."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes es una desventaja del uso de un proxy?"
  options={{
    A: "Control completo sobre cada servicio y usuario.",
    B: "Generación de registros detallados.",
    C: "Mayor costo en hardware y software debido al mayor procesamiento de paquetes.",
    D: "Reglas de filtrado más sencillas."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de los 'proxy web caché'?"
  options={{
    A: "Bloquear el acceso a todas las páginas web.",
    B: "Almacenar temporalmente las páginas solicitadas por los usuarios para reducir el tráfico y mejorar la velocidad de respuesta.",
    C: "Cifrar el tráfico web para garantizar la privacidad.",
    D: "Realizar un escaneo de malware en cada página web visitada."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes es un tipo de proxy que se instala delante de una serie de servidores que realizan la misma función (por ejemplo, proporcionar un servicio web) y distribuye las conexiones entre ellos?"
  options={{
    A: "Proxy web.",
    B: "Proxy transparente.",
    C: "Proxy inverso.",
    D: "Proxy abierto."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el principal parámetro de configuración de Squid que permite definir el puerto de escucha para las peticiones?"
  options={{
    A: "cache_dir.",
    B: "access_log.",
    C: "http_port.",
    D: "error_directory."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Para qué se utilizan las Listas de Control de Acceso (ACL) en Squid?"
  options={{
    A: "Para definir el tamaño de la caché.",
    B: "Para controlar los permisos de acceso y filtrar las comunicaciones HTTP y HTTPS.",
    C: "Para especificar la ubicación de los logs.",
    D: "Para iniciar y detener el servicio Squid."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la configuración de Squid, ¿qué opción se usa para establecer el tamaño en MB de la caché?"
  options={{
    A: "cache_swap_low.",
    B: "cache_swap_high.",
    C: "El primer valor numérico en la línea 'cache_dir'.",
    D: "store_avg_object_size."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Si el alumno ha introducido un error de notación en el fichero de configuración de Squid (por ejemplo, en el nombre de una ACL), ¿qué podría ocurrir al intentar iniciar el servicio?"
  options={{
    A: "Squid lo detectará automáticamente y lo corregirá.",
    B: "El comando `squid -k parse` siempre avisará de este tipo de errores.",
    C: "El servicio podría no iniciar o denegar el acceso sin que el comando `squid -k parse` necesariamente avise, requiriendo revisión de la lógica del filtro.",
    D: "El sistema operativo bloqueará el fichero de configuración."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué comando de Ettercap permite iniciar una interfaz gráfica con las librerías de GTK (opción recomendada)?"
  options={{
    A: "ettercap -C.",
    B: "ettercap -G.",
    C: "ettercap -T.",
    D: "ettercap -V."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función del fichero con extensión '.ecp' generado por Ettercap?"
  options={{
    A: "Información relevante a cada ordenador.",
    B: "Los paquetes capturados en formato binario.",
    C: "Las credenciales de los usuarios.",
    D: "Los errores del sistema."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'over-provisioning de recursos' como contramedida para los ataques de denegación de servicio?"
  options={{
    A: "La capacidad de un sistema para desconectarse de la red durante un ataque.",
    B: "Tener recursos adicionales (ancho de banda, capacidad de procesamiento) más allá de lo necesario para el funcionamiento normal, aunque limitado frente a ataques distribuidos masivos.",
    C: "Reducir al mínimo los recursos disponibles para el atacante.",
    D: "Un método para cifrar los recursos del servidor."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué son los 'dorks' en el contexto de los buscadores como Google o Shodan?"
  options={{
    A: "Errores de programación en las aplicaciones web.",
    B: "Operadores que ayudan a los hackers a refinar las búsquedas y obtener información específica.",
    C: "Vulnerabilidades en los sistemas operativos.",
    D: "Programas de malware utilizados para la recolección de información."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué acción realiza la opción 'MASQUERADE' en la tabla NAT de IPtables?"
  options={{
    A: "Cambia la dirección de destino del paquete.",
    B: "Redirige los paquetes a la propia máquina.",
    C: "Realiza la misma función que SNAT pero efectuando comprobaciones sobre la IP a sustituir.",
    D: "Acepta todo el tráfico entrante."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'compromiso de credenciales' en el contexto de las amenazas que UEBA puede detectar?"
  options={{
    A: "El uso de contraseñas muy débiles por parte de los usuarios.",
    B: "El robo o la exposición de credenciales de acceso (usuarios y contraseñas).",
    C: "La falta de autenticación de doble factor en los sistemas.",
    D: "El cambio frecuente de contraseñas por parte de los administradores."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la mediana del tiempo que, según se admite, necesita un atacante para ser descubierto dentro de una organización?"
  options={{
    A: "12-18 horas.",
    B: "150 a 200 días.",
    C: "Unos pocos minutos.",
    D: "Menos de un día."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el ataque de 'DHCP Spoofing', ¿qué parámetro manipula Ettercap para que los ordenadores cliente dirijan el tráfico a través del atacante?"
  options={{
    A: "La dirección MAC del servidor DNS.",
    B: "El parámetro de la puerta de enlace (gateway).",
    C: "La máscara de red del cliente.",
    D: "El servidor NTP."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes NO es una tabla interna con la que trabaja IPtables para estructurar las operaciones sobre los paquetes?"
  options={{
    A: "MANGLE.",
    B: "NAT.",
    C: "CRYPT.",
    D: "FILTER."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Para una aplicación web que ofrece un formulario vulnerable a inyección SQL, ¿cuál de los siguientes es un posible punto de inyección de sentencias SQL?"
  options={{
    A: "Solo en el código HTML estático.",
    B: "En campos de tipo input, textarea y hidden, parámetros GET o POST, o valores en cookies.",
    C: "Únicamente en los paquetes TCP/IP.",
    D: "Solo si la base de datos no tiene contraseñas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa el concepto de 'infoxicación' en el contexto de la fase de recogida de información para un ataque hacker?"
  options={{
    A: "La infección de sistemas con malware que roba información.",
    B: "La intoxicación de la información pública con datos falsos.",
    C: "El alto costo en tiempo y recursos para procesar la gran cantidad de datos que puede recopilarse sobre un objetivo.",
    D: "La incapacidad de encontrar información útil debido a la falta de datos."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el principal problema de seguridad que abordan los firewalls, según su definición básica?"
  options={{
    A: "La escasez de direcciones IP.",
    B: "Los ataques a los servidores y redes que protegen.",
    C: "La lentitud de las comunicaciones de red.",
    D: "La falta de autenticación de usuarios."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de las siguientes es una ventaja operativa de los firewalls conductuales?"
  options={{
    A: "Aumenta la sobrecarga de los equipos de seguridad.",
    B: "Proporciona una capa de automatización e inteligencia, reduciendo alertas y permitiendo que el equipo se enfoque en amenazas reales.",
    C: "Elimina la necesidad de integración con otras herramientas de seguridad.",
    D: "Requiere una gran cantidad de personal 24/7."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el texto, ¿qué protocolo se utiliza para el intercambio de dispositivos de control/actuación en el entorno de IoT (Internet of Things)?"
  options={{
    A: "TCP.",
    B: "UDP.",
    C: "MQTT.",
    D: "ICMP."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué implica la 'amplificación por distribución' en el contexto de ataques DDoS en IoT?"
  options={{
    A: "Incrementar el tamaño de los datagramas de petición.",
    B: "Utilizar numerosos servidores NTP como víctimas.",
    C: "Suplantar numerosos dispositivos (muchos de ellos vulnerables por imposibilidad de actualización).",
    D: "Aumentar el ancho de banda del atacante."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes NO es un tipo de ataque de denegación de servicio volumétrico?"
  options={{
    A: "TCP-SYN flood.",
    B: "UDP flood.",
    C: "ICMP flood.",
    D: "SQL Injection."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de solución SIEM son las soluciones tradicionales de UEBA, centrándose en la analítica basada en registros?"
  options={{
    A: "Situadas debajo del SIEM.",
    B: "Situadas encima de los sistemas de Gestión de Incidentes y Eventos de Seguridad (SIEM).",
    C: "Reemplazan completamente al SIEM.",
    D: "Funcionan de forma independiente sin integración con SIEM."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el texto, ¿qué porcentaje de las violaciones de datos confirmadas involucraban atacantes que se presentaban como usuarios legítimos (usando credenciales robadas) o usuarios legítimos que explotaban maliciosamente su acceso?"
  options={{
    A: "10%.",
    B: "30%.",
    C: "63%.",
    D: "90%."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la ventaja de la UEBA en cuanto a la detección en tiempo real de actividades inusuales?"
  options={{
    A: "Solo detecta amenazas después de varias horas.",
    B: "Puede detectar cuando algo está fuera de la norma y responder en tiempo real a la posible amenaza (verificación de identidad o escalado).",
    C: "Requiere una gran cantidad de intervención manual para cada detección.",
    D: "No genera ninguna alerta."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo pueden las soluciones UEBA ayudar con la 'Búsqueda de Inteligencia Forense / Amenazas'?"
  options={{
    A: "Impidiendo cualquier tipo de búsqueda.",
    B: "Almacenando solo datos irrelevantes.",
    C: "Permitiendo a los analistas buscar o investigar proactivamente amenazas potenciales, como usuarios que iniciaron sesión desde un país específico y accedieron a un servidor inusual.",
    D: "Bloqueando el acceso a Internet para la investigación."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de respuestas en tiempo real de grano fino puede aplicar un firewall de comportamiento, según las políticas personalizables?"
  options={{
    A: "Solo notificar.",
    B: "Bloquear, Modificar, Notificar, Reautenticar o Autenticación Multi Factor, entre otros.",
    C: "Solo deshabilitar el acceso a la red.",
    D: "Eliminar el usuario comprometido del sistema."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa que las organizaciones pueden 'reducir proactivamente su superficie de ataque' con UEBA?"
  options={{
    A: "Aumentar la cantidad de vulnerabilidades en sus sistemas.",
    B: "Hacer más difícil para los atacantes maliciosos comprometer la red, identificando y abordando puntos débiles antes de incidentes.",
    C: "No implementar ninguna medida de seguridad.",
    D: "Ignorar las amenazas internas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué áreas puede la UEBA ayudar a reducir el riesgo de las organizaciones?"
  options={{
    A: "Únicamente en la gestión de contraseñas débiles.",
    B: "Actividades de usuarios privilegiados, contraseñas débiles, cuentas obsoletas, usuarios compartidos y puntos finales de alto riesgo.",
    C: "Solo en la detección de malware conocido.",
    D: "En la gestión de inventario de hardware."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo contribuye UEBA a la 'reducción de eventos y mejora de la Eficiencia Operacional de ciberseguridad'?"
  options={{
    A: "Aumentando la cantidad de alertas de seguridad para el equipo.",
    B: "Añadiendo más tareas manuales al equipo de seguridad.",
    C: "Automatizando la respuesta a incidentes sospechosos y reduciendo falsos positivos, permitiendo al equipo enfocarse en amenazas reales.",
    D: "Eliminando la necesidad de análisis forenses."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué la integración de soluciones UEBA avanzadas, como los firewalls de comportamiento, es más sencilla y rápida que las soluciones UEBA tradicionales?"
  options={{
    A: "Requieren una preparación de datos muy compleja y extensa.",
    B: "No tienen los requisitos de preparación de datos de las soluciones UEBA tradicionales y pueden instalarse rápidamente.",
    C: "Solo se instalan en hardware específico.",
    D: "No permiten la integración con otras fuentes de datos."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿En qué modo puede implementarse un firewall de comportamiento si hay dudas sobre su implementación en línea al comienzo?"
  options={{
    A: "Solo en modo proxy.",
    B: "En modo sniffer pasivo y reconfigurarlo a modo proxy posteriormente.",
    C: "Directamente bloqueando todo el tráfico.",
    D: "No se puede cambiar el modo una vez implementado."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué permite a los firewalls de comportamiento una mayor escalabilidad y cobertura al implementarse en la red?"
  options={{
    A: "Implementación en una única máquina física.",
    B: "Implementación como un proxy en frente de los controladores de dominio a través de la red con una única administración centralizada.",
    C: "No requerir ninguna conexión de red.",
    D: "Solo funcionar en entornos de red pequeños."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuánto tiempo se tarda aproximadamente en que un Firewall de Comportamiento establezca una línea base del comportamiento de todos los usuarios, entidades y servidores en toda la red una vez desplegado?"
  options={{
    A: "Unas pocas horas.",
    B: "2-3 semanas.",
    C: "Varios meses.",
    D: "Más de un año."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo contribuyen los firewalls de comportamiento a la 'reducción de falsos positivos'?"
  options={{
    A: "Al generar más alertas que deben ser revisadas manualmente.",
    B: "Al descartar automáticamente todas las alertas, independientemente de su validez.",
    C: "Mediante respuestas automatizadas que verifican la identidad y permiten transacciones legítimas, liberando al equipo de seguridad.",
    D: "Al no registrar ninguna actividad sospechosa."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la base de los 'Smart Insights' en la gestión de UEBA?"
  options={{
    A: "La complejidad de los grandes datos.",
    B: "La simplicidad al brindar información fácil de entender e interpretar para reducir riesgos.",
    C: "La generación de un gran volumen de errores estadísticos.",
    D: "La intervención manual constante del equipo de seguridad."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cómo las soluciones UEBA avanzadas, como los firewalls de comportamiento, automatizan la respuesta a incidentes sospechosos?"
  options={{
    A: "Enviando todas las alertas al equipo de seguridad para seguimiento manual.",
    B: "Mediante la reducción de la cantidad de incidentes y falsos positivos enviados al equipo de seguridad, eliminando tareas manuales y consumiendo tiempo.",
    C: "Requiriendo la intervención de los analistas de seguridad para cada ajuste de política.",
    D: "Solo detectando, sin ofrecer ninguna capacidad de respuesta."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la segmentación de redes, ¿cuál es el papel fundamental de los firewalls y otros dispositivos de red?"
  options={{
    A: "Unicamente la autenticación de usuarios.",
    B: "Facilitar la interconexión de todos los sistemas sin restricción.",
    C: "Separar sistemas en zonas para evitar comunicaciones innecesarias.",
    D: "Cifrar todos los datos en la red."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes es un ejemplo de un 'Insecure Insider' según la clasificación de riesgos que UEBA ayuda a identificar?"
  options={{
    A: "Un hacker malicioso externo.",
    B: "Un usuario privilegiado que explota maliciosamente su acceso.",
    C: "Un ataque de fuerza bruta a contraseñas.",
    D: "Una violación de datos por error de software."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Por qué se considera que la 'seguridad por oscuridad' no suele funcionar como defensa principal contra inyecciones SQL?"
  options={{
    A: "Porque el filtrado de las respuestas de la base de datos puede hacer vulnerable a ataques de inyección a ciegas.",
    B: "Porque el cifrado de las comunicaciones es la única defensa efectiva.",
    C: "Porque los atacantes siempre tienen acceso al código fuente de la aplicación.",
    D: "Porque esta técnica aumenta la complejidad del sistema."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa el parámetro 'dst host' en un filtro de TCPDump?"
  options={{
    A: "Captura los paquetes que se originan de 'ordenador'.",
    B: "Captura todos los paquetes que se destinan a 'ordenador'.",
    C: "Captura todos los paquetes que se originan o se destinan a 'ordenador'.",
    D: "Captura los paquetes de broadcast de la red."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En el ejemplo de configuración de IPtables para una DMZ, ¿cuál es el objetivo de redirigir todo lo que viene de Internet al puerto 80/TCP al servidor web con DNAT?"
  options={{
    A: "Bloquear el acceso al servidor web.",
    B: "Aumentar la seguridad de la red interna.",
    C: "Permitir el acceso público al servidor web, que se encuentra en la DMZ, desde Internet.",
    D: "Cambiar el puerto del servidor web a 8080."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función del comando 'iptables -t nat -A POSTROUTING -s 10.0.0.0/24 -o eth0 -j MASQUERADE'?"
  options={{
    A: "Redirigir el tráfico entrante a la red interna.",
    B: "Realizar el enmascaramiento de la red interna al salir por la interfaz eth0 hacia Internet.",
    C: "Bloquear todo el tráfico saliente de la red interna.",
    D: "Permitir el acceso desde la DMZ a la red interna."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una de las principales desventajas de los SIEM, en el caso de que su mantenimiento se encargue a un departamento interno de la empresa?"
  options={{
    A: "Bajos costos de implantación.",
    B: "Integración ilimitada con el resto del sistema.",
    C: "Altos costes de implantación y una curva de aprendizaje larga para el personal propio.",
    D: "Acceso ilimitado a toda la información generada."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques suelen utilizarse para robar credenciales (usuarios y contraseñas) que en muchos casos van en claro?"
  options={{
    A: "Ataques de denegación de servicio.",
    B: "Man in the Middle (MitM) en la capa de enlace o superiores.",
    C: "Ataques de fuerza bruta offline.",
    D: "Ataques de fragmentación IP."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué medida de seguridad se considera la clave para el diseño de una red corporativa, que consiste en separar los sistemas en tantas zonas como sea necesario?"
  options={{
    A: "Cifrado de datos.",
    B: "Control de acceso.",
    C: "Segmentación.",
    D: "Definición y uso de perfiles de usuario."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Cuando se configura Squid, ¿cuál es el significado del segundo valor numérico en la línea 'cache_dir'?"
  options={{
    A: "El tamaño en MB de la caché.",
    B: "El número de directorios subordinados que tendrá la caché.",
    C: "El número máximo de niveles de cada uno de los directorios subordinados.",
    D: "El porcentaje de limpieza de la caché."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué es el 'TTL' (Time To Live) en el contexto de la tabla MANGLE de IPtables?"
  options={{
    A: "Un campo que indica el tipo de servicio del paquete IP.",
    B: "Un valor incluido en la cabecera IP, empleado habitualmente en tareas de enrutamiento o evaluación de ubicaciones de hosts.",
    C: "Un identificador de seguridad interpretable por SELinux.",
    D: "Un campo que define el puerto de destino."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué caracteriza el comportamiento de un ataque 'Man in the Middle' cuando el tráfico está cifrado?"
  options={{
    A: "El atacante no puede interceptar el tráfico.",
    B: "El atacante puede interceptar el tráfico, pero necesitará combinar el ataque con uno de crackeo para romper el sistema criptográfico.",
    C: "El ataque MitM es imposible si el tráfico está cifrado.",
    D: "El cifrado no afecta en absoluto la capacidad de interceptación del atacante."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal ventaja de un SIEM en cuanto a la información y los eventos de seguridad?"
  options={{
    A: "La descentralización de la información.",
    B: "La centralización de la información y eventos, proporcionando un punto de referencia común y permitiendo automatizar tareas.",
    C: "La limitación del acceso a datos históricos.",
    D: "La generación de notificaciones excesivas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según la fuente, ¿qué porcentaje de las 2000 organizaciones más importantes del mundo habría caído con un ataque DDoS de más de 1.1 Tb/s como el que sufrió Dyn a finales de 2016?"
  options={{
    A: "Menos de la mitad.",
    B: "Más de tres cuartas partes.",
    C: "Menos de un cuarto.",
    D: "La mitad."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué función tiene el parámetro 'MARK' en la tabla MANGLE de IPtables?"
  options={{
    A: "Establecer la prioridad de los paquetes.",
    B: "Modificar la dirección IP de origen.",
    C: "Imprimir distintas marcas en el paquete que podrán ser interpretadas por otras utilidades de red como iproute2.",
    D: "Redirigir los paquetes a un puerto diferente."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques volumétricos en la capa de infraestructura o red se pueden mitigar con el uso de cookies o tokens para la autenticación del otro extremo de la conexión?"
  options={{
    A: "Ataques de inyección SQL.",
    B: "Ataques de SYN reflection.",
    C: "Ataques de fragmentación IP.",
    D: "Ataques de fuerza bruta."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función principal de la tabla RAW en IPtables?"
  options={{
    A: "Filtrar paquetes basándose en el protocolo.",
    B: "Realizar manipulaciones a bajo nivel de los paquetes, principalmente para evitar que sean interpretados por sistemas de seguimiento de conexión.",
    C: "Traducir direcciones de red.",
    D: "Permitir o denegar el tráfico basándose en reglas predefinidas."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques a la Capa Física se basan en la interceptación o modificación de señales electromagnéticas de dispositivos electrónicos?"
  options={{
    A: "Ataques de fuerza bruta.",
    B: "Ataques de denegación de servicio volumétricas.",
    C: "Ataques de pulso electromagnético o TEMPEST.",
    D: "Ataques de inyección de código."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="Según el texto, ¿por qué es importante mantener actualizados los sistemas que se encuentren en la zona desmilitarizada (DMZ)?"
  options={{
    A: "Para aumentar su capacidad de procesamiento.",
    B: "Para reducir su costo operativo.",
    C: "Para minimizar el riesgo de sufrir un incidente de seguridad, ya que la DMZ es más propensa a ataques.",
    D: "Para mejorar la velocidad de conexión a Internet."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el principal inconveniente de las VPNs antes de su surgimiento, para comunicar sedes separadas geográficamente?"
  options={{
    A: "La necesidad de una red dedicada de uso exclusivo con un coste muy elevado.",
    B: "La imposibilidad de cifrar la comunicación.",
    C: "La falta de personal cualificado para su gestión.",
    D: "La incompatibilidad con los protocolos de Internet."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="En la configuración de IPtables, ¿qué comando se utiliza para permitir que el acceso al interfaz localhost sea libre?"
  options={{
    A: "iptables -A INPUT -i eth0 -j ACCEPT.",
    B: "iptables -A INPUT -i lo -j ACCEPT.",
    C: "iptables -A OUTPUT -i lo -j ACCEPT.",
    D: "iptables -A FORWARD -i lo -j ACCEPT."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué sucede si un atacante logra comprometer un sistema Honeypot ubicado detrás del firewall y no hay medidas adicionales de seguridad?"
  options={{
    A: "El atacante quedará atrapado en el Honeypot.",
    B: "Tendrá vía libre en su ataque a toda la red interna.",
    C: "El Honeypot se autodestruirá.",
    D: "El firewall detectará inmediatamente el compromiso y lo bloqueará."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál de los siguientes es un ejemplo de un 'Behavioral Firewall' mencionado en la fuente?"
  options={{
    A: "CheckPoint VPN-1.",
    B: "Cisco ASA Firewall.",
    C: "Soluciones avanzadas de UEBA que combinan analítica de comportamiento con respuesta adaptativa.",
    D: "Microsoft Forefront."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ventajas específicas se obtienen al integrar un firewall de comportamiento con otras fuentes de datos como SIEM o inteligencia de amenazas?"
  options={{
    A: "Ninguna, ya que el firewall de comportamiento es independiente.",
    B: "Se enriquece aún más el análisis de comportamiento, aunque no es un requisito.",
    C: "Solo sirve para empresas con SIEM, no para pequeñas empresas.",
    D: "Aumenta la complejidad del sistema y el tiempo de despliegue."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la función del campo 'ack' (acuse de recibo) en una cabecera TCP en TCPDump cuando el bit de control ACK está activado?"
  options={{
    A: "Indica el número de secuencia del primer byte de datos.",
    B: "Contiene el valor del siguiente número de secuencia que el emisor espera recibir.",
    C: "Define el tamaño de la ventana de recepción.",
    D: "Indica la presencia de datos urgentes."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué tipo de ataques son muy comunes en redes locales con una administración muy laxa, como cafeterías con WiFi?"
  options={{
    A: "Ataques DDoS volumétricos.",
    B: "Ataques de inyección SQL.",
    C: "Ataques de tipo spoofing (MAC o IP).",
    D: "Ataques TEMPEST."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el valor predeterminado del puerto de escucha de Squid para HTTP?"
  options={{
    A: "80.",
    B: "443.",
    C: "8080.",
    D: "3128."
  }}
  correctAnswer="D"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la desventaja de los honeypots de baja interacción en relación con la información que registran?"
  options={{
    A: "Registran únicamente información limitada, ya que están diseñados para capturar actividad predeterminada.",
    B: "Son demasiado complejos de implementar.",
    C: "Requieren hardware real y aplicaciones completas.",
    D: "No pueden emular servicios ni sistemas operativos."
  }}
  correctAnswer="A"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es el rango de direcciones IP privadas de Clase B?"
  options={{
    A: "10.0.0.0 a 10.255.255.255.",
    B: "172.16.0.0 a 172.31.255.255.",
    C: "192.168.0.0 a 192.168.255.255.",
    D: "169.254.0.0 a 169.254.255.255."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué ocurre con el modo promiscuo en TCPDump si se utiliza la palabra clave 'any' para escuchar sobre todas las interfaces de red?"
  options={{
    A: "El modo promiscuo se habilita automáticamente.",
    B: "El modo promiscuo se deshabilita.",
    C: "El modo promiscuo no es afectado.",
    D: "Solo se capturan los paquetes cifrados."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la recomendación general para las organizaciones en un entorno de seguridad real al configurar IPtables en cuanto a la política por defecto?"
  options={{
    A: "Aplicar la política 'ACCEPT' (permitir todo por defecto).",
    B: "Aplicar la política 'DROP' o 'REJECT' (política paranoica, todo lo que no se especifica como permitido está prohibido).",
    C: "No establecer ninguna política por defecto.",
    D: "Permitir solo el tráfico interno."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es una ventaja de los proxy frente a los cortafuegos en cuanto a la configuración de reglas de filtrado?"
  options={{
    A: "Las reglas de filtrado de los proxy son más complejas de configurar.",
    B: "Las reglas de filtrado de los proxy suelen ser más sencillas y en un lenguaje más 'natural' para el control de navegación.",
    C: "Los proxy no permiten filtrar por palabras o dominios.",
    D: "Los cortafuegos no necesitan reglas de filtrado."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Qué significa el parámetro '--dport' en una regla de IPtables?"
  options={{
    A: "Indica el puerto de origen que figura en el paquete.",
    B: "Indica la dirección IP de origen del paquete.",
    C: "Indica el puerto de destino que figura en el paquete.",
    D: "Indica la interfaz de red de salida."
  }}
  correctAnswer="C"
  correctExplanation=""
  incorrectExplanation=""
/>
<InteractiveQuiz
  question="¿Cuál es la principal conclusión sobre los cortafuegos en el módulo, en relación con la protección de máquinas frente al tráfico de red no deseado?"
  options={{
    A: "Son irrelevantes en la seguridad actual.",
    B: "Son una auténtica barrera de protección, haciendo que numerosos ataques sean fácilmente evadibles.",
    C: "Solo sirven para entornos domésticos.",
    D: "Requieren una configuración mínima para ser completamente seguros."
  }}
  correctAnswer="B"
  correctExplanation=""
  incorrectExplanation=""
/>