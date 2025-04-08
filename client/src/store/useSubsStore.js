import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useSubsStore = create((set) => ({
  submission: [],
  loading: false,

  createSubs: async (data) => {
    set({ loading: true });
    try {
      const res = await axios.post("/sf", data );
      console.log(data);
      console.log("request to API");

      set((prevState) => ({
        submission: [...prevState.submission, res.data], 
        loading: false,
      }));
      toast.success("Product Created Successfully!");
    } catch (error) {
      toast.error("Server Error!");
      set({ loading: false });
      console.log(error);
    }
  },
  fetchSubs: async () => {
    set({ loading: true });
    try {
      console.log("fetching the subs : ");
      const res = await axios.get("/sf");
      console.log("response AWAIT : " , res.data.forms); 
      set({ submission: res.data.forms , loading: false });  
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response?.data?.error || "Failed to fetch products");
    }
  },
}));
