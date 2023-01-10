import { FileContent } from "./FileContent"
import { Folder } from "./Folder"

export interface File {
    name: string
    fileContentID: number
    parentFolder: Folder
    getFileContentHTML: () => string | undefined
}