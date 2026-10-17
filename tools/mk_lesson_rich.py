#!/usr/bin/env python3
"""Generate tools/lesson_rich.py from compact per-slug specs."""
from __future__ import annotations

import json
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parent

import sys

sys.path.insert(0, str(ROOT))
from generate_levels_5_15 import TOPIC_CODE  # noqa: E402

CODE: dict[str, str] = dict(TOPIC_CODE)
CODE["network-troubleshooting"] = (
    "ip -br addr\nping -c2 1.1.1.1\ndig +short example.com\nss -tuln | head\ntraceroute -n 8.8.8.8"
)

# (slug, note_es, note_en, tip_es, tip_en, ex1, ex2, quiz1|None)
# ex = (q_es, q_en, opts_es, opts_en, ans, e_es, e_en)


def ex(q_es, q_en, o_es, o_en, ans, e_es, e_en):
    return {
        "question": {"es": q_es, "en": q_en},
        "options": {"es": list(o_es), "en": list(o_en)},
        "correctAnswer": ans,
        "explanation": {"es": e_es, "en": e_en},
    }


ROWS: list[tuple] = [
    (
        "shell-scripting-intro",
        "Un script Bash combina shebang, permisos de ejecución y convenciones de fail-fast. En CI/CD el exit code del script decide si el pipeline continúa.",
        "A Bash script combines shebang, execute permission, and fail-fast conventions. In CI/CD the script exit code gates the pipeline.",
        "Ejecuta shellcheck en cada PR; desactiva set -u temporalmente si procesas variables opcionales de entorno legacy.",
        "Run shellcheck on every PR; temporarily disable set -u when ingesting legacy optional env vars.",
        ex(
            "¿Qué hace set -e?",
            "What does set -e do?",
            ("Ignora errores", "Sale ante comando con exit != 0", "Desactiva pipes", "Solo root"),
            ("Ignores errors", "Exit on non-zero command", "Disables pipes", "Root only"),
            "1",
            "Fail-fast evita estados corruptos a mitad de script.",
            "Fail-fast avoids half-applied state.",
        ),
        ex(
            "Shebang típico para Bash",
            "Typical shebang for Bash",
            ("#!/bin/sh", "#!/bin/bash", "#!/python", "#!/dash"),
            ("#!/bin/sh", "#!/bin/bash", "#!/python", "#!/dash"),
            "1",
            "Bash soporta [[ ]] y arrays.",
            "Bash supports [[ ]] and arrays.",
        ),
        ex(
            "¿pipefail?",
            "What is pipefail?",
            ("Oculta stderr", "Fallo en cualquier etapa del pipe", "Cierra stdin", "Alias de set -x"),
            ("Hides stderr", "Failure in any pipeline stage", "Closes stdin", "Alias for set -x"),
            "1",
            "Sin pipefail solo cuenta el último comando.",
            "Without pipefail only the last command counts.",
        ),
    ),
]

# Auto-fill remaining slugs with topic-aware content
LESSON_SLUGS = [
    "shell-scripting-intro",
    "variables-environment",
    "user-input-arguments",
    "conditionals",
    "test-comparisons",
    "loops",
    "functions",
    "exit-codes",
    "nano-basics",
    "vim-intro",
    "vim-editing",
    "vim-search-replace",
    "vim-advanced",
    "vimrc-config",
    "grep-basics",
    "regex-intro",
    "sed-basics",
    "awk-basics",
    "cut-sort-uniq",
    "wc-tr-tee",
    "pipes-redirection",
    "package-managers-intro",
    "apt-debian",
    "dnf-fedora",
    "pacman-arch",
    "snap-flatpak-appimage",
    "compile-from-source",
    "networking-basics",
    "network-interfaces",
    "connectivity-tools",
    "dns-tools",
    "netstat-ss",
    "curl-wget",
    "network-config-files",
    "systemd-intro",
    "systemctl-basics",
    "service-files",
    "journalctl",
    "timers-cron",
    "boot-targets",
    "ssh-basics",
    "ssh-keys",
    "ssh-config",
    "scp-rsync",
    "ssh-tunneling",
    "firewall-basics",
    "security-hardening",
    "advanced-variables",
    "regex-in-bash",
    "debugging-scripts",
    "subshells-processes",
    "signal-handling",
    "getopts-arguments",
    "best-practices",
    "git-intro",
    "git-basics",
    "git-branches",
    "git-remote",
    "git-conflicts",
    "git-advanced",
    "git-workflows",
    "docker-intro",
    "docker-images",
    "docker-containers",
    "dockerfile",
    "docker-volumes",
    "docker-networking",
    "docker-compose",
    "k8s-intro",
    "k8s-architecture",
    "kubectl-basics",
    "pods-deployments",
    "services-networking",
    "configmaps-secrets",
    "volumes-storage",
    "helm-basics",
    "network-troubleshooting",
]

