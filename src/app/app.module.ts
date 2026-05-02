import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './shared/component/one/one.component';
import { PersonComponent } from './shared/component/person/person.component';
import { PostComponent } from './shared/component/Comment/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ParaComponent } from './shared/component/para/para.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    PersonComponent,
    PostComponent,
    ParaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
