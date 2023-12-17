import { Link } from "./Link"
import { File } from "./File"

export interface Folder {
    name: string
    order: number
    files: File[]
    subFolders: Folder[]
    links: Link[]
    description: string
}