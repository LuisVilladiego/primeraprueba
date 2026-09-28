# Linux Academy - Roadmap Educativo

## Filosofía de Aprendizaje

**ENTENDER → MOSTRAR → INTERACTUAR → PRACTICAR → COMPROBAR → APLICAR**

No memorizar comandos. Entender:
- Qué es cada tecnología
- Por qué existe
- Qué problema resuelve
- Cómo funciona internamente
- Cómo solucionar problemas
- Cómo aplicarla en proyectos reales

---

## Estructura de Niveles

### Prerrequisitos Visuales

```
NIVEL 0: Fundamentos
    │
    ▼
NIVEL 1: Linux Fundamentals
    │
    ├──────────────┐
    ▼              ▼
NIVEL 2:       NIVEL 3:
Administración  Networking
    │              │
    └──────┬───────┘
           ▼
       NIVEL 4: SSH
           │
           ▼
       NIVEL 5: Git
           │
    ┌──────┴──────┐
    ▼             ▼
NIVEL 6:      NIVEL 7:
Bash          Docker
    │             │
    └──────┬──────┘
           ▼
       NIVEL 8: Web Servers
           │
           ▼
       NIVEL 9: PostgreSQL
           │
           ▼
       NIVEL 10: Seguridad
           │
           ▼
       NIVEL 11: Cloud
           │
           ▼
       NIVEL 12: CI/CD
           │
    ┌──────┴──────┐
    ▼             ▼
NIVEL 13:     NIVEL 14:
DevOps        Terraform
    │             │
    └──────┬──────┘
           ▼
       NIVEL 15: Kubernetes
```

---

## NIVEL 0 — Fundamentos de Computación

**Objetivo**: Entender cómo funciona un computador y un sistema operativo antes de usar Linux.

**Prerrequisitos**: Ninguno

**Duración estimada**: 4-6 horas

### Módulos

#### 0.1 - ¿Qué es un Computador?
- Hardware vs Software
- CPU, RAM, Almacenamiento
- Dispositivos de entrada/salida
- **Diagrama interactivo**: Componentes del computador

#### 0.2 - ¿Qué es un Sistema Operativo?
- Definición y propósito
- Kernel y espacio de usuario
- Gestión de recursos
- **Animación**: Cómo el SO gestiona recursos

#### 0.3 - Procesos y Memoria
- ¿Qué es un proceso?
- Memoria RAM y virtual
- CPU scheduling básico
- **Simulación**: Visualizar procesos

#### 0.4 - Almacenamiento y Archivos
- Discos duros vs SSD
- Sistemas de archivos
- Archivos y directorios
- **Diagrama**: Estructura de almacenamiento

#### 0.5 - Interfaces de Usuario
- GUI vs CLI
- Ventajas de cada una
- Por qué aprender CLI
- **Demo**: Comparación GUI vs CLI

#### 0.6 - Historia de Linux
- UNIX y sus orígenes
- GNU y Software Libre
- Linus Torvalds y el kernel Linux
- Distribuciones populares
- **Timeline interactivo**

#### 0.7 - Linux vs Windows vs macOS
- Comparación de sistemas
- Cuándo usar cada uno
- Linux en servidores
- **Tabla comparativa interactiva**

### Laboratorios Nivel 0
- LAB 0.1: Identificar componentes del sistema
- LAB 0.2: Explorar el administrador de tareas

### Examen Final Nivel 0
- 20 preguntas
- Tipos: múltiple choice, verdadero/falso, escenarios
- Puntuación mínima: 80%

---

## NIVEL 1 — Linux Fundamentals

**Objetivo**: Dominar la navegación y manipulación de archivos en Linux.

**Prerrequisitos**: Nivel 0 aprobado

**Duración estimada**: 8-10 horas

### Módulos

#### 1.1 - La Terminal
- ¿Qué es la terminal?
- Shell, Bash, prompt
- Anatomía de un comando
- Primeros comandos
- **Terminal interactiva**: Práctica guiada

