import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
