import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { UserService } from './user.service';
import { EmpComponent } from './emp/emp.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    EmpComponent,
	
  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
