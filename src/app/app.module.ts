import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeadingSectionComponent } from './module/heading-section/heading-section.component';
import { MainContentComponent } from './module/main-content/main-content.component';
import { CardLayoutComponent } from './module/card-layout/card-layout.component';
import { FreaquntlyAskSectionComponent } from './module/freaquntly-ask-section/freaquntly-ask-section.component';
import { FooterComponent } from './module/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadingSectionComponent,
    MainContentComponent,
    CardLayoutComponent,
    FreaquntlyAskSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
