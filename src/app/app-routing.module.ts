import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components
import { NewspageComponent } from './components/news-feed/newsfeed.component';
import { HomepageComponent } from './components/news-sources/newssource.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'news/:id', component: NewspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
