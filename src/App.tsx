import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Roadmap } from "./pages/Roadmap";
import { CoursePage } from "./pages/CoursePage";
import { LessonPage } from "./pages/LessonPage";
import { LabsPage } from "./pages/LabsPage";
import { LabPage } from "./pages/LabPage";
import { ExamPage } from "./pages/ExamPage";
import { TerminalPage } from "./pages/TerminalPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { CommandsPage } from "./pages/CommandsPage";
import { CertificatesPage } from "./pages/CertificatesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { StatsPage } from "./pages/StatsPage";
import { ToastContainer } from "./components/ui/Toast";
import { KeyboardShortcutsModal } from "./components/KeyboardShortcutsModal";
import { OnboardingModal } from "./components/OnboardingModal";
import { CommandPalette } from "./components/CommandPalette";
import { KeyboardShortcutsProvider } from "./hooks/useKeyboardShortcuts";
import { useToastStore } from "./stores/toastStore";
import { useCommandPaletteStore } from "./stores/commandPaletteStore";
import { useNotificationTriggers } from "./hooks/useNotificationTriggers";

function App() {
  const { toasts, removeToast } = useToastStore();
  const { isOpen: isCommandPaletteOpen, close: closeCommandPalette } = useCommandPaletteStore();
  
  useNotificationTriggers();

  return (
    <ThemeProvider>
      <KeyboardShortcutsProvider>
        <ToastContainer toasts={toasts} onClose={removeToast} />
        <KeyboardShortcutsModal />
        <OnboardingModal />
        <CommandPalette isOpen={isCommandPaletteOpen} onClose={closeCommandPalette} />
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/courses/:levelId" element={<CoursePage />} />
          <Route path="/courses/:levelId/lessons/:slug" element={<LessonPage />} />
          <Route path="/courses/:levelId/labs" element={<LabsPage />} />
          <Route path="/courses/:levelId/labs/:slug" element={<LabPage />} />
          <Route path="/exams/:levelId" element={<ExamPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Route>
        </Routes>
      </KeyboardShortcutsProvider>
    </ThemeProvider>
  );
}

export default App;