#### 1.2 - Navegación del Sistema
- pwd, ls, cd
- Rutas absolutas vs relativas
- Atajos de navegación (~, .., -, tab)
- **Ejercicio**: Navegar al tesoro oculto

#### 1.3 - Estructura del Sistema de Archivos
```
/
├── bin/     # Binarios esenciales
├── boot/    # Archivos de arranque
├── dev/     # Dispositivos
├── etc/     # Configuración
├── home/    # Directorios de usuarios
├── lib/     # Librerías
├── media/   # Medios removibles
├── mnt/     # Puntos de montaje
├── opt/     # Software opcional
├── proc/    # Sistema de archivos virtual
├── root/    # Home de root
├── run/     # Datos de runtime
├── sbin/    # Binarios de sistema
├── srv/     # Datos de servicios
├── sys/     # Sistema virtual
├── tmp/     # Archivos temporales
├── usr/     # Programas de usuario
└── var/     # Datos variables
```
- **Diagrama interactivo**: Explorar FHS

#### 1.4 - Manipulación de Archivos
- touch, mkdir, cp, mv, rm
- Crear estructuras de directorios
- Copiar y mover archivos
- Eliminar con precaución
- **Ejercicio**: Organizar un proyecto

#### 1.5 - Visualización de Archivos
- cat, less, more
- head, tail
- file, stat
- **Práctica**: Investigar archivos del sistema

#### 1.6 - Búsqueda de Archivos
- find: búsqueda por nombre, tipo, tamaño, fecha
- locate y updatedb
- which y whereis
- **Lab**: Encontrar archivos perdidos

#### 1.7 - Procesamiento de Texto
- grep: búsqueda en contenido
- wc: contar líneas, palabras, caracteres
- sort, uniq
- cut, tr
- **Ejercicio**: Analizar logs

#### 1.8 - Pipes y Redirecciones
- Pipes (|)
- Redirección de salida (>, >>)
- Redirección de entrada (<)
- stderr (2>)
- **Práctica**: Combinar comandos

#### 1.9 - Expresiones Regulares Básicas
- Patrones básicos
- Metacaracteres
- grep con regex
- **Ejercicio**: Filtrar información

### Comandos del Nivel 1

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| pwd | Directorio actual | `pwd` |
| ls | Listar archivos | `ls -la` |
| cd | Cambiar directorio | `cd /home` |
| mkdir | Crear directorio | `mkdir -p proyecto/src` |
| touch | Crear archivo vacío | `touch index.html` |
| cp | Copiar | `cp -r origen destino` |
| mv | Mover/Renombrar | `mv viejo.txt nuevo.txt` |
| rm | Eliminar | `rm -rf directorio` |
| cat | Ver contenido | `cat archivo.txt` |
| less | Paginador | `less archivo.log` |
| head | Primeras líneas | `head -n 20 archivo.txt` |
| tail | Últimas líneas | `tail -f /var/log/syslog` |
| grep | Buscar texto | `grep "error" log.txt` |
| find | Buscar archivos | `find / -name "*.conf"` |
| sort | Ordenar | `sort -n numeros.txt` |
| uniq | Eliminar duplicados | `sort archivo | uniq` |
| wc | Contar | `wc -l archivo.txt` |

### Laboratorios Nivel 1
- LAB 1.1: Explora tu sistema
- LAB 1.2: Crea una estructura de proyecto
- LAB 1.3: Encuentra archivos
- LAB 1.4: Analiza logs
- LAB 1.5: Pipeline de datos

### Proyecto Nivel 1
**"Organizador de Proyecto"**
Crear una estructura de directorios completa para un proyecto de desarrollo, incluyendo scripts para generar reportes de archivos.

### Examen Final Nivel 1
- 30 preguntas
- Tipos: comandos, escenarios, troubleshooting
- Incluye ejercicios en terminal simulada
- Puntuación mínima: 80%

---

## NIVEL 2 — Administración Linux

**Objetivo**: Administrar usuarios, procesos, servicios y paquetes.

**Prerrequisitos**: Nivel 1 aprobado

**Duración estimada**: 10-12 horas

### Módulos

