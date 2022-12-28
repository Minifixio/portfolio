import { Project } from "src/app/models/Project";

declare module 'projects.json' {
    const projects: Project[];
    export default projects;
}