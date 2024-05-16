import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HeaderModule } from '../../shared/header/header.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ContactComponent],
  exports:[ContactComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ContactModule { }
