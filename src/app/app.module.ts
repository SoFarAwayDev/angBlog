import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { PostsComponent } from './posts/components/posts/posts.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './store/app.reducers';
import { LineEffects } from './posts/store/line.effects';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SignUpComponent,
    SignInComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LineEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
