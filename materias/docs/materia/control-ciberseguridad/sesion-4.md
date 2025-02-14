---
title: Sesion - 4
sidebar_position: 5
---

## Auditoría Pericial Forense en la Ciberseguridad

1. **Adquirir**
   - Obtener la evidencia sin alterar ni dañar el original.
2. **Autenticar**
   - Verificar que la copia sea exacta (clon o imagen forense) del original.
3. **Analizar**
   - Examinar los datos y la información sin modificar la imagen o contenido original.

---

## 2. Fases de la Auditoría Forense

La auditoría forense generalmente se desarrolla en **cuatro etapas**: respuesta inicial, adquisición y recuperación, análisis y documentación (con posibles pasos posteriores de defensa en juicio).

### 2.1. Respuesta Inicial

- **Detección del incidente**: Verificar si realmente ha ocurrido un incidente que amerite una investigación.
- **Políticas de la organización**: Guiarse por las directrices internas para la investigación de incidentes de seguridad.
- **Considerar órdenes judiciales**: Ver si se requiere autorización legal antes de proceder.
- **Asegurar la escena**:
  - Restringir el acceso a los equipos y al entorno afectado.
  - Documentar la situación y cualquier actividad ejecutada.
  - Retirar personas ajenas a la investigación y evitar la sustracción de evidencias.
- **Estado del equipo**:
  - Si está apagado, **no** encenderlo sin evaluar riesgos.
  - Si está corriendo un proceso destructivo, desconectarlo inmediatamente.
- **Sincronización temporal**: Anotar fecha y hora del sistema, compararla con una fuente fiable.
- **Documentación minuciosa**: Fotos, vídeos, etiquetas de embalaje de pruebas, registro de la cadena de custodia.
- **Recolección de información adicional**:
  - Registros de sistemas y redes.
  - Posibles sospechosos o testigos.
  - Credenciales, contraseñas, nombre del equipo, direcciones de correo electrónico, etc.

### 2.2. Adquisición

Proceso de **obtención** y **preservación** de evidencias digitales:

- **Equipo encendido**:
  - Extraer la **memoria volátil** (RAM) y obtener su imagen.
  - Crear un **inventario de procesos activos**, conexiones de red, aplicaciones instaladas y estado del sistema.
  - Generar **imágenes forenses** (bit a bit) de los discos duros u otros medios de almacenamiento, conservando su integridad por medio de hashes MD5/SHA1.
- **Equipos en la nube o IoT**:
  - Presentan retos adicionales (acceso a logs, sistemas distribuidos, jurisdicciones distintas).
- **Equipo apagado**:
  - Clonar directamente sin arrancar el sistema, utilizando herramientas especializadas.

### 2.3. Análisis

El propósito es **encontrar relaciones** entre posibles violaciones de seguridad (delitos o incidentes) y los responsables:

#### 2.3.1. Análisis de Sistemas de Ficheros

- **Análisis lógico**:
  - Navegar la estructura de ficheros tal y como la vería el sistema operativo (gestores, visualizadores, etc.).
- **Análisis físico**:
  - Observar la imagen desde la perspectiva de los datos binarios crudos, utilizando editores hexadecimales y otras herramientas de bajo nivel.

#### 2.3.2. Análisis de Línea Temporal

- Crear un **timeline** para reconstruir eventos.
- Considerar las marcas de tiempo en sistemas de ficheros (Unix, Windows, etc.):
  - **Modificado (M)**, **Accedido (A)**, **Cambiado (C)**.
- Tener en cuenta posibles discrepancias de hora y la manipulación de marcas de tiempo.

#### 2.3.3. Análisis de Ficheros

- Explorar archivos y **ficheros borrados** o residuales (espacios no asignados, particiones swap, memoria, etc.).
- Verificar **firmas de archivos** y **resúmenes hash** para comprobar su integridad, detectar cambios o intentos de ocultamiento.

#### 2.3.4. Dónde Buscar

- **Correo electrónico**
- **Historial y caché de navegación**
- **Cookies**
- **Archivos temporales**
- **Ficheros swap**
- **Memoria RAM**
- **Tráfico de red** (capturas, logs de firewall y proxy)

### 2.4. Documentación y Defensa

#### 2.4.1. Documentación (UNE 71506)

- **Planificación**: Diseñar un procedimiento metodológico completo.
- **Sistema de gestión documental**:
  - Documento de recepción de evidencias.
  - Registro de documentación recibida.
  - Registro de reseña de evidencias.
  - Registro de tratamiento inicial (volcados, imágenes).
  - Registro de tareas de análisis, etc.

#### 2.4.2. Presentación (UNE 71506)

- **Informe Pericial**:
  - Lenguaje claro y adaptado al destinatario (jueces, abogados, etc.).
  - Seguir la norma UNE 197001 “Criterios generales para la elaboración de informes periciales”.
  - Al finalizar, devolver el material estudiado con su correspondiente registro.

#### 2.4.3. Intervención en Procedimientos Judiciales

- **Exposición del dictamen**: El perito debe estar preparado para responder a preguntas y objeciones de las partes.
- **Objeciones y tachas**: Posibles críticas del perito contrario o de la parte contraria.
- **Claridad en la explicación**: Fundamental para que el tribunal entienda los hallazgos y conclusiones.

### 2.5. Seguimiento

- La norma UNE 71506 no menciona explícitamente un proceso de **seguimiento**.
- El **NIST 800-86** recomienda revisar los procesos y resultados forenses, identificando deficiencias o carencias para mejorar la capacidad de respuesta a incidentes futuros.

---

## 3. Técnicas de Estudio Recomendadas

1. **Mapas Mentales**: Para visualizar las fases de la auditoría forense (respuesta inicial, adquisición, análisis, documentación/defensa) y las principales tareas.
2. **Tarjetas de Memoria (Flashcards)**: Para recordar las siglas (M, A, C en Unix) y los pasos clave de la adquisición forense.
3. **Estudio de Casos Prácticos**: Simulaciones de incidentes y cómo se aplican los procedimientos forenses en entornos reales.
4. **Resumen 80/20**: Destacar los puntos que más valor aportan (principios 3A, cadena de custodia, informes periciales, etc.).

---

## 4. Resumen 80-20

Este apartado se centra en el **20% de la información** que aporta el **80% del valor** sobre auditoría forense:

1. **Las 3 As de la Evidencia Digital**
   - Adquirir sin alterar, autenticar la copia y analizar la evidencia preservando la integridad.
2. **Secuencia Clave**:
   - **Respuesta inicial**: Identificación y aseguramiento de la escena.
   - **Adquisición**: Extracción de evidencias (memoria volátil, discos, etc.) con métodos forenses.
   - **Análisis**: Examen lógico, físico y temporal de los datos.
   - **Documentación y defensa**: Registro meticuloso de la cadena de custodia y preparación de un informe claro.
3. **Integridad de las Pruebas**
   - Uso de **hashes** (MD5, SHA1…) para garantizar la autenticidad de la evidencia.
4. **Informe Pericial**
   - Debe ser coherente, estructurado y comprensible para la autoridad competente (judicial, administrativa).
5. **Actualización Continua**
   - Revisar procedimientos (NIST 800-86) y mantenerse al día frente a nuevas tecnologías (cloud, IoT) y nuevas amenazas.

Estos puntos constituyen la base crítica para cualquier profesional o estudiante de ciberseguridad que desee una comprensión sólida del proceso de auditoría pericial forense.
