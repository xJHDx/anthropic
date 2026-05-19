# Órbita — Triage e incidentes (base del proyecto)

Carpeta de trabajo para la **primera línea de respuesta**: diagnóstico con evidencia, clasificación, asignación y comunicación. No sustituye a CloudWatch, Jira ni PagerDuty; centraliza **playbook**, **plantillas** y **scripts opcionales** (AWS CLI).

## Contenido

| Ruta | Uso |
|------|-----|
| `playbook.md` | Flujo operativo y criterios de escalado |
| `templates/ticket-incidente.md` | Estructura del ticket para ingeniería |
| `templates/notificacion-equipo.md` | Mensaje corto post-asignación |
| `config/equipo.env.example` | Nombres de log groups, calendario on-call (copiar a `.env` fuera de git) |
| `scripts/Consultar-CloudWatchLogs.ps1` | Ejemplo de filtrado de eventos (PowerShell + AWS CLI v2) |

## Primeros pasos

1. Copiar `config/equipo.env.example` a un archivo local (por ejemplo `.env` en la raíz del repo, ya ignorado por git) y completar valores reales.
2. Instalar [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) y configurar perfil/credenciales (`aws configure`).
3. Invocar la habilidad de Claude `orbita-triage-coordinator` cuando llegue una alerta, adjuntando hora (UTC), servicio y región.

## Integración con el curso

Este track convive con las demás habilidades bajo `.claude/skills/`. La habilidad `orbita-triage-coordinator` enlaza aquí para mantener instrucciones y artefactos alineados.
