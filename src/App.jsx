import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Posts from "./pages/Posts";
import Loader from "./components/Loader";
import AuthModal from "./components/AuthModal";

function App() {
  const [authModal, setAuthModal] = useState({
    action: "login",
    isActive: false
  });
  const { user, isLoading } = useAuth();

  return (
    isLoading
    ? <Loader isMain />
    : <>
        <Navbar
          setAuthModal={setAuthModal}
        />
        <Routes>
          <Route index path="/" element={<Posts setAuthModal={setAuthModal} />} />
          {
            user
            &&
            <Route path="/profile" element={<h1>Profile page</h1>} />
          }
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
        </Routes>
        <AuthModal
          action={authModal.action}
          isActive={authModal.isActive}
          setIsActive={setAuthModal}
        />
      </>
  );
}

export default App;
