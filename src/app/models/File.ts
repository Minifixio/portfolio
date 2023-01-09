import { Folder } from "./Folder"

export interface File {
    name: string
    contentFileName: string
    parentFolder: Folder
}