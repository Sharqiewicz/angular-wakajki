import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DrinksPage } from './modules/game/pages/drinks/drinks.page'
import { PlayersPage } from './modules/game/pages/players/players.page'
import { PageNotFoundPage } from './shared/pages/page-not-found/page-not-found.page'

const routes: Routes = [
  { path: 'drinks', component: DrinksPage },
  { path: 'players', component: PlayersPage },
  { path: '**', component: PageNotFoundPage },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [],
  declarations: [],
})
export class AppRoutingModule {}
