import { Injectable } from '@angular/core'
import { Drink, Player } from '../../types'

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private drinks: Drink[] = []
  private players: Player[] = []

  constructor() {}

  addPlayer(player: Player) {
    this.players.push(player)
  }
  getPlayers() {
    return this.players
  }
  removePlayer(id: string) {
    this.players = this.players.filter(player => player.id !== id)
  }

  addDrink(drink: Drink) {
    this.drinks.push(drink)
  }
  removeDrink(name: string) {
    this.drinks = this.drinks.filter(drink => drink.name !== name)
  }
  getDrinks() {
    return this.drinks
  }
}
