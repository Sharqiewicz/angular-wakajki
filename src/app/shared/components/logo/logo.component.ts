import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  imageSrc = 'assets/svg/logo.svg'
  imageAlt = 'wakajki logo'

  constructor() {}

  ngOnInit(): void {}
}
