import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AppComponent, MainComponent, AboutComponent, ModalComponent, PlanetsTableComponent, PeopleTableComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
