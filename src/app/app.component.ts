import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-portfolio';

  constructor(private metatagService: Meta) {}

  ngOnInit(): void {
    this.metatagService.addTags([
      {name: 'keywords', content: 'Emile Le Gallic, Portfolio'},
      {name: 'author', content: 'Emile Le Gallic'}
    ])
  }
}
