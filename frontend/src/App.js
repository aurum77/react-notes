import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { IndexPage, NotFoundPage } from "./pages";
import { NoteInputProvider } from "./contexts/NoteInputContext";
import { NotesProvider } from "./contexts/NotesContext";

const App = () => {
  return (
    <div>
      <div className="pagecontainer">
        <div className="contentwrap">
          <Router>
            <Header />
            <NotesProvider>
              <NoteProvider>
                <Routes>
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/404" element={<NotFoundPage />} />
                  <Route path="/" element={<IndexPage />} />
                </Routes>
              </NoteProvider>
            </NotesProvider>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
