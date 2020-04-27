import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoshootListComponent } from './components/photoshoot-list/photoshoot-list.component';
import { CreatePhotoshootComponent } from './components/create-photoshoot/create-photoshoot.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: 'photoshoot', component: PhotoshootListComponent},
  {path: 'create', component: CreatePhotoshootComponent},
  {path: 'photoshoot/:id', component: PhotoshootListComponent},
  {path: 'photoshoot/search/:keyword', component: PhotoshootListComponent},
  {path: 'photoshoot/edit/:id', component: PhotoshootListComponent},
  {path: '', component: PhotoshootListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/name/:keyword', component: SearchComponent},
  {path: 'search/lenses/:keyword', component: SearchComponent},
  {path: 'search/comments/:keyword', component: SearchComponent},
  {path: 'search/location/:location', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
