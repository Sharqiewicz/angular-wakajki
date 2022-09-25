import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-text-large',
  templateUrl: './text-large.component.html',
})
export class TextLargeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string
  @Input() color: string = 'text-white'
  @Input() class: string = ''
}
