import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsComponent } from './cv/details/details.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { MiniWordComponent } from './tp2/mini-word/mini-word.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArcEnCielComponent } from './tp2/arc-en-ciel/arc-en-ciel.component';
import { ArcEnCielDirective } from './tp2/arc-en-ciel/arc-en-ciel.directive';
import { ThemesComponent } from './tp2/themes/themes.component';
import { EmbaucheeComponent } from './cv/embauchee/embauchee.component';
import { HeaderComponent } from './header/header.component';
import { DetailsIdComponent } from './cv/details-id/details-id.component';
import { UpdatzComponent } from './cv/updatz/updatz.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailsComponent,
    ItemComponent,
    ListComponent,
    DefaultImagePipe,
    MiniWordComponent,
    ArcEnCielComponent,
    ArcEnCielDirective,
    ThemesComponent,
    EmbaucheeComponent,
    HeaderComponent,
    DetailsIdComponent,
    UpdatzComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
