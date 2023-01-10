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
  styleUrls: ['./file.component.css',  '../../../assets/projects/project1.css']
})
export class FileComponent implements OnInit, File {

  @Input('name')
  name!: string

  @Input('fileContentID')
  fileContentID!: number;

  @Input('parentFolder')
  parentFolder!: Folder;

  @Input('bounding')
  bounding!: Bounding

  contentInnerHTML!: string | undefined
  window!: Window

  constructor(
    private filesService: FilesService,
    private windowManagerService: WindowsManagerService
  ) { }

  ngOnInit(): void {
    this.contentInnerHTML = this.filesService.getFileContent(this.fileContentID)?.content
    this.window = this.windowManagerService.addFileWindow(this)
  }

  getFile(): File {
    return this
  }

  getFileContent() {
    return this.filesService.getFileContent(this.fileContentID)
  }

  click() {
    //this.window.active = true
    this.windowManagerService.setWindowState(this.window.id, true)
  }

}
