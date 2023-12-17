import { Component, Input, OnInit } from '@angular/core';
import { File } from 'src/app/models/File';
import { Folder } from 'src/app/models/Folder';
import { Link } from 'src/app/models/Link';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, Project {

  name!: string;
  description!: string;
  subFolders!: Folder[];
  files!: File[];
  links!: Link[];
  order!: number;

  constructor() { }
  

  ngOnInit(): void {
  }

}