#### 2.1 - Usuarios y Grupos
- Concepto de usuarios en Linux
- /etc/passwd, /etc/shadow, /etc/group
- useradd, usermod, userdel
- groupadd, groupmod, groupdel
- **Lab**: Gestionar usuarios

#### 2.2 - Permisos y Propiedades
- Modelo de permisos Unix (rwx)
- Usuarios, grupos, otros
- chmod: notación simbólica y octal
- chown, chgrp
- Permisos especiales (SUID, SGID, sticky)
- **Simulación interactiva**: Permisos

#### 2.3 - Sudo y Root
- Usuario root
- sudo y sudoers
- su vs sudo
- Configuración segura
- **Práctica**: Configurar sudo

#### 2.4 - Procesos
- ¿Qué es un proceso?
- ps, top, htop
- Señales (SIGTERM, SIGKILL, etc.)
- kill, killall, pkill
- Background (&) y foreground
- jobs, fg, bg, nohup
- **Animación**: Ciclo de vida de un proceso

#### 2.5 - Systemd y Servicios
- Init systems y systemd
- systemctl: start, stop, restart, status, enable, disable
- Crear servicios personalizados
- Targets y runlevels
- **Lab**: Crear un servicio

#### 2.6 - Journalctl y Logs
- Sistema de logging
- journalctl: filtrar por servicio, tiempo, prioridad
- /var/log/
- Rotación de logs
- **Práctica**: Investigar logs

#### 2.7 - Gestión de Paquetes
- Gestores de paquetes (apt, dnf, pacman)
- Repositorios
- apt update, upgrade, install, remove
- dpkg para .deb
- **Ejercicio**: Instalar software

#### 2.8 - Variables de Entorno
- ¿Qué son las variables de entorno?
- PATH, HOME, USER, SHELL
- export, env, printenv
- .bashrc, .profile
- **Práctica**: Configurar entorno

#### 2.9 - Almacenamiento
- Discos y particiones
- lsblk, fdisk, parted
- Sistemas de archivos (ext4, xfs)
- mkfs, mount, umount
- /etc/fstab
- **Diagrama**: Estructura de almacenamiento

### Laboratorios Nivel 2
- LAB 2.1: Administrar usuarios
- LAB 2.2: Configurar permisos
- LAB 2.3: Investigar procesos
- LAB 2.4: Gestionar servicios
- LAB 2.5: Analizar logs

### Proyecto Nivel 2
**"Servidor Multi-usuario"**
Configurar un sistema con múltiples usuarios, grupos con permisos específicos, y servicios personalizados.

### Examen Final Nivel 2
- 35 preguntas
- Escenarios de administración
- Troubleshooting de servicios
- Puntuación mínima: 80%

---

## NIVEL 3 — Networking

**Objetivo**: Entender redes desde los fundamentos hasta la práctica.

**Prerrequisitos**: Niveles 1 y 2 aprobados

**Duración estimada**: 12-15 horas

### Módulos

#### 3.1 - Fundamentos de Redes
- ¿Qué es una red?
- Modelo OSI y TCP/IP
- LAN, WAN, Internet
- **Animación**: Capas de red

#### 3.2 - Direccionamiento IP
- IPv4: formato, clases, privadas/públicas
- IPv6: introducción
- Máscara de subred
- CIDR notation
- **Calculadora interactiva**: Subnetting

#### 3.3 - MAC y Capa de Enlace
- Direcciones MAC
- ARP
- Switch vs Hub
- **Diagrama**: Comunicación en capa 2

#### 3.4 - TCP y UDP
- Puertos
- TCP: conexión, handshake, fiabilidad
- UDP: sin conexión, velocidad
- Cuándo usar cada uno
- **Animación**: TCP vs UDP

#### 3.5 - DNS
- Resolución de nombres
- Servidores DNS
- Registros: A, AAAA, CNAME, MX, TXT
- /etc/resolv.conf, /etc/hosts
- dig, nslookup
- **Animación**: Proceso de resolución DNS

#### 3.6 - DHCP
- Asignación dinámica de IP
- Proceso DORA
- Configuración estática vs dinámica
- **Diagrama**: Proceso DHCP

