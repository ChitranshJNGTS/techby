import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routing";
import { useAutoLogout } from "../hooks/TokenExpire";



function App() {
  return (
    <Router>
      {/* hook must run inside Router context */}
      <AutoLogout />
      <div className="min-h-screen flex flex-col ">
        <main className="flex-1 ">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

// separate component so hook is called within Router
function AutoLogout() {
  useAutoLogout();
  return null;
}

export default App;
