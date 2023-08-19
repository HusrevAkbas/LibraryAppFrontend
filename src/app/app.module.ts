import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { FormGeneratorComponent } from './shared/form-generator/form-generator.component';
import { FormGroupComponent } from './shared/form-generator/form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    RegisterComponent,
    SigninComponent,
    BookFormComponent,
    BookAddComponent,
    FormGeneratorComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
