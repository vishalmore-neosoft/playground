import { Route, Routes, Outlet } from "react-router-dom";
import RegexBuilder from "./widgets/regex-builder";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Dashboard />} />
        <Route path="regex-builder" element={<RegexBuilder />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
