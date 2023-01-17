import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowComponent } from '../components/window/window.component';
import { Bounding } from '../models/Bounding';
import { File } from '../models/File';
import { Folder } from '../models/Folder';
import { Window } from '../models/Window';

@Injectable({
  providedIn: 'root'
})
export class WindowsManagerService {

  currentWindows: Window[] = []

  currentWindowsSubject!: BehaviorSubject<Window[]>

  bounding: Bounding = {top:0, bottom:0, right:0, left:0, width:0, height:0}

  constructor() { 
    this.currentWindowsSubject = new BehaviorSubject(this.currentWindows)
  }

  addWindow(window: Window): number {
    const id = (this.currentWindows.length - 1)
    window.id = id
    this.currentWindows.push(window)

    this.currentWindowsSubject.next(this.currentWindows)
    return id
  }

  addFileWindow(file: File) {
    const window: Window = {
      id: this.currentWindows.length,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bounding: this.bounding,
      active: false,
      isFolder: false,
      file: file,
      folder: undefined
    }
    this.currentWindows.push(window)
    this.currentWindowsSubject.next(this.currentWindows)
    return window
  }

  addFolderWindow(folder: Folder) {
    const window: Window = {
      id: this.currentWindows.length,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bounding: this.bounding,
      active: false,
      isFolder: true,
      file: undefined,
      folder: folder
    }
    this.currentWindows.push(window)
    this.currentWindowsSubject.next(this.currentWindows)
    return window
  }

  setWindowsBounding(bounding: Bounding) {
    this.bounding = bounding
    this.currentWindows.forEach(window => {
      window.bounding = bounding
    })
    this.currentWindowsSubject.next(this.currentWindows)
  }

  getCurrentWindowsSubject() {
    return this.currentWindowsSubject
  }

  setWindowState(windowID: number, state: boolean) {
    this.currentWindows.map(window => {if(window.id === windowID) { 
      window.active = state
      if (state) {
        window.height = 0
      }
    }})

    //Timeout because the closing animation takes 0,2s to run
    setTimeout(() => {
      this.currentWindowsSubject.next(this.currentWindows)
    }, state ? 0 : 1000)
  }

  resetWindows() {
    this.currentWindows = []
    this.currentWindowsSubject = new BehaviorSubject(this.currentWindows)
  }
}
