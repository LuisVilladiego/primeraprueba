"use client";

import { MainLayout } from "@/components/layout";
import { RoadmapView } from "@/components/roadmap";
import { useTranslation } from "@/hooks/useTranslation";

export default function RoadmapPage() {
  const { t } = useTranslation();

  return (
    <MainLayout title={t("nav.roadmap")}>
      <RoadmapView />
    </MainLayout>
  );
}
