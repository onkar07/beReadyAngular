import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbbarComponent } from './navbbar/navbbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth-services/auth.guard';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { LoginAuthService } from './auth-services/login-auth.service';
import { TokenInterceptorService } from './auth-services/token-interceptor.service';
import { StudentPageComponent } from './student-page/student-page.component';
import { TeacherHomepageComponent } from './teacher-homepage/teacher-homepage.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbbarComponent,
    HomepageComponent,
    AdminHomepageComponent,
    FooterComponent,
    StudentPageComponent,
    TeacherHomepageComponent,
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,
    MatDialogModule,
    YouTubePlayerModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginAuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }