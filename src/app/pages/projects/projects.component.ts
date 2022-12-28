import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import projects from '../../../assets/projects/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] | undefined

  constructor() { }

  ngOnInit(): void {
    this.projects = (<any>projects.projects);
  }

}
