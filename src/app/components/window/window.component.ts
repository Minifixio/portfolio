import { ElementRef } from '@angular/core';
import { Component, OnInit, Input, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { Bounding } from 'src/app/models/Bounding';
import { File } from 'src/app/models/File';
import { Folder } from 'src/app/models/Folder';
import { Window } from 'src/app/models/Window';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { FolderContentComponent } from '../folder-content/folder-content.component';

interface Drag {
  x: number
  y: number
  left: number
  top: number
}

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WindowComponent implements OnInit {

  @Input('id')
  id!: number

  @Input('width')
  width!: number
  
  @Input('height')
  height!: number
  
  @Input('left')
  left!: number
  
  @Input('top')
  top!: number

  @Input('bounding')
  bounding!: Bounding

  @Input('active')
  active!: boolean

  @Input('isFolder')
  isFolder!: boolean

  @Input('file')
  file!: File | undefined

  @Input('folder')
  folder!: Folder | undefined

  @ViewChild("folderContent")
  folderContent!: FolderContentComponent

  @ViewChild("container")
  container!: ElementRef

  @ViewChild("contentDiv")
  contentDiv!: ElementRef

  isResizing: boolean = false
  isDragging: boolean = false
  dragFrom = {} as Drag

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
    if (this.isResizing && !this.isDragging) {
      const newWidth = event.clientX - this.left - this.container.nativeElement.offsetLeft
      const newHeight = event.clientY - this.top - this.bounding.top
      console.log(newWidth, newHeight, this.bounding.top)
      if (
        this.left + newWidth < this.bounding.right &&
        this.top + newHeight < this.bounding.bottom
        ) {
          this.width = newWidth
          this.height = newHeight
      }
    }
    if (this.isDragging) {
      const newLeft = this.dragFrom.left + (event.clientX - this.dragFrom.x)
      const newTop = this.dragFrom.top + (event.clientY - this.dragFrom.y)
      if (
        newLeft > this.bounding.left &&
        newLeft + this.width < this.bounding.right &&
        newTop > 0 &&
        newTop + this.height < this.bounding.bottom
        ) {
          this.left = newLeft
          this.top = newTop
      }

    }
  }

  @HostListener('document:touchmove', ['$event']) 
  onTouchMove(event: TouchEvent) {
    if (this.isResizing && !this.isDragging) {
      const newWidth = event.touches[0].clientX - this.left - this.container.nativeElement.offsetLeft
      const newHeight = event.touches[0].clientY - this.top - this.bounding.top
      if (
        this.left + newWidth < this.bounding.right &&
        this.top + newHeight < this.bounding.bottom
        ) {
          this.width = newWidth
          this.height = newHeight
      }
    }
    if (this.isDragging) {
      const newLeft = this.dragFrom.left + (event.touches[0].clientX - this.dragFrom.x)
      const newTop = this.dragFrom.top + (event.touches[0].clientY - this.dragFrom.y)
      if (
        newLeft > this.bounding.left &&
        newLeft + this.width < this.bounding.right &&
        newTop > 0 &&
        newTop + this.height < this.bounding.bottom
        ) {
          this.left = newLeft
          this.top = newTop
      }

    }
  }

  @HostListener('document:click', ['$event']) 
  onMouseClick(event: MouseEvent) {
    console.log(event.clientX, event.clientY-65)
  }
  
  constructor(
    private windowsManagerService: WindowsManagerService
  ) { }

  ngOnInit(): void {
    this.setSize()
    this.setPosition()
  }

  setWindowID(id: number) {
    this.id = id
  }

  getFileContent() {
    return this.file?.getFileContentHTML()
  }

  setSize() {
    setTimeout(() => {
      if (this.isFolder) {
        this.width = this.contentDiv.nativeElement.childNodes[1].firstChild.offsetWidth*1.1
        this.height = this.contentDiv.nativeElement.childNodes[1].firstChild.offsetHeight*1.1
      } else {
        this.width = (this.bounding.right - this.bounding.left)*0.9
        this.height = (this.bounding.bottom - this.bounding.top)*0.9
      }
    }, 0)
  }

  setPosition() {
    setTimeout(() => {
      if (this.isFolder) {
        this.top = (this.bounding.bottom - this.bounding.top)*0.05
        this.left = (this.bounding.right - this.bounding.left - this.contentDiv.nativeElement.childNodes[1].firstChild.offsetWidth) * 1/2
      } else {
        this.top = (this.bounding.bottom - this.bounding.top)*0.05
        this.left = (this.bounding.right - this.bounding.left)*0.1 * 1/2
      }
    }, 0)
  }

  setResize(state: boolean) {
    this.isResizing = state
  }

  setDragging(state: boolean, event: MouseEvent) {
    console.log(this.bounding)
    this.isDragging = state
    if (state == true) {
      this.dragFrom = {x: event.clientX, y: event.clientY, left: this.left, top: this.top}
    }
  }

  setDraggingMobile(state: boolean, event: TouchEvent) {
    this.isDragging = state
    if (state == true) {
      this.dragFrom = {x: event.touches[0].clientX, y: event.touches[0].clientY, left: this.left, top: this.top}
    }
  }

  close() {
    this.active = false
    this.windowsManagerService.setWindowState(this.id, false)
  }

}
