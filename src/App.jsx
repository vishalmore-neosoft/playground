import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegexBuilder from './widgets/regex-builder';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/regex-builder" element={<RegexBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App