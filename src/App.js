import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/indexpage'
import LoginPage from './pages/loginpage'
function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

  );
}

export default App;
