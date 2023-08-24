import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './user/signin/signin.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { FormGeneratorComponent } from './shared/form-generator/form-generator.component';
import { FormTestComponent } from './shared/form-test/form-test.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';

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
    FormTestComponent,
    CategoryListComponent,
    CategoryAddComponent
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
