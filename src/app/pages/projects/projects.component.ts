import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';
import { Window } from 'src/app/models/Window';

import projects from '../../../assets/projects/projects.json';
import { FolderComponent } from 'src/app/components/folder/folder.component';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { Observable } from 'rxjs';
import { WindowComponent } from 'src/app/components/window/window.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild("container")
  container!: ElementRef

  @ViewChildren('folders')
  folders!: QueryList<FolderComponent>

  @ViewChildren('windows')
  windows!: QueryList<WindowComponent>

  windows$!: Observable<Window[]>
  
  projects!: Project[]
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setBouding()
  }

  constructor(
    private windowManagerService: WindowsManagerService
  ) { }

  ngOnInit(): void {
    console.log('Init projects')
    this.windowManagerService.resetWindows()
    this.projects = (<any>projects.projects)
    this.windows$ = this.windowManagerService.getCurrentWindowsSubject().asObservable()
  }

  ngAfterViewInit() {
    this.setBouding()
    this.windowManagerService.getCurrentWindowsSubject().asObservable().subscribe(val => {
      this.windows.toArray().forEach(window => {
        window.setPosition()
        window.setSize()
      })
    })
  }

  setBouding() {
    const boudingContainer = this.container.nativeElement.getBoundingClientRect()
    const bounding: Bounding = {
      top: boudingContainer.top,
      right: boudingContainer.right,
      bottom: boudingContainer.bottom,
      left: boudingContainer.left,
      width: boudingContainer.width,
      height: boudingContainer.height
    }
    this.windowManagerService.setWindowsBounding(bounding)
  }

}
