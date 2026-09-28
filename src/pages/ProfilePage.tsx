import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { useAchievementsStore } from "@/stores/achievementsStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { 
  User, 
  Star, 
  Flame, 
  BookOpen, 
  FlaskConical, 
  GraduationCap,
  Trophy,
  Clock,
  Edit3,
  Check,
  Zap
} from "lucide-react";

export function ProfilePage() {
  const { locale } = useTranslation();
  const { name, setName, stats } = useUserStore();
  const { getModuleProgress } = useProgressStore();
  const { getUnlockedCount } = useAchievementsStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSaveName = () => {
    setName(editedName);
    setIsEditing(false);
  };

  const level0Progress = getModuleProgress("level-0");
  const achievementsCount = getUnlockedCount();

  const xpForNextLevel = (stats.level) * 1000;
  const xpProgress = stats.totalXp % 1000;
  const xpPercentage = Math.round((xpProgress / 1000) * 100);

  const statCards = [
    { 
      icon: BookOpen, 
      label: locale === "es" ? "Lecciones" : "Lessons", 
      value: stats.lessonsCompleted,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30"
    },
    { 
      icon: FlaskConical, 
      label: locale === "es" ? "Laboratorios" : "Labs", 
      value: stats.labsCompleted,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30"
    },
    { 
      icon: GraduationCap, 
      label: locale === "es" ? "Exámenes" : "Exams", 
      value: stats.examsPassed,
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/30"
    },
    { 
      icon: Trophy, 
      label: locale === "es" ? "Logros" : "Achievements", 
      value: achievementsCount,
      color: "text-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-900/30"
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Profile Header */}
      <Card className="mb-6 p-6 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <User className="h-12 w-12 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="rounded-lg border border-zinc-300 px-3 py-1 text-xl font-bold dark:border-zinc-600 dark:bg-zinc-800"
                    autoFocus
                  />
                  <Button size="sm" variant="primary" onClick={handleSaveName}>
                    <Check className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {name}
                  </h1>
                  <Button 
                    size="iconSm" 
                    variant="ghost" 
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
            
            <div className="mt-2 flex items-center gap-4">
              <Badge variant="primary" className="text-sm">
                <Zap className="mr-1 h-3 w-3" />
                {locale === "es" ? "Nivel" : "Level"} {stats.level}
              </Badge>
              <Badge variant="warning" className="text-sm">
                <Flame className="mr-1 h-3 w-3" />
                {stats.streakDays} {locale === "es" ? "días" : "days"}
              </Badge>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">
                {stats.totalXp.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-zinc-500">XP Total</p>
          </div>
        </div>

        {/* XP Progress to Next Level */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">
              {locale === "es" ? "Progreso al Nivel" : "Progress to Level"} {stats.level + 1}
            </span>
            <span className="font-medium text-zinc-900 dark:text-white">
              {xpProgress} / 1000 XP
            </span>
          </div>
          <Progress value={xpPercentage} max={100} size="md" variant="gradient" />
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card 
            key={stat.label} 
            hover 
            className="p-4 animate-[fade-in-up_0.4s_ease-out_both]"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-[fade-in-up_0.4s_ease-out_0.3s_both]">
          <CardHeader>
            <CardTitle>
              {locale === "es" ? "Progreso por Nivel" : "Progress by Level"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">{locale === "es" ? "Nivel 0 - Fundamentos" : "Level 0 - Fundamentals"}</span>
                  <span className="text-zinc-500">{level0Progress}%</span>
                </div>
                <Progress value={level0Progress} max={100} size="md" />
              </div>
              
              {[1, 2, 3].map((level) => (
                <div key={level} className="opacity-50">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">
                      {locale === "es" ? `Nivel ${level}` : `Level ${level}`}
                    </span>
                    <span className="text-zinc-500">
                      {locale === "es" ? "Bloqueado" : "Locked"}
                    </span>
                  </div>
                  <Progress value={0} max={100} size="md" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-[fade-in-up_0.4s_ease-out_0.35s_both]">
          <CardHeader>
            <CardTitle>
              {locale === "es" ? "Tiempo de Estudio" : "Study Time"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {Math.floor(stats.totalStudyTime / 60)}h {stats.totalStudyTime % 60}m
                </p>
                <p className="text-sm text-zinc-500">
                  {locale === "es" ? "tiempo total de estudio" : "total study time"}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {locale === "es" ? "Ejercicios completados" : "Exercises completed"}
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {stats.exercisesCompleted}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {locale === "es" ? "Habilidades adquiridas" : "Skills acquired"}
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {stats.skillsAcquired}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {locale === "es" ? "Proyectos completados" : "Projects completed"}
                </span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {stats.projectsCompleted}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
