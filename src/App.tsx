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
import { PlaceholderPage } from "./pages/PlaceholderPage";

function App() {
  return (
    <ThemeProvider>
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
          {/* Placeholder pages */}
          <Route path="/projects" element={<PlaceholderPage title="Proyectos" />} />
          <Route path="/search" element={<PlaceholderPage title="Buscar" />} />
          <Route path="/dictionary" element={<PlaceholderPage title="Diccionario" />} />
          <Route path="/achievements" element={<PlaceholderPage title="Logros" />} />
          <Route path="/certificates" element={<PlaceholderPage title="Certificados" />} />
          <Route path="/profile" element={<PlaceholderPage title="Perfil" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
