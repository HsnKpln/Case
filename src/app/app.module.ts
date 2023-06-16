import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient){
   return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule,MatDialogModule, BrowserAnimationsModule,
  HttpClientModule,TranslateModule.forRoot({
    defaultLanguage: 'en-US',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps : [HttpClient]
    }
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
