import { FolderContentComponent } from "../components/folder-content/folder-content.component"
import { Folder } from "./Folder"
import { File } from "./File"
import { Bounding } from "./Bounding"

export interface Window {
    id: number
    width: number
    height: number
    left: number
    top: number
    bounding: Bounding
    active: boolean
    isFolder: boolean
    file: File | undefined
    folder: Folder | undefined
}