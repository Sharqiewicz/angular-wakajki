import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
})
export class TextCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() text!: string
}
