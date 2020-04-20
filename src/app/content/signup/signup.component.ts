import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public staticValidators = [Validators.required, Validators.minLength(6)];

  public signUpForm: FormGroup = this.fb.group({
    username: this.fb.control('',
      [...this.staticValidators, this.userNameValidator],
      this.uniqUserNameValidator.bind(this)
    ),
    emails: this.fb.array([this.fb.control('')]),
    male: this.fb.control(true),
    password: this.fb.group({
      password: ['', this.staticValidators],
      cpassword: ['', this.staticValidators],
    }, {
      validators: this.equalValidator
    })
  });


  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.signUpForm.patchValue({
        male: false
      });
    }, 5000);
    // const formJSON = {
    //   customer: {required: true, value: 'Mueller'},
    //   role: {required: true, value: 'Manager'}
    // };
    // const form = Object.entries(formJSON)
    //   .reduce((acc, [key, value]) => {
    //     const validators = value.required ? [Validators.required] : [];
    //     return {...acc, [key]: new FormControl(value.value, validators)};
    //   }, {});
  }

  goToLogin() {
    this.location.back();
    // this.router.navigate(['/login']);
  }

  userNameValidator({value}: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {
        onlyLetters: 'You should use only letters'
      };
  }

  equalValidator({value: {password, cpassword}}: FormGroup): ValidationErrors | null {
    return password === cpassword
      ? null
      : {
        equal: 'Passwords fields not equal'
      };
  }

  uniqUserNameValidator({value}: FormControl): Observable<ValidationErrors | null> {
    return timer(300)
      .pipe(switchMap(() => this.http.post('/auth/checkUsername', {username: value})
        .pipe(
          catchError((err) => {
            console.log(err);
            return of(null);
          })
        )));
  }

  public getControls(control: AbstractControl, path: string): AbstractControl[] {
    return (control.get(path) as FormArray).controls;
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
  }
}


function fn() {
  console.log(this);
}
