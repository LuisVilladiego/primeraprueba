# Pinguiñoño

<p align="center">
  <img src="public/images/logo.jpg" alt="Pinguiñoño Logo" width="200" />
</p>

<p align="center">
  <strong>Aprende Linux Fácil</strong>
</p>

<p align="center">
  Aplicación de escritorio para Linux
</p>

## Descripción

Pinguiñoño es una aplicación de escritorio nativa para Linux que te enseña Linux, Cloud y DevOps de forma interactiva. Incluye una **terminal real** conectada a tu sistema.

## Características

- **Aplicación de escritorio nativa** - Construida con Tauri (Rust + React)
- **Terminal REAL** - Ejecuta comandos reales en tu sistema Linux
- **Dashboard interactivo** con progreso, estadísticas y objetivos
- **Roadmap visual** con 16 niveles desde Fundamentos hasta Kubernetes
- **Sistema bilingüe** completo (Español/Inglés)
- **Lecciones multimodales** con texto, diagramas, ejercicios y quizzes
- **Sistema de exámenes** con bloqueo de niveles
- **Laboratorios prácticos** guiados
- **Gamificación** con XP, niveles y rachas de estudio

## Tecnologías

- **Backend**: Tauri 2 (Rust)
- **Frontend**: React 19 + TypeScript + Vite
- **Estilos**: Tailwind CSS v4
- **Estado**: Zustand (con persistencia)
- **Router**: React Router v7

## Requisitos

- Linux (Ubuntu 22.04+, Fedora 38+, o similar)
- Node.js 18+
- Rust 1.70+
- Dependencias del sistema:
  ```bash
  # Ubuntu/Debian
  sudo apt install libwebkit2gtk-4.1-dev librsvg2-dev libgtk-3-dev
  
  # Fedora
  sudo dnf install webkit2gtk4.1-devel librsvg2-devel gtk3-devel
  ```

## Instalación

```bash
# Instalar dependencias de Node
npm install

# Ejecutar en desarrollo
npm run tauri dev

# Construir para producción
npm run tauri build
```

## Estructura del Proyecto

```
├── src/                  # Frontend React
│   ├── components/       # Componentes React
│   ├── pages/           # Páginas de la app
│   ├── content/         # Contenido educativo
│   ├── stores/          # Estado global (Zustand)
│   ├── hooks/           # Custom hooks
│   ├── i18n/            # Traducciones
│   └── types/           # Tipos TypeScript
├── src-tauri/           # Backend Rust
│   ├── src/             # Código Rust
│   └── Cargo.toml       # Dependencias Rust
└── public/              # Archivos estáticos
```

## Niveles Disponibles

| Nivel | Tema | Estado |
|-------|------|--------|
| 0 | Fundamentos de Computación | ✅ Completo |
| 1 | Linux Fundamentals (lecciones 1.1–1.6) | ✅ Primera parte |
| 2-15 | ... | 🔜 Próximamente |

## Documentación

- [Arquitectura](./docs/ARCHITECTURE.md)
- [Roadmap Educativo](./docs/LEARNING_ROADMAP.md)

## Licencia

Proyecto educativo personal.
