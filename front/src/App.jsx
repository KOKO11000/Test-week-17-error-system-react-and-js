import { createContext, useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router";
import { UserContext } from "./UserContext";
import DataPage from "./pages/DataPage";
import DynamicTestPage from "./pages/DynamicTestPage";
export const GlobalContext = createContext()
function App() {
  const [data, setData] = useState();
  
  useEffect(() => {
    if (data) 
      console.log(data);
    }, [data]);
    const value = {
      data,
      setData
    }

  return (
    <div className="min-w-full min-h-screen bg-gray-200 mb-1.5">
      <UserContext.Provider value={value}>
        <Routes>
          <Route path="data" element={<DataPage />} />
          <Route path="dynamic" element={<DynamicTestPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
