import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string
  @Output() click = new EventEmitter()
}
