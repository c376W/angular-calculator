import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtnComponent} from './buttons/btn.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
