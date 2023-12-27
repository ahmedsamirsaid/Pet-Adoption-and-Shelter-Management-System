import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { ManagepetsComponent } from './managepets/managepets.component';
import { ManageAdoptionComponent } from './manage-adoption/manage-adoption.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffPageComponent,
    ManagepetsComponent,
    ManageAdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
