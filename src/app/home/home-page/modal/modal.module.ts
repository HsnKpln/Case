import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CertificatesModule } from '../certificates/certificates.module';




@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,MatDialogModule,CertificatesModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
