import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {MiniWordComponent} from './tp2/mini-word/mini-word.component';
import {ArcEnCielComponent} from './tp2/arc-en-ciel/arc-en-ciel.component';
import {ThemesComponent} from './tp2/themes/themes.component';
import {EmbaucheeComponent} from './cv/embauchee/embauchee.component';
import {DetailsIdComponent} from './cv/details-id/details-id.component';
import {UpdatzComponent} from './cv/updatz/updatz.component';

const routes: Routes = [
  { path: 'cvs', component: CvComponent },
  { path: 'embauchee', component: EmbaucheeComponent },
  {path: 'update/:id' , component: UpdatzComponent},
  {path: 'details/:id', component: DetailsIdComponent},
  { path: 'miniWord', component: MiniWordComponent },
  { path: 'arc-en-ciel', component: ArcEnCielComponent},
  { path: 'themes', component: ThemesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
