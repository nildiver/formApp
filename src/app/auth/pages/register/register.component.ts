import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidators from 'src/app/shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {


  public myForm: FormGroup= this.fb.group({
    name:['',[Validators.required,Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email:['',[Validators.required,Validators.pattern(customValidators.emailPattern)]],
    username:['',[Validators.required, customValidators.cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],
  });

  constructor(
    private fb:FormBuilder,
    private validatorsServices:ValidatorsService
  ){}

  isValidField(field:string){
    //deve optener validacion desde un servicio
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
