import { ElementRef } from '@angular/core';
import { Component, OnInit, Input, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { Bounding } from 'src/app/models/Bounding';

interface Drag {
  x: number
  y: number
  left: number
  top: number
}

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css', '../../pages/projects/template.css'],
  encapsulation: ViewEncapsulation.None
})
export class WindowComponent implements OnInit {

  @Input('width')
  width!: number
  
  @Input('height')
  height!: number
  
  @Input('left')
  left!: number
  
  @Input('top')
  top!: number

  @Input('active')
  active!: boolean

  @Input('content')
  content!: string

  @ViewChild("container")
  container!: ElementRef

  isResizing: boolean = false
  isDragging: boolean = false
  bounding!: Bounding
  dragFrom = {} as Drag

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(event: MouseEvent) {
    if (this.isResizing && !this.isDragging) {
      const newWidth = event.clientX - this.left - this.container.nativeElement.offsetLeft
      const newHeight = event.clientY - this.top - this.container.nativeElement.offsetTop
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
      const newHeight = event.touches[0].clientY - this.top - this.container.nativeElement.offsetTop
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
  
  constructor() { }

  ngOnInit(): void {
  }

  setResize(state: boolean) {
    this.isResizing = state
  }

  setDragging(state: boolean, event: MouseEvent) {
    this.isDragging = state
    if (state == true) {
      this.dragFrom = {x: event.clientX, y: event.clientY, left: this.left, top: this.top}
    }
  }

  setDraggingMobile(state: boolean, event: TouchEvent) {
    console.log('setDraggingMobile', state)
    this.isDragging = state
    if (state == true) {
      this.dragFrom = {x: event.touches[0].clientX, y: event.touches[0].clientY, left: this.left, top: this.top}
    }
  }

  setBouding(bounding: Bounding) {
    this.bounding = bounding;
  }

  close() {
    this.active = false
  }

}
