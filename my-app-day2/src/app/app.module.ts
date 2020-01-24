import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler  } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms'; // <-- NgModel lives here

import { Router } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { AuthService }         from './auth.service';
import { MenuService }         from './service/menu.service';
import { ErrorLogService }         from './service/log.service';

import { LoginComponent }  from './login.component'
import { MainMenuComponent }   from './main-menu.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FormvalidationModule }            from './formvalidation/formvalidation.module';
import { RichUIModule }            from './richui/richui.module';
import { EqualValidator } from './formvalidation/password.match.directive';

//Global Error Handler
import { GlobalErrorHandler } from './utils/global-error-handler';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,MainMenuComponent, AppNavbarComponent, SidebarComponent,EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RichUIModule,
    FormvalidationModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    AuthService,
    MenuService,
    ErrorLogService,
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
