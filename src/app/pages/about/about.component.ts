import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { } 

  ngOnInit(): void {
    this.title.setTitle('Emile Le Gallic - About')
    this.meta.updateTag(
      {name: 'keywords', content: 'Emile Le Gallic, Portfolio, About'}, 
      'name=keywords'
    )
    this.meta.updateTag(
      {name: 'description', content: "Find more about my socials, my skills, my education and my hobbies!"},
      'name=description'
    )
  }

  click(link: string) {
    window.open(link)
  }
}
