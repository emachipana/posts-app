import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route index path="/" element={<h1>Home page</h1>} />
      {
        user
        &&
        <Route path="/profile" element={<h1>Profile page</h1>} />
      }
      <Route path="*" element={<h1>Pagina no encontrada</h1>} />
    </Routes>
  );
}

export default App;
