---
title: Sesion - 5
sidebar_position: 6
---

La **informática forense** se basa en un conjunto de prácticas y metodologías para la identificación, adquisición, análisis y presentación de evidencias digitales con validez legal. Diversos estándares y guías internacionales nos ofrecen pautas concretas para llevar a cabo estas tareas de manera fiable y consistente. A continuación, repasamos los principales estándares y sus contenidos clave:

---

## 1. UNE 71506: Metodología para el análisis forense de las evidencias electrónicas

Publicada en **julio de 2013**, la norma UNE 71506 describe una metodología necesaria para la **preservación, adquisición, documentación, análisis y presentación** de evidencias electrónicas.

### 1.1. Estructura

1. **Objeto y campo de aplicación**

   - Se centra en establecer una **metodología** aplicable a cualquier organización, independientemente de su tamaño o sector.

2. **Normas para la consulta**

   - Referencia a otras normas relacionadas, como:
     - UNE 71505 (SGEE)
     - UNE 197001:2011 (informes y dictámenes periciales)
     - CEN/Guide 14 (guías de políticas comunes de cualificación del personal)

3. **Términos y definiciones**

   - Conceptos como **evidencia**, **muestra**, **clonado**, **imagen forense**, **cadena de custodia**, etc.

4. **Proceso metodológico**

   - **Preservación** (punto 6)
   - **Adquisición** (punto 7)
   - **Documentación** (punto 8)
   - **Análisis** (punto 9)
   - **Presentación** (punto 10)

5. **Anexos informativos**
   - **Anexo A**: Modelo de informe pericial.
   - **Anexo B**: Competencias para el análisis forense.
   - **Anexo C**: Equipamiento sugerido.

### 1.2. Modelo de Informe Pericial (Anexo A)

- **Asunto y objetivo**
- **Evidencias/muestras recibidas**
- **Resolución o estudios efectuados**:
  1. Descripción del proceso de clonado o procedimiento de obtención de datos.
  2. Análisis de particiones y sistemas de ficheros.
  3. Proceso de recuperación de archivos borrados.
  4. Análisis del sistema operativo y usuarios.
  5. Seguridad implementada.
  6. Hallazgos de interés sobre las evidencias electrónicas.
- **Situación final de las evidencias/muestras**
- **Conclusiones finales**
- **Anexos del informe**

---

## 2. UNE 71505-2: Sistema de Gestión de Evidencias Electrónicas (SGEE)

También de **julio de 2013**, esta parte se centra en la creación y el mantenimiento de un sistema de gestión de evidencias electrónicas.

### 2.1. Confiabilidad y Beneficios (punto 4)

- **Autenticidad, integridad, disponibilidad y completitud** de las evidencias.
- Cumplimiento legal y correcto manejo dentro de la organización.

### 2.2. Sistema de Gestión de Evidencias Electrónicas (SGEE)

- **Política y enfoque de procesos** (5.2):
  - Asegurar que los procedimientos mantienen la confiabilidad de las evidencias.
- **Planificación e implantación** (5.3 - 5.4):
  - Definir responsabilidades en la clasificación y manejo de evidencias.
- **Compatibilidad con otros sistemas** (punto 6):
  - Debe ser coherente con otros sistemas de gestión (por ejemplo, ISO 27001).

### 2.3. Buenas Prácticas Específicas (Anexo A)

- Relación con **controles ampliados** de UNE-ISO/IEC 27002.
- **Anexo B**: Matriz de funciones (E = Encargado, R = Responsable, C = Consultado, I = Informado).

---

## 3. ISO/IEC 27037:2012

**“Guidelines for identification, collection, acquisition and preservation of digital evidence”**

Esta norma aporta **directrices** para el manejo y conservación de evidencias digitales, destacando la importancia de la fiabilidad y la validez en cada paso.

### 3.1. Puntos Clave

- **DEFR (Digital Evidence First Responder)**: El primer interviniente en la obtención de evidencias digitales.
- **Validación**: Todos los procesos deben ser validados previamente para garantizar su pertinencia en un entorno específico.
- **Requisitos en el manejo de la evidencia**:
  - **Relevancia**, **Fiabilidad**, **Suficiencia**, **Auditabilidad**, **Repetibilidad**, **Reproductibilidad**, **Justificabilidad**.
- **Cadena de custodia**: Mantener la trazabilidad de las evidencias.
- **Roles y competencias**: Importancia de la formación técnica y legal para el personal forense.

---

## 4. ISO/IEC 27042:2015

**“Guidelines for the analysis and interpretation of digital evidence”**

Se centra en los aspectos de **análisis** e **interpretación** de la evidencia digital, incluyendo:

- **Repetibilidad** (3.17): Obtener los mismos resultados en el mismo entorno.
- **Reproducibilidad** (3.18): Obtener los mismos resultados en un **entorno distinto**.
- **Modelos de análisis** (estático, dinámico).
- **Reporte**: Cómo elaborar informes y presentar resultados.
- **Competencia y pericia**: Asegurar que el personal posee la cualificación adecuada.

---

## 5. NIST SP 800-86

**“Guide to Integrating Forensic Techniques into Incident Response”**

Guía práctica para la **integración de técnicas forenses** en la gestión de incidentes de seguridad.

### 5.1. Principales Capítulos

- **Establecer y organizar la capacidad forense**:
  - Necesidad de un equipo con habilidades multidisciplinares (técnicas, legales, etc.).
  - Políticas, roles y responsabilidades, guías de uso de herramientas.
- **Realizar el proceso forense**:
  1. **Recolección de datos**
  2. **Examinación y análisis**
  3. **Reporting** (Informe, conclusiones)
- **Uso de datos en distintos componentes**:
  - Ficheros, sistemas operativos, tráfico de red, aplicaciones, etc.
- **Recomendaciones** finales y buenas prácticas.

---

## 6. RFC 3227

**“Guidelines for Evidence Collection and Archiving”**

Describe buenas prácticas para la **recolección y archivo** de evidencias digitales, incluyendo:

- **Orden de volatilidad**: Priorizar la recogida de datos más volátiles (registros, caché, memoria) antes de pasar a elementos menos volátiles (disco duro, logs remotos, copias de seguridad).
- **Cosas a evitar**: Prevenir la contaminación o destrucción de evidencias.
- **Consideraciones de privacidad y legales**: Garantizar la **admisibilidad**, **autenticidad**, **completitud**, **fiabilidad** y **credibilidad** de la evidencia.
- **Procedimiento de archivo**: Recalcando la cadena de custodia y la documentación transparente.

## Resumen

1. **Metodología forense unificada**
   - Todos los estándares abordan aspectos **similares**: identificación, adquisición, análisis y presentación de evidencias.
2. **Cadena de custodia**
   - Mantener la trazabilidad y la integridad de la evidencia en todo momento.
3. **Repetibilidad y reproducibilidad**
   - Claves para demostrar validez en entornos forenses (ISO/IEC 27042).
4. **Orden de volatilidad**
   - RFC 3227: Priorizar primero la memoria y otros datos fácilmente alterables.
5. **Integración con la respuesta a incidentes**
   - NIST 800-86 insiste en combinar la forensia con la gestión de incidentes de forma fluida.
