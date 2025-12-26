import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
import WidgetWrapper from "./components/wrappers/WidgetWrapper";
import RegexBuilder from "./widgets/regex-builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Dashboard />} />
        <Route path="widgets" element={<WidgetWrapper />}>
          <Route path="regex-builder" element={<RegexBuilder />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
