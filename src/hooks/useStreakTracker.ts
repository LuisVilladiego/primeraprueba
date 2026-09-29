import { useEffect, useRef } from "react";
import { useUserStore } from "@/stores/userStore";
import { useAchievementsStore } from "@/stores/achievementsStore";
import { useToastStore } from "@/stores/toastStore";
import { useSettingsStore } from "@/stores/settingsStore";

export function useStreakTracker() {
  const { checkAndUpdateStreak, stats, recordActivity } = useUserStore();
  const { checkAchievement } = useAchievementsStore();
  const { addToast } = useToastStore();
  const { locale, notificationsEnabled } = useSettingsStore();
  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;

    const result = checkAndUpdateStreak();

    if (notificationsEnabled) {
      if (result.streakLost) {
        addToast({
          type: "info",
          title: locale === "es" ? "Racha perdida" : "Streak lost",
          message: locale === "es" 
            ? "¡No te preocupes! Comienza una nueva racha hoy" 
            : "Don't worry! Start a new streak today",
          duration: 5000,
        });
      } else if (result.streakIncreased && result.currentStreak > 1) {
        const messages: Record<number, { es: string; en: string }> = {
          3: { es: "¡3 días seguidos! Sigue así 🔥", en: "3 days in a row! Keep it up 🔥" },
          7: { es: "¡Una semana completa! Increíble 💪", en: "One full week! Amazing 💪" },
          14: { es: "¡2 semanas! Eres imparable 🚀", en: "2 weeks! You're unstoppable 🚀" },
          30: { es: "¡Un mes entero! Leyenda 👑", en: "A whole month! Legend 👑" },
        };

        const specialMessage = messages[result.currentStreak];
        
        if (specialMessage) {
          addToast({
            type: "achievement",
            title: specialMessage[locale as "es" | "en"],
            message: `${locale === "es" ? "Racha de" : "Streak:"} ${result.currentStreak} ${locale === "es" ? "días" : "days"}`,
            duration: 6000,
          });
        } else if (result.currentStreak % 5 === 0) {
          addToast({
            type: "success",
            title: `🔥 ${result.currentStreak} ${locale === "es" ? "días" : "days"}!`,
            message: locale === "es" ? "¡Tu racha continúa!" : "Your streak continues!",
            duration: 4000,
          });
        }
      }
    }

    checkAchievement("streak-starter", stats.streakDays);
    checkAchievement("streak-warrior", stats.streakDays);
    checkAchievement("streak-legend", stats.streakDays);
  }, []);

  return {
    currentStreak: stats.streakDays,
    recordActivity,
  };
}
