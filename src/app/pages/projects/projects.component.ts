import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Bounding } from 'src/app/models/Bounding';
import { Window } from 'src/app/models/Window';

import projects from '../../../assets/projects/projects.json';
import { FolderComponent } from 'src/app/components/folder/folder.component';
import { WindowsManagerService } from 'src/app/services/windows-manager.service';
import { Observable } from 'rxjs';
import { WindowComponent } from 'src/app/components/window/window.component';
import { Meta, Title } from '@angular/platform-browser';

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
    private windowManagerService: WindowsManagerService,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.windowManagerService.resetWindows()
    this.projects = (<any>projects.projects).sort((a: Project, b: Project) => a.order - b.order)
    this.windows$ = this.windowManagerService.getCurrentWindowsSubject().asObservable()

    this.meta.updateTag(
      {name: 'keywords', content: 'Emile Le Gallic, Portfolio, Home'}, 
      'name=keywords'
    )
    this.meta.updateTag(
      {name: 'description', content: "Hi I\'m Emile Le Gallic, a computer science student at Télécom Paris, and this is my portfolio!"},
      'name=description'
    )
    this.title.setTitle('Emile Le Gallic - Portfolio')
  }

  ngAfterViewInit() {
    this.setBouding()
    this.windowManagerService.getCurrentWindowsSubject().asObservable().subscribe(val => {
      this.windows.toArray().forEach(window => {
        window.stateChanged()
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
