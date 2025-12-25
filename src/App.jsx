import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import RegexBuilder from "./widgets/regex-builder";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
