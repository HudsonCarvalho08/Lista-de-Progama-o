import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InitialPage } from "./componentes/InitialPage";
import Login from "./componentes/Login/Login";

export function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/menu" element={<InitialPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}
