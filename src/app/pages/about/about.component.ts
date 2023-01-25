import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private metatagService: Meta) { }

  ngOnInit(): void {
    this.metatagService.updateTag({name: 'description', content: 'Emile Le Gallic portfolio homepage'})
  }

  click(link: string) {
    window.open(link)
  }
}
