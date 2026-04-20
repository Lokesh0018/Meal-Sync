import './App.css';
import Auth from './Pages/Auth';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AdminDashboard from './Pages/AdminDashboard';
import TilichoLogo from './images/tilichologo.webp';
import ProtectedRoute from './layouts/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthLayout>
                <Auth />
              </AuthLayout>
            }
          />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;