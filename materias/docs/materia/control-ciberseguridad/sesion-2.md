---
title: Sesion - 2
sidebar_position: 3
---

## 1. Introducción a la Certificación de Productos de Seguridad

La certificación de productos de seguridad consiste en que una entidad externa, imparcial y reconocida, valide por escrito que determinados productos o soluciones de TI (Tecnologías de la Información) cumplen con una serie de requisitos de calidad y seguridad establecidos.

- **Objetivo principal**: Generar confianza y ofrecer garantías tanto a los usuarios como a las organizaciones que decidan adquirir dichos productos.
- **Definición de certificación**:
  - Declaración imparcial de un tercero de que un producto cumple los requisitos definidos tras un proceso de evaluación formal.
  - Auditoría realizada con respecto a una norma o estándar, efectuada por un organismo independiente.
- **Razones para certificar**:
  1. **Cumplir requisitos legales**: Cada vez hay más regulaciones que exigen o valoran la certificación de productos y servicios.
  2. **Obtener ventaja competitiva**: La certificación aporta un sello de confianza al mercado.
  3. **Aumento de la confianza del cliente**: Facilita la toma de decisiones de compra y reduce la incertidumbre sobre la seguridad y calidad del producto.

> **¿Significa que un producto certificado es 100% ciberseguro?**  
> No necesariamente; una certificación demuestra que cumple los requisitos evaluados bajo ciertos criterios y hasta cierto nivel de profundidad, pero no garantiza la ausencia total de vulnerabilidades.

---

## 2. Common Criteria (CC)

### 2.1. Origen e Importancia

Common Criteria (o Criterios Comunes) es un estándar internacional para la certificación de la seguridad en productos de TI. Surgió en los años 90 a partir de la unificación de criterios de distintos países (EE.UU., Canadá, Reino Unido, etc.) y fue adoptado por la ISO como norma de referencia para la evaluación de la ciberseguridad de software, hardware y firmware.

- **Alcance internacional**: Firmado inicialmente por varios países, hoy son 26 naciones las que reconocen y aplican esta certificación.
- **Beneficio para usuarios y fabricantes**:
  - **Usuarios**: Pueden comprobar el nivel de seguridad que ofrece un producto según un estándar común y objetivo.
  - **Fabricantes**: Deben proveer documentación exhaustiva de sus productos y pasar las evaluaciones en laboratorios independientes, lo que incrementa la confianza del mercado.

### 2.2. Estructura de la Norma

Se divide en tres partes principales:

1. **Parte 1 (Introducción y conceptos generales)**

   - Define los términos básicos (TOE, _Target of Evaluation_) y el modelo de evaluación.

2. **Parte 2 (Requisitos Funcionales de Seguridad - SFRs)**

   - Recoge los atributos de seguridad que declara el fabricante de sus productos.
   - Documento clave: **Declaración de Seguridad** (_Security Target_, ST).

3. **Parte 3 (Criterios de Evaluación y Niveles de Garantía - EAL)**
   - Define cómo se evalúan los _Perfiles de Protección_ (PP) y las declaraciones de seguridad (ST).
   - Establece los **siete niveles de garantía de evaluación** (EAL1 a EAL7).
     - Los niveles superiores implican evaluaciones más exhaustivas y costosas.
     - **EAL1** no es "menos seguro" que EAL7 en sí, sino que ha pasado pruebas menos profundas.

### 2.3. Proceso de Certificación

- El fabricante envía la documentación para que un laboratorio acreditado realice la evaluación.
- Se corrigen no conformidades o hallazgos.
- El laboratorio analiza el producto conforme al nivel EAL que se quiera alcanzar, revisando aspectos como diseño, tests, vulnerabilidades, etc.
- Si el producto cumple, se emite el certificado correspondiente.

### 2.4. Beneficiarios de Common Criteria

1. **Consumidores**:
   - Pueden definir sus necesidades de seguridad y comparar productos con criterios comunes.
2. **Desarrolladores**:
   - Saben qué se exige y cómo se evaluará su producto.
3. **Evaluadores**:
   - Cuentan con un marco formal y objetivos claros.
4. **Administraciones y organismos de certificación**:
   - Se apoyan en un lenguaje y criterios estandarizados a nivel internacional.

---

## 3. Certificación LINCE

Es la **Certificación Nacional Esencial de Seguridad** desarrollada por el Centro Criptológico Nacional (CCN) de España. Apunta a una metodología de evaluación más ligera que Common Criteria, pensada para productos que gestionan información sensible pero con un nivel de amenaza considerado bajo.

### 3.1. Características Principales

- Menor coste y esfuerzo en comparación con Common Criteria.
- Elimina gran parte de la complejidad asociada a las evaluaciones EAL altas.
- Reconocimiento a nivel nacional (a diferencia del carácter internacional de Common Criteria).
- Enfoque **orientado al análisis de vulnerabilidades y tests de penetración**.
- Ideal para **pymes** o productos con menor presupuesto de certificación.
- Permite el **acceso al CPSTIC** (Catálogo de productos y servicios de seguridad del CCN), lo que facilita la integración de los productos en entornos gubernamentales o de alta exigencia dentro del país.

### 3.2. Diferencias con Common Criteria

- **Alcance**: CC es internacional, LINCE es nacional (España).
- **Coste y complejidad**: LINCE es más ágil y económico.
- **Nivel de profundidad**: CC ofrece un abanico de EALs con evaluaciones muy exhaustivas para niveles altos de amenaza.
- **Tipo de enfoque**: LINCE es más práctico para un entorno de amenazas menores.

