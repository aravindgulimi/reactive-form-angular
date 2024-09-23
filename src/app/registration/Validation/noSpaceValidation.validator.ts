import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllowed(control: AbstractControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: 'space created' };
    }
    return null;
  }

  static minLength(control: AbstractControl){
    const value = control.value || '';

    if(value < 3 ){
        return { minLength : 'Minimum length is 3 characters'}
    }else if(value >15){
        return {maxLength: 'Maximum length is 15 characters'};
    }
    return null;
  }
}