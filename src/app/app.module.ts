import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import  {  ScrollingModule  }  from  '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import {GameComponent} from "./game/game.component";
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ScrollingModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
