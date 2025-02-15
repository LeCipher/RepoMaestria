---
title: Sesion - 4
sidebar_position: 5
---
# Resumen de la Gestión de un Programa de Seguridad de la Información

Este documento aborda la **gestión de la seguridad de la información** a través de un programa integral que cubre desde la **clasificación de los activos** hasta la **destrucción segura de la documentación**. A lo largo del texto, se destacan la importancia de los **roles y responsabilidades**, las **normas de clasificación** y las **medidas técnicas** requeridas para proteger la información en toda su fase de vida.

---

## 1. Importancia de la Clasificación de la Información
- **Pilar de la seguridad**: La clasificación de la información es esencial para definir qué controles de seguridad se aplican a cada tipo de dato.
- **Relación con ISO 27001**: Como parte de los primeros pasos para implantar un sistema de gestión de la seguridad, se subraya la necesidad de crear un comité de seguridad y una política general respaldada por la alta dirección.
- **Niveles de clasificación**:
  - **Pública**: Datos abiertos o sin restricciones.
  - **Privada**: Información de uso interno que requiere cierto nivel de protección.
  - **Confidencial**: Datos con riesgo significativo en caso de divulgación.
  - **Secreta**: Información crítica cuyo acceso debe restringirse de forma muy estricta.

---

## 2. Roles y Responsabilidades
- **Propietario de la Información Empresarial (PIE)**: Normalmente directores o gerentes que velan por la clasificación adecuada y se aseguran de que los controles se apliquen.
- **Propietario de la Información**: Designa la clasificación de los activos y coordina con el custodio para implementar los controles necesarios.
- **Custodio de la Información**: Usualmente personal de TI que ejecuta los procedimientos técnicos y administrativos para asegurar la confidencialidad, integridad y disponibilidad.

---

## 3. Normas Específicas de Clasificación

### 3.1 Control y Gestión de Activos
- Se definen **mecanismos de control** según el nivel de clasificación, equilibrando facilidad de uso, costes y protección requerida.
- El objetivo es **prevenir la pérdida de control** sobre la información mediante:
  1. Asignación de un nivel de clasificación adecuado.
  2. Implementación de controles de seguridad coherentes.

### 3.2 Etiquetado
- Todo **documento nuevo** debe clasificarse e **incluir una etiqueta visible**, ya sea en versiones digitales (propiedades del archivo, metadatos) o en papel.
- El uso de **herramientas automatizadas** (por ejemplo, complementos de Microsoft Office) agiliza la inserción de etiquetas y metadatos de seguridad.

### 3.3 Almacenamiento
- Las **máquinas o servidores** que contengan información de nivel alto (Confidencial o Secreta) deben adherirse a configuraciones de seguridad estrictas.
- Se exige cifrado y accesos monitorizados, especialmente en soportes extraíbles o almacenamiento externo.

### 3.4 Transmisión y Cifrado
- Se establece la **encriptación obligatoria** en la transmisión de información sensible.
- Debe emplearse cifrado sólido (SSH, TLS/SSL o IPSec) para evitar fugas de datos.
- Si la contraparte no dispone de la tecnología adecuada, se recomienda coordinar un método alternativo que garantice la protección (envío de claves por canales seguros, entre otros).

### 3.5 Clasificación de Sistemas
- Un **sistema** (PC, servidor, dispositivo móvil, etc.) asume el **nivel de clasificación más alto** de la información que gestiona.
- Sistemas con datos Confidenciales o Secretos exigen:
  - **Controles de acceso reforzados**.
  - **Monitorización de actividad**.
  - **Autenticación fuerte** (PKI o cifrado de contraseñas).
  - **Políticas de parcheado y mantenimiento** por personal autorizado.

### 3.6 Controles Físicos en Instalaciones y Áreas de Trabajo
- Las **áreas de trabajo** se clasifican según el tipo de información que se maneje habitualmente (Pública, Privada, Confidencial o Secreta).
- Es clave **restringir el acceso** mediante identificaciones o cerraduras en áreas que manejan información sensible.
- **Salas de reunión**: Se aplican controles temporales (vigilancia en la entrada, registro de asistentes, retirada total de documentos al finalizar).

### 3.7 Reclasificación
- El **propietario** puede reclasificar la información cuando cambia su valor o ya no necesita tanta protección.
- Es común que la información baje de nivel (Secreta a Confidencial o Privada) con el tiempo o tras su divulgación oficial.

### 3.8 Extensiones de Clasificación
- Pueden añadirse etiquetas más específicas (p. ej., “Privada-SSOonly”) para controlar mejor el acceso a la información.
- Estas **extensiones** nunca deben relajar la protección mínima establecida por la categoría principal.

---

## 4. Destrucción de la Información
- La **destrucción segura** es imprescindible para evitar filtraciones y cumplir con normativas de protección de datos.
- La normativa española y europea exige eliminar no solo soportes en papel, sino también archivos digitales, discos, cintas, medios ópticos y cualquier otro dispositivo que contenga información sensible.
- Es fundamental establecer **protocolos** que garanticen que la confidencialidad no se pierda cuando el documento finaliza su ciclo de vida útil.

---

## Conclusiones Principales
1. **Clasificación como eje central**: Toda la gestión del programa de seguridad gira en torno a la correcta clasificación de la información, pues determina las medidas de protección.
2. **Compromiso de la alta dirección**: El respaldo desde la cúpula directiva impulsa la implantación efectiva de políticas y estándares.
3. **Roles claramente definidos**: Propietarios y custodios deben coordinarse para aplicar controles, vigilar el cumplimiento y promover la formación del personal.
4. **Medidas técnicas y organizativas**: La combinación de cifrado, controles de acceso y procedimientos formales (etiquetado y políticas de destrucción) garantiza la protección de la información.
5. **Destrucción segura**: Evita vulneraciones de confidencialidad al finalizar la vida útil de los activos, cumpliendo además con la normativa vigente.

En síntesis, la gestión de un programa de seguridad de la información exige una visión global que abarque desde la **clasificación inicial de los activos** hasta su **eliminación final**, pasando por controles físicos, lógicos y administrativos que minimicen los riesgos y protejan la continuidad del negocio.
