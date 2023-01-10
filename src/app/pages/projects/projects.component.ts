import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';
import { Window } from 'src/app/models/Window';

import projects from '../../../assets/projects/projects.json';
import { FolderComponent } from 'src/app/components/folder/folder.component';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { Observable } from 'rxjs';

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

  windows$!: Observable<Window[]>
  
  projects!: Project[]

  constructor(
    private windowManagerService: WindowsManagerService
  ) { }

  ngOnInit(): void {
    this.projects = (<any>projects.projects)
    this.windows$ = this.windowManagerService.getCurrentWindowsSubject().asObservable()
    this.windowManagerService.getCurrentWindowsSubject().asObservable().subscribe(val => console.log(val))
  }

  ngAfterViewInit() {
    const boudingContainer = this.container.nativeElement.getBoundingClientRect()
    const bounding: Bounding = {
      top: boudingContainer.top,
      right: boudingContainer.right,
      bottom: boudingContainer.bottom,
      left: boudingContainer.left
    }
    this.windowManagerService.setWindowsBounding(bounding)
  }

}
