#!/usr/bin/env python3
"""Generate src/content/modules/level-5..15 from src/content/data/level-N/index.ts"""
from __future__ import annotations

import json
import os
import re
import sys
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src/content/data"
MODULES_DIR = ROOT / "src/content/modules"

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lesson_rich import get_rich  # noqa: E402

MODULE_META = {
    5: {
        "slug": "shell-scripting-basics",
        "icon": "📜",
        "title": {"es": "Shell Scripting Básico", "en": "Basic Shell Scripting"},
        "description": {
            "es": "Automatiza tareas con scripts Bash: variables, condicionales, bucles y funciones.",
            "en": "Automate tasks with Bash scripts: variables, conditionals, loops and functions.",
        },
        "skills": ["bash-basics", "variables", "conditionals", "loops", "functions", "script-structure"],
        "prerequisites": ["level-4"],
    },
    6: {
        "slug": "text-editors",
        "icon": "✏️",
        "title": {"es": "Editores de Texto", "en": "Text Editors"},
        "description": {
            "es": "Domina vim y nano para editar archivos de configuración y código desde la terminal.",
            "en": "Master vim and nano to edit configuration files and code from the terminal.",
        },
        "skills": ["vim-basics", "vim-modes", "nano", "text-manipulation"],
        "prerequisites": ["level-5"],
    },
    7: {
        "slug": "text-processing",
        "icon": "🔍",
        "title": {"es": "Procesamiento de Texto", "en": "Text Processing"},
        "description": {
            "es": "Domina grep, sed, awk y expresiones regulares para procesar y transformar texto.",
            "en": "Master grep, sed, awk and regular expressions to process and transform text.",
        },
        "skills": ["grep", "sed", "awk", "regex", "pipes", "redirection"],
        "prerequisites": ["level-6"],
    },
    8: {
        "slug": "package-management",
        "icon": "📦",
        "title": {"es": "Gestión de Paquetes", "en": "Package Management"},
        "description": {
            "es": "Aprende apt, dnf, snap y flatpak para instalar, actualizar y gestionar software.",
            "en": "Learn apt, dnf, snap and flatpak to install, update and manage software.",
        },
        "skills": ["apt", "dnf", "snap", "flatpak", "repositories"],
        "prerequisites": ["level-7"],
    },
    9: {
        "slug": "networking",
        "icon": "🌐",
        "title": {"es": "Networking Básico", "en": "Basic Networking"},
        "description": {
            "es": "Comprende TCP/IP, DNS, interfaces de red, diagnóstico y configuración de redes.",
            "en": "Understand TCP/IP, DNS, network interfaces, network diagnostics and configuration.",
        },
        "skills": ["tcp-ip", "dns", "ip-command", "ss-netstat", "curl-wget", "firewall-basics"],
        "prerequisites": ["level-8"],
    },
    10: {
        "slug": "services-systemd",
        "icon": "🔧",
        "title": {"es": "Servicios y systemd", "en": "Services and systemd"},
        "description": {
            "es": "Gestiona servicios del sistema con systemctl, crea unit files y entiende el boot process.",
            "en": "Manage system services with systemctl, create unit files and understand the boot process.",
        },
        "skills": ["systemctl", "unit-files", "journalctl", "boot-process", "targets"],
        "prerequisites": ["level-9"],
    },
    11: {
        "slug": "ssh-security",
        "icon": "🔑",
        "title": {"es": "SSH y Seguridad", "en": "SSH and Security"},
        "description": {
            "es": "Conexiones seguras con SSH, autenticación por llaves, y fundamentos de seguridad Linux.",
            "en": "Secure connections with SSH, key authentication, and Linux security fundamentals.",
        },
        "skills": ["ssh", "ssh-keys", "scp-rsync", "fail2ban", "security-hardening"],
        "prerequisites": ["level-10"],
    },
    12: {
        "slug": "advanced-scripting",
        "icon": "🚀",
        "title": {"es": "Scripting Avanzado", "en": "Advanced Scripting"},
        "description": {
            "es": "Técnicas avanzadas de Bash: manejo de errores, arrays, debugging y scripts de producción.",
            "en": "Advanced Bash techniques: error handling, arrays, debugging and production scripts.",
        },
        "skills": ["error-handling", "arrays", "debugging", "production-scripts", "cron"],
        "prerequisites": ["level-11"],
    },
    13: {
        "slug": "git-basics",
        "icon": "🌿",
        "title": {"es": "Git y Control de Versiones", "en": "Git and Version Control"},
        "description": {
            "es": "Domina Git: commits, branches, merges, remotes y flujos de trabajo colaborativos.",
            "en": "Master Git: commits, branches, merges, remotes and collaborative workflows.",
        },
        "skills": ["git-basics", "branches", "merging", "remotes", "github-gitlab"],
        "prerequisites": ["level-12"],
    },
    14: {
        "slug": "docker",
        "icon": "🐳",
        "title": {"es": "Docker Fundamentos", "en": "Docker Fundamentals"},
        "description": {
            "es": "Aprende contenedores Docker: imágenes, Dockerfiles, volumes y Docker Compose.",
            "en": "Learn Docker containers: images, Dockerfiles, volumes and Docker Compose.",
        },
        "skills": ["docker-basics", "dockerfiles", "images", "volumes", "docker-compose"],
        "prerequisites": ["level-13"],
    },
    15: {
        "slug": "kubernetes",
        "icon": "☸️",
        "title": {"es": "Kubernetes Fundamentos", "en": "Kubernetes Fundamentals"},
        "description": {
            "es": "Introducción a Kubernetes: pods, deployments, services y kubectl básico.",
            "en": "Introduction to Kubernetes: pods, deployments, services and basic kubectl.",
        },
        "skills": ["k8s-basics", "pods", "deployments", "services", "kubectl"],
        "prerequisites": ["level-14"],
    },
}

