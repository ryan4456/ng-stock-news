import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './view/choose/choose.component';
import { IndexComponent } from './view/index/index.component';
import { NewsComponent } from './view/news/news.component';

const routes: Routes = [
  
  {path: 'news', component: NewsComponent},
  {path: 'choose', component: ChooseComponent},
  {path: '', component: IndexComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
