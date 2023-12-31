import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
  },
];

@NgModule({
  declarations: [LayoutsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NavbarModule],
  exports: [LayoutsComponent],
})
export class LayoutsModule {}