# Topic-specific code samples and concepts keyed by lesson slug
TOPIC_CODE: dict[str, str] = {
    "shell-scripting-intro": "#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh",
    "variables-environment": "NAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"",
    "user-input-arguments": "echo \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host",
    "conditionals": "if [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi",
    "test-comparisons": "[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]",
    "loops": "for f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done",
    "functions": "log() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }",
    "exit-codes": "command || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT",
    "nano-basics": "nano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit",
    "vim-intro": "vim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit",
    "vim-editing": "dd   \" delete line\nyyP  \" yank and paste below\nu    \" undo",
    "vim-search-replace": ":%s/old/new/g\n/pattern then n/N",
    "vim-advanced": ":split file2\nCtrl+w w  \" cycle windows\n:tabe file3",
    "vimrc-config": "echo 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc",
    "grep-basics": "grep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log",
    "regex-intro": "grep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported",
    "sed-basics": "sed -n '1,10p' file\nsed 's/foo/bar/g' file > out",
    "awk-basics": "awk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv",
    "cut-sort-uniq": "cut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head",
    "wc-tr-tee": "wc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out",
    "pipes-redirection": "cmd 2>&1 | tee full.log\ncmd >out 2>err",
    "package-managers-intro": "apt-cache policy nginx\ndnf repolist",
    "apt-debian": "sudo apt update\nsudo apt install -y curl\napt show curl",
    "dnf-fedora": "sudo dnf install -y htop\nrpm -qi htop",
    "pacman-arch": "sudo pacman -Syu\nyay -S package  # AUR helper",
    "snap-flatpak-appimage": "snap install hello-world\nflatpak install flathub org.gimp.GIMP",
    "compile-from-source": "./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install",
    "networking-basics": "ip -4 addr\nss -tuln | head",
    "network-interfaces": "ip link show\nsudo ip addr add 10.0.0.5/24 dev eth0",
    "connectivity-tools": "ping -c 4 1.1.1.1\ntraceroute example.com",
    "dns-tools": "dig +short example.com A\ndig @8.8.8.8 example.com MX",
    "netstat-ss": "ss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN",
    "curl-wget": "curl -fsSL https://example.com/health\nwget -qO- https://example.com",
    "network-config-files": "cat /etc/resolv.conf\ncat /etc/hosts",
    "network-troubleshooting": "ip -br addr\nping -c2 1.1.1.1\ndig +short example.com\nss -tuln | head",
    "systemd-intro": "systemctl list-units --type=service | head\nsystemctl get-default",
    "systemctl-basics": "sudo systemctl status ssh\nsudo systemctl restart nginx",
    "service-files": "sudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service",
    "journalctl": "journalctl -u nginx -n 50 --no-pager\njournalctl -p err -b",
    "timers-cron": "crontab -e\nsystemctl list-timers",
    "boot-targets": "systemctl get-default\nsystemctl isolate multi-user.target",
    "ssh-basics": "ssh user@host\nssh -v user@host  # verbose debug",
    "ssh-keys": "ssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host",
    "ssh-config": "Host prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519",
    "scp-rsync": "scp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/",
    "ssh-tunneling": "ssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS",
    "firewall-basics": "sudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose",
    "security-hardening": "sudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null",
    "advanced-variables": "arr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"",
    "regex-in-bash": "[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match",
    "debugging-scripts": "bash -x script.sh\nset -euo pipefail",
    "subshells-processes": "diff <(sort a) <(sort b)\n( cd /tmp && pwd )",
    "signal-handling": "trap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM",
    "getopts-arguments": "while getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done",
    "best-practices": "shellcheck script.sh\n# quote vars, use [[ ]], avoid eval",
    "git-intro": "git init\ngit config user.email \"you@example.com\"",
    "git-basics": "git status\ngit add -p\ngit commit -m \"feat: add healthcheck\"",
    "git-branches": "git switch -c feature/login\ngit merge main",
    "git-remote": "git remote add origin git@github.com:org/repo.git\ngit push -u origin main",
    "git-conflicts": "git merge feature\n# edit files, git add, git commit",
    "git-advanced": "git stash push -m wip\ngit cherry-pick abc123\ngit reflog",
    "git-workflows": "# trunk-based: short-lived branches\n# GitFlow: develop + release branches",
    "docker-intro": "docker version\ndocker info",
    "docker-images": "docker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0",
    "docker-containers": "docker run -d --name web -p 8080:80 nginx\ndocker logs -f web",
    "dockerfile": "FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]",
    "docker-volumes": "docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres",
    "docker-networking": "docker network create appnet\ndocker run --network appnet --name api myapi",
    "docker-compose": "docker compose up -d\ndocker compose ps",
    "k8s-intro": "kubectl cluster-info\nkubectl get nodes",
    "k8s-architecture": "# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy",
    "kubectl-basics": "kubectl get all -A\nkubectl apply -f deployment.yaml",
    "pods-deployments": "kubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3",
    "services-networking": "kubectl expose deployment web --port=80 --type=NodePort",
    "configmaps-secrets": "kubectl create configmap app-config --from-literal=LOG_LEVEL=debug",
    "volumes-storage": "kubectl get pvc\nkubectl describe pv",
    "helm-basics": "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql",
}

