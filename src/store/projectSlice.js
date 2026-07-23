import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Rekap Africa",
      tech: ["React.js", "TailwindCSS", "zustand", "shadcn/ui", "Vercel(Hosting)", "PostgresDB", "ExpressJS"],
      summary:
        "An Event Intelligence platform that helps event creators and organizers to manage their events, attendees, and ticketing. It provides a comprehensive solution for event management, including ticket sales, post-event operations,  attendee registration, and event analytics.",
      link: "https://www.rekap.africa",
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
      title: "UseUptime",
      // TODO: swap these for the real stack — placeholder until you confirm
      tech: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
      // TODO: swap this for the real one-liner — placeholder until you confirm
      summary:
        "An uptime monitoring and status page tool for tracking service reliability and incident history.",
      link: "https://useuptime.site",
    },
  ],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;