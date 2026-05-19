# Playbook — incidentes Órbita

## 1. Investigación (evidencia obligatoria)

Recopilar **antes** de clasificar:

- Identificador del recurso: ARN de tarea ECS, nombre de servicio/cluster, nombre de función Lambda, URL de integración, endpoint de base de datos (solo hostname si aplica política de datos).
- **Ventana temporal en UTC** (inicio y fin o “últimos N minutos”).
- Región AWS.
- Salida verificable: eventos de log, traza X-Ray, respuesta HTTP con cuerpo/código, mensaje de Step Functions, etc.

Herramientas habituales:

- CloudWatch Logs Insights o `filter-log-events` (ver script en `scripts/`).
- Métricas: errores 5xx, `Duration`, `Throttles`, `ConcurrentExecutions` (Lambda); CPU/memoria/despliegues (ECS).

Si **no** hay líneas de log ni métrica útil: estado **“sin telemetría accesible”** → escalar con esa conclusión; no inventar texto de error.

## 2. Análisis técnico (etiquetas útiles)

Asignar una o más categorías según la evidencia:

| Categoría | Indicios típicos |
|-----------|------------------|
| Red / seguridad de grupo | timeouts hacia RDS/Redis, “connection refused”, SG/NACL |
| TLS / certificado | handshake fallido, cert expired, cipher mismatch |
| Credenciales / IAM | `AccessDenied`, `ExpiredToken`, rol de tarea incorrecto |
| Base de datos | `timeout`, pool agotado, `too many connections` |
| Cuotas / límites | throttling, `Rate exceeded` |
| Aplicación | stack trace, `5xx` con excepción en log |
| Infra despliegue | task stopped, health check failed, rollout stuck |

Documentar **texto exacto** del error y códigos (incl. hex tipo `0x2746` si aparece).

## 3. On-call y escalado

- Consultar archivo local derivado de `config/equipo.env.example` (contacto primario/secundario).
- Si el primario no responde en el SLA interno, repetir notificación al secundario (definir tiempos en el `.env` o wiki del equipo).

## 4. Ticket

Rellenar `templates/ticket-incidente.md` sin omitir: síntoma, evidencia literal, impacto, pasos ya hechos, propietario sugerido.

## 5. Comunicación

Enviar resumen con `templates/notificacion-equipo.md` al canal acordado (Slack/Teams/etc.).

## Política de acciones

**Prohibido** en triage estándar: reinicios, `force-new-deployment`, borrado de recursos, cambios de DNS. Solo si el usuario o el runbook de emergencia lo autoriza por escrito.
