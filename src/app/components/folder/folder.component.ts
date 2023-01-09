import { Component, Input, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit, Folder {

  @Input('name')
  name!: string

  @Input('id')
  id!: number

  @Input('showWindowFromId')
  showWindowFromId!: (args: number) => void

  window!: WindowComponent
  files!: File[];
  
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
