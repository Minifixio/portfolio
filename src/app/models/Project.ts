import { Folder } from "./Folder";
import { File } from "./File";
import { Link } from "./Link";

export interface Project extends Folder {
    description: string,
}