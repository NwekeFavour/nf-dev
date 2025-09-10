import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        {
            id: 1,
            title: "OK Agency",
            tech: ["React.js", "TailwindCSS", "redux", "shadcn/ui", "Vercel"],
            summary: "Modern agency website highlighting services, projects, and team with responsive design",
            link: "https://ok-agency.vercel.app/"
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
            title: "FoodBox",
            tech: ["HTML", "VanillaCSS", "Javascript", "Vercel"],
            summary: "A Restaurant's Landing Page",
            link: "https://food-box.landing-page.cercel.app"
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