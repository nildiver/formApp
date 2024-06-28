import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

public dynamicForm:FormGroup = this.fb.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  favoritesGames:this.fb.array([
    ['Metal gear',Validators.required],
    ['Deaht Strading',Validators.required],
  ])
});

public newFavorite:FormControl= new FormControl('',Validators.required)

  constructor(private fb:FormBuilder){}

  get favoritesGames(){
    return this.dynamicForm.get('favoritesGames') as FormArray
  }

  isValidField(field:string):boolean |null{
    return this.dynamicForm.controls[field].errors && this.dynamicForm.controls[field].touched ;
   }

   isValidFieldInArray(formArray:FormArray, index:number){
    return formArray.controls[index].errors
    && formArray.controls[index].touched ;
   }

   getFieldError(field:string):string |null{
     if(!this.dynamicForm.controls[field])return null;
     const errors = this.dynamicForm.controls[field].errors || {};

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

onAddToFavorites():void{
 if(this.newFavorite.invalid)return;
 //console.log(this.favoritesGames.value)
 const newGame= this.newFavorite.value;

 this.favoritesGames.push(
  this.fb.control(newGame,Validators.required)
 );
 this.newFavorite.reset();
}

onDeletedFavorites(index:number):void{
 this.favoritesGames.removeAt(index);
}

onSubmit():void{
 if(this.dynamicForm.invalid){
  this.dynamicForm.markAllAsTouched();
  return;
 }
 console.log(this.dynamicForm.value);
(this.dynamicForm.controls['favoritesGames'] as FormArray) = this.fb.array([]);
 this.dynamicForm.reset;
}

}
