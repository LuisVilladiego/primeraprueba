# Linux Academy

Tu academia personal de Linux, Cloud y DevOps.

## Descripción

Linux Academy es una plataforma educativa completa para aprender Linux y tecnologías relacionadas, desde los fundamentos hasta nivel profesional. Diseñada con metodología de academia técnica que prioriza el entendimiento sobre la memorización.

## Características

- **Dashboard interactivo** con progreso general, estadísticas y próximos objetivos
- **Roadmap visual** con 16 niveles desde Fundamentos hasta Kubernetes
- **Sistema bilingüe** completo (Español/Inglés)
- **Lecciones multimodales** con texto, diagramas, ejercicios y quizzes
- **Sistema de exámenes** con bloqueo de niveles
- **Persistencia de progreso** local
- **Gamificación** con XP, niveles y rachas de estudio

## Tecnologías

- **Frontend**: Next.js 16 + TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand (con persistencia)
- **Base de datos**: Prisma + SQLite
- **UI**: Componentes personalizados con diseño moderno

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar base de datos
npx prisma db push

# Ejecutar en desarrollo
npm run dev
```

## Estructura del Proyecto

```
src/
├── app/                  # Páginas Next.js (App Router)
├── components/           # Componentes React
│   ├── ui/              # Componentes base
│   ├── layout/          # Layout y navegación
│   ├── dashboard/       # Dashboard
│   ├── learning/        # Lecciones
│   ├── exam/            # Exámenes
│   └── roadmap/         # Roadmap visual
├── content/             # Contenido educativo
│   └── modules/         # Módulos por nivel
├── hooks/               # Custom hooks
├── i18n/                # Internacionalización
├── lib/                 # Utilidades
├── stores/              # Estado global (Zustand)
└── types/               # Tipos TypeScript
```

## Niveles Disponibles

| Nivel | Tema | Estado |
|-------|------|--------|
| 0 | Fundamentos de Computación | ✅ Completo |
| 1 | Linux Fundamentals | 🔜 Próximamente |
| 2 | Administración Linux | 🔜 Próximamente |
| 3 | Networking | 🔜 Próximamente |
| 4 | SSH | 🔜 Próximamente |
| 5 | Git & GitHub | 🔜 Próximamente |
| 6 | Bash Scripting | 🔜 Próximamente |
| 7 | Docker | 🔜 Próximamente |
| 8 | Web Servers (Nginx) | 🔜 Próximamente |
| 9 | PostgreSQL | 🔜 Próximamente |
| 10 | Seguridad Linux | 🔜 Próximamente |
| 11 | Cloud (AWS) | 🔜 Próximamente |
| 12 | CI/CD | 🔜 Próximamente |
| 13 | DevOps | 🔜 Próximamente |
| 14 | Terraform | 🔜 Próximamente |
| 15 | Kubernetes | 🔜 Próximamente |

## Documentación

- [Arquitectura](./docs/ARCHITECTURE.md)
- [Roadmap Educativo](./docs/LEARNING_ROADMAP.md)
- [Checklist de Implementación](./docs/IMPLEMENTATION_CHECKLIST.md)

## Licencia

Proyecto educativo personal.
