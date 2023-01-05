import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';
import { WindowComponent } from 'src/app/components/window/window.component';

import projects from '../../../assets/projects/projects.json';
import project1 from '../../../assets/projects/project1'
import { FolderComponent } from 'src/app/components/folder/folder.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild("container")
  container!: ElementRef

  @ViewChildren('windows')
  windows!: QueryList<WindowComponent>

  @ViewChildren('folders')
  folders!: QueryList<FolderComponent>
  
  projects: Project[] | undefined
  project1: string = project1

  constructor() { }

  ngOnInit(): void {
    this.projects = (<any>projects.projects)
  }

  ngAfterViewInit() {
    const boudingContainer = this.container.nativeElement.getBoundingClientRect()
    const bounding: Bounding = {
      top: boudingContainer.top,
      right: boudingContainer.right,
      bottom: boudingContainer.bottom,
      left: boudingContainer.left
    }
    for (let window of this.windows.toArray()) {
      window.setBouding(bounding)
      window.setSize()
      window.setPosition()
    }
    for (let [i, folder] of this.folders.toArray().entries()) {
      folder.showWindowFromId = this.showWindowFromId
      folder.setWindow(this.windows.toArray()[i])
    }
  }

  showWindowFromId(id: number) {
    this.windows.toArray()[id].active = true
  }
}