TOPIC_HINTS: dict[str, tuple[str, str, str, str]] = {
    "variables-environment": (
        "Variables locales vs exportadas: los hijos solo ven lo exportado. Parameter expansion (${VAR:-default}) evita scripts frágiles.",
        "Local vs exported variables: children only see exports. Parameter expansion (${VAR:-default}) avoids brittle scripts.",
        "Cita variables en doble comilla; usa readonly para constantes de despliegue.",
        "Double-quote variables; use readonly for deploy constants.",
    ),
    "user-input-arguments": (
        "$@ preserva argumentos con espacios; read -r evita mangling de backslashes en input interactivo.",
        "$@ preserves spaced arguments; read -r avoids backslash mangling on interactive input.",
        "Reenvía args con \"$@\" no con $*.",
        "Forward args with \"$@\" not $*.",
    ),
    "conditionals": (
        "[[ ]] no hace word splitting ni pathname expansion; ideal para tests con variables de usuario.",
        "[[ ]] skips word splitting and pathname expansion; ideal for user-supplied variables.",
        "source (.) archivos de config en lugar de parsear manualmente.",
        "source (.) config files instead of hand parsing.",
    ),
    "test-comparisons": (
        "Usa -eq/-ne para enteros; == dentro de [[ ]] para strings. -x comprueba ejecutable.",
        "Use -eq/-ne for integers; == in [[ ]] for strings. -x checks executable.",
        "Comilla variables en [ ] legacy para evitar syntax errors.",
        "Quote variables in legacy [ ] to avoid syntax errors.",
    ),
    "loops": (
        "for/while/until; combina nullglob con globs para evitar literales *.log sin matches.",
        "for/while/until; combine nullglob with globs to avoid literal *.log with no matches.",
        "while read -r < file evita subshell del pipe si necesitas contadores fuera.",
        "while read -r < file avoids pipe subshell if you need outer counters.",
    ),
    "functions": (
        "local limita scope; return 0-255; el exit code default es el del último comando en la función.",
        "local limits scope; return 0-255; default exit is the last command in the function.",
        "Log a stderr con >&2 para no romper pipelines en stdout.",
        "Log to stderr with >&2 so stdout pipelines stay clean.",
    ),
    "exit-codes": (
        "trap EXIT limpia temporales; $? guarda el exit code del último comando foreground.",
        "trap EXIT cleans temporaries; $? holds last foreground exit code.",
        "Documenta códigos >100 para operadores y playbooks Ansible.",
        "Document codes >100 for operators and Ansible playbooks.",
    ),
    "nano-basics": (
        "nano es editor TUI simple: Ctrl+O guarda, Ctrl+W busca, Ctrl+K corta línea. Ideal en servidores sin GUI.",
        "nano is a simple TUI editor: Ctrl+O save, Ctrl+W search, Ctrl+K cut line. Great on headless servers.",
        "nano -l muestra números de línea; visudo suele usar nano o vim según update-alternatives.",
        "nano -l shows line numbers; visudo may use nano or vim via update-alternatives.",
    ),
    "vim-intro": (
        "Modos Normal/Insert/Command-line: ESC vuelve a Normal; i inserta; :wq guarda y sale.",
        "Normal/Insert/Command-line modes: ESC to Normal; i insert; :wq save quit.",
        "vim +N file abre en línea N; útil para saltar a errores de compilador.",
        "vim +N file opens at line N; handy for compiler error jumps.",
    ),
    "vim-editing": (
        "Operadores + movimientos: dd elimina línea, yy yank, p pega; u deshace.",
        "Operators + motions: dd deletes line, yy yanks, p puts; u undoes.",
        "Usa . para repetir último cambio en Normal mode.",
        "Use . to repeat last Normal-mode change.",
    ),
    "vim-search-replace": (
        ":%s/old/new/g reemplaza global; flags c confirm, I case sensitive; n/N navega matches.",
        ":%s/old/new/g global replace; flags c confirm, I case; n/N navigate matches.",
        "Escapa / en patrones o usa otro delimitador :%s#old#new#g.",
        "Escape / in patterns or use another delimiter :%s#old#new#g.",
    ),
    "vim-advanced": (
        "Ventanas :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.",
        "Windows :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.",
        "Ctrl+w h/j/k/l mueve foco entre splits sin ratón.",
        "Ctrl+w h/j/k/l moves focus between splits without a mouse.",
    ),
    "vimrc-config": (
        "~/.vimrc persiste set number, relativenumber, syntax on, tabstop expandtab.",
        "~/.vimrc persists set number, relativenumber, syntax on, tabstop expandtab.",
        "Packaging: /etc/vim/vimrc.local para defaults de equipo.",
        "Packaging: /etc/vim/vimrc.local for team defaults.",
    ),
    "grep-basics": (
        "grep filtra líneas; -R recursivo, -n número, -i ignore case; --color=auto resalta.",
        "grep filters lines; -R recursive, -n line numbers, -i ignore case; --color=auto highlights.",
        "rg/ag suelen ser más rápidos en repos grandes; grep sigue universal en minimal images.",
        "rg/ag are faster in big repos; grep stays universal on minimal images.",
    ),
    "regex-intro": (
        "ERE con grep -E: . * + ? [] () |; ancla ^ $; escapa metacaracteres en BRE/ERE según herramienta.",
        "ERE with grep -E: . * + ? [] () |; anchors ^ $; escape metachars per BRE/ERE tool.",
        "Prueba regex en echo sample | grep -E antes de aplicar sed -i.",
        "Test regex on echo sample | grep -E before sed -i.",
    ),
    "sed-basics": (
        "sed stream editor: s/// sustituye; -n suprime print; direcciones 1,10p; -i.ed backup extension.",
        "sed stream editor: s/// substitutes; -n suppress; addresses 1,10p; -i.ed backup ext.",
        "Nunca sed -i en prod sin backup ni diff previo.",
        "Never sed -i in prod without backup and prior diff.",
    ),
    "awk-basics": (
        "awk procesa columnas: $0 línea, $1..NF campos, -F delimitador; END{} agrega totales.",
        "awk processes columns: $0 line, $1..NF fields, -F separator; END{} aggregates totals.",
        "Prefiere awk para CSV simple; usa csvkit/python para CSV con comillas embebidas.",
        "Prefer awk for simple CSV; csvkit/python for quoted CSV.",
    ),
    "cut-sort-uniq": (
        "cut extrae campos; sort ordena; uniq -c cuenta líneas consecutivas (sort antes!).",
        "cut extracts fields; sort orders; uniq -c counts consecutive duplicates (sort first!).",
        "sort -t: -k3 -n ordena /etc/passwd por UID numérico.",
        "sort -t: -k3 -n sorts /etc/passwd by numeric UID.",
    ),
    "wc-tr-tee": (
        "wc -l/-w/-c cuenta; tr traduce caracteres; tee duplica stdout a archivo y terminal.",
        "wc -l/-w/-c counts; tr translates chars; tee duplicates stdout to file and terminal.",
        "tee -a append logs de instalación largos mientras ves progreso.",
        "tee -a appends long install logs while you watch progress.",
    ),
    "pipes-redirection": (
        "stdout 1>, stderr 2>, 2>&1 merge; pipes conectan stdout→stdin; here-docs <<EOF.",
        "stdout 1>, stderr 2>, 2>&1 merge; pipes connect stdout→stdin; here-docs <<EOF.",
        "Orden importa: cmd 2>&1 | tee log captura ambos streams.",
        "Order matters: cmd 2>&1 | tee log captures both streams.",
    ),
    "package-managers-intro": (
        "Distros usan apt/dnf/pacman/snap/flatpak; cada uno resuelve dependencias y firmas distinto.",
        "Distros use apt/dnf/pacman/snap/flatpak; each resolves deps and signatures differently.",
        "Documenta mirror interno y pinning en servidores regulados.",
        "Document internal mirrors and pinning on regulated servers.",
    ),
    "apt-debian": (
        "apt update refresca índices; install/remove/purge; apt-cache policy muestra prioridades pinning.",
        "apt update refreshes indexes; install/remove/purge; apt-cache policy shows pinning.",
        "DEBIAN_FRONTEND=noninteractive evita prompts en CI.",
        "DEBIAN_FRONTEND=noninteractive avoids CI prompts.",
    ),
    "dnf-fedora": (
        "dnf install/remove; repolist; rpm -qi consulta metadatos RPM instalados.",
        "dnf install/remove; repolist; rpm -qi queries installed RPM metadata.",
        "dnf history undo revierte transacciones recientes.",
        "dnf history undo rolls back recent transactions.",
    ),
    "pacman-arch": (
        "pacman -Syu sincroniza; -Qi info; AUR helpers (yay) compilan PKGBUILDs de terceros.",
        "pacman -Syu syncs; -Qi info; AUR helpers (yay) build third-party PKGBUILDs.",
        "Revisa PKGBUILD antes de instalar desde AUR.",
        "Review PKGBUILD before installing from AUR.",
    ),
    "snap-flatpak-appimage": (
        "snap confinement; flatpak remotes flathub; AppImage portable sin install system-wide.",
        "snap confinement; flatpak remotes flathub; AppImage portable without system install.",
        "En servidores headless evita snapd salvo necesidad; prefer packages nativos.",
        "On headless servers avoid snapd unless needed; prefer native packages.",
    ),
    "compile-from-source": (
        "./configure && make && make install; check logs config.log; DESTDIR para empaquetado.",
        "./configure && make && make install; check config.log; DESTDIR for packaging.",
        "Usa checkinstall o empaqueta para no mezclar archivos sueltos en /usr/local.",
        "Use checkinstall or package to avoid stray /usr/local files.",
    ),
    "networking-basics": (
        "TCP/IP: IP + máscara + gateway; puertos identifican servicios; UDP vs TCP confiabilidad.",
        "TCP/IP: IP + mask + gateway; ports identify services; UDP vs TCP reliability.",
        "Tabla rutas: ip route; default via gateway en la misma L2/L3.",
        "Routing table: ip route; default via gateway on correct L2/L3.",
    ),
    "network-interfaces": (
        "ip link/addr/route reemplaza ifconfig en modern Linux; nombres predictivos enp0s3.",
        "ip link/addr/route replaces ifconfig on modern Linux; predictable names enp0s3.",
        "Cambios con ip son volátiles hasta netplan/NetworkManager persista.",
        "ip changes are volatile until netplan/NetworkManager persists.",
    ),
    "connectivity-tools": (
        "ping ICMP reachability; traceroute/tracepath muestra hops; mtr combina ambos interactivo.",
        "ping ICMP reachability; traceroute/tracepath shows hops; mtr combines interactively.",
        "Firewall puede bloquear ICMP pero TCP/443 aún funciona—no confíes solo en ping.",
        "Firewalls may block ICMP while TCP/443 works—do not rely on ping alone.",
    ),
    "dns-tools": (
        "dig +trace +short; @server fuerza resolver; registros A/AAAA/MX/TXT/CNAME.",
        "dig +trace +short; @server forces resolver; A/AAAA/MX/TXT/CNAME records.",
        "Compara dig @1.1.1.1 vs resolver local para separar client vs authoritative issues.",
        "Compare dig @1.1.1.1 vs local resolver to split client vs auth issues.",
    ),
    "netstat-ss": (
        "ss -tulpn sockets listening; -n numeric; netstat legacy; lsof -i mapea PID→puerto.",
        "ss -tulpn listening sockets; -n numeric; netstat legacy; lsof -i maps PID→port.",
        "ss más rápido en hosts con miles de conexiones.",
        "ss is faster on hosts with thousands of connections.",
    ),
    "curl-wget": (
        "curl -fsSL sigue redirects fail silent; headers -I; wget recursive mirror; APIs JSON con jq.",
        "curl -fsSL follows redirects fail silent; headers -I; wget recursive mirror; JSON APIs with jq.",
        "Nunca curl | bash sin revisar script; usa checksums firmados.",
        "Never curl | bash without review; use signed checksums.",
    ),
    "network-config-files": (
        "/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML en Ubuntu server.",
        "/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML on Ubuntu server.",
        "systemd-resolved puede ser stub—lee man resolved.conf antes de editar.",
        "systemd-resolved may stub—read resolved.conf before editing.",
    ),
    "network-troubleshooting": (
        "Metodología capas: link (ip link) → IP (ip addr) → routing (ip route) → DNS (dig) → puertos (ss) → path (traceroute).",
        "Layered method: link (ip link) → IP (ip addr) → routing (ip route) → DNS (dig) → ports (ss) → path (traceroute).",
        "Documenta MTU mismatches si ves fragmentación o black hole PMTUD.",
        "Document MTU mismatches if you see fragmentation or PMTUD black holes.",
    ),
    "systemd-intro": (
        "systemd unit types: service, socket, timer, target; PID1 reemplaza SysV init scripts.",
        "systemd unit types: service, socket, timer, target; PID1 replaces SysV init.",
        "systemctl list-dependencies muestra árbol de arranque.",
        "systemctl list-dependencies shows boot tree.",
    ),
    "systemctl-basics": (
        "start/stop/restart/reload/status; enable --now persiste y arranca; is-active/is-enabled checks.",
        "start/stop/restart/reload/status; enable --now persists and starts; is-active/is-enabled checks.",
        "reload vs restart: reload relee config sin matar conexiones si la unidad lo soporta.",
        "reload vs restart: reload rereads config without killing connections when supported.",
    ),
    "service-files": (
        "Unit files en /etc/systemd/system; [Unit] [Service] [Install]; ExecStart= obligatorio.",
        "Unit files in /etc/systemd/system; [Unit] [Service] [Install]; ExecStart= required.",
        "Tras editar: daemon-reload siempre antes de restart.",
        "After edits: always daemon-reload before restart.",
    ),
    "journalctl": (
        "journalctl -u unit -f follow; -b boot actual; -p err priority; --since time filter.",
        "journalctl -u unit -f follow; -b this boot; -p err priority; --since time filter.",
        "Persistent journal requiere Storage=persistent en journald.conf.",
        "Persistent journal needs Storage=persistent in journald.conf.",
    ),
    "timers-cron": (
        "systemd timers OnCalendar= reemplazan cron con dependencias; crontab -e usuario; /etc/cron.d system.",
        "systemd timers OnCalendar= replace cron with deps; crontab -e user; /etc/cron.d system.",
        "Prefiere timers si necesitas RandomizedDelaySec y logs en journal.",
        "Prefer timers if you need RandomizedDelaySec and journal logs.",
    ),
    "boot-targets": (
        "Targets multi-user.graphical; isolate cambia target; get-default/set-default persisten.",
        "Targets multi-user.graphical; isolate switches target; get-default/set-default persist.",
        "rescue/emergency targets para mantenimiento sin red completa.",
        "rescue/emergency targets for maintenance with limited networking.",
    ),
    "ssh-basics": (
        "Cliente ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.",
        "Client ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.",
        "BatchMode=yes falla rápido en CI sin TTY.",
        "BatchMode=yes fails fast in CI without TTY.",
    ),
    "ssh-keys": (
        "ed25519 preferido; ssh-keygen -t ed25519; ssh-copy-id instala pubkey; permisos ~/.ssh 700, keys 600.",
        "Prefer ed25519; ssh-keygen -t ed25519; ssh-copy-id installs pubkey; ~/.ssh 700, keys 600.",
        "Passphrase + ssh-agent equilibra seguridad y UX.",
        "Passphrase + ssh-agent balances security and UX.",
    ),
    "ssh-config": (
        "~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.",
        "~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.",
        "Match blocks aplican reglas por host pattern.",
        "Match blocks apply rules by host pattern.",
    ),
    "scp-rsync": (
        "scp copia puntual; rsync -avz delta sync; --delete espeja destino; -e ssh tunnel transport.",
        "scp point copy; rsync -avz delta sync; --delete mirrors dest; -e ssh tunnel transport.",
        "rsync --dry-run antes de --delete en prod.",
        "rsync --dry-run before --delete in prod.",
    ),
    "ssh-tunneling": (
        "-L local forward; -R remote reverse; -D SOCKS proxy; -N no command solo tunnel.",
        "-L local forward; -R remote reverse; -D SOCKS proxy; -N no command tunnel only.",
        "GatewayPorts y AllowTcpForwarding controlan hardening servidor.",
        "GatewayPorts and AllowTcpForwarding control server hardening.",
    ),
    "firewall-basics": (
        "ufw/nftables/iptables capas; allow/deny por puerto; default deny inbound es baseline.",
        "ufw/nftables/iptables layers; allow/deny by port; default deny inbound baseline.",
        "Abre solo lo necesario; documenta reglas en infra-as-code.",
        "Open only what's needed; document rules in infra-as-code.",
    ),
    "security-hardening": (
        "fail2ban jails; deshabilitar root login SSH; sudo vs su; SUID audit find -perm -4000.",
        "fail2ban jails; disable root SSH login; sudo vs su; SUID audit find -perm -4000.",
        "Aplica CIS benchmarks gradualmente con rollback plan.",
        "Apply CIS benchmarks gradually with rollback plan.",
    ),
    "advanced-variables": (
        "Arrays arr=(a b); ${arr[@]} expansión; ${#arr[@]} length; asociativos declare -A en bash 4+.",
        "Arrays arr=(a b); ${arr[@]} expansion; ${#arr[@]} length; associative declare -A bash 4+.",
        "IFS controla split en read y expansions—cítalo temporalmente.",
        "IFS controls split in read and expansions—quote temporarily.",
    ),
    "regex-in-bash": (
        "[[ string =~ regex ]] con BASH_REMATCH capture groups; no uses grep dentro de if innecesario.",
        "[[ string =~ regex ]] with BASH_REMATCH capture groups; avoid pointless grep in if.",
        "Ancla ^$ para validación completa de input.",
        "Anchor ^$ for full input validation.",
    ),
    "debugging-scripts": (
        "bash -x trace; PS4 custom prompt; set -v muestra lectura de líneas; errexit nounset pipefail combo.",
        "bash -x trace; PS4 custom prompt; set -v shows read lines; errexit nounset pipefail combo.",
        "Reproduce con bash -x en mismo shell options que prod.",
        "Reproduce with bash -x using same shell options as prod.",
    ),
    "subshells-processes": (
        "( ) subshell aísla cwd y vars; process substitution <(cmd) sin archivo temp; $$ vs $BASHPID.",
        "( ) subshell isolates cwd/vars; process substitution <(cmd) without temp file; $$ vs $BASHPID.",
        "Pipe while crea subshell—vars no persisten fuera.",
        "Pipe while creates subshell—vars don't persist outside.",
    ),
    "signal-handling": (
        "trap handler on EXIT INT TERM; SIGKILL no interceptable; graceful shutdown cierra fds y flush.",
        "trap handler on EXIT INT TERM; SIGKILL not interceptable; graceful shutdown closes fds flush.",
        "systemd envía SIGTERM antes de SIGKILL tras TimeoutStopSec.",
        "systemd sends SIGTERM before SIGKILL after TimeoutStopSec.",
    ),
    "getopts-arguments": (
        "getopts :abc: parse flags; OPTARG valor; shift tras loop; -- end of options convención.",
        "getopts :abc: parse flags; OPTARG value; shift after loop; -- end of options convention.",
        "Leading : en optstring silencia errores builtin—valida tú.",
        "Leading : in optstring silences builtin errors—you validate.",
    ),
    "best-practices": (
        "shellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; logging estructurado.",
        "shellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; structured logging.",
        "Versiona scripts en git, no copies sueltas en /root.",
        "Version scripts in git, not loose copies in /root.",
    ),
    "git-intro": (
        "git init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.",
        "git init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.",
        ".gitignore temprano evita commits de secretos y node_modules.",
        "Early .gitignore avoids committing secrets and node_modules.",
    ),
    "git-basics": (
        "status; add -p staging parcial; commit mensajes imperativos; log --oneline --graph.",
        "status; add -p partial staging; imperative commits; log --oneline --graph.",
        "Nunca commit credentials—usa git-secrets o hooks.",
        "Never commit credentials—use git-secrets or hooks.",
    ),
    "git-branches": (
        "branch es puntero móvil; switch -c crea; merge fast-forward vs 3-way; rebase reescribe historia.",
        "branch is mobile pointer; switch -c create; merge FF vs 3-way; rebase rewrites history.",
        "Protege main con PR reviews y CI verde.",
        "Protect main with PR reviews and green CI.",
    ),
    "git-remote": (
        "remote origin; fetch trae objetos; push publica; upstream -u tracking branch.",
        "remote origin; fetch brings objects; push publishes; upstream -u tracking branch.",
        "force push solo en branches personales.",
        "force push only on personal branches.",
    ),
    "git-conflicts": (
        "merge conflict markers <<<<<<; editar, git add, commit; merge --abort cancela.",
        "merge conflict markers <<<<<<; edit, git add, commit; merge --abort cancels.",
        "Comunica con equipo antes de resolver conflictos grandes en main.",
        "Coordinate before resolving large main conflicts.",
    ),
    "git-advanced": (
        "stash; cherry-pick; reflog recupera commits; bisect encuentra regresiones.",
        "stash; cherry-pick; reflog recovers commits; bisect finds regressions.",
        "reflog expira—no es backup permanente.",
        "reflog expires—not permanent backup.",
    ),
    "git-workflows": (
        "Trunk-based short branches vs GitFlow release branches; tags semver releases.",
        "Trunk-based short branches vs GitFlow release branches; semver release tags.",
        "Conventional Commits ayuda changelogs automáticos.",
        "Conventional Commits help automated changelogs.",
    ),
    "docker-intro": (
        "Contenedor = procesos aislados con namespaces/cgroups; imagen read-only layers; docker ps/logs.",
        "Container = isolated processes with namespaces/cgroups; image read-only layers; docker ps/logs.",
        "No ejecutes contenedores como root en prod sin user namespace hardening.",
        "Don't run containers as root in prod without user namespace hardening.",
    ),
    "docker-images": (
        "pull/tag/push; layers cache; docker build context; multi-stage reduce tamaño final.",
        "pull/tag/push; layer cache; docker build context; multi-stage shrinks final image.",
        "Escanea imágenes con trivy/grype en CI.",
        "Scan images with trivy/grype in CI.",
    ),
    "docker-containers": (
        "run -d --name -p publish; exec interactive; logs -f; restart policies unless-stopped.",
        "run -d --name -p publish; exec interactive; logs -f; restart unless-stopped policies.",
        "Limita --memory y --cpus en prod.",
        "Set --memory and --cpus limits in prod.",
    ),
    "dockerfile": (
        "FROM WORKDIR COPY RUN CMD; orden capas para cache; .dockerignore; USER non-root final.",
        "FROM WORKDIR COPY RUN CMD; layer order for cache; .dockerignore; non-root USER.",
        "Pin base image digests para reproducibilidad.",
        "Pin base image digests for reproducibility.",
    ),
    "docker-volumes": (
        "Volumes managed vs bind mounts; datos fuera del container writable layer; backup volumen aparte.",
        "Managed volumes vs bind mounts; data outside container writable layer; backup volumes separately.",
        "Named volumes sobreviven docker rm container.",
        "Named volumes survive docker rm container.",
    ),
    "docker-networking": (
        "bridge default; user-defined networks DNS por nombre; publish ports -p host:container.",
        "bridge default; user-defined networks DNS by name; publish ports -p host:container.",
        "host network mode rompe aislamiento—úsalo con cuidado.",
        "host network mode breaks isolation—use carefully.",
    ),
    "docker-compose": (
        "compose YAML services networks volumes; up -d; depends_on orden; healthcheck readiness.",
        "compose YAML services networks volumes; up -d; depends_on order; healthcheck readiness.",
        "compose v2 plugin integrado: docker compose no docker-compose bin viejo.",
        "compose v2 plugin integrated: docker compose not legacy docker-compose binary.",
    ),
    "k8s-intro": (
        "Cluster orquesta contenedores; kubectl API; namespaces aíslan recursos; declarative desired state.",
        "Cluster orchestrates containers; kubectl API; namespaces isolate resources; declarative desired state.",
        "Minikube/kind para labs locales; prod managed EKS/GKE/AKS.",
        "Minikube/kind for local labs; prod managed EKS/GKE/AKS.",
    ),
    "k8s-architecture": (
        "Control plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.",
        "Control plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.",
        "etcd backup es crítico para DR del cluster.",
        "etcd backup is critical for cluster DR.",
    ),
    "kubectl-basics": (
        "kubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.",
        "kubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.",
        "kubectx/kubens aceleran cambios de entorno.",
        "kubectx/kubens speed environment switching.",
    ),
    "pods-deployments": (
        "Pod unidad mínima; Deployment ReplicaSet rolling updates; probes liveness/readiness.",
        "Pod smallest unit; Deployment ReplicaSet rolling updates; liveness/readiness probes.",
        "Un Pod no se repara—se reemplaza.",
        "Pods aren't repaired—they're replaced.",
    ),
    "services-networking": (
        "Service ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.",
        "Service ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.",
        "Ingress expone HTTP con controlador (nginx, traefik).",
        "Ingress exposes HTTP with controller (nginx, traefik).",
    ),
    "configmaps-secrets": (
        "ConfigMap config no secreta; Secret base64 not encryption at rest by default; mount env or volume.",
        "ConfigMap non-secret config; Secret base64 not encryption at rest by default; mount env or volume.",
        "Usa SealedSecrets/External Secrets en prod.",
        "Use SealedSecrets/External Secrets in prod.",
    ),
    "volumes-storage": (
        "PVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.",
        "PVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.",
        "Revisa access modes RWO vs RWX antes de apps multi-writer.",
        "Check RWO vs RWX access modes before multi-writer apps.",
    ),
    "helm-basics": (
        "Charts templating; values.yaml; helm install upgrade rollback; repos helm repo add.",
        "Charts templating; values.yaml; helm install upgrade rollback; repos helm repo add.",
        "helm template render offline antes de apply.",
        "helm template offline render before apply.",
    ),
}


