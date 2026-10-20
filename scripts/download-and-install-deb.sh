#!/usr/bin/env bash
# Descarga el .deb desde GitHub Releases (repo privado) e instala en Pop!_OS.
set -euo pipefail

REPO="LuisVilladiego/primeraprueba"
TAG="v1.0.1-linux-amd64"
DEB="pinguinono_1.0.1_amd64.deb"
WORKDIR="${HOME}/Descargas/pinguinono-install"
mkdir -p "$WORKDIR"
cd "$WORKDIR"

log() { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
fail() { printf '\n\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }

if ! command -v gh >/dev/null 2>&1; then
  log "Instalando GitHub CLI..."
  sudo apt-get update
  sudo apt-get install -y gh
fi

if ! gh auth status >/dev/null 2>&1; then
  fail "Inicia sesión en GitHub: ejecuta  gh auth login  (cuenta con acceso al repo $REPO)"
fi

log "Descargando release $TAG ..."
rm -f "$DEB"
gh release download "$TAG" --repo "$REPO" --pattern "$DEB" --dir .

if [[ ! -f "$DEB" ]]; then
  fail "No se encontró $DEB tras la descarga."
fi

log "Comprobando que el archivo es un paquete Debian válido..."
if ! file "$DEB" | grep -q 'Debian binary package'; then
  fail "El archivo descargado NO es un .deb válido ($(file -b "$DEB")).
Probablemente descargaste un enlace directo sin estar logueado en GitHub (repo privado).
Usa este script o descarga desde la página de Releases en el navegador."
fi

log "Instalando $DEB ..."
sudo apt install "./$DEB"

log "Listo. Abre Pinguiñoño desde el menú de aplicaciones."
