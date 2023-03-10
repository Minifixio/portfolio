import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { File } from '../../models/File';
import { Folder } from 'src/app/models/Folder';

import { Bounding } from 'src/app/models/Bounding';
import { FilesService } from 'src/app/services/files.service';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { Window } from 'src/app/models/Window';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, File {

  @Input('name')
  name!: string

  @Input('fileContentID')
  fileContentID!: number;

  @Input('parentFolder')
  parentFolder!: Folder;

  contentInnerHTML!: string | undefined
  window!: Window

  constructor(
    private filesService: FilesService,
    private windowManagerService: WindowsManagerService
  ) { }

  ngOnInit(): void {
    this.contentInnerHTML = this.filesService.getFileContentHTML(this.fileContentID)
    this.window = this.windowManagerService.addFileWindow(this)
  }

  getFile(): File {
    return this
  }

  getFileContentHTML() {
    return this.filesService.getFileContentHTML(this.fileContentID)
  }

  click() {
    this.windowManagerService.setWindowState(this.window.id, true)
  }

}
