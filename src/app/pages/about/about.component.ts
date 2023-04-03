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
    this.meta.updateTag({name: 'keywords', content: 'Emile Le Gallic, Portfolio, About'})
    this.title.setTitle('Emile Le Gallic - About')
  }

  click(link: string) {
    window.open(link)
  }
}
