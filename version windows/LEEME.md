# Pinguiñoño para Windows

Esta carpeta contiene el instalador de la misma aplicación que en Linux: lecciones, quizzes, exámenes, tema claro/oscuro y la terminal.

## Instalar

1. Abre `Pinguiñoño-setup.exe` en Windows 10 u 11 de 64 bits.
2. Si Windows SmartScreen dice que protegió tu equipo, elige **Más información** y luego **Ejecutar de todas formas**. El instalador no lleva firma de pago.
3. Si falta el runtime WebView2, el instalador lo descarga. Hace falta conexión la primera vez.
4. La aplicación queda en el menú Inicio con el nombre Pinguiñoño. No hace falta administrador.

## Terminal igual que en Linux

La pantalla y las lecciones funcionan al abrir la aplicación. La terminal ejecuta Bash de verdad mediante WSL, así que `ls`, `cd`, `grep`, `find` y el resto se comportan como en Linux.

Si WSL todavía no está instalado, ábrelo una vez en PowerShell:

```powershell
wsl --install
```

Reinicia Windows y vuelve a abrir Pinguiñoño. La primera vez Ubuntu pide un usuario y una contraseña de Linux. Esa cuenta es la que verás en la terminal.

## Volver a construir el instalador

Desde la raíz del proyecto, en un equipo con Rust, Node y el target de Windows:

```bash
bash "version windows/construir.sh"
```

El script deja el instalador de nuevo en esta carpeta.
