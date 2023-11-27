import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
//import project from "./sanity/schemas/project-schema";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "m2egel00",
    dataset: "production",
    title: "My personal portfolio",
    apiVersion: "2023-11-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: schemas,
    },
})

export default config;
