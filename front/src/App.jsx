import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import { UserContext } from "./UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-w-full min-h-screen bg-gray-200 mb-1.5">
      <UserContext.Provider value={""}>
        <Routes>
          <Route path="" element />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