def default_exercises(slug: str, title_es: str, title_en: str):
    """Three MC questions tied to slug topic."""
    short = slug.replace("-", " ")
    return (
        ex(
            f"¿Qué herramienta o idea es central en «{title_es}»?",
            f"Which tool or idea is central to «{title_en}»?",
            (f"Solo {short} en teoría", f"Práctica de {short} en shell/Linux", "Compilar kernel", "Formatear disco"),
            (f"Only {short} in theory", f"Hands-on {short} on Linux/shell", "Build kernel", "Format disk"),
            "1",
            f"La lección aplica {short} en entornos reales.",
            f"This lesson applies {short} in real environments.",
        ),
        ex(
            "Antes de cambiar producción, ¿qué paso es más sensato?",
            "Before changing production, which step is most sensible?",
            ("Aplicar directo en prod", "Validar en staging/VM y revisar rollback", "Desactivar logs", "Ignorar permisos"),
            ("Apply directly in prod", "Validate in staging/VM and plan rollback", "Disable logs", "Ignore permissions"),
            "1",
            "Staging reduce blast radius.",
            "Staging reduces blast radius.",
        ),
        ex(
            "¿Dónde documentar comandos clave de esta lección?",
            "Where should you document key commands from this lesson?",
            ("runbook/wiki del equipo", "Solo memoria", "Chat efímero", "Ningún sitio"),
            ("Team runbook/wiki", "Memory only", "Ephemeral chat", "Nowhere"),
            "0",
            "Runbooks aceleran incident response.",
            "Runbooks speed incident response.",
        ),
    )


