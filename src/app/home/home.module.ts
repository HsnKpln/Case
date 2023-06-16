import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { HomePageModule } from './home-page/home-page.module';
import { CrewCardPageModule } from './home-page/crew-card-page/crew-card-page.module';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [
  
  ],
  imports: [CommonModule, LayoutsModule, HomePageModule, CrewCardPageModule,MatDialogModule,
  HttpClientModule,TranslateModule.forRoot({
    defaultLanguage: 'en-US',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps : [HttpClient]
    }
  })],
  exports: [LayoutsModule, HomePageModule, CrewCardPageModule],
})
export class HomeModule {}
