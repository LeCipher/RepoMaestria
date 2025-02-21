---
title: Sesion - 2
sidebar_position: 3
---

## 1. Introducción

En la era de la transformación digital, el **análisis de riesgos en ciberseguridad** se ha convertido en un pilar estratégico para organizaciones de todos los sectores. Este proceso no solo identifica y evalúa amenazas potenciales, sino que también diseña mecanismos para mitigar su impacto en sistemas críticos. Con ataques cada vez más complejos —desde ransomware hasta explotación de vulnerabilidades 0-day—, adoptar metodologías estructuradas es vital para proteger activos digitales y mantener la continuidad operativa.

## 2. Análisis de Riesgos en Ciberseguridad: Fundamentos

### 2.1. Actores de Amenazas

- **Hacktivistas**: Grupos con motivaciones políticas o sociales (e.g., Anonymous).
- **Crimen organizado**: Buscan lucro mediante ransomware o robo de datos financieros.
- **Amenazas internas**: Empleados o excolaboradores con acceso privilegiado.
- **Estados-nación**: Espionaje industrial o sabotaje por servicios de inteligencia.

### 2.2. Vectores de Ataque Más Comunes

| Vector           | Descripción                                         | Ejemplo                  |
| ---------------- | --------------------------------------------------- | ------------------------ |
| **Phishing**     | Engaño para obtener credenciales                    | Correos falsos de bancos |
| **Ransomware**   | Cifrado de datos para exigir rescate                | WannaCry, LockBit        |
| **Ataques DDoS** | Sobrecarga de servidores para interrumpir servicios | Ataque a AWS (2020)      |

### 2.3. Impactos Críticos

- **Económicos**: Costos de recuperación, multas (GDPR puede imponer hasta el 4% de ingresos globales).
- **Reputacionales**: Pérdida de clientes tras filtraciones de datos (ej. Equifax, 2017).
- **Legales**: Demandas por incumplimiento de normativas como ISO 27001 o NIST.

## 3. Marcos de Referencia en Ciberseguridad

### 3.1. MITRE ATT&CK: Tácticas y Técnicas de Adversarios

**Estructura**:

- **Enterprise ATT&CK**: Enfocado en redes corporativas (ej. tácticas como "Acceso Inicial" o "Movimiento Lateral").
- **Mobile ATT&CK**: Amenazas específicas para Android/iOS (e.g., jailbreaking malicioso).
- **ICS ATT&CK**: Protección de sistemas industriales (SCADA, PLC).

**Aplicación Práctica**:

- Mapear técnicas de ataque conocidas (TTPs) para fortalecer detección.
- Utilizar simulaciones (Red Team/Blue Team) basadas en la matriz.

### 3.2. Cyber Kill Chain: Etapas de un Ataque

1. **Reconocimiento**: Scanners como Shodan para identificar objetivos.
2. **Armamento**: Desarrollo de malware personalizado.
3. **Entrega**: Correos electrónicos, USBs infectados.
4. **Explotación**: Ejecución de código en vulnerabilidades (e.g., Log4Shell).
5. **Instalación**: Backdoors para acceso persistente.
6. **Comando y Control (C2)**: Comunicación con servidores C2.
7. **Acción en Objetivo**: Exfiltración de datos o sabotaje.

**Defensa por Etapa**:

- En "Entrega": Filtros antispam y capacitación en phishing.
- En "C2": Bloquear dominios maliciosos mediante DNS filtering.

### 3.3. MAGERIT: Metodología de Gestión de Riesgos

**Ámbitos de Aplicación**:

- **Sector público**: Gobiernos y entidades estatales.
- **Infraestructuras críticas**: Energía, transporte, salud.

**Categorías de Amenazas**:

- **Naturales**: Inundaciones que afectan data centers.
- **Humanas no intencionales**: Errores en configuraciones de firewall.
- **Maliciosas**: Ataques de ransomware a hospitales.

## 4. Estrategias de Mitigación Efectivas

### 4.1 Defensa en Profundidad (DiD)

- **Capa Perimetral**: Firewalls de próxima generación (NGFW) con inspección SSL.
- **Capa de Red**: Segmentación VLAN y microsegmentación.
- **Capa de Usuario**: MFA y políticas RBAC para acceso mínimo privilegiado.

### 4.2 Monitorización Proactiva

| Herramienta | Función                                                    |
| ----------- | ---------------------------------------------------------- |
| **SIEM**    | Correlaciona logs en tiempo real (ej. Splunk, QRadar).     |
| **EDR**     | Detecta anomalías en endpoints (ej. CrowdStrike).          |
| **CTI**     | Proporciona IOCs (Indicadores de Compromiso) actualizados. |

### 4.3 Protección de Datos

- **Cifrado**: AES-256 para datos en reposo, TLS 1.3 en tránsito.
- **Gestión de Secretos**: Vaults para API keys y contraseñas (ej. HashiCorp Vault).

## 5. Impacto de las Brechas de Seguridad: Casos Reales

- **Equifax (2017)**: Filtración de 147 millones de registros. Costo: $1,400 millones.
- **SolarWinds (2020)**: Compromiso de cadenas de suministro. Impacto en 18,000 empresas.

## 6. Glosario Técnico

- **MITRE ATT&CK**: Marco global para mapear comportamientos de atacantes.
- **EDR (Endpoint Detection and Response)**: Solución para detectar amenazas en dispositivos finales.
- **RBAC (Role-Based Access Control)**: Asignación de permisos basada en roles laborales.
