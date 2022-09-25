import { Component, OnInit } from '@angular/core'
import { GameService } from './../../game.service'
import { Drink } from '../../../../types'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
})
export class DrinksPage implements OnInit {
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  addDrink(drink: Drink) {
    this.gameService.addDrink(drink)
  }
}
