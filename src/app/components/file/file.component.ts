import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WindowComponent } from '../window/window.component';
import { File } from '../../models/File';
import { Folder } from 'src/app/models/Folder';

import project1 from '../../../assets/projects/project1'
import { Bounding } from 'src/app/models/Bounding';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css',  '../../../assets/projects/project1.css']
})
export class FileComponent implements OnInit, File {

  @Input('name')
  name!: string

  @Input('contentFileName')
  contentFileName!: string;

  @Input('parentFolder')
  parentFolder!: Folder;

  @Input('bounding')
  bounding!: Bounding

  @ViewChild("window")
  window!: WindowComponent

  contentInnerHTML!: string
  windowActive: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.contentInnerHTML = project1
  }

  ngAfterViewInit() {
    this.window.setBouding(this.bounding)
    this.window.setSize()
    this.window.setPosition()
  }

  click() {
    this.window.active = true
    this.windowActive = !this.windowActive
    console.log(this.windowActive)
  }

}
