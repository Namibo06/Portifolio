import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { ErrorComponent } from './pages/error/error/error.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'projetos',
    component:ProjectsComponent
  },
  {
    path:'sobre',
    component:ContactComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
