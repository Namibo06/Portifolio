import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderModule } from '../../shared/header/header.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    RouterModule
  ]
})
export class ProjectsModule { }
