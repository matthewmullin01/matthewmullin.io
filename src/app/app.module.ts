import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { HorizontalCardComponent } from './cards/style1/horizontal-card/horizontal-card.component';
import { VerticalCardComponent } from './cards/style1/vertical-card/vertical-card.component';
import { HorizontalCard2Component } from './cards/style2/horizontal-card-2/horizontal-card-2.component';
import { ProjectContentComponent } from './project-content/project-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TerminalComponent,
    HorizontalCardComponent,
    VerticalCardComponent,
    ProjectContentComponent,
    HorizontalCard2Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