TOPIC_CONCEPT_ES: dict[str, str] = {}
TOPIC_CONCEPT_EN: dict[str, str] = {}


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def parse_bilingual_block(text: str, key: str) -> dict[str, str] | None:
    m = re.search(
        rf"{key}:\s*\{{\s*es:\s*'((?:\\'|[^'])*)'\s*,\s*en:\s*'((?:\\'|[^'])*)'\s*\}}",
        text,
        re.DOTALL,
    )
    if not m:
        m = re.search(
            rf'{key}:\s*\{{\s*es:\s*"((?:\\"|[^"])*)"\s*,\s*en:\s*"((?:\\"|[^"])*)"\s*\}}',
            text,
            re.DOTALL,
        )
    if not m:
        return None
    es, en = m.group(1), m.group(2)
    return {"es": es.replace("\\'", "'"), "en": en.replace("\\'", "'")}


def parse_lessons(level: int) -> list[dict]:
    src = (DATA_DIR / f"level-{level}" / "index.ts").read_text(encoding="utf-8")
    chunk = re.search(r"export const level\d+Lessons.*?=\s*\[(.*?)\];", src, re.DOTALL)
    if not chunk:
        raise RuntimeError(f"lessons not found level {level}")
    body = chunk.group(1)
    parts = re.split(r"\n  \},\n  \{", body)
    lessons = []
    for i, part in enumerate(parts):
        part = part.strip().strip("{").strip("}")
        id_m = re.search(r"id:\s*'([^']+)'", part)
        slug_m = re.search(r"slug:\s*'([^']+)'", part)
        dur_m = re.search(r"duration:\s*(\d+)", part)
        ord_m = re.search(r"order:\s*(\d+)", part)
        title = parse_bilingual_block(part, "title")
        desc = parse_bilingual_block(part, "description")
        if not all([id_m, slug_m, dur_m, ord_m, title, desc]):
            continue
        lessons.append(
            {
                "id": id_m.group(1),
                "slug": slug_m.group(1),
                "title": title,
                "description": desc,
                "duration": int(dur_m.group(1)),
                "order": int(ord_m.group(1)),
            }
        )
    lessons.sort(key=lambda x: x["order"])
    return lessons


def parse_labs(level: int) -> list[dict]:
    src = (DATA_DIR / f"level-{level}" / "index.ts").read_text(encoding="utf-8")
    chunk = re.search(r"export const level\d+Labs.*?=\s*\[(.*?)\];", src, re.DOTALL)
    if not chunk:
        return []
    body = chunk.group(1)
    if not body.strip():
        return []
    parts = re.split(r"\n  \},\n  \{", body)
    labs = []
    for part in parts:
        part = part.strip().strip("{").strip("}")
        id_m = re.search(r"id:\s*'([^']+)'", part)
        slug_m = re.search(r"slug:\s*'([^']+)'", part)
        diff_m = re.search(r"difficulty:\s*'([^']+)'", part)
        dur_m = re.search(r"duration:\s*(\d+)", part)
        title = parse_bilingual_block(part, "title")
        desc = parse_bilingual_block(part, "description")
        if not all([id_m, slug_m, title, desc]):
            continue
        objectives_es, objectives_en = [], []
        for obj in re.finditer(
            r"\{\s*es:\s*'((?:\\'|[^'])*)'\s*,\s*en:\s*'((?:\\'|[^'])*)'\s*\}", part
        ):
            objectives_es.append(obj.group(1).replace("\\'", "'"))
            objectives_en.append(obj.group(2).replace("\\'", "'"))
        labs.append(
            {
                "id": id_m.group(1),
                "slug": slug_m.group(1),
                "title": title,
                "description": desc,
                "difficulty": (diff_m.group(1) if diff_m else "intermediate").upper(),
                "duration": int(dur_m.group(1)) if dur_m else 45,
                "objectives_es": objectives_es,
                "objectives_en": objectives_en,
            }
        )
    return labs


