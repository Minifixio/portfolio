import { Injectable } from '@angular/core';
import { files } from '../../assets/projects/files-library'
import { FileContent } from '../models/FileContent';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  getFileContent(fileID: number): FileContent | undefined {
    return files.find(file => file.id === fileID)
  }
}
