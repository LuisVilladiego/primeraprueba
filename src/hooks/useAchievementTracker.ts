import { useEffect, useCallback } from "react";
import { useUserStore } from "@/stores/userStore";
import { useAchievementsStore } from "@/stores/achievementsStore";

export function useAchievementTracker() {
  const { stats } = useUserStore();
  const { checkAchievement, unlockedAchievements } = useAchievementsStore();

  const checkAllAchievements = useCallback(() => {
    checkAchievement("first-lesson", stats.lessonsCompleted);
    checkAchievement("lesson-master", stats.lessonsCompleted);
    checkAchievement("lesson-expert", stats.lessonsCompleted);
    checkAchievement("first-command", stats.exercisesCompleted);
    checkAchievement("command-runner", stats.exercisesCompleted);
    checkAchievement("terminal-wizard", stats.exercisesCompleted);
    checkAchievement("lab-explorer", stats.labsCompleted);
    checkAchievement("lab-scientist", stats.labsCompleted);
    checkAchievement("exam-passed", stats.examsPassed);
    checkAchievement("exam-master", stats.examsPassed);
    checkAchievement("streak-3", stats.streakDays);
    checkAchievement("streak-7", stats.streakDays);
    checkAchievement("streak-30", stats.streakDays);
    
    const totalProgress = stats.lessonsCompleted + stats.labsCompleted + stats.examsPassed;
    checkAchievement("dedicated-learner", Math.floor(stats.totalStudyTime / 60));
    
    if (stats.lessonsCompleted > 0 && stats.labsCompleted > 0 && stats.examsPassed > 0) {
      checkAchievement("linux-beginner", 1);
    }
  }, [stats, checkAchievement]);

  useEffect(() => {
    checkAllAchievements();
  }, [checkAllAchievements]);

  return {
    unlockedCount: unlockedAchievements.length,
    checkAllAchievements,
  };
}
