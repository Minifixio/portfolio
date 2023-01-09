import { Component, Input, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { File } from 'src/app/models/File';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.css']
})
export class FolderContentComponent implements OnInit {

  @Input('folder')
  folder!: Folder

  constructor() { }

  ngOnInit(): void {
  }

}
