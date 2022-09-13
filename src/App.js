import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { IndexPage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
