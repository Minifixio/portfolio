import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';

import projects from '../../../assets/projects/projects.json';
import { FolderComponent } from 'src/app/components/folder/folder.component';

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
  
  projects!: Project[]

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
    console.log('Bounding page projects : ', bounding)
    for (let folder of this.folders.toArray()) {
      folder.setBounding(bounding)
    }
  }

}
