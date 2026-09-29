import { useEffect, useRef } from "react";
import { useNotificationsStore } from "@/stores/notificationsStore";
import { useUserStore } from "@/stores/userStore";
import { useAchievementsStore, achievements as achievementsList } from "@/stores/achievementsStore";

export function useNotificationTriggers() {
  const { addNotification } = useNotificationsStore();
  const { stats } = useUserStore();
  const { unlockedAchievements } = useAchievementsStore();
  
  const prevStatsRef = useRef(stats);
  const prevUnlockedRef = useRef<string[]>(unlockedAchievements);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      prevStatsRef.current = stats;
      prevUnlockedRef.current = unlockedAchievements;
      return;
    }

    const prevStats = prevStatsRef.current;
    
    if (stats.level > prevStats.level) {
      addNotification({
        type: "level_up",
        title: { 
          es: `¡Subiste al Nivel ${stats.level}!`, 
          en: `You reached Level ${stats.level}!` 
        },
        message: { 
          es: "Sigue así, estás progresando muy bien en tu camino Linux.", 
          en: "Keep it up, you're making great progress on your Linux journey." 
        },
        actionUrl: "/roadmap",
      });
    }

    if (stats.streakDays > prevStats.streakDays && stats.streakDays > 0) {
      if (stats.streakDays === 7) {
        addNotification({
          type: "streak",
          title: { es: "¡1 semana de racha!", en: "1 week streak!" },
          message: { 
            es: "Has mantenido una racha de 7 días consecutivos. ¡Increíble!", 
            en: "You've maintained a 7-day streak. Amazing!" 
          },
        });
      } else if (stats.streakDays === 30) {
        addNotification({
          type: "streak",
          title: { es: "¡1 mes de racha!", en: "1 month streak!" },
          message: { 
            es: "30 días seguidos estudiando Linux. ¡Eres imparable!", 
            en: "30 consecutive days studying Linux. You're unstoppable!" 
          },
        });
      }
    }

    prevStatsRef.current = stats;
  }, [stats, addNotification]);

  useEffect(() => {
    if (!initializedRef.current) {
      return;
    }

    const prevUnlocked = prevUnlockedRef.current;
    
    const newUnlockedIds = unlockedAchievements.filter(
      (id) => !prevUnlocked.includes(id)
    );

    for (const id of newUnlockedIds) {
      const achievement = achievementsList.find((a) => a.id === id);
      if (achievement) {
        addNotification({
          type: "achievement",
          title: { 
            es: `¡Logro desbloqueado!`, 
            en: `Achievement unlocked!` 
          },
          message: achievement.title,
          actionUrl: "/achievements",
        });
      }
    }

    prevUnlockedRef.current = unlockedAchievements;
  }, [unlockedAchievements, addNotification]);
}
