import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewCardPageComponent } from './crew-card-page.component';
import { CertificatesModule } from '../certificates/certificates.module';

@NgModule({
  declarations: [CrewCardPageComponent],
  imports: [CommonModule,CertificatesModule],
  exports: [CrewCardPageComponent],
})
export class CrewCardPageModule {}
