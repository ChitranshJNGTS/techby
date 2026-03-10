import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routing";



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <main className="flex-1 ">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
