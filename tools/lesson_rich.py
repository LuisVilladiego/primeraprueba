"""Rich bilingual lesson content for levels 5-15 generator."""
from __future__ import annotations

_LESSONS: dict = {
  "shell-scripting-intro": {
    "note_es": "Un script Bash combina shebang, permisos de ejecución y convenciones de fail-fast. En CI/CD el exit code del script decide si el pipeline continúa.",
    "note_en": "A Bash script combines shebang, execute permission, and fail-fast conventions. In CI/CD the script exit code gates the pipeline.",
    "code": "#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh",
    "tip_es": "Ejecuta shellcheck en cada PR; desactiva set -u temporalmente si procesas variables opcionales de entorno legacy.",
    "tip_en": "Run shellcheck on every PR; temporarily disable set -u when ingesting legacy optional env vars.",
    "ex1": {
      "question": {
        "es": "¿Qué hace set -e?",
        "en": "What does set -e do?"
      },
      "options": {
        "es": [
          "Ignora errores",
          "Sale ante comando con exit != 0",
          "Desactiva pipes",
          "Solo root"
        ],
        "en": [
          "Ignores errors",
          "Exit on non-zero command",
          "Disables pipes",
          "Root only"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Fail-fast evita estados corruptos a mitad de script.",
        "en": "Fail-fast avoids half-applied state."
      }
    },
    "ex2": {
      "question": {
        "es": "Shebang típico para Bash",
        "en": "Typical shebang for Bash"
      },
      "options": {
        "es": [
          "#!/bin/sh",
          "#!/bin/bash",
          "#!/python",
          "#!/dash"
        ],
        "en": [
          "#!/bin/sh",
          "#!/bin/bash",
          "#!/python",
          "#!/dash"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Bash soporta [[ ]] y arrays.",
        "en": "Bash supports [[ ]] and arrays."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿pipefail?",
        "en": "What is pipefail?"
      },
      "options": {
        "es": [
          "Oculta stderr",
          "Fallo en cualquier etapa del pipe",
          "Cierra stdin",
          "Alias de set -x"
        ],
        "en": [
          "Hides stderr",
          "Failure in any pipeline stage",
          "Closes stdin",
          "Alias for set -x"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Sin pipefail solo cuenta el último comando.",
        "en": "Without pipefail only the last command counts."
      }
    }
  },
  "variables-environment": {
    "note_es": "Variables locales vs exportadas: los hijos solo ven lo exportado. Parameter expansion (${VAR:-default}) evita scripts frágiles.",
    "note_en": "Local vs exported variables: children only see exports. Parameter expansion (${VAR:-default}) avoids brittle scripts.",
    "code": "NAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"",
    "tip_es": "Cita variables en doble comilla; usa readonly para constantes de despliegue.",
    "tip_en": "Double-quote variables; use readonly for deploy constants.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Variables y Variables de Entorno»?",
        "en": "Which tool or idea is central to «Variables and Environment Variables»?"
      },
      "options": {
        "es": [
          "Solo variables environment en teoría",
          "Práctica de variables environment en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only variables environment in theory",
          "Hands-on variables environment on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica variables environment en entornos reales.",
        "en": "This lesson applies variables environment in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "user-input-arguments": {
    "note_es": "$@ preserva argumentos con espacios; read -r evita mangling de backslashes en input interactivo.",
    "note_en": "$@ preserves spaced arguments; read -r avoids backslash mangling on interactive input.",
    "code": "echo \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host",
    "tip_es": "Reenvía args con \"$@\" no con $*.",
    "tip_en": "Forward args with \"$@\" not $*.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Entrada de Usuario y Argumentos»?",
        "en": "Which tool or idea is central to «User Input and Arguments»?"
      },
      "options": {
        "es": [
          "Solo user input arguments en teoría",
          "Práctica de user input arguments en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only user input arguments in theory",
          "Hands-on user input arguments on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica user input arguments en entornos reales.",
        "en": "This lesson applies user input arguments in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "conditionals": {
    "note_es": "[[ ]] no hace word splitting ni pathname expansion; ideal para tests con variables de usuario.",
    "note_en": "[[ ]] skips word splitting and pathname expansion; ideal for user-supplied variables.",
    "code": "if [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi",
    "tip_es": "source (.) archivos de config en lugar de parsear manualmente.",
    "tip_en": "source (.) config files instead of hand parsing.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Condicionales: if, elif, else»?",
        "en": "Which tool or idea is central to «Conditionals: if, elif, else»?"
      },
      "options": {
        "es": [
          "Solo conditionals en teoría",
          "Práctica de conditionals en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only conditionals in theory",
          "Hands-on conditionals on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica conditionals en entornos reales.",
        "en": "This lesson applies conditionals in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "test-comparisons": {
    "note_es": "Usa -eq/-ne para enteros; == dentro de [[ ]] para strings. -x comprueba ejecutable.",
    "note_en": "Use -eq/-ne for integers; == in [[ ]] for strings. -x checks executable.",
    "code": "[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]",
    "tip_es": "Comilla variables en [ ] legacy para evitar syntax errors.",
    "tip_en": "Quote variables in legacy [ ] to avoid syntax errors.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Test y Comparaciones»?",
        "en": "Which tool or idea is central to «Test and Comparisons»?"
      },
      "options": {
        "es": [
          "Solo test comparisons en teoría",
          "Práctica de test comparisons en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only test comparisons in theory",
          "Hands-on test comparisons on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica test comparisons en entornos reales.",
        "en": "This lesson applies test comparisons in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "loops": {
    "note_es": "for/while/until; combina nullglob con globs para evitar literales *.log sin matches.",
    "note_en": "for/while/until; combine nullglob with globs to avoid literal *.log with no matches.",
    "code": "for f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done",
    "tip_es": "while read -r < file evita subshell del pipe si necesitas contadores fuera.",
    "tip_en": "while read -r < file avoids pipe subshell if you need outer counters.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Bucles: for, while, until»?",
        "en": "Which tool or idea is central to «Loops: for, while, until»?"
      },
      "options": {
        "es": [
          "Solo loops en teoría",
          "Práctica de loops en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only loops in theory",
          "Hands-on loops on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica loops en entornos reales.",
        "en": "This lesson applies loops in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "functions": {
    "note_es": "local limita scope; return 0-255; el exit code default es el del último comando en la función.",
    "note_en": "local limits scope; return 0-255; default exit is the last command in the function.",
    "code": "log() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }",
    "tip_es": "Log a stderr con >&2 para no romper pipelines en stdout.",
    "tip_en": "Log to stderr with >&2 so stdout pipelines stay clean.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Funciones en Bash»?",
        "en": "Which tool or idea is central to «Functions in Bash»?"
      },
      "options": {
        "es": [
          "Solo functions en teoría",
          "Práctica de functions en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only functions in theory",
          "Hands-on functions on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica functions en entornos reales.",
        "en": "This lesson applies functions in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "exit-codes": {
    "note_es": "trap EXIT limpia temporales; $? guarda el exit code del último comando foreground.",
    "note_en": "trap EXIT cleans temporaries; $? holds last foreground exit code.",
    "code": "command || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT",
    "tip_es": "Documenta códigos >100 para operadores y playbooks Ansible.",
    "tip_en": "Document codes >100 for operators and Ansible playbooks.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Códigos de Salida y Manejo de Errores»?",
        "en": "Which tool or idea is central to «Exit Codes and Error Handling»?"
      },
      "options": {
        "es": [
          "Solo exit codes en teoría",
          "Práctica de exit codes en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only exit codes in theory",
          "Hands-on exit codes on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica exit codes en entornos reales.",
        "en": "This lesson applies exit codes in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "nano-basics": {
    "note_es": "nano es editor TUI simple: Ctrl+O guarda, Ctrl+W busca, Ctrl+K corta línea. Ideal en servidores sin GUI.",
    "note_en": "nano is a simple TUI editor: Ctrl+O save, Ctrl+W search, Ctrl+K cut line. Great on headless servers.",
    "code": "nano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit",
    "tip_es": "nano -l muestra números de línea; visudo suele usar nano o vim según update-alternatives.",
    "tip_en": "nano -l shows line numbers; visudo may use nano or vim via update-alternatives.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Editor Nano: Básico y Práctico»?",
        "en": "Which tool or idea is central to «Nano Editor: Basic and Practical»?"
      },
      "options": {
        "es": [
          "Solo nano basics en teoría",
          "Práctica de nano basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only nano basics in theory",
          "Hands-on nano basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica nano basics en entornos reales.",
        "en": "This lesson applies nano basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "vim-intro": {
    "note_es": "Modos Normal/Insert/Command-line: ESC vuelve a Normal; i inserta; :wq guarda y sale.",
    "note_en": "Normal/Insert/Command-line modes: ESC to Normal; i insert; :wq save quit.",
    "code": "vim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit",
    "tip_es": "vim +N file abre en línea N; útil para saltar a errores de compilador.",
    "tip_en": "vim +N file opens at line N; handy for compiler error jumps.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Vim»?",
        "en": "Which tool or idea is central to «Introduction to Vim»?"
      },
      "options": {
        "es": [
          "Solo vim intro en teoría",
          "Práctica de vim intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only vim intro in theory",
          "Hands-on vim intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica vim intro en entornos reales.",
        "en": "This lesson applies vim intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "vim-editing": {
    "note_es": "Operadores + movimientos: dd elimina línea, yy yank, p pega; u deshace.",
    "note_en": "Operators + motions: dd deletes line, yy yanks, p puts; u undoes.",
    "code": "dd   \" delete line\nyyP  \" yank and paste below\nu    \" undo",
    "tip_es": "Usa . para repetir último cambio en Normal mode.",
    "tip_en": "Use . to repeat last Normal-mode change.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Edición en Vim»?",
        "en": "Which tool or idea is central to «Editing in Vim»?"
      },
      "options": {
        "es": [
          "Solo vim editing en teoría",
          "Práctica de vim editing en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only vim editing in theory",
          "Hands-on vim editing on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica vim editing en entornos reales.",
        "en": "This lesson applies vim editing in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "vim-search-replace": {
    "note_es": ":%s/old/new/g reemplaza global; flags c confirm, I case sensitive; n/N navega matches.",
    "note_en": ":%s/old/new/g global replace; flags c confirm, I case; n/N navigate matches.",
    "code": ":%s/old/new/g\n/pattern then n/N",
    "tip_es": "Escapa / en patrones o usa otro delimitador :%s#old#new#g.",
    "tip_en": "Escape / in patterns or use another delimiter :%s#old#new#g.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Búsqueda y Reemplazo en Vim»?",
        "en": "Which tool or idea is central to «Search and Replace in Vim»?"
      },
      "options": {
        "es": [
          "Solo vim search replace en teoría",
          "Práctica de vim search replace en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only vim search replace in theory",
          "Hands-on vim search replace on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica vim search replace en entornos reales.",
        "en": "This lesson applies vim search replace in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "vim-advanced": {
    "note_es": "Ventanas :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.",
    "note_en": "Windows :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.",
    "code": ":split file2\nCtrl+w w  \" cycle windows\n:tabe file3",
    "tip_es": "Ctrl+w h/j/k/l mueve foco entre splits sin ratón.",
    "tip_en": "Ctrl+w h/j/k/l moves focus between splits without a mouse.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Vim Avanzado: Buffers, Windows, Tabs»?",
        "en": "Which tool or idea is central to «Advanced Vim: Buffers, Windows, Tabs»?"
      },
      "options": {
        "es": [
          "Solo vim advanced en teoría",
          "Práctica de vim advanced en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only vim advanced in theory",
          "Hands-on vim advanced on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica vim advanced en entornos reales.",
        "en": "This lesson applies vim advanced in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "vimrc-config": {
    "note_es": "~/.vimrc persiste set number, relativenumber, syntax on, tabstop expandtab.",
    "note_en": "~/.vimrc persists set number, relativenumber, syntax on, tabstop expandtab.",
    "code": "echo 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc",
    "tip_es": "Packaging: /etc/vim/vimrc.local para defaults de equipo.",
    "tip_en": "Packaging: /etc/vim/vimrc.local for team defaults.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Configuración de Vim: .vimrc»?",
        "en": "Which tool or idea is central to «Vim Configuration: .vimrc»?"
      },
      "options": {
        "es": [
          "Solo vimrc config en teoría",
          "Práctica de vimrc config en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only vimrc config in theory",
          "Hands-on vimrc config on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica vimrc config en entornos reales.",
        "en": "This lesson applies vimrc config in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "grep-basics": {
    "note_es": "grep filtra líneas; -R recursivo, -n número, -i ignore case; --color=auto resalta.",
    "note_en": "grep filters lines; -R recursive, -n line numbers, -i ignore case; --color=auto highlights.",
    "code": "grep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log",
    "tip_es": "rg/ag suelen ser más rápidos en repos grandes; grep sigue universal en minimal images.",
    "tip_en": "rg/ag are faster in big repos; grep stays universal on minimal images.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Búsqueda de Texto con grep»?",
        "en": "Which tool or idea is central to «Text Search with grep»?"
      },
      "options": {
        "es": [
          "Solo grep basics en teoría",
          "Práctica de grep basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only grep basics in theory",
          "Hands-on grep basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica grep basics en entornos reales.",
        "en": "This lesson applies grep basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "regex-intro": {
    "note_es": "ERE con grep -E: . * + ? [] () |; ancla ^ $; escapa metacaracteres en BRE/ERE según herramienta.",
    "note_en": "ERE with grep -E: . * + ? [] () |; anchors ^ $; escape metachars per BRE/ERE tool.",
    "code": "grep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported",
    "tip_es": "Prueba regex en echo sample | grep -E antes de aplicar sed -i.",
    "tip_en": "Test regex on echo sample | grep -E before sed -i.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Expresiones Regulares»?",
        "en": "Which tool or idea is central to «Introduction to Regular Expressions»?"
      },
      "options": {
        "es": [
          "Solo regex intro en teoría",
          "Práctica de regex intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only regex intro in theory",
          "Hands-on regex intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica regex intro en entornos reales.",
        "en": "This lesson applies regex intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "sed-basics": {
    "note_es": "sed stream editor: s/// sustituye; -n suprime print; direcciones 1,10p; -i.ed backup extension.",
    "note_en": "sed stream editor: s/// substitutes; -n suppress; addresses 1,10p; -i.ed backup ext.",
    "code": "sed -n '1,10p' file\nsed 's/foo/bar/g' file > out",
    "tip_es": "Nunca sed -i en prod sin backup ni diff previo.",
    "tip_en": "Never sed -i in prod without backup and prior diff.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Transformar Texto con sed»?",
        "en": "Which tool or idea is central to «Transform Text with sed»?"
      },
      "options": {
        "es": [
          "Solo sed basics en teoría",
          "Práctica de sed basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only sed basics in theory",
          "Hands-on sed basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica sed basics en entornos reales.",
        "en": "This lesson applies sed basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "awk-basics": {
    "note_es": "awk procesa columnas: $0 línea, $1..NF campos, -F delimitador; END{} agrega totales.",
    "note_en": "awk processes columns: $0 line, $1..NF fields, -F separator; END{} aggregates totals.",
    "code": "awk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv",
    "tip_es": "Prefiere awk para CSV simple; usa csvkit/python para CSV con comillas embebidas.",
    "tip_en": "Prefer awk for simple CSV; csvkit/python for quoted CSV.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Procesamiento con awk»?",
        "en": "Which tool or idea is central to «Processing with awk»?"
      },
      "options": {
        "es": [
          "Solo awk basics en teoría",
          "Práctica de awk basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only awk basics in theory",
          "Hands-on awk basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica awk basics en entornos reales.",
        "en": "This lesson applies awk basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "cut-sort-uniq": {
    "note_es": "cut extrae campos; sort ordena; uniq -c cuenta líneas consecutivas (sort antes!).",
    "note_en": "cut extracts fields; sort orders; uniq -c counts consecutive duplicates (sort first!).",
    "code": "cut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head",
    "tip_es": "sort -t: -k3 -n ordena /etc/passwd por UID numérico.",
    "tip_en": "sort -t: -k3 -n sorts /etc/passwd by numeric UID.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «cut, sort y uniq»?",
        "en": "Which tool or idea is central to «cut, sort and uniq»?"
      },
      "options": {
        "es": [
          "Solo cut sort uniq en teoría",
          "Práctica de cut sort uniq en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only cut sort uniq in theory",
          "Hands-on cut sort uniq on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica cut sort uniq en entornos reales.",
        "en": "This lesson applies cut sort uniq in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "wc-tr-tee": {
    "note_es": "wc -l/-w/-c cuenta; tr traduce caracteres; tee duplica stdout a archivo y terminal.",
    "note_en": "wc -l/-w/-c counts; tr translates chars; tee duplicates stdout to file and terminal.",
    "code": "wc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out",
    "tip_es": "tee -a append logs de instalación largos mientras ves progreso.",
    "tip_en": "tee -a appends long install logs while you watch progress.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «wc, tr y tee»?",
        "en": "Which tool or idea is central to «wc, tr and tee»?"
      },
      "options": {
        "es": [
          "Solo wc tr tee en teoría",
          "Práctica de wc tr tee en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only wc tr tee in theory",
          "Hands-on wc tr tee on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica wc tr tee en entornos reales.",
        "en": "This lesson applies wc tr tee in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "pipes-redirection": {
    "note_es": "stdout 1>, stderr 2>, 2>&1 merge; pipes conectan stdout→stdin; here-docs <<EOF.",
    "note_en": "stdout 1>, stderr 2>, 2>&1 merge; pipes connect stdout→stdin; here-docs <<EOF.",
    "code": "cmd 2>&1 | tee full.log\ncmd >out 2>err",
    "tip_es": "Orden importa: cmd 2>&1 | tee log captura ambos streams.",
    "tip_en": "Order matters: cmd 2>&1 | tee log captures both streams.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Pipes y Redirección Avanzada»?",
        "en": "Which tool or idea is central to «Pipes and Advanced Redirection»?"
      },
      "options": {
        "es": [
          "Solo pipes redirection en teoría",
          "Práctica de pipes redirection en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only pipes redirection in theory",
          "Hands-on pipes redirection on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica pipes redirection en entornos reales.",
        "en": "This lesson applies pipes redirection in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "package-managers-intro": {
    "note_es": "Distros usan apt/dnf/pacman/snap/flatpak; cada uno resuelve dependencias y firmas distinto.",
    "note_en": "Distros use apt/dnf/pacman/snap/flatpak; each resolves deps and signatures differently.",
    "code": "apt-cache policy nginx\ndnf repolist",
    "tip_es": "Documenta mirror interno y pinning en servidores regulados.",
    "tip_en": "Document internal mirrors and pinning on regulated servers.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Gestores de Paquetes»?",
        "en": "Which tool or idea is central to «Introduction to Package Managers»?"
      },
      "options": {
        "es": [
          "Solo package managers intro en teoría",
          "Práctica de package managers intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only package managers intro in theory",
          "Hands-on package managers intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica package managers intro en entornos reales.",
        "en": "This lesson applies package managers intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "apt-debian": {
    "note_es": "apt update refresca índices; install/remove/purge; apt-cache policy muestra prioridades pinning.",
    "note_en": "apt update refreshes indexes; install/remove/purge; apt-cache policy shows pinning.",
    "code": "sudo apt update\nsudo apt install -y curl\napt show curl",
    "tip_es": "DEBIAN_FRONTEND=noninteractive evita prompts en CI.",
    "tip_en": "DEBIAN_FRONTEND=noninteractive avoids CI prompts.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «APT en Debian/Ubuntu»?",
        "en": "Which tool or idea is central to «APT on Debian/Ubuntu»?"
      },
      "options": {
        "es": [
          "Solo apt debian en teoría",
          "Práctica de apt debian en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only apt debian in theory",
          "Hands-on apt debian on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica apt debian en entornos reales.",
        "en": "This lesson applies apt debian in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "dnf-fedora": {
    "note_es": "dnf install/remove; repolist; rpm -qi consulta metadatos RPM instalados.",
    "note_en": "dnf install/remove; repolist; rpm -qi queries installed RPM metadata.",
    "code": "sudo dnf install -y htop\nrpm -qi htop",
    "tip_es": "dnf history undo revierte transacciones recientes.",
    "tip_en": "dnf history undo rolls back recent transactions.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «DNF en Fedora/RHEL»?",
        "en": "Which tool or idea is central to «DNF on Fedora/RHEL»?"
      },
      "options": {
        "es": [
          "Solo dnf fedora en teoría",
          "Práctica de dnf fedora en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only dnf fedora in theory",
          "Hands-on dnf fedora on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica dnf fedora en entornos reales.",
        "en": "This lesson applies dnf fedora in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "pacman-arch": {
    "note_es": "pacman -Syu sincroniza; -Qi info; AUR helpers (yay) compilan PKGBUILDs de terceros.",
    "note_en": "pacman -Syu syncs; -Qi info; AUR helpers (yay) build third-party PKGBUILDs.",
    "code": "sudo pacman -Syu\nyay -S package  # AUR helper",
    "tip_es": "Revisa PKGBUILD antes de instalar desde AUR.",
    "tip_en": "Review PKGBUILD before installing from AUR.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Pacman en Arch Linux»?",
        "en": "Which tool or idea is central to «Pacman on Arch Linux»?"
      },
      "options": {
        "es": [
          "Solo pacman arch en teoría",
          "Práctica de pacman arch en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only pacman arch in theory",
          "Hands-on pacman arch on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica pacman arch en entornos reales.",
        "en": "This lesson applies pacman arch in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "snap-flatpak-appimage": {
    "note_es": "snap confinement; flatpak remotes flathub; AppImage portable sin install system-wide.",
    "note_en": "snap confinement; flatpak remotes flathub; AppImage portable without system install.",
    "code": "snap install hello-world\nflatpak install flathub org.gimp.GIMP",
    "tip_es": "En servidores headless evita snapd salvo necesidad; prefer packages nativos.",
    "tip_en": "On headless servers avoid snapd unless needed; prefer native packages.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Paquetes Universales: Snap, Flatpak, AppImage»?",
        "en": "Which tool or idea is central to «Universal Packages: Snap, Flatpak, AppImage»?"
      },
      "options": {
        "es": [
          "Solo snap flatpak appimage en teoría",
          "Práctica de snap flatpak appimage en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only snap flatpak appimage in theory",
          "Hands-on snap flatpak appimage on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica snap flatpak appimage en entornos reales.",
        "en": "This lesson applies snap flatpak appimage in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "compile-from-source": {
    "note_es": "./configure && make && make install; check logs config.log; DESTDIR para empaquetado.",
    "note_en": "./configure && make && make install; check config.log; DESTDIR for packaging.",
    "code": "./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install",
    "tip_es": "Usa checkinstall o empaqueta para no mezclar archivos sueltos en /usr/local.",
    "tip_en": "Use checkinstall or package to avoid stray /usr/local files.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Compilar desde Código Fuente»?",
        "en": "Which tool or idea is central to «Compile from Source»?"
      },
      "options": {
        "es": [
          "Solo compile from source en teoría",
          "Práctica de compile from source en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only compile from source in theory",
          "Hands-on compile from source on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica compile from source en entornos reales.",
        "en": "This lesson applies compile from source in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "networking-basics": {
    "note_es": "TCP/IP: IP + máscara + gateway; puertos identifican servicios; UDP vs TCP confiabilidad.",
    "note_en": "TCP/IP: IP + mask + gateway; ports identify services; UDP vs TCP reliability.",
    "code": "ip -4 addr\nss -tuln | head",
    "tip_es": "Tabla rutas: ip route; default via gateway en la misma L2/L3.",
    "tip_en": "Routing table: ip route; default via gateway on correct L2/L3.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Fundamentos de Redes»?",
        "en": "Which tool or idea is central to «Networking Basics»?"
      },
      "options": {
        "es": [
          "Solo networking basics en teoría",
          "Práctica de networking basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only networking basics in theory",
          "Hands-on networking basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica networking basics en entornos reales.",
        "en": "This lesson applies networking basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "network-interfaces": {
    "note_es": "ip link/addr/route reemplaza ifconfig en modern Linux; nombres predictivos enp0s3.",
    "note_en": "ip link/addr/route replaces ifconfig on modern Linux; predictable names enp0s3.",
    "code": "ip link show\nsudo ip addr add 10.0.0.5/24 dev eth0",
    "tip_es": "Cambios con ip son volátiles hasta netplan/NetworkManager persista.",
    "tip_en": "ip changes are volatile until netplan/NetworkManager persists.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Interfaces de Red: ip, ifconfig»?",
        "en": "Which tool or idea is central to «Network Interfaces: ip, ifconfig»?"
      },
      "options": {
        "es": [
          "Solo network interfaces en teoría",
          "Práctica de network interfaces en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only network interfaces in theory",
          "Hands-on network interfaces on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica network interfaces en entornos reales.",
        "en": "This lesson applies network interfaces in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "connectivity-tools": {
    "note_es": "ping ICMP reachability; traceroute/tracepath muestra hops; mtr combina ambos interactivo.",
    "note_en": "ping ICMP reachability; traceroute/tracepath shows hops; mtr combines interactively.",
    "code": "ping -c 4 1.1.1.1\ntraceroute example.com",
    "tip_es": "Firewall puede bloquear ICMP pero TCP/443 aún funciona—no confíes solo en ping.",
    "tip_en": "Firewalls may block ICMP while TCP/443 works—do not rely on ping alone.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Herramientas de Conectividad: ping, traceroute»?",
        "en": "Which tool or idea is central to «Connectivity Tools: ping, traceroute»?"
      },
      "options": {
        "es": [
          "Solo connectivity tools en teoría",
          "Práctica de connectivity tools en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only connectivity tools in theory",
          "Hands-on connectivity tools on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica connectivity tools en entornos reales.",
        "en": "This lesson applies connectivity tools in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "dns-tools": {
    "note_es": "dig +trace +short; @server fuerza resolver; registros A/AAAA/MX/TXT/CNAME.",
    "note_en": "dig +trace +short; @server forces resolver; A/AAAA/MX/TXT/CNAME records.",
    "code": "dig +short example.com A\ndig @8.8.8.8 example.com MX",
    "tip_es": "Compara dig @1.1.1.1 vs resolver local para separar client vs authoritative issues.",
    "tip_en": "Compare dig @1.1.1.1 vs local resolver to split client vs auth issues.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «DNS: nslookup, dig, host»?",
        "en": "Which tool or idea is central to «DNS: nslookup, dig, host»?"
      },
      "options": {
        "es": [
          "Solo dns tools en teoría",
          "Práctica de dns tools en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only dns tools in theory",
          "Hands-on dns tools on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica dns tools en entornos reales.",
        "en": "This lesson applies dns tools in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "netstat-ss": {
    "note_es": "ss -tulpn sockets listening; -n numeric; netstat legacy; lsof -i mapea PID→puerto.",
    "note_en": "ss -tulpn listening sockets; -n numeric; netstat legacy; lsof -i maps PID→port.",
    "code": "ss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN",
    "tip_es": "ss más rápido en hosts con miles de conexiones.",
    "tip_en": "ss is faster on hosts with thousands of connections.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Puertos y Conexiones: ss, netstat»?",
        "en": "Which tool or idea is central to «Ports and Connections: ss, netstat»?"
      },
      "options": {
        "es": [
          "Solo netstat ss en teoría",
          "Práctica de netstat ss en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only netstat ss in theory",
          "Hands-on netstat ss on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica netstat ss en entornos reales.",
        "en": "This lesson applies netstat ss in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "curl-wget": {
    "note_es": "curl -fsSL sigue redirects fail silent; headers -I; wget recursive mirror; APIs JSON con jq.",
    "note_en": "curl -fsSL follows redirects fail silent; headers -I; wget recursive mirror; JSON APIs with jq.",
    "code": "curl -fsSL https://example.com/health\nwget -qO- https://example.com",
    "tip_es": "Nunca curl | bash sin revisar script; usa checksums firmados.",
    "tip_en": "Never curl | bash without review; use signed checksums.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Transferencia de Datos: curl, wget»?",
        "en": "Which tool or idea is central to «Data Transfer: curl, wget»?"
      },
      "options": {
        "es": [
          "Solo curl wget en teoría",
          "Práctica de curl wget en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only curl wget in theory",
          "Hands-on curl wget on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica curl wget en entornos reales.",
        "en": "This lesson applies curl wget in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "network-config-files": {
    "note_es": "/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML en Ubuntu server.",
    "note_en": "/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML on Ubuntu server.",
    "code": "cat /etc/resolv.conf\ncat /etc/hosts",
    "tip_es": "systemd-resolved puede ser stub—lee man resolved.conf antes de editar.",
    "tip_en": "systemd-resolved may stub—read resolved.conf before editing.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Archivos de Configuración de Red»?",
        "en": "Which tool or idea is central to «Network Configuration Files»?"
      },
      "options": {
        "es": [
          "Solo network config files en teoría",
          "Práctica de network config files en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only network config files in theory",
          "Hands-on network config files on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica network config files en entornos reales.",
        "en": "This lesson applies network config files in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "systemd-intro": {
    "note_es": "systemd unit types: service, socket, timer, target; PID1 reemplaza SysV init scripts.",
    "note_en": "systemd unit types: service, socket, timer, target; PID1 replaces SysV init.",
    "code": "systemctl list-units --type=service | head\nsystemctl get-default",
    "tip_es": "systemctl list-dependencies muestra árbol de arranque.",
    "tip_en": "systemctl list-dependencies shows boot tree.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a systemd»?",
        "en": "Which tool or idea is central to «Introduction to systemd»?"
      },
      "options": {
        "es": [
          "Solo systemd intro en teoría",
          "Práctica de systemd intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only systemd intro in theory",
          "Hands-on systemd intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica systemd intro en entornos reales.",
        "en": "This lesson applies systemd intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "systemctl-basics": {
    "note_es": "start/stop/restart/reload/status; enable --now persiste y arranca; is-active/is-enabled checks.",
    "note_en": "start/stop/restart/reload/status; enable --now persists and starts; is-active/is-enabled checks.",
    "code": "sudo systemctl status ssh\nsudo systemctl restart nginx",
    "tip_es": "reload vs restart: reload relee config sin matar conexiones si la unidad lo soporta.",
    "tip_en": "reload vs restart: reload rereads config without killing connections when supported.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Control de Servicios con systemctl»?",
        "en": "Which tool or idea is central to «Service Control with systemctl»?"
      },
      "options": {
        "es": [
          "Solo systemctl basics en teoría",
          "Práctica de systemctl basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only systemctl basics in theory",
          "Hands-on systemctl basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica systemctl basics en entornos reales.",
        "en": "This lesson applies systemctl basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "service-files": {
    "note_es": "Unit files en `/etc/systemd/system`; secciones [Unit] [Service] [Install]; `ExecStart=` obligatorio. **Nginx/Apache** se gestionan igual: `systemctl enable --now nginx`, logs con `journalctl -u nginx`. Reverse proxy + TLS suele vivir en `/etc/nginx/sites-available/`.",
    "note_en": "Unit files under `/etc/systemd/system`; [Unit] [Service] [Install]; `ExecStart=` required. **Nginx/Apache** use the same model: `systemctl enable --now nginx`, logs via `journalctl -u nginx`. Reverse proxy + TLS usually live under `/etc/nginx/sites-available/`.",
    "code": "sudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service",
    "tip_es": "Tras editar: daemon-reload siempre antes de restart.",
    "tip_en": "After edits: always daemon-reload before restart.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Archivos de Servicio .service»?",
        "en": "Which tool or idea is central to «Service Files .service»?"
      },
      "options": {
        "es": [
          "Solo service files en teoría",
          "Práctica de service files en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only service files in theory",
          "Hands-on service files on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica service files en entornos reales.",
        "en": "This lesson applies service files in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "journalctl": {
    "note_es": "journalctl -u unit -f follow; -b boot actual; -p err priority; --since time filter.",
    "note_en": "journalctl -u unit -f follow; -b this boot; -p err priority; --since time filter.",
    "code": "journalctl -u nginx -n 50 --no-pager\njournalctl -p err -b",
    "tip_es": "Persistent journal requiere Storage=persistent en journald.conf.",
    "tip_en": "Persistent journal needs Storage=persistent in journald.conf.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Logs con journalctl»?",
        "en": "Which tool or idea is central to «Logs with journalctl»?"
      },
      "options": {
        "es": [
          "Solo journalctl en teoría",
          "Práctica de journalctl en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only journalctl in theory",
          "Hands-on journalctl on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica journalctl en entornos reales.",
        "en": "This lesson applies journalctl in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "timers-cron": {
    "note_es": "systemd timers OnCalendar= reemplazan cron con dependencias; crontab -e usuario; /etc/cron.d system.",
    "note_en": "systemd timers OnCalendar= replace cron with deps; crontab -e user; /etc/cron.d system.",
    "code": "crontab -e\nsystemctl list-timers",
    "tip_es": "Prefiere timers si necesitas RandomizedDelaySec y logs en journal.",
    "tip_en": "Prefer timers if you need RandomizedDelaySec and journal logs.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Tareas Programadas: timers y cron»?",
        "en": "Which tool or idea is central to «Scheduled Tasks: timers and cron»?"
      },
      "options": {
        "es": [
          "Solo timers cron en teoría",
          "Práctica de timers cron en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only timers cron in theory",
          "Hands-on timers cron on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica timers cron en entornos reales.",
        "en": "This lesson applies timers cron in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "boot-targets": {
    "note_es": "Targets multi-user.graphical; isolate cambia target; get-default/set-default persisten.",
    "note_en": "Targets multi-user.graphical; isolate switches target; get-default/set-default persist.",
    "code": "systemctl get-default\nsystemctl isolate multi-user.target",
    "tip_es": "rescue/emergency targets para mantenimiento sin red completa.",
    "tip_en": "rescue/emergency targets for maintenance with limited networking.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Targets y Boot»?",
        "en": "Which tool or idea is central to «Targets and Boot»?"
      },
      "options": {
        "es": [
          "Solo boot targets en teoría",
          "Práctica de boot targets en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only boot targets in theory",
          "Hands-on boot targets on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica boot targets en entornos reales.",
        "en": "This lesson applies boot targets in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "ssh-basics": {
    "note_es": "Cliente ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.",
    "note_en": "Client ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.",
    "code": "ssh user@host\nssh -v user@host  # verbose debug",
    "tip_es": "BatchMode=yes falla rápido en CI sin TTY.",
    "tip_en": "BatchMode=yes fails fast in CI without TTY.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Fundamentos de SSH»?",
        "en": "Which tool or idea is central to «SSH Fundamentals»?"
      },
      "options": {
        "es": [
          "Solo ssh basics en teoría",
          "Práctica de ssh basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only ssh basics in theory",
          "Hands-on ssh basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica ssh basics en entornos reales.",
        "en": "This lesson applies ssh basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "ssh-keys": {
    "note_es": "ed25519 preferido; ssh-keygen -t ed25519; ssh-copy-id instala pubkey; permisos ~/.ssh 700, keys 600.",
    "note_en": "Prefer ed25519; ssh-keygen -t ed25519; ssh-copy-id installs pubkey; ~/.ssh 700, keys 600.",
    "code": "ssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host",
    "tip_es": "Passphrase + ssh-agent equilibra seguridad y UX.",
    "tip_en": "Passphrase + ssh-agent balances security and UX.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Autenticación con Claves SSH»?",
        "en": "Which tool or idea is central to «SSH Key Authentication»?"
      },
      "options": {
        "es": [
          "Solo ssh keys en teoría",
          "Práctica de ssh keys en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only ssh keys in theory",
          "Hands-on ssh keys on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica ssh keys en entornos reales.",
        "en": "This lesson applies ssh keys in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "ssh-config": {
    "note_es": "~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.",
    "note_en": "~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.",
    "code": "Host prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519",
    "tip_es": "Match blocks aplican reglas por host pattern.",
    "tip_en": "Match blocks apply rules by host pattern.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Configuración de SSH»?",
        "en": "Which tool or idea is central to «SSH Configuration»?"
      },
      "options": {
        "es": [
          "Solo ssh config en teoría",
          "Práctica de ssh config en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only ssh config in theory",
          "Hands-on ssh config on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica ssh config en entornos reales.",
        "en": "This lesson applies ssh config in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "scp-rsync": {
    "note_es": "scp copia puntual; rsync -avz delta sync; --delete espeja destino; -e ssh tunnel transport.",
    "note_en": "scp point copy; rsync -avz delta sync; --delete mirrors dest; -e ssh tunnel transport.",
    "code": "scp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/",
    "tip_es": "rsync --dry-run antes de --delete en prod.",
    "tip_en": "rsync --dry-run before --delete in prod.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Transferencia de Archivos: scp y rsync»?",
        "en": "Which tool or idea is central to «File Transfer: scp and rsync»?"
      },
      "options": {
        "es": [
          "Solo scp rsync en teoría",
          "Práctica de scp rsync en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only scp rsync in theory",
          "Hands-on scp rsync on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica scp rsync en entornos reales.",
        "en": "This lesson applies scp rsync in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "ssh-tunneling": {
    "note_es": "-L local forward; -R remote reverse; -D SOCKS proxy; -N no command solo tunnel.",
    "note_en": "-L local forward; -R remote reverse; -D SOCKS proxy; -N no command tunnel only.",
    "code": "ssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS",
    "tip_es": "GatewayPorts y AllowTcpForwarding controlan hardening servidor.",
    "tip_en": "GatewayPorts and AllowTcpForwarding control server hardening.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «SSH Tunneling y Port Forwarding»?",
        "en": "Which tool or idea is central to «SSH Tunneling and Port Forwarding»?"
      },
      "options": {
        "es": [
          "Solo ssh tunneling en teoría",
          "Práctica de ssh tunneling en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only ssh tunneling in theory",
          "Hands-on ssh tunneling on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica ssh tunneling en entornos reales.",
        "en": "This lesson applies ssh tunneling in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "firewall-basics": {
    "note_es": "ufw/nftables/iptables capas; allow/deny por puerto; default deny inbound es baseline.",
    "note_en": "ufw/nftables/iptables layers; allow/deny by port; default deny inbound baseline.",
    "code": "sudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose",
    "tip_es": "Abre solo lo necesario; documenta reglas en infra-as-code.",
    "tip_en": "Open only what's needed; document rules in infra-as-code.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Firewall: iptables y ufw»?",
        "en": "Which tool or idea is central to «Firewall: iptables and ufw»?"
      },
      "options": {
        "es": [
          "Solo firewall basics en teoría",
          "Práctica de firewall basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only firewall basics in theory",
          "Hands-on firewall basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica firewall basics en entornos reales.",
        "en": "This lesson applies firewall basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "security-hardening": {
    "note_es": "fail2ban jails; deshabilitar root login SSH; sudo vs su; SUID audit find -perm -4000.",
    "note_en": "fail2ban jails; disable root SSH login; sudo vs su; SUID audit find -perm -4000.",
    "code": "sudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null",
    "tip_es": "Aplica CIS benchmarks gradualmente con rollback plan.",
    "tip_en": "Apply CIS benchmarks gradually with rollback plan.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Hardening Básico de Seguridad»?",
        "en": "Which tool or idea is central to «Basic Security Hardening»?"
      },
      "options": {
        "es": [
          "Solo security hardening en teoría",
          "Práctica de security hardening en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only security hardening in theory",
          "Hands-on security hardening on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica security hardening en entornos reales.",
        "en": "This lesson applies security hardening in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "advanced-variables": {
    "note_es": "Arrays arr=(a b); ${arr[@]} expansión; ${#arr[@]} length; asociativos declare -A en bash 4+.",
    "note_en": "Arrays arr=(a b); ${arr[@]} expansion; ${#arr[@]} length; associative declare -A bash 4+.",
    "code": "arr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"",
    "tip_es": "IFS controla split en read y expansions—cítalo temporalmente.",
    "tip_en": "IFS controls split in read and expansions—quote temporarily.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Variables Avanzadas»?",
        "en": "Which tool or idea is central to «Advanced Variables»?"
      },
      "options": {
        "es": [
          "Solo advanced variables en teoría",
          "Práctica de advanced variables en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only advanced variables in theory",
          "Hands-on advanced variables on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica advanced variables en entornos reales.",
        "en": "This lesson applies advanced variables in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "regex-in-bash": {
    "note_es": "[[ string =~ regex ]] con BASH_REMATCH capture groups; no uses grep dentro de if innecesario.",
    "note_en": "[[ string =~ regex ]] with BASH_REMATCH capture groups; avoid pointless grep in if.",
    "code": "[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match",
    "tip_es": "Ancla ^$ para validación completa de input.",
    "tip_en": "Anchor ^$ for full input validation.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Expresiones Regulares en Bash»?",
        "en": "Which tool or idea is central to «Regular Expressions in Bash»?"
      },
      "options": {
        "es": [
          "Solo regex in bash en teoría",
          "Práctica de regex in bash en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only regex in bash in theory",
          "Hands-on regex in bash on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica regex in bash en entornos reales.",
        "en": "This lesson applies regex in bash in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "debugging-scripts": {
    "note_es": "bash -x trace; PS4 custom prompt; set -v muestra lectura de líneas; errexit nounset pipefail combo.",
    "note_en": "bash -x trace; PS4 custom prompt; set -v shows read lines; errexit nounset pipefail combo.",
    "code": "bash -x script.sh\nset -euo pipefail",
    "tip_es": "Reproduce con bash -x en mismo shell options que prod.",
    "tip_en": "Reproduce with bash -x using same shell options as prod.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Debugging de Scripts»?",
        "en": "Which tool or idea is central to «Script Debugging»?"
      },
      "options": {
        "es": [
          "Solo debugging scripts en teoría",
          "Práctica de debugging scripts en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only debugging scripts in theory",
          "Hands-on debugging scripts on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica debugging scripts en entornos reales.",
        "en": "This lesson applies debugging scripts in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "subshells-processes": {
    "note_es": "( ) subshell aísla cwd y vars; process substitution <(cmd) sin archivo temp; $$ vs $BASHPID.",
    "note_en": "( ) subshell isolates cwd/vars; process substitution <(cmd) without temp file; $$ vs $BASHPID.",
    "code": "diff <(sort a) <(sort b)\n( cd /tmp && pwd )",
    "tip_es": "Pipe while crea subshell—vars no persisten fuera.",
    "tip_en": "Pipe while creates subshell—vars don't persist outside.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Subshells y Sustitución de Procesos»?",
        "en": "Which tool or idea is central to «Subshells and Process Substitution»?"
      },
      "options": {
        "es": [
          "Solo subshells processes en teoría",
          "Práctica de subshells processes en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only subshells processes in theory",
          "Hands-on subshells processes on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica subshells processes en entornos reales.",
        "en": "This lesson applies subshells processes in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "signal-handling": {
    "note_es": "trap handler on EXIT INT TERM; SIGKILL no interceptable; graceful shutdown cierra fds y flush.",
    "note_en": "trap handler on EXIT INT TERM; SIGKILL not interceptable; graceful shutdown closes fds flush.",
    "code": "trap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM",
    "tip_es": "systemd envía SIGTERM antes de SIGKILL tras TimeoutStopSec.",
    "tip_en": "systemd sends SIGTERM before SIGKILL after TimeoutStopSec.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Manejo de Señales con trap»?",
        "en": "Which tool or idea is central to «Signal Handling with trap»?"
      },
      "options": {
        "es": [
          "Solo signal handling en teoría",
          "Práctica de signal handling en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only signal handling in theory",
          "Hands-on signal handling on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica signal handling en entornos reales.",
        "en": "This lesson applies signal handling in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "getopts-arguments": {
    "note_es": "getopts :abc: parse flags; OPTARG valor; shift tras loop; -- end of options convención.",
    "note_en": "getopts :abc: parse flags; OPTARG value; shift after loop; -- end of options convention.",
    "code": "while getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done",
    "tip_es": "Leading : en optstring silencia errores builtin—valida tú.",
    "tip_en": "Leading : in optstring silences builtin errors—you validate.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Parseo de Argumentos con getopts»?",
        "en": "Which tool or idea is central to «Argument Parsing with getopts»?"
      },
      "options": {
        "es": [
          "Solo getopts arguments en teoría",
          "Práctica de getopts arguments en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only getopts arguments in theory",
          "Hands-on getopts arguments on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica getopts arguments en entornos reales.",
        "en": "This lesson applies getopts arguments in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "best-practices": {
    "note_es": "shellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; logging estructurado.",
    "note_en": "shellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; structured logging.",
    "code": "shellcheck script.sh\n# quote vars, use [[ ]], avoid eval",
    "tip_es": "Versiona scripts en git, no copies sueltas en /root.",
    "tip_en": "Version scripts in git, not loose copies in /root.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Mejores Prácticas de Scripting»?",
        "en": "Which tool or idea is central to «Scripting Best Practices»?"
      },
      "options": {
        "es": [
          "Solo best practices en teoría",
          "Práctica de best practices en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only best practices in theory",
          "Hands-on best practices on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica best practices en entornos reales.",
        "en": "This lesson applies best practices in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-intro": {
    "note_es": "git init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.",
    "note_en": "git init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.",
    "code": "git init\ngit config user.email \"you@example.com\"",
    "tip_es": ".gitignore temprano evita commits de secretos y node_modules.",
    "tip_en": "Early .gitignore avoids committing secrets and node_modules.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Git»?",
        "en": "Which tool or idea is central to «Introduction to Git»?"
      },
      "options": {
        "es": [
          "Solo git intro en teoría",
          "Práctica de git intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git intro in theory",
          "Hands-on git intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git intro en entornos reales.",
        "en": "This lesson applies git intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-basics": {
    "note_es": "status; add -p staging parcial; commit mensajes imperativos; log --oneline --graph.",
    "note_en": "status; add -p partial staging; imperative commits; log --oneline --graph.",
    "code": "git status\ngit add -p\ngit commit -m \"feat: add healthcheck\"",
    "tip_es": "Nunca commit credentials—usa git-secrets o hooks.",
    "tip_en": "Never commit credentials—use git-secrets or hooks.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Comandos Básicos de Git»?",
        "en": "Which tool or idea is central to «Basic Git Commands»?"
      },
      "options": {
        "es": [
          "Solo git basics en teoría",
          "Práctica de git basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git basics in theory",
          "Hands-on git basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git basics en entornos reales.",
        "en": "This lesson applies git basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-branches": {
    "note_es": "branch es puntero móvil; switch -c crea; merge fast-forward vs 3-way; rebase reescribe historia.",
    "note_en": "branch is mobile pointer; switch -c create; merge FF vs 3-way; rebase rewrites history.",
    "code": "git switch -c feature/login\ngit merge main",
    "tip_es": "Protege main con PR reviews y CI verde.",
    "tip_en": "Protect main with PR reviews and green CI.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Ramas en Git»?",
        "en": "Which tool or idea is central to «Git Branches»?"
      },
      "options": {
        "es": [
          "Solo git branches en teoría",
          "Práctica de git branches en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git branches in theory",
          "Hands-on git branches on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git branches en entornos reales.",
        "en": "This lesson applies git branches in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-remote": {
    "note_es": "remote origin; fetch trae objetos; push publica; upstream -u tracking branch.",
    "note_en": "remote origin; fetch brings objects; push publishes; upstream -u tracking branch.",
    "code": "git remote add origin git@github.com:org/repo.git\ngit push -u origin main",
    "tip_es": "force push solo en branches personales.",
    "tip_en": "force push only on personal branches.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Repositorios Remotos»?",
        "en": "Which tool or idea is central to «Remote Repositories»?"
      },
      "options": {
        "es": [
          "Solo git remote en teoría",
          "Práctica de git remote en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git remote in theory",
          "Hands-on git remote on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git remote en entornos reales.",
        "en": "This lesson applies git remote in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-conflicts": {
    "note_es": "merge conflict markers <<<<<<; editar, git add, commit; merge --abort cancela.",
    "note_en": "merge conflict markers <<<<<<; edit, git add, commit; merge --abort cancels.",
    "code": "git merge feature\n# edit files, git add, git commit",
    "tip_es": "Comunica con equipo antes de resolver conflictos grandes en main.",
    "tip_en": "Coordinate before resolving large main conflicts.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Resolución de Conflictos»?",
        "en": "Which tool or idea is central to «Conflict Resolution»?"
      },
      "options": {
        "es": [
          "Solo git conflicts en teoría",
          "Práctica de git conflicts en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git conflicts in theory",
          "Hands-on git conflicts on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git conflicts en entornos reales.",
        "en": "This lesson applies git conflicts in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-advanced": {
    "note_es": "stash; cherry-pick; reflog recupera commits; bisect encuentra regresiones.",
    "note_en": "stash; cherry-pick; reflog recovers commits; bisect finds regressions.",
    "code": "git stash push -m wip\ngit cherry-pick abc123\ngit reflog",
    "tip_es": "reflog expira—no es backup permanente.",
    "tip_en": "reflog expires—not permanent backup.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Git Avanzado»?",
        "en": "Which tool or idea is central to «Advanced Git»?"
      },
      "options": {
        "es": [
          "Solo git advanced en teoría",
          "Práctica de git advanced en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git advanced in theory",
          "Hands-on git advanced on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git advanced en entornos reales.",
        "en": "This lesson applies git advanced in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "git-workflows": {
    "note_es": "Trunk-based (ramas cortas + main) vs GitFlow (develop/release). **CI/CD**: GitHub Actions/GitLab CI ejecutan `npm test`, `docker build`, deploy en cada push/PR. Protege `main` con reviews y checks verdes. Tags semver (`v1.2.0`) disparan releases.",
    "note_en": "Trunk-based (short branches + main) vs GitFlow (develop/release). **CI/CD**: GitHub Actions/GitLab CI run `npm test`, `docker build`, deploy on push/PR. Protect `main` with reviews and green checks. Semver tags (`v1.2.0`) trigger releases.",
    "code": "# .github/workflows/ci.yml (ejemplo)\n# on: [push, pull_request]\n# jobs: test -> build -> deploy staging",
    "tip_es": "Conventional Commits ayuda changelogs automáticos.",
    "tip_en": "Conventional Commits help automated changelogs.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Flujos de Trabajo con Git»?",
        "en": "Which tool or idea is central to «Git Workflows»?"
      },
      "options": {
        "es": [
          "Solo git workflows en teoría",
          "Práctica de git workflows en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only git workflows in theory",
          "Hands-on git workflows on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica git workflows en entornos reales.",
        "en": "This lesson applies git workflows in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-intro": {
    "note_es": "Contenedor = procesos aislados con namespaces/cgroups; imagen read-only layers; docker ps/logs.",
    "note_en": "Container = isolated processes with namespaces/cgroups; image read-only layers; docker ps/logs.",
    "code": "docker version\ndocker info",
    "tip_es": "No ejecutes contenedores como root en prod sin user namespace hardening.",
    "tip_en": "Don't run containers as root in prod without user namespace hardening.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Docker»?",
        "en": "Which tool or idea is central to «Introduction to Docker»?"
      },
      "options": {
        "es": [
          "Solo docker intro en teoría",
          "Práctica de docker intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker intro in theory",
          "Hands-on docker intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker intro en entornos reales.",
        "en": "This lesson applies docker intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-images": {
    "note_es": "pull/tag/push; layers cache; docker build context; multi-stage reduce tamaño final.",
    "note_en": "pull/tag/push; layer cache; docker build context; multi-stage shrinks final image.",
    "code": "docker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0",
    "tip_es": "Escanea imágenes con trivy/grype en CI.",
    "tip_en": "Scan images with trivy/grype in CI.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Imágenes de Docker»?",
        "en": "Which tool or idea is central to «Docker Images»?"
      },
      "options": {
        "es": [
          "Solo docker images en teoría",
          "Práctica de docker images en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker images in theory",
          "Hands-on docker images on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker images en entornos reales.",
        "en": "This lesson applies docker images in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-containers": {
    "note_es": "run -d --name -p publish; exec interactive; logs -f; restart policies unless-stopped.",
    "note_en": "run -d --name -p publish; exec interactive; logs -f; restart unless-stopped policies.",
    "code": "docker run -d --name web -p 8080:80 nginx\ndocker logs -f web",
    "tip_es": "Limita --memory y --cpus en prod.",
    "tip_en": "Set --memory and --cpus limits in prod.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Contenedores de Docker»?",
        "en": "Which tool or idea is central to «Docker Containers»?"
      },
      "options": {
        "es": [
          "Solo docker containers en teoría",
          "Práctica de docker containers en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker containers in theory",
          "Hands-on docker containers on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker containers en entornos reales.",
        "en": "This lesson applies docker containers in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "dockerfile": {
    "note_es": "FROM WORKDIR COPY RUN CMD; orden capas para cache; .dockerignore; USER non-root final.",
    "note_en": "FROM WORKDIR COPY RUN CMD; layer order for cache; .dockerignore; non-root USER.",
    "code": "FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]",
    "tip_es": "Pin base image digests para reproducibilidad.",
    "tip_en": "Pin base image digests for reproducibility.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Creando Dockerfiles»?",
        "en": "Which tool or idea is central to «Creating Dockerfiles»?"
      },
      "options": {
        "es": [
          "Solo dockerfile en teoría",
          "Práctica de dockerfile en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only dockerfile in theory",
          "Hands-on dockerfile on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica dockerfile en entornos reales.",
        "en": "This lesson applies dockerfile in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-volumes": {
    "note_es": "Volumes managed vs bind mounts; datos fuera del container writable layer; backup volumen aparte.",
    "note_en": "Managed volumes vs bind mounts; data outside container writable layer; backup volumes separately.",
    "code": "docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres",
    "tip_es": "Named volumes sobreviven docker rm container.",
    "tip_en": "Named volumes survive docker rm container.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Volúmenes y Persistencia»?",
        "en": "Which tool or idea is central to «Volumes and Persistence»?"
      },
      "options": {
        "es": [
          "Solo docker volumes en teoría",
          "Práctica de docker volumes en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker volumes in theory",
          "Hands-on docker volumes on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker volumes en entornos reales.",
        "en": "This lesson applies docker volumes in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-networking": {
    "note_es": "bridge default; user-defined networks DNS por nombre; publish ports -p host:container.",
    "note_en": "bridge default; user-defined networks DNS by name; publish ports -p host:container.",
    "code": "docker network create appnet\ndocker run --network appnet --name api myapi",
    "tip_es": "host network mode rompe aislamiento—úsalo con cuidado.",
    "tip_en": "host network mode breaks isolation—use carefully.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Redes en Docker»?",
        "en": "Which tool or idea is central to «Docker Networking»?"
      },
      "options": {
        "es": [
          "Solo docker networking en teoría",
          "Práctica de docker networking en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker networking in theory",
          "Hands-on docker networking on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker networking en entornos reales.",
        "en": "This lesson applies docker networking in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "docker-compose": {
    "note_es": "compose YAML services networks volumes; up -d; depends_on orden; healthcheck readiness.",
    "note_en": "compose YAML services networks volumes; up -d; depends_on order; healthcheck readiness.",
    "code": "docker compose up -d\ndocker compose ps",
    "tip_es": "compose v2 plugin integrado: docker compose no docker-compose bin viejo.",
    "tip_en": "compose v2 plugin integrated: docker compose not legacy docker-compose binary.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Docker Compose»?",
        "en": "Which tool or idea is central to «Docker Compose»?"
      },
      "options": {
        "es": [
          "Solo docker compose en teoría",
          "Práctica de docker compose en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only docker compose in theory",
          "Hands-on docker compose on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica docker compose en entornos reales.",
        "en": "This lesson applies docker compose in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "k8s-intro": {
    "note_es": "Cluster orquesta contenedores; kubectl API; namespaces aíslan recursos; declarative desired state.",
    "note_en": "Cluster orchestrates containers; kubectl API; namespaces isolate resources; declarative desired state.",
    "code": "kubectl cluster-info\nkubectl get nodes",
    "tip_es": "Minikube/kind para labs locales; prod managed EKS/GKE/AKS.",
    "tip_en": "Minikube/kind for local labs; prod managed EKS/GKE/AKS.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Kubernetes»?",
        "en": "Which tool or idea is central to «Introduction to Kubernetes»?"
      },
      "options": {
        "es": [
          "Solo k8s intro en teoría",
          "Práctica de k8s intro en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only k8s intro in theory",
          "Hands-on k8s intro on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica k8s intro en entornos reales.",
        "en": "This lesson applies k8s intro in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "k8s-architecture": {
    "note_es": "Control plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.",
    "note_en": "Control plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.",
    "code": "# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy",
    "tip_es": "etcd backup es crítico para DR del cluster.",
    "tip_en": "etcd backup is critical for cluster DR.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Arquitectura de Kubernetes»?",
        "en": "Which tool or idea is central to «Kubernetes Architecture»?"
      },
      "options": {
        "es": [
          "Solo k8s architecture en teoría",
          "Práctica de k8s architecture en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only k8s architecture in theory",
          "Hands-on k8s architecture on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica k8s architecture en entornos reales.",
        "en": "This lesson applies k8s architecture in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "kubectl-basics": {
    "note_es": "kubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.",
    "note_en": "kubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.",
    "code": "kubectl get all -A\nkubectl apply -f deployment.yaml",
    "tip_es": "kubectx/kubens aceleran cambios de entorno.",
    "tip_en": "kubectx/kubens speed environment switching.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «kubectl: Comandos Básicos»?",
        "en": "Which tool or idea is central to «kubectl: Basic Commands»?"
      },
      "options": {
        "es": [
          "Solo kubectl basics en teoría",
          "Práctica de kubectl basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only kubectl basics in theory",
          "Hands-on kubectl basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica kubectl basics en entornos reales.",
        "en": "This lesson applies kubectl basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "pods-deployments": {
    "note_es": "Pod unidad mínima; Deployment ReplicaSet rolling updates; probes liveness/readiness.",
    "note_en": "Pod smallest unit; Deployment ReplicaSet rolling updates; liveness/readiness probes.",
    "code": "kubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3",
    "tip_es": "Un Pod no se repara—se reemplaza.",
    "tip_en": "Pods aren't repaired—they're replaced.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Pods y Deployments»?",
        "en": "Which tool or idea is central to «Pods and Deployments»?"
      },
      "options": {
        "es": [
          "Solo pods deployments en teoría",
          "Práctica de pods deployments en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only pods deployments in theory",
          "Hands-on pods deployments on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica pods deployments en entornos reales.",
        "en": "This lesson applies pods deployments in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "services-networking": {
    "note_es": "Service ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.",
    "note_en": "Service ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.",
    "code": "kubectl expose deployment web --port=80 --type=NodePort",
    "tip_es": "Ingress expone HTTP con controlador (nginx, traefik).",
    "tip_en": "Ingress exposes HTTP with controller (nginx, traefik).",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Services y Networking»?",
        "en": "Which tool or idea is central to «Services and Networking»?"
      },
      "options": {
        "es": [
          "Solo services networking en teoría",
          "Práctica de services networking en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only services networking in theory",
          "Hands-on services networking on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica services networking en entornos reales.",
        "en": "This lesson applies services networking in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "configmaps-secrets": {
    "note_es": "ConfigMap config no secreta; Secret base64 not encryption at rest by default; mount env or volume.",
    "note_en": "ConfigMap non-secret config; Secret base64 not encryption at rest by default; mount env or volume.",
    "code": "kubectl create configmap app-config --from-literal=LOG_LEVEL=debug",
    "tip_es": "Usa SealedSecrets/External Secrets en prod.",
    "tip_en": "Use SealedSecrets/External Secrets in prod.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «ConfigMaps y Secrets»?",
        "en": "Which tool or idea is central to «ConfigMaps and Secrets»?"
      },
      "options": {
        "es": [
          "Solo configmaps secrets en teoría",
          "Práctica de configmaps secrets en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only configmaps secrets in theory",
          "Hands-on configmaps secrets on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica configmaps secrets en entornos reales.",
        "en": "This lesson applies configmaps secrets in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "volumes-storage": {
    "note_es": "PVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.",
    "note_en": "PVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.",
    "code": "kubectl get pvc\nkubectl describe pv",
    "tip_es": "Revisa access modes RWO vs RWX antes de apps multi-writer.",
    "tip_en": "Check RWO vs RWX access modes before multi-writer apps.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Volúmenes y Almacenamiento»?",
        "en": "Which tool or idea is central to «Volumes and Storage»?"
      },
      "options": {
        "es": [
          "Solo volumes storage en teoría",
          "Práctica de volumes storage en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only volumes storage in theory",
          "Hands-on volumes storage on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica volumes storage en entornos reales.",
        "en": "This lesson applies volumes storage in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "helm-basics": {
    "note_es": "Charts = plantillas K8s; `values.yaml` parametriza; `helm upgrade --install` es idempotente. **IaC**: complementa Terraform (red/nodos) + Helm (apps). PostgreSQL en cluster: chart bitnami/postgresql + PVC.",
    "note_en": "Charts = K8s templates; `values.yaml` parameterizes; `helm upgrade --install` is idempotent. **IaC**: complements Terraform (network/nodes) + Helm (apps). PostgreSQL in cluster: bitnami/postgresql chart + PVC.",
    "code": "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql",
    "tip_es": "helm template render offline antes de apply.",
    "tip_en": "helm template offline render before apply.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «Introducción a Helm»?",
        "en": "Which tool or idea is central to «Introduction to Helm»?"
      },
      "options": {
        "es": [
          "Solo helm basics en teoría",
          "Práctica de helm basics en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only helm basics in theory",
          "Hands-on helm basics on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica helm basics en entornos reales.",
        "en": "This lesson applies helm basics in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  },
  "network-troubleshooting": {
    "note_es": "Metodología capas: link (ip link) → IP (ip addr) → routing (ip route) → DNS (dig) → puertos (ss) → path (traceroute).",
    "note_en": "Layered method: link (ip link) → IP (ip addr) → routing (ip route) → DNS (dig) → ports (ss) → path (traceroute).",
    "code": "ip -br addr\nping -c2 1.1.1.1\ndig +short example.com\nss -tuln | head\ntraceroute -n 8.8.8.8",
    "tip_es": "Documenta MTU mismatches si ves fragmentación o black hole PMTUD.",
    "tip_en": "Document MTU mismatches if you see fragmentation or PMTUD black holes.",
    "ex1": {
      "question": {
        "es": "¿Qué herramienta o idea es central en «network-troubleshooting»?",
        "en": "Which tool or idea is central to «network-troubleshooting»?"
      },
      "options": {
        "es": [
          "Solo network troubleshooting en teoría",
          "Práctica de network troubleshooting en shell/Linux",
          "Compilar kernel",
          "Formatear disco"
        ],
        "en": [
          "Only network troubleshooting in theory",
          "Hands-on network troubleshooting on Linux/shell",
          "Build kernel",
          "Format disk"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "La lección aplica network troubleshooting en entornos reales.",
        "en": "This lesson applies network troubleshooting in real environments."
      }
    },
    "ex2": {
      "question": {
        "es": "Antes de cambiar producción, ¿qué paso es más sensato?",
        "en": "Before changing production, which step is most sensible?"
      },
      "options": {
        "es": [
          "Aplicar directo en prod",
          "Validar en staging/VM y revisar rollback",
          "Desactivar logs",
          "Ignorar permisos"
        ],
        "en": [
          "Apply directly in prod",
          "Validate in staging/VM and plan rollback",
          "Disable logs",
          "Ignore permissions"
        ]
      },
      "correctAnswer": "1",
      "explanation": {
        "es": "Staging reduce blast radius.",
        "en": "Staging reduces blast radius."
      }
    },
    "quiz1": {
      "question": {
        "es": "¿Dónde documentar comandos clave de esta lección?",
        "en": "Where should you document key commands from this lesson?"
      },
      "options": {
        "es": [
          "runbook/wiki del equipo",
          "Solo memoria",
          "Chat efímero",
          "Ningún sitio"
        ],
        "en": [
          "Team runbook/wiki",
          "Memory only",
          "Ephemeral chat",
          "Nowhere"
        ]
      },
      "correctAnswer": "0",
      "explanation": {
        "es": "Runbooks aceleran incident response.",
        "en": "Runbooks speed incident response."
      }
    }
  }
}

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
    kc_es = f"**{title['es']}**\n\n{note_es}\n\n{_TABLE_ES}\n\n```bash\n{code}\n```"
    kc_en = f"**{title['en']}**\n\n{note_en}\n\n{_TABLE_EN}\n\n```bash\n{code}\n```"
    return kc_es, kc_en


def get_rich(slug: str, title: dict, desc: dict) -> dict | None:
    """Return rich intro/kc/tip/exercises for slug, or None."""
    raw = _LESSONS.get(slug)
    if not raw:
        return None
    intro_es = (
        f"{title['es']} — {desc['es']}\n\n"
        "En producción combinarás estos conceptos con permisos, logs y rollback. "
        "Practica en una VM antes de tocar servidores críticos."
    )
    intro_en = (
        f"{title['en']} — {desc['en']}\n\n"
        "In production you combine these ideas with permissions, logs, and rollback. "
        "Practice in a VM before touching critical servers."
    )
    kc_es, kc_en = _build_kc(title, raw["note_es"], raw["note_en"], raw["code"])
    out: dict = {
        "intro_es": intro_es,
        "intro_en": intro_en,
        "kc_es": kc_es,
        "kc_en": kc_en,
        "tip_es": raw["tip_es"],
        "tip_en": raw["tip_en"],
        "ex1": raw["ex1"],
        "ex2": raw["ex2"],
    }
    if raw.get("quiz1"):
        out["quiz1"] = raw["quiz1"]
    return out
