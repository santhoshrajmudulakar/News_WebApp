import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

//services
import { DataService } from './services/data.service';

//components
import { AppComponent } from './app.component';
import { NewspageComponent } from './components/news-feed/newsfeed.component';
import { HomepageComponent } from './components/news-sources/newssource.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { FooterComponent } from './components/widgets/footer/footer.component';


//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NewspageComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
