# PerfectMatch – Guía de personalización del template

Este repositorio es un template base Angular 20 + Tailwind.
Utilizado para el proyecto PerfectMatch

## A. Presentación (contexto del proyecto)

PerfectMatch es un proyecto de software cuyo propósito es ofrecer una plataforma de citas en línea innovadora que utiliza mecanismos inteligentes de coincidencia para conectar personas solteras interesadas en establecer relaciones estables. El sistema está diseñado para guiar a los usuarios a través de un proceso estructurado —registro, cuestionarios de personalidad, coincidencias sugeridas, verificación visual y comunicación progresiva— que promueve interacciones seguras y significativas. Además, incorpora un modelo de negocio basado en membresías con períodos de prueba gratuitos, integración de pasarelas de pago y un módulo de publicidad dirigido exclusivamente a usuarios sin suscripción activa. La arquitectura del sistema contempla extensibilidad en sus algoritmos de compatibilidad, gestión de anuncios por sponsors y un panel administrativo para supervisar y optimizar el funcionamiento de la plataforma.

## B. Módulos (referencia para textos e interfaz)

1. Registro y autenticación: Creación y gestión de cuentas con email/contraseña o proveedores externos (Gmail, Meta). Recolecta datos iniciales para personalizar la experiencia.
2. Onboarding y perfilado: Cuestionario de personalidad con preguntas cerradas que evoluciona en el tiempo. El perfil puede actualizarse opcionalmente.
3. Motor de matching: Cinco mecanismos (coincidencia de respuestas, afinidad ponderada, intereses comunes, proximidad geográfica y modelos predictivos). Arquitectura modular administrable.
4. Panel de Match: Vista con avatares y resúmenes de compatibilidad; permite enviar/aceptar/rechazar solicitudes.
5. Verificación visual: Intercambio y aprobación mutua de una fotografía; si hay rechazo, “Match no compatible” y se ofrecen nuevas sugerencias.
6. Escalamiento de comunicación: Flujo progresivo (pregunta y respuesta única, luego chat libre si ambos evalúan positivamente).

## C. Tipos de usuarios

- Usuario final: se registra, completa cuestionarios, recibe sugerencias, gestiona contactos y membresía.
- Sponsor: crea/actualiza avisos publicitarios; ve estado de publicación y bloqueos.
- Administrador: gestiona mecanismos de match (activar/desactivar/cargar nuevos), monitorea accesos y reportes, modera contenidos y bloqueos de publicidad.

## Cómo personalizar este template

- Branding: títulos, logos y textos deben referirse a “PerfectMatch”.
- Copys en español: actualiza labels, placeholders y títulos a español (ej.: Iniciar sesión, Registro, Panel de Match).
- Navegación: agrega items del menú para cada módulo como vistas “placeholder” si lo deseas. Mantén las rutas simples.
- Estados de ejemplo: muestra casos como “Match no compatible” con un alert/label informativo.

Este repo ya incluye algunos cambios mínimos de branding y textos en español.

## Requisitos

- Node.js 20+
- Angular CLI
- npm

## Angular Cli

En caso de no poseer angular cli, ejecutar el siguiente comando:

```bash
npm install -g @angular/cli
```

## Instalar

```bash
npm install
```

## Ejecutar

```bash
ng serve
# http://localhost:4200
```

## Estructura relevante

- src/app/app.routes.ts: rutas de la app
- src/app/dashboard: páginas del dashboard
- src/app/auth: páginas de autenticación
- src/app/examples: paginas de ejemplo
- src/app/error: paginas de error(not found)
- src/user: paginas del usuario
- public/: assets públicos
