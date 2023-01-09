import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { File } from '../../models/File';
import { Folder } from 'src/app/models/Folder';

import project1 from '../../../assets/projects/project1'

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, File {

  @Input('name')
  name!: string

  @Input('contentFileName')
  contentFileName!: string;

  @Input('parentFolder')
  parentFolder!: Folder;

  @ViewChild("window")
  window!: WindowComponent

  contentInnerHTML!: string

  constructor() { }

  ngOnInit(): void {
    this.contentInnerHTML = project1
  }

  setWindow(window: WindowComponent) {
    this.window = window
  }

  click() {
    this.window.active = true
  }

}
