import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {path:'register', component: RegisterComponent},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), FormsModule, MatSelectModule, MatInputModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