def parse_exam(level: int) -> dict | None:
    src = (DATA_DIR / f"level-{level}" / "index.ts").read_text(encoding="utf-8")
    chunk = re.search(r"export const level\d+Exam.*?=\s*\{(.*?)\n\};", src, re.DOTALL)
    if not chunk:
        return None
    body = chunk.group(1)
    ps = re.search(r"passingScore:\s*(\d+)", body)
    tl = re.search(r"timeLimit:\s*(\d+)", body)
    questions = []
    q_parts = re.split(r"\n    \},\n    \{", body)
    for qp in q_parts:
        if "question:" not in qp:
            continue
        id_m = re.search(r"id:\s*'([^']+)'", qp)
        q = parse_bilingual_block(qp, "question")
        expl = parse_bilingual_block(qp, "explanation")
        ca = re.search(r"correctAnswer:\s*'([^']+)'", qp)
        if not all([id_m, q, expl, ca]):
            continue
        opts = []
        for om in re.finditer(
            r"\{\s*id:\s*'([a-d])'\s*,\s*text:\s*\{\s*es:\s*'((?:\\'|[^'])*)'\s*,\s*en:\s*'((?:\\'|[^'])*)'\s*\}\s*\}",
            qp,
        ):
            opts.append(
                {
                    "id": om.group(1),
                    "es": om.group(2).replace("\\'", "'"),
                    "en": om.group(3).replace("\\'", "'"),
                }
            )
        if len(opts) < 2:
            continue
        letter_to_idx = {o["id"]: str(i) for i, o in enumerate(opts)}
        questions.append(
            {
                "id": id_m.group(1),
                "question": q,
                "options_es": [o["es"] for o in opts],
                "options_en": [o["en"] for o in opts],
                "correctAnswer": letter_to_idx.get(ca.group(1), "0"),
                "explanation": expl,
            }
        )
    return {
        "passingScore": int(ps.group(1)) if ps else 80,
        "timeLimit": int(tl.group(1)) if tl else 30,
        "questions": questions,
    }


def concept_for_slug(slug: str, title: dict[str, str]) -> tuple[str, str]:
    code = TOPIC_CODE.get(slug, "# practice commands for this topic")
    es = f"""En producción, dominar **{title['es']}** reduce errores manuales y acelera incident response.

Patrones clave:
- Documenta supuestos (SO, paths, permisos).
- Valida entradas antes de actuar sobre el sistema.
- Prefiere herramientas idempotentes (re-ejecutar no rompe).

Ejemplo de referencia:
```bash
{code}
```"""
    en = f"""In production, mastering **{title['en']}** reduces manual mistakes and speeds incident response.

Key patterns:
- Document assumptions (OS, paths, permissions).
- Validate inputs before mutating the system.
- Prefer idempotent tools (safe to re-run).

Reference example:
```bash
{code}
```"""
    return es, en


def _exercise_block(level: int, lesson_num: int, lid: str, order: int, slug: str, ex: dict) -> str:
    return f"""  {{
    id: "ex-{level}-{lesson_num}-{order}",
    lessonId: {js_str(lid)},
    slug: {js_str(slug)},
    type: "MULTIPLE_CHOICE",
    question: {{
      es: {js_str(ex['question']['es'])},
      en: {js_str(ex['question']['en'])},
    }},
    options: {{ es: {json.dumps(ex['options']['es'], ensure_ascii=False)}, en: {json.dumps(ex['options']['en'], ensure_ascii=False)} }},
    correctAnswer: {js_str(ex['correctAnswer'])},
    explanation: {{
      es: {js_str(ex['explanation']['es'])},
      en: {js_str(ex['explanation']['en'])},
    }},
    hints: {{ es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] }},
    order: {order},
  }}"""


