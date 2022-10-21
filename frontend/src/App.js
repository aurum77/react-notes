import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { IndexPage, NotFoundPage, TrashedPage } from "./pages";
import { NoteInputProvider } from "./contexts/NoteInputContext";
import { NotesProvider } from "./contexts/NotesContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ArchivedPage } from "./pages/ArchivedPage";
import { NoteModalProvider } from "./contexts/NoteModalContext";

const App = () => {
  return (
    <div>
      <Router>
        <NotesProvider>
          <SearchProvider>
            <Header />
            <NoteInputProvider>
              <NoteModalProvider>
                <Routes>
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/archived" element={<ArchivedPage />} />
                  <Route path="/trashed" element={<TrashedPage />} />
                </Routes>
              </NoteModalProvider>
            </NoteInputProvider>
          </SearchProvider>
        </NotesProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