#### 3.7 - NAT y Routing
- NAT: traducción de direcciones
- Routing: tablas y rutas
- Gateway
- ip route
- **Simulación**: Routing básico

#### 3.8 - Firewalls
- Concepto de firewall
- iptables básico
- ufw
- Reglas de entrada y salida
- **Práctica**: Configurar firewall

#### 3.9 - Herramientas de Red
- ip: configuración de interfaces
- ping: conectividad
- ss: conexiones
- curl, wget: HTTP
- traceroute: ruta de paquetes
- netstat (legacy)
- **Lab**: Diagnóstico de red

#### 3.10 - HTTP y HTTPS
- Protocolo HTTP
- Métodos: GET, POST, PUT, DELETE
- Headers y status codes
- HTTPS y TLS
- Certificados
- **Práctica**: Analizar tráfico HTTP

### Comandos del Nivel 3

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| ip addr | Ver IPs | `ip addr show` |
| ip route | Ver rutas | `ip route` |
| ping | Probar conectividad | `ping google.com` |
| ss | Conexiones activas | `ss -tulpn` |
| curl | Peticiones HTTP | `curl -I https://example.com` |
| wget | Descargar | `wget https://url/file` |
| dig | Consultas DNS | `dig google.com` |
| traceroute | Trazar ruta | `traceroute google.com` |

### Laboratorios Nivel 3
- LAB 3.1: Configurar IP estática
- LAB 3.2: Diagnosticar conectividad
- LAB 3.3: Investigar DNS
- LAB 3.4: Configurar firewall
- LAB 3.5: Analizar tráfico

### Proyecto Nivel 3
**"Diagnóstico de Red"**
Crear scripts para diagnosticar problemas de red comunes.

### Examen Final Nivel 3
- 35 preguntas
- Escenarios de troubleshooting de red
- Puntuación mínima: 80%

---

## NIVEL 4 — SSH

**Objetivo**: Dominar conexiones seguras y administración remota.

**Prerrequisitos**: Niveles 1, 2 y 3 aprobados

**Duración estimada**: 6-8 horas

### Módulos

#### 4.1 - Introducción a SSH
- ¿Qué es SSH?
- Cifrado y seguridad
- Puerto 22
- **Animación**: Conexión SSH

#### 4.2 - Conexión Básica
- ssh usuario@host
- Opciones comunes
- Archivos de configuración

#### 4.3 - Autenticación con Claves
- Par de claves pública/privada
- ssh-keygen
- authorized_keys
- ssh-agent y ssh-add
- **Lab**: Configurar claves

#### 4.4 - Configuración del Cliente
- ~/.ssh/config
- Host aliases
- Opciones avanzadas
- **Práctica**: Crear configuración

#### 4.5 - Configuración del Servidor
- /etc/ssh/sshd_config
- Deshabilitar password auth
- Cambiar puerto
- Restringir usuarios
- **Lab**: Hardening SSH

#### 4.6 - SCP y SFTP
- Transferir archivos
- scp: sintaxis y opciones
- sftp: modo interactivo
- rsync sobre SSH
- **Práctica**: Transferencias

#### 4.7 - Port Forwarding
- Local forwarding (-L)
- Remote forwarding (-R)
- Dynamic forwarding (-D)
- Tunnels SSH
- **Diagrama**: Tipos de forwarding

#### 4.8 - Seguridad SSH
- Fail2ban
- Autenticación de dos factores
- Auditoría de accesos
- **Lab**: Seguridad SSH

### Proyecto Nivel 4
**"Administración Remota"**
Configurar y administrar un servidor Linux remotamente de forma segura.

### Examen Final Nivel 4
- 25 preguntas
- Escenarios de conexión y seguridad
- Puntuación mínima: 80%

---

## NIVEL 5 — Git y GitHub

**Objetivo**: Dominar control de versiones y flujos de trabajo colaborativos.

**Prerrequisitos**: Niveles 1 y 4 aprobados

**Duración estimada**: 10-12 horas

### Módulos

