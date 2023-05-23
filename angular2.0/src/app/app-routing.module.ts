import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { Comp1Component } from './parent/comp1/comp1.component';
import { Comp2Component } from './parent/comp2/comp2.component';
import { Comp3Component } from './parent/comp3/comp3.component';
import { ParamComponent } from './param/param.component';
import { DisplayComponent } from './param/display/display.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const routes: Routes = [
  {path:"page1",component:ObservableComponent},
  {path:"home",component:HomeComponent},
  //default path
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"student",component:StudentComponent},
  //nested routing component
  {path:"parent",component:ParentComponent},
  {path:"parent/comp1",component:Comp1Component},
  {path:"parent/comp2",component:Comp2Component},
  {path:"parent/comp3",component:Comp3Component},
   //param routing
  {path:"param",component:ParamComponent},
  {path:"param/:id/display",component:DisplayComponent},
  //template form 
  {path:"templateform",component:FormComponent},
  {path:"reactiveform",component:ReactiveformComponent},
   //error path 404 error
   {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
