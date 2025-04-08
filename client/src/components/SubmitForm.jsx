import React from "react";
import { useState } from "react";
import { PlusCircle, Loader } from "lucide-react";
import { motion } from "framer-motion"; 
import { useSubsStore } from "../store/useSubsStore";
import toast from "react-hot-toast";

const SubmitForm = () => {

  const [newSub, setNewSubs] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const { createSubs , loading } = useSubsStore() ; 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Submit clicked : ");
    try {
      console.log("newSub : " , newSub) ; 
      const response = await createSubs(newSub) ; 
      toast.success("Submission Created Successfully!");
      setNewSubs({
        name: "",
        email: "",
        feedback: ""
      })
    } catch (error) {
      toast.error("Server Error Submission error: " + error.message);
      console.error("Submission error:", error);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">
        Submit Your feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>

          <input
            placeholder="Enter your name"
            type="text"
            id="name"
            name="name"
            value={newSub.name}
            onChange={(e) => setNewSubs({ ...newSub, name: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
           px-3 text-white focus:outline-none focus:ring-2
          focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            placeholder="Enter your email"
            type="text"
            id="email"
            name="email"
            value={newSub.email}
            onChange={(e) => setNewSubs({ ...newSub, email: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
           px-3 text-white focus:outline-none focus:ring-2
          focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Feedback
          </label>
          <textarea
            id="email"
            name="email"
            placeholder="Enter your feedback"
            value={newSub.feedback}
            onChange={(e) => setNewSubs({ ...newSub, feedback: e.target.value })}
            rows="4"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
           py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
           focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
        shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader
                className="mr-2 h-5 w-5 animate-spin"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-5 w-5" />
              Submit Submission
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default SubmitForm;
