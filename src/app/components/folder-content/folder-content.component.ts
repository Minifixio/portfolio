import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { File } from 'src/app/models/File';
import { Bounding } from 'src/app/models/Bounding';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css']
})
export class FolderContentComponent implements OnInit {

  @ViewChildren('files')
  files!: QueryList<FileComponent>

  @ViewChildren('links')
  links!: QueryList<FileComponent>

  @Input('folder')
  folder!: Folder

  bounding!: Bounding

  constructor() { }

  ngOnInit(): void {
  }
  

}
