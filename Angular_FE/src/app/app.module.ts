import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './Concepts/data-binding/data-binding.component';
import { SimpleExampleService } from './Concepts/Services/simple-example.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './Example/department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  providers: [SimpleExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
