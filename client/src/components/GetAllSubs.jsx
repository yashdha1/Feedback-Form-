import React from "react";
import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useSubsStore } from "../store/useSubsStore.js";
const GetAllSubs = () => {
  const { submission } = useSubsStore();
  console.log("submission : ", submission);

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className=" min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Feedback
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {submission?.map((sub) => (
            <tr key={sub._id} className="hover:bg-gray-700">

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{sub.name}</div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">{sub.email}</div>
              </td>

              <td className="px-6 py-4 break-words ">
                <div className="text-sm text-gray-300">{sub.feedback}</div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default GetAllSubs;
