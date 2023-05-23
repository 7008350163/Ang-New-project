import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HttpClientModule} from '@angular/common/http';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';
import { StudentComponent } from './student/student.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './parent/parent.component';
import { Comp1Component } from './parent/comp1/comp1.component';
import { Comp2Component } from './parent/comp2/comp2.component';
import { Comp3Component } from './parent/comp3/comp3.component';
import { ParamComponent } from './param/param.component';
import { DisplayComponent } from './param/display/display.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    StudentComponent,
    WarningalertComponent,
    SuccessalertComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    ParentComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ParamComponent,
    DisplayComponent,
    GameControlComponent,
    GameManagerComponent,
    EvenComponent,
    OddComponent,
    FormComponent,
    ReactiveformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
