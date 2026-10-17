import type { Module, Lesson, Lab, Exam } from "@/types";
import {
  level0Module,
  level0Lessons,
  level0Labs,
  level0Exam,
} from "@/content/modules/level-0";
import {
  level1Module,
  level1Lessons,
  level1Labs,
  level1Exam,
} from "@/content/modules/level-1";
import {
  level2Module,
  level2Lessons,
  level2Labs,
  level2Exam,
} from "@/content/modules/level-2";
import {
  level3Module,
  level3Lessons,
  level3Labs,
  level3Exam,
} from "@/content/modules/level-3";
import {
  level4Module,
  level4Lessons,
  level4Labs,
  level4Exam,
} from "@/content/modules/level-4";
import { lesson01 } from "@/content/modules/level-0/lessons/lesson-0-1";
import { lesson02 } from "@/content/modules/level-0/lessons/lesson-0-2";
import { lesson03 } from "@/content/modules/level-0/lessons/lesson-0-3";
import { lesson04 } from "@/content/modules/level-0/lessons/lesson-0-4";
import { lesson05 } from "@/content/modules/level-0/lessons/lesson-0-5";
import { lesson06 } from "@/content/modules/level-0/lessons/lesson-0-6";
import { lesson07 } from "@/content/modules/level-0/lessons/lesson-0-7";
import { lesson11 } from "@/content/modules/level-1/lessons/lesson-1-1";
import { lesson12 } from "@/content/modules/level-1/lessons/lesson-1-2";
import { lesson13 } from "@/content/modules/level-1/lessons/lesson-1-3";
import { lesson14 } from "@/content/modules/level-1/lessons/lesson-1-4";
import { lesson15 } from "@/content/modules/level-1/lessons/lesson-1-5";
import { lesson16 } from "@/content/modules/level-1/lessons/lesson-1-6";
import { lesson17 } from "@/content/modules/level-1/lessons/lesson-1-7";
import { lesson21 } from "@/content/modules/level-2/lessons/lesson-2-1";
import { lesson22 } from "@/content/modules/level-2/lessons/lesson-2-2";
import { lesson23 } from "@/content/modules/level-2/lessons/lesson-2-3";
import { lesson24 } from "@/content/modules/level-2/lessons/lesson-2-4";
import { lesson25 } from "@/content/modules/level-2/lessons/lesson-2-5";
import { lesson26 } from "@/content/modules/level-2/lessons/lesson-2-6";
import { lesson27 } from "@/content/modules/level-2/lessons/lesson-2-7";
import { lesson31 } from "@/content/modules/level-3/lessons/lesson-3-1";
import { lesson32 } from "@/content/modules/level-3/lessons/lesson-3-2";
import { lesson33 } from "@/content/modules/level-3/lessons/lesson-3-3";
import { lesson34 } from "@/content/modules/level-3/lessons/lesson-3-4";
import { lesson35 } from "@/content/modules/level-3/lessons/lesson-3-5";
import { lesson36 } from "@/content/modules/level-3/lessons/lesson-3-6";
import { lesson37 } from "@/content/modules/level-3/lessons/lesson-3-7";
import { lesson41 } from "@/content/modules/level-4/lessons/lesson-4-1";
import { lesson42 } from "@/content/modules/level-4/lessons/lesson-4-2";
import { lesson43 } from "@/content/modules/level-4/lessons/lesson-4-3";
import { lesson44 } from "@/content/modules/level-4/lessons/lesson-4-4";
import { lesson45 } from "@/content/modules/level-4/lessons/lesson-4-5";
import { lesson46 } from "@/content/modules/level-4/lessons/lesson-4-6";
import { lesson47 } from "@/content/modules/level-4/lessons/lesson-4-7";
import {
  level5Module,
  level5Lessons,
  level5Labs,
  level5Exam,
} from "@/content/modules/level-5";
import { lesson51 } from "@/content/modules/level-5/lessons/lesson-5-1";
import { lesson52 } from "@/content/modules/level-5/lessons/lesson-5-2";
import { lesson53 } from "@/content/modules/level-5/lessons/lesson-5-3";
import { lesson54 } from "@/content/modules/level-5/lessons/lesson-5-4";
import { lesson55 } from "@/content/modules/level-5/lessons/lesson-5-5";
import { lesson56 } from "@/content/modules/level-5/lessons/lesson-5-6";
import { lesson57 } from "@/content/modules/level-5/lessons/lesson-5-7";
import { lesson58 } from "@/content/modules/level-5/lessons/lesson-5-8";
import {
  level6Module,
  level6Lessons,
  level6Labs,
  level6Exam,
} from "@/content/modules/level-6";
import { lesson61 } from "@/content/modules/level-6/lessons/lesson-6-1";
import { lesson62 } from "@/content/modules/level-6/lessons/lesson-6-2";
import { lesson63 } from "@/content/modules/level-6/lessons/lesson-6-3";
import { lesson64 } from "@/content/modules/level-6/lessons/lesson-6-4";
import { lesson65 } from "@/content/modules/level-6/lessons/lesson-6-5";
import { lesson66 } from "@/content/modules/level-6/lessons/lesson-6-6";
import {
  level7Module,
  level7Lessons,
  level7Labs,
  level7Exam,
} from "@/content/modules/level-7";
import { lesson71 } from "@/content/modules/level-7/lessons/lesson-7-1";
import { lesson72 } from "@/content/modules/level-7/lessons/lesson-7-2";
import { lesson73 } from "@/content/modules/level-7/lessons/lesson-7-3";
import { lesson74 } from "@/content/modules/level-7/lessons/lesson-7-4";
import { lesson75 } from "@/content/modules/level-7/lessons/lesson-7-5";
import { lesson76 } from "@/content/modules/level-7/lessons/lesson-7-6";
import { lesson77 } from "@/content/modules/level-7/lessons/lesson-7-7";
import {
  level8Module,
  level8Lessons,
  level8Labs,
  level8Exam,
} from "@/content/modules/level-8";
import { lesson81 } from "@/content/modules/level-8/lessons/lesson-8-1";
import { lesson82 } from "@/content/modules/level-8/lessons/lesson-8-2";
import { lesson83 } from "@/content/modules/level-8/lessons/lesson-8-3";
import { lesson84 } from "@/content/modules/level-8/lessons/lesson-8-4";
import { lesson85 } from "@/content/modules/level-8/lessons/lesson-8-5";
import { lesson86 } from "@/content/modules/level-8/lessons/lesson-8-6";
import {
  level9Module,
  level9Lessons,
  level9Labs,
  level9Exam,
} from "@/content/modules/level-9";
import { lesson91 } from "@/content/modules/level-9/lessons/lesson-9-1";
import { lesson92 } from "@/content/modules/level-9/lessons/lesson-9-2";
import { lesson93 } from "@/content/modules/level-9/lessons/lesson-9-3";
import { lesson94 } from "@/content/modules/level-9/lessons/lesson-9-4";
import { lesson95 } from "@/content/modules/level-9/lessons/lesson-9-5";
import { lesson96 } from "@/content/modules/level-9/lessons/lesson-9-6";
import { lesson97 } from "@/content/modules/level-9/lessons/lesson-9-7";
import {
  level10Module,
  level10Lessons,
  level10Labs,
  level10Exam,
} from "@/content/modules/level-10";
import { lesson101 } from "@/content/modules/level-10/lessons/lesson-10-1";
import { lesson102 } from "@/content/modules/level-10/lessons/lesson-10-2";
import { lesson103 } from "@/content/modules/level-10/lessons/lesson-10-3";
import { lesson104 } from "@/content/modules/level-10/lessons/lesson-10-4";
import { lesson105 } from "@/content/modules/level-10/lessons/lesson-10-5";
import { lesson106 } from "@/content/modules/level-10/lessons/lesson-10-6";
import {
  level11Module,
  level11Lessons,
  level11Labs,
  level11Exam,
} from "@/content/modules/level-11";
import { lesson111 } from "@/content/modules/level-11/lessons/lesson-11-1";
import { lesson112 } from "@/content/modules/level-11/lessons/lesson-11-2";
import { lesson113 } from "@/content/modules/level-11/lessons/lesson-11-3";
import { lesson114 } from "@/content/modules/level-11/lessons/lesson-11-4";
import { lesson115 } from "@/content/modules/level-11/lessons/lesson-11-5";
import { lesson116 } from "@/content/modules/level-11/lessons/lesson-11-6";
import { lesson117 } from "@/content/modules/level-11/lessons/lesson-11-7";
import {
  level12Module,
  level12Lessons,
  level12Labs,
  level12Exam,
} from "@/content/modules/level-12";
import { lesson121 } from "@/content/modules/level-12/lessons/lesson-12-1";
import { lesson122 } from "@/content/modules/level-12/lessons/lesson-12-2";
import { lesson123 } from "@/content/modules/level-12/lessons/lesson-12-3";
import { lesson124 } from "@/content/modules/level-12/lessons/lesson-12-4";
import { lesson125 } from "@/content/modules/level-12/lessons/lesson-12-5";
import { lesson126 } from "@/content/modules/level-12/lessons/lesson-12-6";
import { lesson127 } from "@/content/modules/level-12/lessons/lesson-12-7";
import {
  level13Module,
  level13Lessons,
  level13Labs,
  level13Exam,
} from "@/content/modules/level-13";
import { lesson131 } from "@/content/modules/level-13/lessons/lesson-13-1";
import { lesson132 } from "@/content/modules/level-13/lessons/lesson-13-2";
import { lesson133 } from "@/content/modules/level-13/lessons/lesson-13-3";
import { lesson134 } from "@/content/modules/level-13/lessons/lesson-13-4";
import { lesson135 } from "@/content/modules/level-13/lessons/lesson-13-5";
import { lesson136 } from "@/content/modules/level-13/lessons/lesson-13-6";
import { lesson137 } from "@/content/modules/level-13/lessons/lesson-13-7";
import {
  level14Module,
  level14Lessons,
  level14Labs,
  level14Exam,
} from "@/content/modules/level-14";
import { lesson141 } from "@/content/modules/level-14/lessons/lesson-14-1";
import { lesson142 } from "@/content/modules/level-14/lessons/lesson-14-2";
import { lesson143 } from "@/content/modules/level-14/lessons/lesson-14-3";
import { lesson144 } from "@/content/modules/level-14/lessons/lesson-14-4";
import { lesson145 } from "@/content/modules/level-14/lessons/lesson-14-5";
import { lesson146 } from "@/content/modules/level-14/lessons/lesson-14-6";
import { lesson147 } from "@/content/modules/level-14/lessons/lesson-14-7";
import {
  level15Module,
  level15Lessons,
  level15Labs,
  level15Exam,
} from "@/content/modules/level-15";
import { lesson151 } from "@/content/modules/level-15/lessons/lesson-15-1";
import { lesson152 } from "@/content/modules/level-15/lessons/lesson-15-2";
import { lesson153 } from "@/content/modules/level-15/lessons/lesson-15-3";
import { lesson154 } from "@/content/modules/level-15/lessons/lesson-15-4";
import { lesson155 } from "@/content/modules/level-15/lessons/lesson-15-5";
import { lesson156 } from "@/content/modules/level-15/lessons/lesson-15-6";
import { lesson157 } from "@/content/modules/level-15/lessons/lesson-15-7";
import { lesson158 } from "@/content/modules/level-15/lessons/lesson-15-8";

