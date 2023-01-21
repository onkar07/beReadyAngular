import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AuthGuard } from './auth-services/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbbarComponent } from './navbbar/navbbar.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { VideoPageComponent } from './student-page/video-page/video-page.component';
import { TeacherHomepageComponent } from './teacher-homepage/teacher-homepage.component';

const routes: Routes = [
{
  path: 'navbar', 
  component: NavbbarComponent
},
{
  path: '', 
  component: HomepageComponent
},
{
  path: 'login', 
  component: LoginComponent
},
{
  path: 'homepage', 
  component: HomepageComponent
},
{
  path: 'adminPage', 
  component: AdminHomepageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'courses', 
  component: StudentPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'videoPage', 
  component: VideoPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'teacher', 
  component: TeacherHomepageComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
