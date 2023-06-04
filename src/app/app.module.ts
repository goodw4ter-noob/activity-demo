import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { ActivityDemoDirective } from './directives/activity-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    InactiveComponent,
    ActivityDemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
