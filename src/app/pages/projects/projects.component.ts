import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';
import { WindowComponent } from 'src/app/components/window/window.component';

import projects from '../../../assets/projects/projects.json';
import template from '../../../assets/projects/project1'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild("container")
  container!: ElementRef

  @ViewChild("window")
  window!: WindowComponent
  
  projects: Project[] | undefined
  template: string = template

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
    this.window.setBouding(bounding)
  }

}
