import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productService = inject(ProductsService);
  matSackBar = inject(MatSnackBar);
  router = inject(Router);
  focusSupported: boolean = false;

  constructor(private fb: FormBuilder) { }
  form!: FormGroup;


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required]],
      confirmation: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }



  onFocusEvent(): void {
    this.focusSupported = true;
  }

  onSubmit() {
    if (this.form.valid) {
      this.focusSupported = true;
      this.productService.post({
        title: this.form.get('username')?.value
      })
        .subscribe(() => {
          this.matSackBar.open('Produto Criado com sucesso', 'Ok');
          this.router.navigateByUrl('/');
        })
    }
  }


}




export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log(control)

  const password = control.get('password');
  const confirmation = control.get('confirmation');
  if (password?.value && confirmation?.value && password.value !== confirmation.value) {
    confirmation.setErrors({'invalidConfirmationPassword': true})
    return { passwordMismatch: true };
  }

  return null;
};