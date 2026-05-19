# Proyecto del curso: Asistente de ingenieria en sistemas con habilidades

Este repositorio sera mi espacio de practica para el curso de Anthropic/Claude, especialmente para entender y construir **habilidades**.

La idea del proyecto es crear, paso a paso, un asistente para apoyar tareas comunes de **ingenieria en sistemas** usando habilidades pequenas y especializadas. Cada habilidad tendra una responsabilidad clara, por ejemplo: explicar conceptos, analizar codigo, crear preguntas, generar planes de estudio o ayudar a organizar proyectos.

## Objetivo

Construir un asistente modular para estudiantes de ingenieria en sistemas que pueda:

- Recibir apuntes, ejercicios, codigo o temas de clase.
- Explicar conceptos tecnicos de forma sencilla.
- Resumir informacion importante de materias como programacion, bases de datos, redes o sistemas operativos.
- Crear tarjetas de estudio y preguntas tipo quiz.
- Revisar codigo y sugerir mejoras.
- Ayudar a documentar proyectos academicos.
- Proponer planes de estudio o rutas de repaso.
- Guardar ejemplos, practicas y avances del curso.

## Por que este proyecto sirve para practicar habilidades

Este proyecto es util porque permite separar el trabajo en habilidades independientes relacionadas con la carrera. Asi puedo practicar como se define una habilidad, cuando se usa, que instrucciones necesita y como se conecta con el resto del asistente.

Ejemplos de habilidades que se pueden crear durante el curso:

- **explicador-tecnico**: explica conceptos de ingenieria en sistemas con ejemplos.
- **revisor-de-codigo**: analiza codigo y sugiere mejoras.
- **generador-de-ejercicios**: crea ejercicios practicos de programacion, bases de datos o redes.
- **quiz-maker**: crea preguntas de opcion multiple o abiertas para estudiar.
- **resumidor-de-clase**: convierte apuntes largos en resumenes claros.
- **documentation**: ayuda a escribir README, documentacion de API y documentacion de codigo.
- **planificador-de-estudio**: arma planes de repaso por materia.
- **organizador-de-notas**: clasifica apuntes por tema.

## Alcance inicial

Para comenzar, el proyecto no necesita una aplicacion grande. La primera version puede ser simple:

1. Crear una carpeta para habilidades.
2. Crear una primera habilidad enfocada en explicar conceptos tecnicos.
3. Agregar apuntes o ejercicios de una materia.
4. Probar la habilidad con temas reales de la carrera.
5. Mejorar las instrucciones segun los resultados.

## Proyecto Órbita (triage DevOps)

Base para **primera línea de incidentes** (AWS, logs, delegación): carpeta `orbita-triage/`, habilidad Claude `orbita-triage-coordinator` y script de ejemplo para CloudWatch. Detalle en [orbita-triage/README.md](orbita-triage/README.md).

## Estructura propuesta

```text
anthropic/
  README.md
  .gitignore
  orbita-triage/
    README.md
    playbook.md
    config/equipo.env.example
    templates/
    scripts/
  .claude/
    skills/
      documentation/
        SKILL.md
        agents/
          openai.yaml
      orbita-triage-coordinator/
        SKILL.md
      explicador-tecnico/
        SKILL.md
        ejemplos.md
      revisor-de-codigo/
        SKILL.md
        ejemplos.md
      quiz/
        SKILL.md
        ejemplos.md
  apuntes/
    programacion.md
    bases-de-datos.md
    redes.md
  pruebas/
    resultados.md
```

## Primeras tareas

- [x] Crear la carpeta `.claude/skills`.
- [x] Crear la primera habilidad: `.claude/skills/documentation`.
- [ ] Crear la siguiente habilidad: `explicador-tecnico`.
- [ ] Agregar apuntes de una materia de ingenieria en sistemas.
- [ ] Probar la habilidad con esos apuntes o ejercicios.
- [ ] Escribir que funciono y que se debe mejorar.

## Ideas para avanzar en el curso

A medida que avance el curso, este repositorio puede crecer con:

- Nuevas habilidades.
- Comparaciones entre versiones de una misma habilidad.
- Prompts mejorados.
- Casos de prueba.
- Ejercicios de programacion.
- Consultas SQL de ejemplo.
- Diagramas o documentacion de proyectos.
- Pequenos scripts para automatizar pruebas.
- Una aplicacion simple por consola o web.

## Estado del proyecto

Proyecto iniciado el 13 de mayo de 2026.

Primera habilidad creada: `documentation`, enfocada en escribir README, documentacion de API y documentacion de codigo.

Base añadida: proyecto **Órbita triage** (`orbita-triage/`) y habilidad `orbita-triage-coordinator` para incidentes con evidencia y delegación.

Siguiente meta: crear una habilidad llamada `explicador-tecnico` que pueda tomar un concepto de ingenieria en sistemas y explicarlo con definicion, ejemplo practico y posibles errores comunes.
