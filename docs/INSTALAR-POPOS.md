# Instalar Pinguiñoño en Pop!_OS

## Si ves: «Se ha suministrado el fichero no admitido»

Ese mensaje de `apt` / Eddy casi siempre significa que **el archivo no es un `.deb` real**.

En un **repositorio privado de GitHub**, si copias el enlace de descarga y lo abres sin sesión (o con `wget` sin token), obtienes un archivo de texto **«Not Found»** (9 bytes). Eddy y `apt` lo rechazan.

### Comprueba tu archivo

```bash
file ~/Descargas/pinguinono_1.0.1_amd64.deb
ls -lh ~/Descargas/pinguinono_1.0.1_amd64.deb
```

Debe decir **`Debian binary package`** y pesar unos **2,5 MB**.  
Si dice `ASCII text` o pesa unos bytes, **borra ese archivo** y vuelve a descargar.

---

## Opción A — Script automático (recomendado)

```bash
git clone git@github.com:LuisVilladiego/primeraprueba.git
cd primeraprueba
git checkout cursor/fix-vite-ipv4-listen-a9a6
chmod +x scripts/download-and-install-deb.sh
./scripts/download-and-install-deb.sh
```

La primera vez pedirá `gh auth login` si no tienes GitHub CLI configurado.

---

## Opción B — Descarga manual (navegador)

1. Entra en GitHub **con tu cuenta** (con acceso al repo).
2. Abre **Releases** → `v1.0.1-linux-amd64`.
3. Haz clic en **`pinguinono_1.0.1_amd64.deb`** (no copies la URL a wget).
4. En terminal:

```bash
cd ~/Descargas
file pinguinono_1.0.1_amd64.deb
sudo apt install ./pinguinono_1.0.1_amd64.deb
```

---

## Opción C — Compilar en tu PC

```bash
chmod +x scripts/install-popos.sh
./scripts/install-popos.sh
```

---

## Dependencias en tiempo de ejecución

```bash
sudo apt install libwebkit2gtk-4.1-0 libgtk-3-0
sudo apt install -f
```
