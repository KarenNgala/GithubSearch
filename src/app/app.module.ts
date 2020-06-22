import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { GithubService } from './services/github.service';
import { DateCountPipe } from './pipe/date-count.pipe';
import { HoverDirective } from './directive/hover.directive';
import { NotFoundComponent } from './Error/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    DateCountPipe,
    HoverDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
