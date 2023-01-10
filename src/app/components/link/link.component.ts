import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input('name')
  name!: string

  @Input('link')
  link!: string

  @Input('iconName')
  iconName!: string

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    window.open(this.link)
  }

}
