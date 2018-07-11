import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {appRoute} from './router.config';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  {MaterialModule} from './material/material.module';
import {TrainService} from './train.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainBetweenStationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute,{useHash:true}),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
