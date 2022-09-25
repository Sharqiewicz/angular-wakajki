import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { GameService } from './../../game.service'

@Component({
  selector: 'app-form-drink',
  templateUrl: './form-drink.component.html',
})
export class FormDrinkComponent implements OnInit {
  constructor(private gameService: GameService, private formBuilder: FormBuilder) {}

  drinkForm = this.formBuilder.group({
    name: '',
    percentage: 0,
    color: '',
    hasBonus: false,
  })

  ngOnInit(): void {}

  onSubmit(): void {
    this.gameService.addDrink({
      name: this.drinkForm.value.name || '',
      percentage: this.drinkForm.value.percentage || 0,
      color: this.drinkForm.value.color || '',
      hasBonus: this.drinkForm.value.hasBonus || false,
    })
  }
}