#### 5.1 - Introducción al Control de Versiones
- ¿Por qué control de versiones?
- Git vs otros sistemas
- Conceptos básicos
- **Animación**: Historia sin Git vs con Git

#### 5.2 - Configuración Inicial
- git config
- Usuario y email
- Editor por defecto
- Aliases útiles

#### 5.3 - Repositorios
- git init
- git clone
- .git/
- **Práctica**: Crear repositorio

#### 5.4 - Flujo de Trabajo Básico
- Working directory, staging, repository
- git status
- git add
- git commit
- git log
- **Animación**: Flujo de Git

#### 5.5 - Branches
- ¿Qué son las ramas?
- git branch
- git checkout / git switch
- git merge
- Fast-forward vs merge commit
- **Diagrama interactivo**: Visualizar branches

#### 5.6 - Merge y Conflictos
- Estrategias de merge
- Resolver conflictos
- git mergetool
- **Lab**: Resolver conflictos

#### 5.7 - Rebase
- ¿Qué es rebase?
- Interactive rebase
- Cuándo usar merge vs rebase
- **Práctica**: Rebase interactivo

#### 5.8 - Remotos y GitHub
- git remote
- git push
- git pull
- git fetch
- GitHub: interfaz web
- **Práctica**: Trabajar con remotos

#### 5.9 - Pull Requests
- Flujo de PR
- Code review
- Comentarios y discusiones
- Merge de PRs
- **Lab**: Crear y revisar PRs

#### 5.10 - Git Avanzado
- git stash
- git cherry-pick
- git bisect
- Tags y releases
- .gitignore
- **Práctica**: Técnicas avanzadas

### Proyecto Nivel 5
**"Proyecto Colaborativo"**
Crear un proyecto, trabajar con branches, generar Pull Requests y resolver conflictos.

### Examen Final Nivel 5
- 30 preguntas
- Escenarios de flujos de trabajo
- Resolución de problemas
- Puntuación mínima: 80%

---

## NIVEL 6 — Bash Scripting

**Objetivo**: Automatizar tareas mediante scripts de shell.

**Prerrequisitos**: Niveles 1 y 2 aprobados

**Duración estimada**: 12-15 horas

### Módulos

