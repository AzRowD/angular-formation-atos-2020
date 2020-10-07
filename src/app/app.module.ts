import { HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/fr';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
