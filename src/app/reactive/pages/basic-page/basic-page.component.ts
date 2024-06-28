import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

// esta es una forma de crear formularios reactivos
  // public myForm:FormGroup = new FormGroup({
  //   name: new FormGroup('',[],[]),
    //   name: new FormGroup(''),
  //   price: new FormGroup(0),
  //   inStorage: new FormGroup(0),
  // })


  // esta es la otra forma de crear formularios

  public myForm:FormGroup =this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    price:[0,[Validators.required,Validators.min(0)]],
    inStorage:[0,[Validators.required,Validators.min(0)]],

  })
constructor(private fb:FormBuilder){}

ngOnInit(): void {

}


isValidField(field:string):boolean |null{
 return this.myForm.controls[field].errors && this. myForm.controls[field].touched ;
}

getFieldError(field:string):string |null{
  if(!this.myForm.controls[field])return null;
  const errors = this.myForm.controls[field].errors || {};

  for (const key of Object.keys(errors)){
    switch(key) {
      case 'requerid':
        return 'este campo es requerido';
      case'minlength':
      return `Minimo ${errors['minlength'].requeridLennght} caracters.`;
    }

  }
  return null
}

onsave():void{
  if(this.myForm.valid){
    this.myForm.markAllAsTouched();
    return;}
 console.log(this.myForm.value)
 this.myForm.reset({price:0,inStorage:0});
}

}