def build_lessons() -> dict:
    from generate_levels_5_15 import parse_lessons

    titles: dict[str, dict] = {}
    for level in range(5, 16):
        for les in parse_lessons(level):
            titles[les["slug"]] = les["title"]

    lessons: dict = {}
    existing = {r[0]: r for r in ROWS}
    for slug in LESSON_SLUGS:
        if slug in existing:
            row = existing[slug]
            _, note_es, note_en, tip_es, tip_en, e1, e2, q1 = row
        else:
            hints = TOPIC_HINTS.get(slug)
            if not hints:
                raise KeyError(slug)
            note_es, note_en, tip_es, tip_en = hints
            t = titles.get(slug, {"es": slug, "en": slug})
            e1, e2, q1 = default_exercises(slug, t["es"], t["en"])
        entry = {
            "note_es": note_es,
            "note_en": note_en,
            "code": CODE.get(slug, "echo practice"),
            "tip_es": tip_es,
            "tip_en": tip_en,
            "ex1": e1,
            "ex2": e2,
            "quiz1": q1,
        }
        lessons[slug] = entry
    return lessons


def write_module(lessons: dict) -> None:
    out = ROOT / "lesson_rich.py"
    payload = json.dumps(lessons, ensure_ascii=False, indent=2)
    src = f'''\
"""Rich bilingual lesson content for levels 5-15 generator."""
from __future__ import annotations

import json

_LESSONS: dict = json.loads(
{json.dumps(payload)}
)


def get_rich(slug: str, title: dict, desc: dict) -> dict | None:
    """Return rich intro/kc/tip/exercises for slug, or None."""
    raw = _LESSONS.get(slug)
    if not raw:
        return None
    intro_es = (
        f"{{title['es']}} — {{desc['es']}}\\n\\n"
        "En producción combinarás estos conceptos con permisos, logs y rollback. "
        "Practica en una VM antes de tocar servidores críticos."
    )
    intro_en = (
        f"{{title['en']}} — {{desc['en']}}\\n\\n"
        "In production you combine these ideas with permissions, logs, and rollback. "
        "Practice in a VM before touching critical servers."
    )
    out: dict = {{
        "intro_es": intro_es,
        "intro_en": intro_en,
        "kc_es": raw["kc_es"],
        "kc_en": raw["kc_en"],
        "tip_es": raw["tip_es"],
        "tip_en": raw["tip_en"],
        "ex1": raw["ex1"],
        "ex2": raw["ex2"],
    }}
    if raw.get("quiz1"):
        out["quiz1"] = raw["quiz1"]
    return out
'''
    # Fix double-encoding: embed lessons dict directly
    src = f'''\
"""Rich bilingual lesson content for levels 5-15 generator."""
from __future__ import annotations

_LESSONS: dict = {payload}

_TABLE_ES = """| Área | Detalle |
|------|---------|
| Objetivo | Aplicar en servidores y CI |
| Salida | Revisa exit code con echo $? |
| Logs | Redirige stderr si depuras |"""

_TABLE_EN = """| Area | Detail |
|------|--------|
| Goal | Apply on servers and CI |
| Output | Check exit code with echo $? |
| Logs | Redirect stderr when debugging |"""


def _build_kc(title: dict, note_es: str, note_en: str, code: str) -> tuple[str, str]:
    kc_es = f"**{{title['es']}}**\\n\\n{{note_es}}\\n\\n{{_TABLE_ES}}\\n\\n```bash\\n{{code}}\\n```"
    kc_en = f"**{{title['en']}}**\\n\\n{{note_en}}\\n\\n{{_TABLE_EN}}\\n\\n```bash\\n{{code}}\\n```"
    return kc_es, kc_en


def get_rich(slug: str, title: dict, desc: dict) -> dict | None:
    """Return rich intro/kc/tip/exercises for slug, or None."""
    raw = _LESSONS.get(slug)
    if not raw:
        return None
    intro_es = (
        f"{{title['es']}} — {{desc['es']}}\\n\\n"
        "En producción combinarás estos conceptos con permisos, logs y rollback. "
        "Practica en una VM antes de tocar servidores críticos."
    )
    intro_en = (
        f"{{title['en']}} — {{desc['en']}}\\n\\n"
        "In production you combine these ideas with permissions, logs, and rollback. "
        "Practice in a VM before touching critical servers."
    )
    kc_es, kc_en = _build_kc(title, raw["note_es"], raw["note_en"], raw["code"])
    out: dict = {{
        "intro_es": intro_es,
        "intro_en": intro_en,
        "kc_es": kc_es,
        "kc_en": kc_en,
        "tip_es": raw["tip_es"],
        "tip_en": raw["tip_en"],
        "ex1": raw["ex1"],
        "ex2": raw["ex2"],
    }}
    if raw.get("quiz1"):
        out["quiz1"] = raw["quiz1"]
    return out
'''
    out.write_text(src, encoding="utf-8")
    print(f"Wrote {out} ({len(lessons)} slugs)")


if __name__ == "__main__":
    write_module(build_lessons())
