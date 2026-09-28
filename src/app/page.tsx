"use client";

import { MainLayout } from "@/components/layout";
import {
  ProgressOverview,
  TechnologyProgress,
  NextObjectives,
  SkillsChecklist,
} from "@/components/dashboard";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";

export default function DashboardPage() {
  const { t } = useTranslation();
  const { name, stats } = useUserStore();

  const isNewUser = stats.lessonsCompleted === 0;

  return (
    <MainLayout title={t("nav.dashboard")}>
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold">
            {isNewUser ? t("dashboard.welcomeNew") : `${t("dashboard.welcome")}, ${name}!`}
          </h1>
          <p className="mt-2 text-blue-100">
            {isNewUser
              ? "Comienza tu viaje hacia la maestría en Linux y DevOps."
              : "Continúa donde lo dejaste y sigue progresando."}
          </p>
        </div>

        {/* Progress Overview */}
        <ProgressOverview />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Next Objectives & Technology Progress */}
          <div className="space-y-6 lg:col-span-2">
            <NextObjectives />
            <TechnologyProgress />
          </div>

          {/* Right Column - Skills Checklist */}
          <div className="space-y-6">
            <SkillsChecklist />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
