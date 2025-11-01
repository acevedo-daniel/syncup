# syncup

## Estructura de carpetas (monorepo)

Este repositorio está organizado como un monorepo usando npm Workspaces. La raíz contiene la configuración y scripts que orquestan los paquetes y aplicaciones.

Estructura general:

```
apps/       # Aplicaciones ejecutables (por ejemplo, frontend web)
packages/   # Paquetes reutilizables (librerías, SDKs, UI kits, utilidades)
infra/      # Infraestructura y automatización (IaC, CI/CD, scripts de devops)
```

- La raíz define los workspaces: `apps/*` y `packages/*`.
- Cada workspace gestiona sus dependencias locales y puede ser referenciado por otros mediante `workspace:` o importaciones relativas, según corresponda.

## Workspaces y scripts

Este monorepo usa npm como gestor y define scripts en la raíz para facilitar tareas comunes sobre el workspace `apps/web`.

Workspaces declarados en `package.json` (raíz):

```json
{
  "workspaces": ["apps/*", "packages/*"]
}
```

Scripts disponibles (desde la raíz):

- `dev:web`: inicia el servidor de desarrollo de `apps/web`.
- `build:web`: genera el build de producción de `apps/web`.
- `preview:web`: sirve en modo preview el build de `apps/web` (cuando la herramienta lo soporta).

Cómo ejecutarlos en PowerShell (Windows):

```powershell
# Desarrollo local (hot reload)
npm run dev:web

# Build de producción
npm run build:web

# Preview del build (útil para validar producción localmente)
npm run preview:web
```

Notas:

- Los scripts de la raíz delegan en el workspace `apps/web` equivalente a ejecutar: `npm --workspace apps/web run <script>`.
- Asegúrate de tener Node.js y npm instalados. Si es la primera vez, instala dependencias en la raíz:

```powershell
npm install
```
