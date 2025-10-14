import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        {
        id: 1,
        title: "Codex Technology Solutions",
        tech: ["Next.js", "TailwindCSS", "redux", "shadcn/ui", "Cpanel(Hosting)"],
        summary: "Developed a responsive agency website for Codex Technology Solutions, showcasing services and projects with a clean, modern interface.",
        link: "https://www.codex.ng"
        },
        {
            id: 2,
            title: "Echomorrow",
            tech: ["React.Js", "TailwindCSS", "Flowbite", "NodeJS", "Vercel(Frontend)", "Render(Backend)"],
            summary: "A reflective web-app that allows users to write, schedule and send personal letters to themselves",
            link: "https://echomorrow-beta.vercel.app"
        },
        {
            id: 3,
            title: "nacos unidel",
            tech: ["vuejs", "bootstrap", "Vercel(Frontend)", "Backend(Render)"],
            summary: "A web-app for the NACOS UNIDEL community",
            link: "https://nacos-unidel.vercel.app"
        },
        {
            id: 4,
            title: "Sompu",
            tech: ["Next.js", "TailwindCSS", "Shadcn", "Vercel"],
            summary: "Created Sompu, a responsive link-in-bio site with a clean and user-friendly interface.",
            link: "https://sompu.vercel.app"
        }
    ]
}

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.list.push(action.payload);
        }
    }
});

export const {addProject} = projectSlice.actions;
export default projectSlice.reducer;