export interface CourseConfig {
  module: Module;
  lessons: Lesson[];
  labs: Lab[];
  exam: Exam | null;
  lessonBySlug: Record<string, Lesson>;
}

const level0LessonBySlug: Record<string, Lesson> = {
  "what-is-a-computer": lesson01,
  "what-is-an-operating-system": lesson02,
  "processes-and-memory": lesson03,
  "storage-and-files": lesson04,
  "user-interfaces": lesson05,
  "linux-history": lesson06,
  "linux-vs-windows-vs-macos": lesson07,
};

const level1LessonBySlug: Record<string, Lesson> = {
  "intro-to-terminal": lesson11,
  "navigation-commands": lesson12,
  "file-operations": lesson13,
  "viewing-files": lesson14,
  "getting-help": lesson15,
  "wildcards-globbing": lesson16,
  "command-history": lesson17,
};

const level2LessonBySlug: Record<string, Lesson> = {
  "filesystem-hierarchy": lesson21,
  "file-types": lesson22,
  "links-hard-soft": lesson23,
  "file-metadata": lesson24,
  "disk-usage": lesson25,
  "find-command": lesson26,
  "locate-updatedb": lesson27,
};

const level3LessonBySlug: Record<string, Lesson> = {
  "understanding-permissions": lesson31,
  "chmod-command": lesson32,
  "users-groups": lesson33,
  "chown-chgrp": lesson34,
  "special-permissions": lesson35,
  "umask": lesson36,
  "sudo-su": lesson37,
};

