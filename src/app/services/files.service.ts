import { Injectable } from '@angular/core';
import { files } from '../../assets/projects/files-library'
import { FileContent } from '../models/FileContent';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  getFileContentHTML(fileID: number): string {
    const res = files.find(file => file.id === fileID)?.contentHTML
    if (res === undefined) {
      return ""
    } else {
      return res
    }
  }
}
