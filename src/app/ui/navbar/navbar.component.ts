import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  githubLink = "https://github.com/Minifixio"

  constructor() { }

  ngOnInit(): void {
  }

  clickGithub() {
    window.open(this.githubLink)
  }

}