def emit_lesson_file(level: int, lesson: dict, lesson_num: int) -> str:
    lid = lesson["id"]
    slug = lesson["slug"]
    export_name = f"lesson{level}{lesson_num}"
    rich = get_rich(slug, lesson["title"], lesson["description"])
    if rich:
        es_intro = rich["intro_es"]
        en_intro = rich["intro_en"]
        es_kc = rich["kc_es"]
        en_kc = rich["kc_en"]
        tip_es = rich["tip_es"]
        tip_en = rich["tip_en"]
    else:
        es_intro = (
            f"Esta lección cubre **{lesson['title']['es']}**: {lesson['description']['es']} "
            "En entornos Linux/DevOps usarás estos conceptos diariamente en servidores, CI y automatización."
        )
        en_intro = (
            f"This lesson covers **{lesson['title']['en']}**: {lesson['description']['en']} "
            "On Linux/DevOps systems you will use these ideas daily on servers, CI, and automation."
        )
        es_kc, en_kc = concept_for_slug(slug, lesson["title"])
        tip_es = "Combina `man`, `--help` y autocompletado con tab. En scripts, activa `set -euo pipefail` cuando sea seguro."
        tip_en = "Combine `man`, `--help`, and tab completion. In scripts, enable `set -euo pipefail` when safe."
    code = TOPIC_CODE.get(slug, "echo 'practice'")
    warn_es = "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging."
    warn_en = "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging."

    blocks = f"""export const {export_name}Content: ContentBlock[] = [
  {{
    id: "block-{level}-{lesson_num}-1",
    type: "TEXT",
    order: 1,
    content: {{
      es: {{ title: {js_str(lesson['title']['es'])}, text: {js_str(es_intro)} }},
      en: {{ title: {js_str(lesson['title']['en'])}, text: {js_str(en_intro)} }},
    }},
  }},
  {{
    id: "block-{level}-{lesson_num}-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {{
      es: {{ title: "Conceptos clave", text: {js_str(es_kc)} }},
      en: {{ title: "Key concepts", text: {js_str(en_kc)} }},
    }},
  }},
  {{
    id: "block-{level}-{lesson_num}-3",
    type: "CODE",
    order: 3,
    content: {{
      es: {{ title: "Comandos de práctica", code: {js_str(code)}, language: "bash" }},
      en: {{ title: "Practice commands", code: {js_str(code)}, language: "bash" }},
    }},
  }},
  {{
    id: "block-{level}-{lesson_num}-4",
    type: "TIP",
    order: 4,
    content: {{
      es: {{ title: "Tip operacional", text: {js_str(tip_es)} }},
      en: {{ title: "Operational tip", text: {js_str(tip_en)} }},
    }},
  }},
  {{
    id: "block-{level}-{lesson_num}-5",
    type: "WARNING",
    order: 5,
    content: {{
      es: {{ title: "Seguridad", text: {js_str(warn_es)} }},
      en: {{ title: "Safety", text: {js_str(warn_en)} }},
    }},
  }},
];"""

    if rich:
        ex1 = rich["ex1"]
        ex2 = rich["ex2"]
        ex_blocks = ",\n".join(
            [
                _exercise_block(level, lesson_num, lid, 1, "core-concept", ex1),
                _exercise_block(level, lesson_num, lid, 2, "production-practice", ex2),
            ]
        )
        quiz_mc = rich.get("quiz1")
        if quiz_mc:
            q1_question_es = quiz_mc["question"]["es"]
            q1_question_en = quiz_mc["question"]["en"]
            q1_opts_es = quiz_mc["options"]["es"]
            q1_opts_en = quiz_mc["options"]["en"]
            q1_ans = quiz_mc["correctAnswer"]
            q1_expl_es = quiz_mc["explanation"]["es"]
            q1_expl_en = quiz_mc["explanation"]["en"]
        else:
            q1_question_es = f"Repaso: {lesson['description']['es']}"
            q1_question_en = f"Review: {lesson['description']['en']}"
            q1_opts_es = ex1["options"]["es"]
            q1_opts_en = ex1["options"]["en"]
            q1_ans = ex1["correctAnswer"]
            q1_expl_es = ex1["explanation"]["es"]
            q1_expl_en = ex1["explanation"]["en"]
    else:
        ex1_opts_es = ["Opción incorrecta A", "Respuesta correcta", "Opción incorrecta C", "Opción incorrecta D"]
        ex1_opts_en = ["Wrong option A", "Correct answer", "Wrong option C", "Wrong option D"]
        ex2_opts_es = ["Nunca aplica", "A veces aplica", "Depende del contexto", "Siempre aplica sin excepción"]
        ex2_opts_en = ["Never applies", "Sometimes applies", "Depends on context", "Always applies without exception"]
        ex_blocks = f"""  {{
    id: "ex-{level}-{lesson_num}-1",
    lessonId: {js_str(lid)},
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {{
      es: {js_str(f"¿Qué tema central trata esta lección ({lesson['title']['es']})?")},
      en: {js_str(f"What core topic does this lesson cover ({lesson['title']['en']})?")},
    }},
    options: {{ es: {json.dumps(ex1_opts_es, ensure_ascii=False)}, en: {json.dumps(ex1_opts_en, ensure_ascii=False)} }},
    correctAnswer: "1",
    explanation: {{
      es: {js_str(lesson['description']['es'])},
      en: {js_str(lesson['description']['en'])},
    }},
    hints: {{ es: ["Revisa el título y objetivos"], en: ["Review the title and objectives"] }},
    order: 1,
  }},
  {{
    id: "ex-{level}-{lesson_num}-2",
    lessonId: {js_str(lid)},
    slug: "production-practice",
    type: "MULTIPLE_CHOICE",
    question: {{
      es: "En producción, ¿qué práctica es más sensata antes de cambios?",
      en: "In production, which practice is most sensible before changes?",
    }},
    options: {{ es: {json.dumps(ex2_opts_es, ensure_ascii=False)}, en: {json.dumps(ex2_opts_en, ensure_ascii=False)} }},
    correctAnswer: "2",
    explanation: {{
      es: "Valida contexto, permisos y rollback; muchas herramientas dependen del entorno.",
      en: "Validate context, permissions, and rollback; many tools depend on the environment.",
    }},
    hints: {{ es: ["Staging y dry-run"], en: ["Staging and dry-run"] }},
    order: 2,
  }}"""
        q1_question_es = f"Pregunta rápida: {lesson['description']['es']}"
        q1_question_en = f"Quick check: {lesson['description']['en']}"
        q1_opts_es = ex1_opts_es
        q1_opts_en = ex1_opts_en
        q1_ans = "1"
        q1_expl_es = "Repasa la sección KEY_CONCEPT."
        q1_expl_en = "Review the KEY_CONCEPT section."

    return f"""import type {{ Lesson, ContentBlock, Exercise, Quiz }} from "@/types";

{blocks}

export const {export_name}Exercises: Exercise[] = [
{ex_blocks}
];

export const {export_name}Quiz: Quiz = {{
  id: "quiz-{level}-{lesson_num}",
  lessonId: {js_str(lid)},
  questions: [
    {{
      id: "quiz-{level}-{lesson_num}-1",
      type: "MULTIPLE_CHOICE",
      question: {{
        es: {js_str(q1_question_es)},
        en: {js_str(q1_question_en)},
      }},
      options: {{
        es: {json.dumps(q1_opts_es, ensure_ascii=False)},
        en: {json.dumps(q1_opts_en, ensure_ascii=False)},
      }},
      correctAnswer: {js_str(q1_ans)},
      explanation: {{ es: {js_str(q1_expl_es)}, en: {js_str(q1_expl_en)} }},
      points: 5,
    }},
    {{
      id: "quiz-{level}-{lesson_num}-2",
      type: "TRUE_FALSE",
      question: {{
        es: "Probar en un entorno no productivo reduce riesgo.",
        en: "Testing in a non-production environment reduces risk.",
      }},
      correctAnswer: "true",
      explanation: {{ es: "Siempre valida en staging cuando sea posible.", en: "Always validate in staging when possible." }},
      points: 5,
    }},
  ],
  passingScore: 70,
}};

export const {export_name}: Lesson = {{
  id: {js_str(lid)},
  moduleId: "level-{level}",
  slug: {js_str(slug)},
  title: {{ es: {js_str(lesson['title']['es'])}, en: {js_str(lesson['title']['en'])} }},
  description: {{ es: {js_str(lesson['description']['es'])}, en: {js_str(lesson['description']['en'])} }},
  order: {lesson['order']},
  duration: {lesson['duration']},
  contentBlocks: {export_name}Content,
  exercises: {export_name}Exercises,
  quiz: {export_name}Quiz,
}};
"""


def emit_level_index(level: int, lessons: list[dict], labs: list[dict], exam: dict | None) -> str:
    meta = MODULE_META[level]
    lesson_stubs = []
    for les in lessons:
        lesson_stubs.append(
            f"""  {{
    id: {js_str(les['id'])},
    moduleId: "level-{level}",
    slug: {js_str(les['slug'])},
    title: {{ es: {js_str(les['title']['es'])}, en: {js_str(les['title']['en'])} }},
    description: {{ es: {js_str(les['description']['es'])}, en: {js_str(les['description']['en'])} }},
    order: {les['order']},
    duration: {les['duration']},
    contentBlocks: [],
    exercises: [],
    quiz: null,
  }}"""
        )

    lab_blocks = []
    for i, lab in enumerate(labs, 1):
        steps_es = lab["objectives_es"] or ["Completa los objetivos del lab"]
        steps_en = lab["objectives_en"] or ["Complete lab objectives"]
        instr_es = ",\n        ".join(
            f"{{ step: {j + 1}, instruction: {js_str(s)}, expectedResult: {js_str('Hecho')} }}"
            for j, s in enumerate(steps_es)
        )
        instr_en = ",\n        ".join(
            f"{{ step: {j + 1}, instruction: {js_str(s)}, expectedResult: {js_str('Done')} }}"
            for j, s in enumerate(steps_en)
        )
        diff = lab["difficulty"]
        if diff not in ("BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT"):
            diff = "INTERMEDIATE"
        lab_blocks.append(
            f"""  {{
    id: {js_str(lab['id'])},
    moduleId: "level-{level}",
    slug: {js_str(lab['slug'])},
    title: {{ es: {js_str(lab['title']['es'])}, en: {js_str(lab['title']['en'])} }},
    description: {{ es: {js_str(lab['description']['es'])}, en: {js_str(lab['description']['en'])} }},
    objectives: {{ es: {json.dumps(steps_es, ensure_ascii=False)}, en: {json.dumps(steps_en, ensure_ascii=False)} }},
    prerequisites: {{ es: ["Lecciones previas del nivel"], en: ["Previous lessons in this level"] }},
    instructions: {{
      es: [
        {instr_es}
      ],
      en: [
        {instr_en}
      ],
    }},
    hints: {{ es: ["Usa `--help` y revisa logs del sistema"], en: ["Use `--help` and check system logs"] }},
    solution: {{
      es: "Automatiza pasos en un script con validación de errores y mensajes claros.",
      en: "Automate steps in a script with error checking and clear messages.",
    }},
    validationCriteria: [],
    difficulty: "{diff}",
    estimatedTime: {lab['duration']},
    order: {i},
  }}"""
        )

    exam_block = "null"
    if exam and exam["questions"]:
        q_blocks = []
        for q in exam["questions"]:
            q_blocks.append(
                f"""    {{
      id: {js_str(q['id'])},
      type: "MULTIPLE_CHOICE",
      question: {{ es: {js_str(q['question']['es'])}, en: {js_str(q['question']['en'])} }},
      options: {{ es: {json.dumps(q['options_es'], ensure_ascii=False)}, en: {json.dumps(q['options_en'], ensure_ascii=False)} }},
      correctAnswer: {js_str(q['correctAnswer'])},
      explanation: {{ es: {js_str(q['explanation']['es'])}, en: {js_str(q['explanation']['en'])} }},
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "general",
    }}"""
            )
        exam_title_es = f"Examen - {meta['title']['es']}"
        exam_title_en = f"Exam - {meta['title']['en']}"
        exam_block = f"""{{
  id: "exam-level-{level}",
  moduleId: "level-{level}",
  title: {{ es: {js_str(exam_title_es)}, en: {js_str(exam_title_en)} }},
  description: {{ es: {js_str(meta['description']['es'])}, en: {js_str(meta['description']['en'])} }},
  questions: [
{',\n'.join(q_blocks)}
  ],
  timeLimit: {exam['timeLimit']},
  passingScore: {exam['passingScore']},
  maxAttempts: null,
  shuffleQuestions: true,
}}"""

    skills_json = json.dumps(meta["skills"], ensure_ascii=False)
    prereq_json = json.dumps(meta["prerequisites"], ensure_ascii=False)

    return f"""import type {{ Module, Lesson, Lab, Exam }} from "@/types";

export const level{level}Module: Module = {{
  id: "level-{level}",
  courseId: "linux-academy",
  slug: {js_str(meta['slug'])},
  level: {level},
  title: {{ es: {js_str(meta['title']['es'])}, en: {js_str(meta['title']['en'])} }},
  description: {{ es: {js_str(meta['description']['es'])}, en: {js_str(meta['description']['en'])} }},
  icon: {js_str(meta['icon'])},
  order: {level},
  lessons: [],
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: {prereq_json},
  skills: {skills_json},
}};

export const level{level}Lessons: Lesson[] = [
{',\n'.join(lesson_stubs)}
];

export const level{level}Labs: Lab[] = [
{',\n'.join(lab_blocks) if lab_blocks else ''}
];

export const level{level}Exam: Exam = {exam_block};
"""


def patch_registry(levels_info: list[dict]) -> None:
    path = ROOT / "src/content/courses/registry.ts"
    text = path.read_text(encoding="utf-8")
    # Add imports after level-4 imports
    new_imports = []
    lesson_imports = []
    for info in levels_info:
        lv = info["level"]
        new_imports.append(
            f"""import {{
  level{lv}Module,
  level{lv}Lessons,
  level{lv}Labs,
  level{lv}Exam,
}} from "@/content/modules/level-{lv}";"""
        )
        for les in info["lessons"]:
            num = les["order"]
            export_name = f"lesson{lv}{num}"
            new_imports.append(
                f'import {{ {export_name} }} from "@/content/modules/level-{lv}/lessons/lesson-{lv}-{num}";'
            )

    marker = 'import { lesson47 } from "@/content/modules/level-4/lessons/lesson-4-7";'
    if marker not in text:
        raise RuntimeError("registry marker missing")
    text = text.replace(marker, marker + "\n" + "\n".join(new_imports))

    registry_entries = []
    slug_maps = []
    for info in levels_info:
        lv = info["level"]
        entries = ",\n".join(f'  "{l["slug"]}": lesson{lv}{l["order"]}' for l in info["lessons"])
        slug_maps.append(
            f"""const level{lv}LessonBySlug: Record<string, Lesson> = {{
{entries},
}};"""
        )
        registry_entries.append(
            f"""  "level-{lv}": {{
    module: level{lv}Module,
    lessons: level{lv}Lessons,
    labs: level{lv}Labs,
    exam: level{lv}Exam,
    lessonBySlug: level{lv}LessonBySlug,
  }},"""
        )

    insert_after = "const level4LessonBySlug: Record<string, Lesson> = {"
    idx = text.find(insert_after)
    if idx == -1:
        raise RuntimeError("level4LessonBySlug not found")
    # insert slug maps before export const courseRegistry
    reg_idx = text.find("export const courseRegistry")
    text = text[:reg_idx] + "\n".join(slug_maps) + "\n\n" + text[reg_idx:]

    text = text.replace(
        """  "level-4": {
    module: level4Module,
    lessons: level4Lessons,
    labs: level4Labs,
    exam: level4Exam,
    lessonBySlug: level4LessonBySlug,
  },
};""",
        """  "level-4": {
    module: level4Module,
    lessons: level4Lessons,
    labs: level4Labs,
    exam: level4Exam,
    lessonBySlug: level4LessonBySlug,
  },
"""
        + "\n".join(registry_entries)
        + "\n};",
    )
    path.write_text(text, encoding="utf-8")


