import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../../shared/shared.module'

import { FormDrinkComponent } from './components/form-drink/form-drink.component'
import { DrinksPage } from './pages/drinks/drinks.page'
import { PlayersPage } from './pages/players/players.page'

@NgModule({
  declarations: [FormDrinkComponent, DrinksPage, PlayersPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule],
  exports: [FormDrinkComponent, DrinksPage, PlayersPage],
})
export class GameModule {}
