import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {



  public myform :FormGroup = this.fb.group({
    gender:['M',Validators.required],
    WantNotifications:[true,Validators.required],
    termsAndConditions:[false,Validators.requiredTrue],
  })

  public person={
    gender:'f',
    WantNotifications:false,
  }

 constructor(private fb:FormBuilder){}
  ngOnInit(): void {
   this.myform.reset(this.person);
  }

 isValidField(field:string):boolean |null{
  return this.myform.controls[field].errors && this.myform.controls[field].touched ;
 }

//ngSubmit
onSave(){
  if(this.myform.invalid){
    this.myform.markAllAsTouched();
    return;
  }

  const {termsAndConditions,...newPerson}=this.myform.value;

  this.person=newPerson;
  console.log(this.myform.value);
  console.log(this.person);
}


}