#### 6.1 - Introducción a Bash Scripts
- ¿Qué es un script?
- Shebang (#!)
- Permisos de ejecución
- Ejecutar scripts
- **Práctica**: Primer script

#### 6.2 - Variables
- Declaración y asignación
- Variables de entorno
- Variables especiales ($?, $$, $#, $@)
- Comillas simples vs dobles
- **Ejercicio**: Trabajar con variables

#### 6.3 - Entrada de Usuario
- read
- Argumentos del script
- getopts
- **Práctica**: Script interactivo

#### 6.4 - Operadores y Expresiones
- Operadores aritméticos
- Operadores de comparación
- Operadores de cadena
- Operadores de archivo
- **Ejercicio**: Calculadora

#### 6.5 - Condicionales
- if, elif, else
- case
- test y [[ ]]
- **Práctica**: Scripts con decisiones

#### 6.6 - Bucles
- for
- while
- until
- break y continue
- **Ejercicio**: Procesamiento masivo

#### 6.7 - Funciones
- Definición y llamada
- Argumentos y retorno
- Variables locales
- **Práctica**: Scripts modulares

#### 6.8 - Arrays
- Arrays indexados
- Arrays asociativos
- Operaciones con arrays
- **Ejercicio**: Gestionar listas

#### 6.9 - Procesamiento de Texto
- sed
- awk
- Expresiones regulares avanzadas
- **Lab**: Transformar datos

#### 6.10 - Entrada/Salida
- Redirecciones
- Here documents
- Logging
- Colores en terminal
- **Práctica**: Output profesional

#### 6.11 - Cron y Automatización
- crontab
- Sintaxis de cron
- Tareas programadas
- **Lab**: Automatizar tareas

#### 6.12 - Debugging y Buenas Prácticas
- set -e, set -u, set -x
- Manejo de errores
- Validación de entrada
- Documentación
- **Práctica**: Script robusto

### Proyecto Nivel 6
**"Sistema de Backups Automático"**
Crear un sistema completo de backups automatizado con rotación, compresión, logging y notificaciones.

### Examen Final Nivel 6
- 35 preguntas
- Escribir y corregir scripts
- Escenarios de automatización
- Puntuación mínima: 80%

---

## NIVEL 7 — Docker

**Objetivo**: Dominar contenedores y orquestación básica.

**Prerrequisitos**: Niveles 1, 3 y 5 aprobados

**Duración estimada**: 15-18 horas

### Módulos

#### 7.1 - Introducción a Contenedores
- ¿Qué es un contenedor?
- Contenedores vs VMs
- Por qué Docker
- **Animación**: Contenedor vs VM

#### 7.2 - Instalación y Arquitectura
- Instalar Docker
- Docker Engine, CLI, daemon
- Arquitectura de Docker
- **Diagrama**: Componentes de Docker

#### 7.3 - Imágenes
- ¿Qué es una imagen?
- Docker Hub
- docker pull, images, rmi
- Tags y versiones
- **Práctica**: Explorar imágenes

#### 7.4 - Contenedores Básicos
- docker run
- Opciones: -d, -it, --name, --rm
- docker ps, stop, start, rm
- docker exec
- **Lab**: Primeros contenedores

#### 7.5 - Dockerfile
- Sintaxis de Dockerfile
- FROM, RUN, COPY, CMD, ENTRYPOINT
- WORKDIR, ENV, EXPOSE
- Multi-stage builds
- **Práctica**: Crear Dockerfile

#### 7.6 - Construir Imágenes
- docker build
- Contexto de build
- .dockerignore
- Capas y caché
- **Lab**: Optimizar imagen

#### 7.7 - Redes en Docker
- Tipos de redes (bridge, host, none)
- docker network
- Comunicación entre contenedores
- Port mapping
- **Práctica**: Redes personalizadas

#### 7.8 - Volúmenes
- ¿Por qué volúmenes?
- Named volumes vs bind mounts
- docker volume
- Persistencia de datos
- **Lab**: Datos persistentes

#### 7.9 - Docker Compose
- ¿Qué es Docker Compose?
- docker-compose.yml
- services, networks, volumes
- docker compose up, down, logs
- **Práctica**: Aplicación multi-contenedor

#### 7.10 - Registries
- Docker Hub
- Registries privados
- docker push, tag
- **Práctica**: Publicar imagen

#### 7.11 - Debugging y Logs
- docker logs
- docker inspect
- docker stats
- Troubleshooting común
- **Lab**: Diagnosticar problemas

#### 7.12 - Seguridad y Optimización
- Imágenes mínimas
- Usuario no-root
- Secrets y variables
- Escaneo de vulnerabilidades
- **Práctica**: Hardening de contenedor

### Proyecto Nivel 7
**"Aplicación Web Completa"**
Crear una aplicación con:
- Frontend (Node.js/React)
- Backend (Python/Node)
- PostgreSQL
- Redis
- Nginx como reverse proxy

Todo orquestado con Docker Compose.

### Examen Final Nivel 7
- 40 preguntas
- Dockerfile, Compose, troubleshooting
- Escenarios reales
- Puntuación mínima: 80%

---

## NIVEL 8 — Web Servers (Nginx)

**Objetivo**: Configurar y administrar servidores web.

**Prerrequisitos**: Niveles 3, 4 y 7 aprobados

### Contenido Principal
- Nginx como servidor web
- Nginx como reverse proxy
- Virtual hosts
- Configuración de HTTP/HTTPS
- Let's Encrypt y certificados
- Headers de seguridad
- Logs y monitoreo

### Proyecto
Publicar una aplicación completa con:
- Frontend estático
- API backend
- HTTPS con Let's Encrypt
- Compresión y caché

---

## NIVEL 9 — PostgreSQL

**Objetivo**: Dominar bases de datos relacionales.

**Prerrequisitos**: Nivel 7 aprobado

### Contenido Principal
- Fundamentos de SQL
- Tablas, relaciones, índices
- CRUD operations
- Joins y agregaciones
- Usuarios y permisos
- Backups y restore
- Optimización básica

### Proyecto
Diseñar e implementar una base de datos completa para una aplicación.

---

## NIVEL 10 — Seguridad Linux

**Objetivo**: Implementar prácticas de seguridad.

**Prerrequisitos**: Niveles 2, 3, 4 aprobados

### Contenido Principal
- Principio de mínimo privilegio
- Hardening de sistema
- SSH security
- Firewall avanzado
- Fail2ban
- Actualizaciones de seguridad
- Auditoría y logs
- Seguridad de contenedores
- Gestión de secretos

### Proyecto
**"Hardening de Servidor"**
Asegurar un servidor Linux siguiendo mejores prácticas.

---

## NIVEL 11 — Cloud (AWS)

**Objetivo**: Introducción a cloud computing con AWS.

**Prerrequisitos**: Niveles 3, 7, 10 aprobados

### Contenido Principal
- Cloud computing conceptos
- IaaS, PaaS, SaaS
- AWS: EC2, S3, IAM, VPC, RDS
- Regiones y availability zones
- CloudWatch
- Costos y billing

### Proyecto
Desplegar una aplicación en AWS con:
- EC2 instance
- RDS database
- S3 para archivos
- VPC configurada

---

## NIVEL 12 — CI/CD

**Objetivo**: Automatizar integración y deployment.

**Prerrequisitos**: Niveles 5, 7 aprobados

### Contenido Principal
- Conceptos de CI/CD
- GitHub Actions
- Workflows, jobs, steps
- Tests automatizados
- Build y artifacts
- Deployment automatizado
- Secrets y variables
- Environments

### Proyecto
Pipeline completo:
GitHub → Tests → Build → Docker → Deploy

---

## NIVEL 13 — DevOps

**Objetivo**: Integrar todas las disciplinas aprendidas.

**Prerrequisitos**: Niveles 5-12 aprobados

### Contenido Principal
- Cultura DevOps
- Infrastructure as Code
- Monitoring y observabilidad
- Incident response
- Mejora continua

### Proyecto Final
Construir y desplegar una aplicación completa con:
- Control de versiones
- CI/CD pipeline
- Contenedores
- Cloud deployment
- Monitoring
- Documentación

---

## NIVEL 14 — Terraform

**Objetivo**: Infrastructure as Code avanzado.

**Prerrequisitos**: Nivel 11 aprobado

### Contenido Principal
- Terraform conceptos
- Providers y resources
- Variables y outputs
- State management
- Modules
- Workspaces

### Proyecto
Crear infraestructura cloud completa con Terraform.

---

## NIVEL 15 — Kubernetes

**Objetivo**: Orquestación de contenedores a escala.

**Prerrequisitos**: Niveles 7, 11 aprobados

### Contenido Principal
- Kubernetes arquitectura
- Pods, Deployments, Services
- ConfigMaps, Secrets
- Ingress
- Volumes
- kubectl
- Scaling y updates

### Proyecto Final
Desplegar aplicación en Kubernetes con:
- Multiple microservices
- Ingress controller
- Persistent storage
- Horizontal scaling

---

## Sistema de Certificaciones Internas

Al completar grupos de niveles, se otorgan certificados:

| Certificado | Requisitos |
|-------------|------------|
| **Linux Fundamentals** | Niveles 0-1 |
| **Linux Administrator** | Niveles 0-2 |
| **Network Engineer** | Niveles 0-3 |
| **Linux Professional** | Niveles 0-6 |
| **Docker Practitioner** | Niveles 0-7 |
| **Full Stack DevOps** | Niveles 0-12 |
| **Cloud Engineer** | Niveles 0-15 |

---

## Tracks Profesionales

### System Administrator
- Linux Fundamentals
- Linux Administration
- Networking
- SSH
- Bash
- Security

### DevOps Engineer
- Todo lo anterior +
- Git
- Docker
- CI/CD
- Cloud
- Monitoring

### Cloud Engineer
- Todo lo anterior +
- Terraform
- Kubernetes
- Advanced Cloud
