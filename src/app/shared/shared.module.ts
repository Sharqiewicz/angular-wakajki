import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ButtonComponent } from './components/button/button.component'
import { LogoComponent } from './components/logo/logo.component'
import { LinkButtonComponent } from './components/link-button/link-button.component'
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page'
import { TextLargeComponent } from './components/text-large/text-large.component'
import { TextCardComponent } from './components/text-card/text-card.component'
import { TextCardInputComponent } from './components/text-card-input/text-card-input.component'

@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    LinkButtonComponent,
    PageNotFoundPage,
    TextLargeComponent,
    TextCardComponent,
    TextCardInputComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    LinkButtonComponent,
    PageNotFoundPage,
    TextLargeComponent,
    TextCardComponent,
    TextCardInputComponent,
  ],
})
export class SharedModule {}
