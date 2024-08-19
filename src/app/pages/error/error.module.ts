import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HeaderModule } from '../../shared/header/header.module';


@NgModule({
  declarations: [ErrorComponent],
  exports: [ErrorComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorModule { }
