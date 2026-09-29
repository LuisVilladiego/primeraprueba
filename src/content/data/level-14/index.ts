import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level14Lessons: Lesson[] = [
  {
    id: 'lesson-14-1',
    slug: 'docker-intro',
    title: { es: 'Introducción a Docker', en: 'Introduction to Docker' },
    description: { es: 'Contenedores vs VMs, arquitectura de Docker', en: 'Containers vs VMs, Docker architecture' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-2',
    slug: 'docker-images',
    title: { es: 'Imágenes de Docker', en: 'Docker Images' },
    description: { es: 'pull, build, tag, push, Docker Hub', en: 'pull, build, tag, push, Docker Hub' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-3',
    slug: 'docker-containers',
    title: { es: 'Contenedores de Docker', en: 'Docker Containers' },
    description: { es: 'run, exec, logs, stop, rm', en: 'run, exec, logs, stop, rm' },
    duration: 45,
    xpReward: 200,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-4',
    slug: 'dockerfile',
    title: { es: 'Creando Dockerfiles', en: 'Creating Dockerfiles' },
    description: { es: 'FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT', en: 'FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT' },
    duration: 50,
    xpReward: 220,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-5',
    slug: 'docker-volumes',
    title: { es: 'Volúmenes y Persistencia', en: 'Volumes and Persistence' },
    description: { es: 'Volumes, bind mounts, tmpfs', en: 'Volumes, bind mounts, tmpfs' },
    duration: 35,
    xpReward: 160,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-6',
    slug: 'docker-networking',
    title: { es: 'Redes en Docker', en: 'Docker Networking' },
    description: { es: 'Bridge, host, overlay, port mapping', en: 'Bridge, host, overlay, port mapping' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-14-7',
    slug: 'docker-compose',
    title: { es: 'Docker Compose', en: 'Docker Compose' },
    description: { es: 'Orquesta múltiples contenedores con YAML', en: 'Orchestrate multiple containers with YAML' },
    duration: 45,
    xpReward: 200,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level14Labs: Lab[] = [
  {
    id: 'lab-14-1',
    slug: 'containerize-app',
    title: { es: 'Containerizar una Aplicación', en: 'Containerize an Application' },
    description: { es: 'Crea un Dockerfile para una aplicación web', en: 'Create a Dockerfile for a web application' },
    difficulty: 'intermediate',
    duration: 50,
    xpReward: 450,
    objectives: [
      { es: 'Escribir un Dockerfile optimizado', en: 'Write an optimized Dockerfile' },
      { es: 'Construir y ejecutar la imagen', en: 'Build and run the image' },
      { es: 'Exponer puertos correctamente', en: 'Expose ports correctly' },
      { es: 'Agregar health check', en: 'Add health check' }
    ],
    tools: ['docker'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: 'Dockerfile' },
      { type: 'DOCKER_IMAGE_EXISTS', value: 'myapp' },
      { type: 'CONTAINER_RUNNING', value: 'myapp' }
    ]
  },
  {
    id: 'lab-14-2',
    slug: 'docker-compose-stack',
    title: { es: 'Stack con Docker Compose', en: 'Docker Compose Stack' },
    description: { es: 'Despliega una aplicación con base de datos usando Compose', en: 'Deploy an application with database using Compose' },
    difficulty: 'advanced',
    duration: 60,
    xpReward: 550,
    objectives: [
      { es: 'Crear docker-compose.yml con múltiples servicios', en: 'Create docker-compose.yml with multiple services' },
      { es: 'Configurar variables de entorno', en: 'Configure environment variables' },
      { es: 'Usar volúmenes para persistencia', en: 'Use volumes for persistence' },
      { es: 'Configurar redes entre servicios', en: 'Configure networks between services' }
    ],
    tools: ['docker-compose'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: 'docker-compose.yml' },
      { type: 'COMPOSE_UP', value: 'services running' }
    ]
  }
];

export const level14Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-14-1',
      question: { es: '¿Cuál es la diferencia entre una imagen y un contenedor?', en: 'What is the difference between an image and a container?' },
      options: [
        { id: 'a', text: { es: 'No hay diferencia', en: 'There is no difference' } },
        { id: 'b', text: { es: 'La imagen es la plantilla de solo lectura, el contenedor es la instancia en ejecución', en: 'Image is the read-only template, container is the running instance' } },
        { id: 'c', text: { es: 'El contenedor es más pequeño', en: 'Container is smaller' } },
        { id: 'd', text: { es: 'La imagen solo existe en Docker Hub', en: 'Image only exists on Docker Hub' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'La imagen es inmutable y contiene el software. El contenedor es una instancia ejecutándose de esa imagen.', en: 'The image is immutable and contains software. The container is a running instance of that image.' }
    },
    {
      id: 'exam-14-2',
      question: { es: '¿Qué hace "docker run -d nginx"?', en: 'What does "docker run -d nginx" do?' },
      options: [
        { id: 'a', text: { es: 'Descarga nginx', en: 'Downloads nginx' } },
        { id: 'b', text: { es: 'Ejecuta un contenedor nginx en modo detached (background)', en: 'Runs an nginx container in detached mode (background)' } },
        { id: 'c', text: { es: 'Elimina el contenedor nginx', en: 'Deletes nginx container' } },
        { id: 'd', text: { es: 'Muestra la documentación', en: 'Shows documentation' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '-d (detached) ejecuta el contenedor en segundo plano, liberando la terminal.', en: '-d (detached) runs the container in background, freeing the terminal.' }
    },
    {
      id: 'exam-14-3',
      question: { es: '¿Para qué sirve EXPOSE en un Dockerfile?', en: 'What is EXPOSE used for in a Dockerfile?' },
      options: [
        { id: 'a', text: { es: 'Abre el puerto automáticamente', en: 'Opens the port automatically' } },
        { id: 'b', text: { es: 'Documenta qué puertos usa la aplicación', en: 'Documents which ports the application uses' } },
        { id: 'c', text: { es: 'Mapea el puerto al host', en: 'Maps the port to host' } },
        { id: 'd', text: { es: 'Bloquea el puerto', en: 'Blocks the port' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'EXPOSE es documentación. Para exponer realmente, usa -p en run: docker run -p 8080:80', en: 'EXPOSE is documentation. To actually expose, use -p in run: docker run -p 8080:80' }
    },
    {
      id: 'exam-14-4',
      question: { es: '¿Cuál es la diferencia entre CMD y ENTRYPOINT?', en: 'What is the difference between CMD and ENTRYPOINT?' },
      options: [
        { id: 'a', text: { es: 'No hay diferencia', en: 'There is no difference' } },
        { id: 'b', text: { es: 'CMD puede sobrescribirse fácilmente, ENTRYPOINT define el ejecutable principal', en: 'CMD can be easily overwritten, ENTRYPOINT defines the main executable' } },
        { id: 'c', text: { es: 'ENTRYPOINT es más antiguo', en: 'ENTRYPOINT is older' } },
        { id: 'd', text: { es: 'CMD solo funciona en Linux', en: 'CMD only works on Linux' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'ENTRYPOINT define el comando principal. CMD proporciona argumentos por defecto que pueden sobrescribirse.', en: 'ENTRYPOINT defines the main command. CMD provides default arguments that can be overwritten.' }
    },
    {
      id: 'exam-14-5',
      question: { es: '¿Cómo persistes datos de un contenedor?', en: 'How do you persist data from a container?' },
      options: [
        { id: 'a', text: { es: 'Los datos persisten automáticamente', en: 'Data persists automatically' } },
        { id: 'b', text: { es: 'Usando volumes o bind mounts', en: 'Using volumes or bind mounts' } },
        { id: 'c', text: { es: 'Copiando archivos manualmente', en: 'Copying files manually' } },
        { id: 'd', text: { es: 'No es posible persistir datos', en: 'It is not possible to persist data' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Los datos dentro del contenedor se pierden al eliminarlo. Volumes y bind mounts persisten datos fuera del contenedor.', en: 'Data inside the container is lost when removed. Volumes and bind mounts persist data outside the container.' }
    },
    {
      id: 'exam-14-6',
      question: { es: '¿Qué hace "docker exec -it container bash"?', en: 'What does "docker exec -it container bash" do?' },
      options: [
        { id: 'a', text: { es: 'Crea un nuevo contenedor', en: 'Creates a new container' } },
        { id: 'b', text: { es: 'Abre una terminal interactiva dentro del contenedor', en: 'Opens an interactive terminal inside the container' } },
        { id: 'c', text: { es: 'Detiene el contenedor', en: 'Stops the container' } },
        { id: 'd', text: { es: 'Elimina el contenedor', en: 'Deletes the container' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'exec ejecuta un comando en un contenedor existente. -it permite interacción con terminal.', en: 'exec runs a command in an existing container. -it allows terminal interaction.' }
    },
    {
      id: 'exam-14-7',
      question: { es: '¿Qué comando levanta todos los servicios de docker-compose?', en: 'What command starts all docker-compose services?' },
      options: [
        { id: 'a', text: { es: 'docker-compose start', en: 'docker-compose start' } },
        { id: 'b', text: { es: 'docker-compose up -d', en: 'docker-compose up -d' } },
        { id: 'c', text: { es: 'docker-compose run', en: 'docker-compose run' } },
        { id: 'd', text: { es: 'docker-compose build', en: 'docker-compose build' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'docker-compose up crea e inicia contenedores. -d los ejecuta en background.', en: 'docker-compose up creates and starts containers. -d runs them in background.' }
    }
  ]
};

export const level14Skills: Skill[] = [
  { id: 'skill-docker', name: { es: 'Docker', en: 'Docker' }, description: { es: 'Gestión de contenedores', en: 'Container management' }, icon: 'box' },
  { id: 'skill-dockerfile', name: { es: 'Dockerfile', en: 'Dockerfile' }, description: { es: 'Crear imágenes personalizadas', en: 'Create custom images' }, icon: 'file-code' },
  { id: 'skill-compose', name: { es: 'Docker Compose', en: 'Docker Compose' }, description: { es: 'Orquestar múltiples contenedores', en: 'Orchestrate multiple containers' }, icon: 'layers' },
  { id: 'skill-volumes', name: { es: 'Volúmenes', en: 'Volumes' }, description: { es: 'Persistencia de datos', en: 'Data persistence' }, icon: 'database' }
];

export const level14Module: Module = {
  id: 'level-14',
  slug: 'docker-fundamentals',
  title: { es: 'Fundamentos de Docker', en: 'Docker Fundamentals' },
  description: { es: 'Aprende contenedores, imágenes, Dockerfiles y Docker Compose para aplicaciones modernas', en: 'Learn containers, images, Dockerfiles and Docker Compose for modern applications' },
  icon: 'box',
  color: '#0EA5E9',
  level: 14,
  order: 14,
  estimatedHours: 10,
  prerequisites: ['level-13'],
  skills: level14Skills,
  lessons: level14Lessons,
  labs: level14Labs,
  exam: level14Exam
};
