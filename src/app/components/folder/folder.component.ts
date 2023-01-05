import { Component, Input, OnInit } from '@angular/core';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  @Input('name')
  name!: string

  @Input('id')
  id!: number

  @Input('showWindowFromId')
  showWindowFromId!: (args: number) => void

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
