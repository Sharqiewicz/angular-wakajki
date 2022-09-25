import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-text-card-input',
  templateUrl: './text-card-input.component.html',
})
export class TextCardInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string
  @Input() color: string = 'text-white'
  @Input() class: string = ''
}
