"use client";

import { MainLayout } from "@/components/layout";
import { ExamContainer } from "@/components/exam";
import { useTranslation } from "@/hooks/useTranslation";
import { level0Exam, level0Module } from "@/content/modules/level-0";
import type { ExamResult } from "@/types";

export default function Level0ExamPage() {
  const { t, tBilingual } = useTranslation();

  const handleComplete = (result: ExamResult) => {
    console.log("Exam completed:", result);
  };

  return (
    <MainLayout title={`${t("learning.exam")} - ${tBilingual(level0Module.title)}`}>
      <div className="mx-auto max-w-3xl">
        <ExamContainer
          exam={level0Exam}
          moduleId="level-0"
          onComplete={handleComplete}
        />
      </div>
    </MainLayout>
  );
}
