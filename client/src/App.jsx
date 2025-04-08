import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Homepage.jsx";
import { useSubsStore } from "./store/useSubsStore.js"; 

function App() {
  const { fetchSubs } = useSubsStore();
  console.log("finding the subs ") ; 
  useEffect(() => {
    fetchSubs();
  }, [fetchSubs]);

  // Fetch the submissions when the component mounts : 
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      <div className="relative z-50 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
