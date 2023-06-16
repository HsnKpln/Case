import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesModule } from './certificates/certificates.module';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes),CertificatesModule,ModalModule,
    HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })],
  exports: [HomePageComponent],
})
export class HomePageModule {}
