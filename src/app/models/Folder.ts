import { Link } from "./Link"
import { File } from "./File"

export interface Folder {
    name: string
    files: File[]
    subFolders: Folder[]
    links: Link[]
}