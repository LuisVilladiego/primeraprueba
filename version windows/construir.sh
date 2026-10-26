#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

npm run build:windows

shopt -s nullglob
installers=(src-tauri/target/x86_64-pc-windows-msvc/release/bundle/nsis/*-setup.exe)
if [[ ${#installers[@]} -eq 0 ]]; then
  echo "No apareció el instalador NSIS." >&2
  exit 1
fi

dest="$root/version windows/Pinguiñoño-setup.exe"
cp "${installers[0]}" "$dest"
echo "Instalador listo: $dest"
