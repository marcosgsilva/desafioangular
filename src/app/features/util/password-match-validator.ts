import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmation = control.get('confirmationPassword');
    if (password?.value && confirmation?.value && password.value !== confirmation.value) {
      confirmation.setErrors({ 'invalidConfirmationPassword': true })
      return { passwordMismatch: true };
    }
  
    return null;
  };