import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import  * as customValidators from 'src/app/shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {


  public myForm: FormGroup= this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.validatorsServices.firstNameAndLastnamePattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorsServices.emailPattern)]],
    username:['',[Validators.required, this.validatorsServices.cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],
  });

  constructor(
    private fb:FormBuilder,
    private validatorsServices:ValidatorsService
  ){}

  isValidField(field:string){
    //deve optener validacion desde un servicio
    return this.validatorsServices.isValidField(this.myForm,field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