def patch_roadmap(levels_info: list[dict]) -> None:
    path = ROOT / "src/pages/Roadmap.tsx"
    text = path.read_text(encoding="utf-8")
    new_levels = []
    for info in levels_info:
        lv = info["level"]
        meta = MODULE_META[lv]
        duration = sum(l["duration"] for l in info["lessons"]) + sum(l["duration"] for l in info["labs"])
        skills_short = meta["skills"][:4]
        skills_arr = ", ".join(f'"{s}"' for s in skills_short)
        new_levels.append(
            f"""  {{ 
    id: {lv}, 
    icon: {js_str(meta['icon'])}, 
    title: {{ es: {js_str(meta['title']['es'])}, en: {js_str(meta['title']['en'])} }},
    description: {{ es: {js_str(meta['description']['es'])}, en: {js_str(meta['description']['en'])} }},
    href: "/courses/level-{lv}",
    lessons: {len(info['lessons'])},
    labs: {len(info['labs'])},
    duration: {duration},
    skills: [{skills_arr}]
  }},"""
        )

    start = text.find("  { \n    id: 5,")
    end = text.find("\n];", start)
    if start == -1 or end == -1:
        raise RuntimeError("Roadmap block not found")
    text_new = text[:start] + "\n".join(new_levels) + "\n" + text[end:]
    path.write_text(text_new, encoding="utf-8")


def patch_command_palette(levels_info: list[dict]) -> None:
    path = ROOT / "src/components/CommandPalette.tsx"
    text = path.read_text(encoding="utf-8")
    entries = []
    for info in levels_info:
        lv = info["level"]
        meta = MODULE_META[lv]
        kw = ", ".join(f'"{s}"' for s in meta["skills"][:5])
        entries.append(
            f'  {{ id: "level-{lv}", type: "level", title: {{ es: "Nivel {lv}: {meta["title"]["es"]}", en: "Level {lv}: {meta["title"]["en"]}" }}, icon: <BookOpen className="h-5 w-5" />, path: "/courses/level-{lv}", keywords: [{kw}] }},'
        )
    marker = '  { id: "level-4", type: "level", title: { es: "Nivel 4: Procesos y Sistema", en: "Level 4: Processes and System" }, icon: <BookOpen className="h-5 w-5" />, path: "/courses/level-4", keywords: ["ps", "top", "kill", "signals", "nohup"] },'
    text = text.replace(marker, marker + "\n" + "\n".join(entries))
    path.write_text(text, encoding="utf-8")


def main() -> None:
    lessons_only = "--lessons-only" in sys.argv or os.environ.get("GENERATE_LESSONS_ONLY") == "1"
    levels_info = []
    created: list[str] = []
    for level in range(5, 16):
        lessons = parse_lessons(level)
        labs = parse_labs(level)
        exam = parse_exam(level)
        level_dir = MODULES_DIR / f"level-{level}"
        lessons_dir = level_dir / "lessons"
        lessons_dir.mkdir(parents=True, exist_ok=True)
        if not lessons_only:
            index_path = level_dir / "index.ts"
            index_path.write_text(emit_level_index(level, lessons, labs, exam), encoding="utf-8")
            created.append(str(index_path.relative_to(ROOT)))
        for les in lessons:
            num = les["order"]
            fp = lessons_dir / f"lesson-{level}-{num}.ts"
            fp.write_text(emit_lesson_file(level, les, num), encoding="utf-8")
            created.append(str(fp.relative_to(ROOT)))
        levels_info.append({"level": level, "lessons": lessons, "labs": labs})

    if not lessons_only:
        patch_registry(levels_info)
        created.append("src/content/courses/registry.ts")
        patch_roadmap(levels_info)
        created.append("src/pages/Roadmap.tsx")
        patch_command_palette(levels_info)
        created.append("src/components/CommandPalette.tsx")

    manifest = ROOT / "tools/generated-levels-5-15.json"
    manifest.write_text(json.dumps({"files": created, "count": len(created)}, indent=2), encoding="utf-8")
    print(f"Generated {len(created)} files/updates")


if __name__ == "__main__":
    main()
