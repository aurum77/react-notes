import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { IndexPage, NotFoundPage } from "./pages";
import { NoteProvider } from "./contexts/NoteContext";
import { NotesProvider } from "./contexts/NotesContext";

const App = () => {
  return (
    <div>
      <Header />
      <NotesProvider>
        <NoteProvider>
          <Router>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<IndexPage />} />
            </Routes>
          </Router>
        </NoteProvider>
      </NotesProvider>
      <Footer />
    </div>
  );
};

export default App;
