// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { routes } from "./routes";

// Your components
import Login from "pages/Login";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                element={
                  user.authenticated && route.roles.includes(user.role) ? (
                    route.component
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            ))}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;