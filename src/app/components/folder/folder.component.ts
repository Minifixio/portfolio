import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { File } from 'src/app/models/File';
import { WindowComponent } from '../window/window.component';
import { Link } from 'src/app/models/Link';
import { Bounding } from 'src/app/models/Bounding';

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

  @ViewChild("window")
  window!: WindowComponent

  bouding!: Bounding;
  
  constructor() {}

  ngOnInit(): void {
  }

  click() {
    this.window.active = true
  }

  setBounding(bounding: Bounding) {
    this.bouding = bounding
    this.window.setBounding(bounding)
    this.window.setPosition()
    this.window.setSize()
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