---

## 4. Estándar PCI DSS (Payment Card Industry Data Security Standard)

### 4.1. Contexto e Historia

PCI DSS es el estándar creado por el **PCI Security Standards Council** (PCI SSC) para definir las medidas de seguridad que deben cumplir las compañías que manejan, procesan o almacenan datos de tarjetas de pago.

- **Origen**: Antes de PCI DSS, cada marca de tarjeta (Visa, Mastercard, etc.) tenía su propio programa de seguridad (CISP, SDP, DISC...), generando duplicidades y confusión para las empresas.
- **Objetivo**: Unificar las políticas y controles de seguridad para la protección de la información del titular de la tarjeta y los datos confidenciales de autenticación.

### 4.2. ¿A quién aplica?

- A toda entidad que **acepte, procese o almacene** datos de titulares de tarjetas de pago.
- A nivel práctico, cualquier empresa que maneje transacciones con tarjetas (e-commerce, bancos, retailers, etc.).

### 4.3. Estructura del Estándar

PCI DSS se organiza en:

- **Seis grupos de requerimientos** (más de 200 controles en total).
- **Doce requerimientos principales** que cubren ámbitos como:
  1. Construcción y mantenimiento de una red segura.
  2. Protección de datos de titulares de tarjetas.
  3. Mantenimiento de un programa de gestión de vulnerabilidades.
  4. Implementación de medidas de control de acceso.
  5. Monitoreo de redes y pruebas regulares.
  6. Políticas de seguridad de la información.

---

## 5. Informes SOC (Service Organization Control)

Existen varios tipos de informes SOC, siendo los más populares:

- **SOC 1**: Centrado en controles relacionados con estados financieros.
- **SOC 2**: Enfocado en controles de seguridad, disponibilidad, confidencialidad, integridad del procesamiento y privacidad de los datos.

Estos informes los emite un auditor independiente (generalmente bajo la normativa de AICPA) y sirven para proveer transparencia y confianza a los clientes y partes interesadas sobre cómo se gestionan y protegen los datos en una organización.

---

## 6. Estándar FIDO (Fast Identity Online)

### 6.1. Contexto y Misión

El método más habitual de autenticación sigue siendo la contraseña. Sin embargo:

- Contraseñas largas y complejas son difíciles de recordar.
- Muchos usuarios reutilizan la misma contraseña.
- Las contraseñas son blanco fácil para ataques de phishing, malware, ataques de fuerza bruta, etc.

FIDO busca **reducir el uso de contraseñas** y mejorar la seguridad de los procesos de autenticación.

### 6.2. ¿Qué es FIDO?

- Conjunto de **estándares de autenticación** impulsados por la _FIDO Alliance_, que agrupa a más de 250 organizaciones (Samsung, Google, Intel, Visa...).
- **Objetivo**: Proporcionar autenticaciones más seguras y sencillas mediante **criptografía de clave pública** y autenticadores biométricos (huellas, rostro, voz, venas, etc.).

### 6.3. Funcionamiento Básico

1. El usuario accede a un servicio web y elige un **autenticador FIDO** (ej. lector de huellas en el móvil).
2. El usuario desbloquea el dispositivo (huella, rostro, PIN...).
3. El sistema genera un par de claves pública/privada único para cada servicio y cuenta.
4. La **clave pública** se envía al servicio, la **clave privada** permanece en el dispositivo del usuario.
5. Cada vez que se accede, el servicio pide validar la identidad con la clave privada (almacenada en el dispositivo).
6. El servicio verifica que la clave recibida coincide con la pública vinculada a la cuenta.

### 6.4. Ventajas de FIDO

- El usuario no comparte contraseñas estáticas.
- Reduce el riesgo de phishing y robo de credenciales.
- Admite múltiples métodos biométricos.
- Experiencia de login más fluida y segura.

---

## 7 Resumen

A continuación, se presenta el 20% de la información que cubre el 80% del valor de todo lo aprendido:

1. **Certificaciones de Seguridad**

   - Son evaluaciones independientes que verifican si un producto cumple requisitos específicos.
   - Aportan **credibilidad** y **confianza** a usuarios y empresas.

2. **Common Criteria**

   - Norma internacional con distintos niveles de garantía (EAL1-EAL7).
   - Profundidad de evaluación creciente para cada nivel, avalada por laboratorios independientes.

3. **Certificación LINCE**

   - Versión **más ligera** de certificación de seguridad, enfocada a entornos de menor riesgo.
   - Reconocimiento nacional (España) y **coste reducido** en comparación con Common Criteria.

4. **PCI DSS**

   - Estándar para proteger **datos de tarjetas de pago**.
   - **Requerido** para cualquier empresa que procese, almacene o transmita datos de tarjetas.
   - Evita la duplicidad de programas de seguridad de las diferentes marcas (Visa, MasterCard, etc.).

5. **Informes SOC**

   - Proporcionan transparencia sobre **controles y procesos** en organizaciones que manejan datos críticos.
   - SOC 1 (financiero), SOC 2 (seguridad y privacidad).

6. **FIDO (Fast Identity Online)**
   - Principal objetivo: **reducir el uso de contraseñas** y aprovechar la **criptografía de clave pública**.
   - Facilita la autenticación biométrica y mejora la seguridad contra ataques de phishing.
