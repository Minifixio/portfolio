import { ElementRef } from '@angular/core';
import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
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
  styleUrls: ['./window.component.css']
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

  @ViewChild("container")
  public container!: ElementRef

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

  @HostListener('document:click', ['$event']) 
  onMouseClick(event: MouseEvent) {
    console.log(event.clientX, event.clientY-65)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  setResize(state: boolean) {
    console.log(1)
    this.isResizing = state
  }

  setDragging(state: boolean, event: MouseEvent) {
    console.log(2)
    this.isDragging = state
    if (state == true) {
      this.dragFrom = {x: event.clientX, y: event.clientY, left: this.left, top: this.top}
    }
  }

  setBouding(bounding: Bounding) {
    console.log(bounding)
    this.bounding = bounding;
  }

}
