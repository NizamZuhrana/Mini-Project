// import "./index.css";
import ListUsers from "./pages/ListUsersPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectRoutes from "./routes/ProtectRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listUser" element={<ListUsers />} />
          <Route
            path="/detail/:id"
            element={
              <ProtectRoutes>
                <DetailPage />
              </ProtectRoutes>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
