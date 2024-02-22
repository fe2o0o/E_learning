import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AuthComponent } from './auth/auth.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: "",redirectTo:"home",pathMatch:"full" },
  { path: "home", component: HomeContainerComponent },
  { path: "auth", component: AuthComponent },
  {path:"courses" ,component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