const level4LessonBySlug: Record<string, Lesson> = {
  "understanding-processes": lesson41,
  "ps-command": lesson42,
  "top-htop": lesson43,
  "signals-kill": lesson44,
  "background-foreground": lesson45,
  "system-resources": lesson46,
  "process-priority": lesson47,
};

const level5LessonBySlug: Record<string, Lesson> = {
  "shell-scripting-intro": lesson51,
  "variables-environment": lesson52,
  "user-input-arguments": lesson53,
  "conditionals": lesson54,
  "test-comparisons": lesson55,
  "loops": lesson56,
  "functions": lesson57,
  "exit-codes": lesson58,
};
const level6LessonBySlug: Record<string, Lesson> = {
  "nano-basics": lesson61,
  "vim-intro": lesson62,
  "vim-editing": lesson63,
  "vim-search-replace": lesson64,
  "vim-advanced": lesson65,
  "vimrc-config": lesson66,
};
const level7LessonBySlug: Record<string, Lesson> = {
  "grep-basics": lesson71,
  "regex-intro": lesson72,
  "sed-basics": lesson73,
  "awk-basics": lesson74,
  "cut-sort-uniq": lesson75,
  "wc-tr-tee": lesson76,
  "pipes-redirection": lesson77,
};
const level8LessonBySlug: Record<string, Lesson> = {
  "package-managers-intro": lesson81,
  "apt-debian": lesson82,
  "dnf-fedora": lesson83,
  "pacman-arch": lesson84,
  "snap-flatpak-appimage": lesson85,
  "compile-from-source": lesson86,
};
const level9LessonBySlug: Record<string, Lesson> = {
  "networking-basics": lesson91,
  "network-interfaces": lesson92,
  "connectivity-tools": lesson93,
  "dns-tools": lesson94,
  "netstat-ss": lesson95,
  "curl-wget": lesson96,
  "network-config-files": lesson97,
};
const level10LessonBySlug: Record<string, Lesson> = {
  "systemd-intro": lesson101,
  "systemctl-basics": lesson102,
  "service-files": lesson103,
  "journalctl": lesson104,
  "timers-cron": lesson105,
  "boot-targets": lesson106,
};
const level11LessonBySlug: Record<string, Lesson> = {
  "ssh-basics": lesson111,
  "ssh-keys": lesson112,
  "ssh-config": lesson113,
  "scp-rsync": lesson114,
  "ssh-tunneling": lesson115,
  "firewall-basics": lesson116,
  "security-hardening": lesson117,
};
const level12LessonBySlug: Record<string, Lesson> = {
  "advanced-variables": lesson121,
  "regex-in-bash": lesson122,
  "debugging-scripts": lesson123,
  "subshells-processes": lesson124,
  "signal-handling": lesson125,
  "getopts-arguments": lesson126,
  "best-practices": lesson127,
};
const level13LessonBySlug: Record<string, Lesson> = {
  "git-intro": lesson131,
  "git-basics": lesson132,
  "git-branches": lesson133,
  "git-remote": lesson134,
  "git-conflicts": lesson135,
  "git-advanced": lesson136,
  "git-workflows": lesson137,
};
const level14LessonBySlug: Record<string, Lesson> = {
  "docker-intro": lesson141,
  "docker-images": lesson142,
  "docker-containers": lesson143,
  "dockerfile": lesson144,
  "docker-volumes": lesson145,
  "docker-networking": lesson146,
  "docker-compose": lesson147,
};
const level15LessonBySlug: Record<string, Lesson> = {
  "k8s-intro": lesson151,
  "k8s-architecture": lesson152,
  "kubectl-basics": lesson153,
  "pods-deployments": lesson154,
  "services-networking": lesson155,
  "configmaps-secrets": lesson156,
  "volumes-storage": lesson157,
  "helm-basics": lesson158,
};

