import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { NewsComponent } from './view/news/news.component';
import { ChooseComponent } from './view/choose/choose.component';
import { FormatDatePipe } from './pipe/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsComponent,
    ChooseComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
