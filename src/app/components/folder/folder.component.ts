import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { File } from 'src/app/models/File';
import { WindowComponent } from '../window/window.component';
import { Link } from 'src/app/models/Link';
import { Bounding } from 'src/app/models/Bounding';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { Window } from 'src/app/models/Window';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit, Folder {

  @Input('name')
  name!: string

  @Input('files')
  files!: File[];

  @Input('subFolders')
  subFolders!: Folder[];

  @Input('links')
  links!: Link[];

  window!: Window
  
  constructor(
    private windowManagerService: WindowsManagerService
  ) {}

  ngOnInit(): void {
    this.window = this.windowManagerService.addFolderWindow(this)
  }

  click() {
    //this.window.active = true
    this.windowManagerService.setWindowState(this.window.id, true)
  }

  getFolder(): Folder {
    return {
      name: this.name,
      files: this.files,
      links: this.links,
      subFolders: this.subFolders
    }
  }

}
