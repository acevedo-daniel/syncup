# SyncUp

Sistema Mensajería en tiempo real

## 1. Descripción general

Monorepo gestionado con npm Workspaces que aloja una aplicación web en `apps/web`. Alcance funcional y requisitos de negocio: [pendiente].

## 2. Arquitectura

- Orquestación en raíz mediante npm Workspaces (`apps/*`, `packages/*`) y módulos ES (`type: "module"`).
- Aplicación `apps/web` como SPA basada en React, servida y construida con Vite (desarrollo, build y preview).
- Scripts de la raíz que delegan en el workspace `apps/web`:
  - `dev:web` → desarrollo
  - `build:web` → construcción
  - `preview:web` → previsualización
- Paquetes compartidos en `packages/` y recursos de infraestructura en `infra/`: [pendiente].
- Estructura de código en `apps/web/src`: `app/`, `modules/` (features: `auth/`, `chats/`, `conversation/`, `groups/`), `shared/`, `styles/`, `types/`.

## 3. Tecnologías

- npm Workspaces
- React `^19.1.1`
- React DOM `^19.1.1`
- Vite `^7.1.7`
- TypeScript `~5.9.3`
- ESLint `^9.36.0`
- @vitejs/plugin-react `^5.0.4`
- @types/node `^24.6.0`
- @types/react `^19.1.16`
- @types/react-dom `^19.1.9`
- eslint-plugin-react-hooks `^5.2.0`
- eslint-plugin-react-refresh `^0.4.22`
- @eslint/js `^9.36.0`
- globals `^16.4.0`

## 6. Estructura de carpetas

```
syncup/
├─ apps/
│  └─ web/
│     └─ src/
│        ├─ app/
│        ├─ modules/
│        │  ├─ auth/
│        │  ├─ chats/        # components/, pages/, data/, types.ts, index.ts
│        │  ├─ conversation/
│        │  └─ groups/
│        ├─ shared/
│        ├─ styles/
│        └─ types/
├─ packages/        # Paquetes compartidos [pendiente]
└─ infra/           # Infraestructura/automatización [pendiente]


```
