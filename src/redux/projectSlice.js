import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Codex Technology Solutions",
      tech: ["Next.js", "TailwindCSS", "redux", "shadcn/ui", "Cpanel(Hosting)"],
      summary:
        "Developed a responsive agency website for Codex Technology Solutions, showcasing services and projects with a clean, modern interface.",
      link: "https://www.codex.ng",
    },
    {
      id: 2,
      title: "ZandMarket",
      tech: ["React.js", "TailwindCSS", "Express.js", "PostgreSQL"],
      summary:
        "A grocery e-commerce store that allows users to browse, and purchase groceries online",
      link: "https://zandmarket.co.uk",
    },
    {
      id: 3,
      title: "Layemart",
      tech: ["React.js", "TailwindCSS", "Express.js", "MongoDB"],
      summary:
        "A multi-vendor marketplace platform connecting small and medium-sized businesses with customers",
      link: "https://layemart.com",
    },
    {
      id: 4,
      title: "Sompu",
      tech: ["Next.js", "TailwindCSS", "Shadcn", "Vercel"],
      summary:
        "Created Sompu, a responsive link-in-bio site with a clean and user-friendly interface.",
      link: "https://sompu.vercel.app",
    },
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
