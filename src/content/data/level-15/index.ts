import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level15Lessons: Lesson[] = [
  {
    id: 'lesson-15-1',
    slug: 'k8s-intro',
    title: { es: 'Introducción a Kubernetes', en: 'Introduction to Kubernetes' },
    description: { es: 'Qué es K8s, arquitectura, casos de uso', en: 'What is K8s, architecture, use cases' },
    duration: 40,
    xpReward: 180,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-2',
    slug: 'k8s-architecture',
    title: { es: 'Arquitectura de Kubernetes', en: 'Kubernetes Architecture' },
    description: { es: 'Master, nodes, etcd, API server, kubelet', en: 'Master, nodes, etcd, API server, kubelet' },
    duration: 45,
    xpReward: 200,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-3',
    slug: 'kubectl-basics',
    title: { es: 'kubectl: Comandos Básicos', en: 'kubectl: Basic Commands' },
    description: { es: 'get, describe, create, apply, delete', en: 'get, describe, create, apply, delete' },
    duration: 40,
    xpReward: 180,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-4',
    slug: 'pods-deployments',
    title: { es: 'Pods y Deployments', en: 'Pods and Deployments' },
    description: { es: 'La unidad básica y cómo escalar aplicaciones', en: 'The basic unit and how to scale applications' },
    duration: 50,
    xpReward: 220,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-5',
    slug: 'services-networking',
    title: { es: 'Services y Networking', en: 'Services and Networking' },
    description: { es: 'ClusterIP, NodePort, LoadBalancer, Ingress', en: 'ClusterIP, NodePort, LoadBalancer, Ingress' },
    duration: 45,
    xpReward: 200,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-6',
    slug: 'configmaps-secrets',
    title: { es: 'ConfigMaps y Secrets', en: 'ConfigMaps and Secrets' },
    description: { es: 'Gestiona configuración y datos sensibles', en: 'Manage configuration and sensitive data' },
    duration: 35,
    xpReward: 160,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-7',
    slug: 'volumes-storage',
    title: { es: 'Volúmenes y Almacenamiento', en: 'Volumes and Storage' },
    description: { es: 'PersistentVolumes, PersistentVolumeClaims, StorageClasses', en: 'PersistentVolumes, PersistentVolumeClaims, StorageClasses' },
    duration: 40,
    xpReward: 180,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-15-8',
    slug: 'helm-basics',
    title: { es: 'Introducción a Helm', en: 'Introduction to Helm' },
    description: { es: 'El gestor de paquetes de Kubernetes', en: 'The Kubernetes package manager' },
    duration: 35,
    xpReward: 160,
    order: 8,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level15Labs: Lab[] = [
  {
    id: 'lab-15-1',
    slug: 'deploy-app-k8s',
    title: { es: 'Desplegar Aplicación en Kubernetes', en: 'Deploy Application on Kubernetes' },
    description: { es: 'Despliega una aplicación completa en K8s', en: 'Deploy a complete application on K8s' },
    difficulty: 'advanced',
    duration: 70,
    xpReward: 600,
    objectives: [
      { es: 'Crear Deployment y ReplicaSet', en: 'Create Deployment and ReplicaSet' },
      { es: 'Exponer con Service', en: 'Expose with Service' },
      { es: 'Configurar con ConfigMap', en: 'Configure with ConfigMap' },
      { es: 'Escalar la aplicación', en: 'Scale the application' }
    ],
    tools: ['kubectl', 'minikube'],
    validationCriteria: [
      { type: 'K8S_DEPLOYMENT_EXISTS', value: 'myapp' },
      { type: 'K8S_SERVICE_EXISTS', value: 'myapp-service' },
      { type: 'K8S_PODS_RUNNING', value: '3' }
    ]
  }
];

export const level15Exam: Exam = {
  passingScore: 80,
  timeLimit: 35,
  questions: [
    {
      id: 'exam-15-1',
      question: { es: '¿Cuál es la unidad más pequeña en Kubernetes?', en: 'What is the smallest unit in Kubernetes?' },
      options: [
        { id: 'a', text: { es: 'Container', en: 'Container' } },
        { id: 'b', text: { es: 'Pod', en: 'Pod' } },
        { id: 'c', text: { es: 'Deployment', en: 'Deployment' } },
        { id: 'd', text: { es: 'Node', en: 'Node' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El Pod es la unidad mínima desplegable. Puede contener uno o más contenedores que comparten red y storage.', en: 'The Pod is the minimum deployable unit. It can contain one or more containers sharing network and storage.' }
    },
    {
      id: 'exam-15-2',
      question: { es: '¿Qué hace un Deployment?', en: 'What does a Deployment do?' },
      options: [
        { id: 'a', text: { es: 'Solo crea Pods', en: 'Only creates Pods' } },
        { id: 'b', text: { es: 'Gestiona ReplicaSets que a su vez gestionan Pods, permitiendo actualizaciones declarativas', en: 'Manages ReplicaSets that in turn manage Pods, allowing declarative updates' } },
        { id: 'c', text: { es: 'Expone servicios', en: 'Exposes services' } },
        { id: 'd', text: { es: 'Almacena configuración', en: 'Stores configuration' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Deployment → ReplicaSet → Pods. Permite rolling updates, rollbacks y escalado declarativo.', en: 'Deployment → ReplicaSet → Pods. Allows rolling updates, rollbacks and declarative scaling.' }
    },
    {
      id: 'exam-15-3',
      question: { es: '¿Qué tipo de Service expone un puerto en cada Node?', en: 'What type of Service exposes a port on each Node?' },
      options: [
        { id: 'a', text: { es: 'ClusterIP', en: 'ClusterIP' } },
        { id: 'b', text: { es: 'NodePort', en: 'NodePort' } },
        { id: 'c', text: { es: 'LoadBalancer', en: 'LoadBalancer' } },
        { id: 'd', text: { es: 'ExternalName', en: 'ExternalName' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'NodePort expone el servicio en un puerto (30000-32767) en la IP de cada nodo.', en: 'NodePort exposes the service on a port (30000-32767) on each node IP.' }
    },
    {
      id: 'exam-15-4',
      question: { es: '¿Qué comando lista todos los Pods?', en: 'What command lists all Pods?' },
      options: [
        { id: 'a', text: { es: 'kubectl list pods', en: 'kubectl list pods' } },
        { id: 'b', text: { es: 'kubectl get pods', en: 'kubectl get pods' } },
        { id: 'c', text: { es: 'kubectl show pods', en: 'kubectl show pods' } },
        { id: 'd', text: { es: 'kubectl pods', en: 'kubectl pods' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'kubectl get [recurso] lista recursos. kubectl describe [recurso] muestra detalles.', en: 'kubectl get [resource] lists resources. kubectl describe [resource] shows details.' }
    },
    {
      id: 'exam-15-5',
      question: { es: '¿Para qué sirve un ConfigMap?', en: 'What is a ConfigMap used for?' },
      options: [
        { id: 'a', text: { es: 'Almacenar contraseñas', en: 'Store passwords' } },
        { id: 'b', text: { es: 'Almacenar configuración no sensible', en: 'Store non-sensitive configuration' } },
        { id: 'c', text: { es: 'Definir límites de recursos', en: 'Define resource limits' } },
        { id: 'd', text: { es: 'Crear volúmenes', en: 'Create volumes' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'ConfigMap almacena configuración en pares clave-valor. Para datos sensibles usa Secrets.', en: 'ConfigMap stores configuration in key-value pairs. For sensitive data use Secrets.' }
    },
    {
      id: 'exam-15-6',
      question: { es: '¿Qué componente del Master almacena el estado del cluster?', en: 'What Master component stores cluster state?' },
      options: [
        { id: 'a', text: { es: 'API Server', en: 'API Server' } },
        { id: 'b', text: { es: 'Controller Manager', en: 'Controller Manager' } },
        { id: 'c', text: { es: 'etcd', en: 'etcd' } },
        { id: 'd', text: { es: 'Scheduler', en: 'Scheduler' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'etcd es una base de datos clave-valor distribuida que almacena toda la configuración y estado del cluster.', en: 'etcd is a distributed key-value database that stores all cluster configuration and state.' }
    },
    {
      id: 'exam-15-7',
      question: { es: '¿Cómo escalas un Deployment a 5 réplicas?', en: 'How do you scale a Deployment to 5 replicas?' },
      options: [
        { id: 'a', text: { es: 'kubectl scale deployment myapp --replicas=5', en: 'kubectl scale deployment myapp --replicas=5' } },
        { id: 'b', text: { es: 'kubectl replicas myapp 5', en: 'kubectl replicas myapp 5' } },
        { id: 'c', text: { es: 'kubectl set replicas myapp=5', en: 'kubectl set replicas myapp=5' } },
        { id: 'd', text: { es: 'kubectl update myapp --scale 5', en: 'kubectl update myapp --scale 5' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'kubectl scale permite cambiar el número de réplicas. También puedes editar el YAML y aplicar.', en: 'kubectl scale allows changing the replica count. You can also edit the YAML and apply.' }
    },
    {
      id: 'exam-15-8',
      question: { es: '¿Qué es Helm?', en: 'What is Helm?' },
      options: [
        { id: 'a', text: { es: 'Un tipo de Pod', en: 'A type of Pod' } },
        { id: 'b', text: { es: 'El gestor de paquetes de Kubernetes', en: 'The Kubernetes package manager' } },
        { id: 'c', text: { es: 'Una herramienta de monitoreo', en: 'A monitoring tool' } },
        { id: 'd', text: { es: 'Un tipo de Service', en: 'A type of Service' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Helm permite instalar aplicaciones complejas (charts) con un solo comando, gestionando dependencias y configuración.', en: 'Helm allows installing complex applications (charts) with a single command, managing dependencies and configuration.' }
    }
  ]
};

export const level15Skills: Skill[] = [
  { id: 'skill-k8s', name: { es: 'Kubernetes', en: 'Kubernetes' }, description: { es: 'Orquestación de contenedores', en: 'Container orchestration' }, icon: 'cloud' },
  { id: 'skill-kubectl', name: { es: 'kubectl', en: 'kubectl' }, description: { es: 'CLI de Kubernetes', en: 'Kubernetes CLI' }, icon: 'terminal' },
  { id: 'skill-pods', name: { es: 'Workloads', en: 'Workloads' }, description: { es: 'Pods, Deployments, Services', en: 'Pods, Deployments, Services' }, icon: 'layers' },
  { id: 'skill-helm', name: { es: 'Helm', en: 'Helm' }, description: { es: 'Gestión de paquetes K8s', en: 'K8s package management' }, icon: 'package' }
];

export const level15Module: Module = {
  id: 'level-15',
  slug: 'kubernetes-fundamentals',
  title: { es: 'Fundamentos de Kubernetes', en: 'Kubernetes Fundamentals' },
  description: { es: 'Aprende orquestación de contenedores con Kubernetes: pods, deployments, services y más', en: 'Learn container orchestration with Kubernetes: pods, deployments, services and more' },
  icon: 'cloud',
  color: '#326CE5',
  level: 15,
  order: 15,
  estimatedHours: 12,
  prerequisites: ['level-14'],
  skills: level15Skills,
  lessons: level15Lessons,
  labs: level15Labs,
  exam: level15Exam
};
