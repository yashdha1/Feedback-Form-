import React from "react";
import { Target, SendHorizontal, Link2Icon } from "lucide-react";
import { useState } from "react";

import { motion } from "framer-motion";
import SubmitForm from "../components/SubmitForm";
import GetAllSubs from "../components/GetAllSubs";

const tabs = [
  { id: "submit", label: "Create Submission", icon: SendHorizontal },
  { id: "getAll", label: "Get All Submissions", icon: Target },
];

const HomePage = () => {
  const link = "https://yashdhadod.netlify.app/";
  const [activeTab, setActiveTab] = useState("submit");
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Yash Dhadod Submission Form
        </h1>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl font-bold mb-8 text-emerald-400 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SUBMISSION FORM
          </motion.h1>

          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                  activeTab === tab.id // a simple conditional class
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
          {/* show the active tab */}
          {activeTab === "submit" && <SubmitForm />}
          {activeTab === "getAll" && <GetAllSubs />}
        </div>
        <h3 className="text-center text-l sm:text-l font-semibold text-emerald-400 mb-4">
          Thank you for checking this out!
          <span className="ml-2">
            Visit my&nbsp;
            <span
              onClick={() => window.open(link, "_blank")}
              className="inline-flex items-center gap-1 cursor-pointer text-emerald-300 hover:text-emerald-200 transition duration-200"
            >
              portfolio
              <Link2Icon className="h-4 w-4 inline-block" />
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
