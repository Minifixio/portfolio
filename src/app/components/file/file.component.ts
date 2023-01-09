import { Component, Input, OnInit } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { File } from '../../models/File';
import { Folder } from 'src/app/models/Folder';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit, File {

  @Input('name')
  name!: string

  @Input('id')
  id!: number

  @Input('showWindowFromId')
  showWindowFromId!: (args: number) => void

  @Input('contentFileName')
  contentFileName!: string;

  @Input('parentFolder')
  parentFolder!: Folder;

  window!: WindowComponent

  constructor() { }

  ngOnInit(): void {
  }

  setWindow(window: WindowComponent) {
    this.window = window
    console.log(window)
  }

  click() {
    this.window.active = true
  }

}
