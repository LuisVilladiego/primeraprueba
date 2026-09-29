import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Roadmap } from "./pages/Roadmap";
import { Level0Course } from "./pages/Level0Course";
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
import { ToastContainer } from "./components/ui/Toast";
import { KeyboardShortcutsModal } from "./components/KeyboardShortcutsModal";
import { KeyboardShortcutsProvider } from "./hooks/useKeyboardShortcuts";
import { useToastStore } from "./stores/toastStore";

function App() {
  const { toasts, removeToast } = useToastStore();

  return (
    <ThemeProvider>
      <KeyboardShortcutsProvider>
        <ToastContainer toasts={toasts} onClose={removeToast} />
        <KeyboardShortcutsModal />
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/courses/level-0" element={<Level0Course />} />
          <Route path="/courses/level-0/lessons/:slug" element={<LessonPage />} />
          <Route path="/courses/level-0/labs" element={<LabsPage />} />
          <Route path="/courses/level-0/labs/:slug" element={<LabPage />} />
          <Route path="/exams/level-0" element={<ExamPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
        </Routes>
      </KeyboardShortcutsProvider>
    </ThemeProvider>
  );
}

export default App;
