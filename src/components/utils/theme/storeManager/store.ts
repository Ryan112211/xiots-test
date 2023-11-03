/* eslint-disable no-unused-vars */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PostsState = {
  postsData: any[];
  setPostsData: (data: any[]) => void;
};

export const usePostsStore = create<PostsState>()(
  persist(
    (set) => ({
      postsData: [],
      setPostsData: (data: any[]) => set({ postsData: data }),
    }),

    {
      name: "xiosts-storage",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: () => ({
        // (optional) persist store data
      }),
    }
  )
);
