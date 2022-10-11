import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { IndexPage, NotFoundPage, TrashedPage } from "./pages";
import { NoteInputProvider } from "./contexts/NoteInputContext";
import { NotesProvider } from "./contexts/NotesContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ArchivedPage } from "./pages/ArchivedPage";

const App = () => {
  return (
    <div>
      <div className="pagecontainer">
        <div className="contentwrap">
          <Router>
            <NotesProvider>
              <SearchProvider>
                <Header />
                <NoteInputProvider>
                  <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/archived" element={<ArchivedPage />} />
                    <Route path="/trashed" element={<TrashedPage />} />
                  </Routes>
                </NoteInputProvider>
              </SearchProvider>
            </NotesProvider>
          </Router>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
