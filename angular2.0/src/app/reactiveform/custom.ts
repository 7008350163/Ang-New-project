import { ValidationErrors,AbstractControl } from "@angular/forms";
 
export function emailvalid(str:any){
    return (control:AbstractControl):ValidationErrors| null =>{
        return control.value == str?{forbid:control.value}:null
    }
}