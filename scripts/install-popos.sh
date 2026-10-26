#!/usr/bin/env bash
# Instala Pinguiñoño en Pop!_OS / Ubuntu (app de escritorio local).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

log() { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
err() { printf '\n\033[1;31mError:\033[0m %s\n' "$*" >&2; exit 1; }

if [[ "$(id -u)" -eq 0 ]]; then
  err "No ejecutes este script con sudo. Te pedirá la contraseña solo cuando haga falta."
fi

if ! command -v apt-get >/dev/null 2>&1; then
  err "Este instalador es para Debian/Ubuntu/Pop!_OS (apt)."
fi

log "Instalando dependencias del sistema (GTK, WebKit, compilación)..."
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
  build-essential pkg-config curl ca-certificates \
  libwebkit2gtk-4.1-dev librsvg2-dev libgtk-3-dev \
  libayatana-appindicator3-dev patchelf libssl-dev

need_node=false
if ! command -v node >/dev/null 2>&1; then
  need_node=true
elif [[ "$(node -p "process.versions.node.split('.')[0]")" -lt 18 ]]; then
  need_node=true
fi

if $need_node; then
  log "Instalando Node.js 22 (LTS)..."
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v rustc >/dev/null 2>&1; then
  log "Instalando Rust (rustup)..."
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain stable
  # shellcheck source=/dev/null
  source "${HOME}/.cargo/env"
else
  log "Actualizando toolchain Rust stable..."
  rustup update stable >/dev/null 2>&1 || true
  rustup default stable >/dev/null 2>&1 || true
fi

export PATH="${HOME}/.cargo/bin:${PATH}"

log "Dependencias npm..."
npm install

log "Compilando Pinguiñoño (puede tardar varios minutos la primera vez)..."
npm run tauri build

DEB="$(find "$ROOT/src-tauri/target/release/bundle/deb" -name '*.deb' 2>/dev/null | head -1)"
if [[ -z "$DEB" ]]; then
  err "No se generó el paquete .deb. Revisa la salida de 'npm run tauri build'."
fi

log "Instalando paquete: $(basename "$DEB")"
sudo apt-get install -y "$DEB"

log "Listo. Busca «Pinguiñoño» en el menú de aplicaciones o ejecuta:"
echo "  pinguinono-tauri"
echo ""
echo "Para desarrollo (sin instalar): npm run tauri dev"
