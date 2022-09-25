import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html'
})
export class LinkButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text!: string;
  @Input() link!: string;

}
