import { Folder } from "./Folder";
import { File } from "./File";
import { Link } from "./Link";

export interface Project {
    name: string,
    description: string,
    folders: Folder[] | null
    files: File[]
    links: Link[]
}