export const courseRegistry: Record<string, CourseConfig> = {
  "level-0": {
    module: level0Module,
    lessons: level0Lessons,
    labs: level0Labs,
    exam: level0Exam,
    lessonBySlug: level0LessonBySlug,
  },
  "level-1": {
    module: level1Module,
    lessons: level1Lessons,
    labs: level1Labs,
    exam: level1Exam,
    lessonBySlug: level1LessonBySlug,
  },
  "level-2": {
    module: level2Module,
    lessons: level2Lessons,
    labs: level2Labs,
    exam: level2Exam,
    lessonBySlug: level2LessonBySlug,
  },
  "level-3": {
    module: level3Module,
    lessons: level3Lessons,
    labs: level3Labs,
    exam: level3Exam,
    lessonBySlug: level3LessonBySlug,
  },
  "level-4": {
    module: level4Module,
    lessons: level4Lessons,
    labs: level4Labs,
    exam: level4Exam,
    lessonBySlug: level4LessonBySlug,
  },
  "level-5": {
    module: level5Module,
    lessons: level5Lessons,
    labs: level5Labs,
    exam: level5Exam,
    lessonBySlug: level5LessonBySlug,
  },
  "level-6": {
    module: level6Module,
    lessons: level6Lessons,
    labs: level6Labs,
    exam: level6Exam,
    lessonBySlug: level6LessonBySlug,
  },
  "level-7": {
    module: level7Module,
    lessons: level7Lessons,
    labs: level7Labs,
    exam: level7Exam,
    lessonBySlug: level7LessonBySlug,
  },
  "level-8": {
    module: level8Module,
    lessons: level8Lessons,
    labs: level8Labs,
    exam: level8Exam,
    lessonBySlug: level8LessonBySlug,
  },
  "level-9": {
    module: level9Module,
    lessons: level9Lessons,
    labs: level9Labs,
    exam: level9Exam,
    lessonBySlug: level9LessonBySlug,
  },
  "level-10": {
    module: level10Module,
    lessons: level10Lessons,
    labs: level10Labs,
    exam: level10Exam,
    lessonBySlug: level10LessonBySlug,
  },
  "level-11": {
    module: level11Module,
    lessons: level11Lessons,
    labs: level11Labs,
    exam: level11Exam,
    lessonBySlug: level11LessonBySlug,
  },
  "level-12": {
    module: level12Module,
    lessons: level12Lessons,
    labs: level12Labs,
    exam: level12Exam,
    lessonBySlug: level12LessonBySlug,
  },
  "level-13": {
    module: level13Module,
    lessons: level13Lessons,
    labs: level13Labs,
    exam: level13Exam,
    lessonBySlug: level13LessonBySlug,
  },
  "level-14": {
    module: level14Module,
    lessons: level14Lessons,
    labs: level14Labs,
    exam: level14Exam,
    lessonBySlug: level14LessonBySlug,
  },
  "level-15": {
    module: level15Module,
    lessons: level15Lessons,
    labs: level15Labs,
    exam: level15Exam,
    lessonBySlug: level15LessonBySlug,
  },
};

export function getCourse(levelId: string): CourseConfig | null {
  return courseRegistry[levelId] ?? null;
}

export function getLessonIdsForModule(moduleId: string): string[] {
  const course = getCourse(moduleId);
  return course?.lessons.map((l) => l.id) ?? [];
}
