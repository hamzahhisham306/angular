import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContaineQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doeeNotContainQuestionMark: true };
}

function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null);
  }
  return of({ notUnique: true });
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

// In Angular, asyncValidators are used when you need to perform an asynchronous validation,
// typically when checking if a value exists or is unique in a database or through an API call.
//  You should place asyncValidators in the FormControl configuration where asynchronous checks are necessary,
//  often for fields like email or username.


export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        mustContaineQuestionMark,
      ],
      asyncValidators: [emailIsUnique],
    }),
  });
  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }
  onSubmit() {
    console.log(this.form);
  }
//   this.form.valueChanges is an Observable that emits whenever the form’s values change.
// Using debounceTime(500), it waits 500 milliseconds after the last change to avoid saving on every keystroke. Only when the user pauses typing will it proceed.
// When a change occurs, it updates localStorage by saving the email value in JSON format. This allows the email to be automatically saved as the user types without refreshing the page.

  ngOnInit() {
    const savedForm = window.localStorage.getItem("saved-login-form");
    if(savedForm){
      const loadedForm = JSON.parse(savedForm);
      this.form.controls.email.setValue(loadedForm.email)
    }
    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          );
        },
      });
      // This part ensures the subscription to valueChanges is properly cleaned up when
      //  the component is destroyed, preventing memory leaks by unsubscribing
      //  when the component is no longer in use.

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
// We need to use JSON.stringify to store the email object in localStorage because localStorage only supports storing data as strings.
// If we try to store an object directly, JavaScript will automatically convert it to a string like "[object Object]",
// which doesn’t preserve the actual structure or content of the object.

// - **`JSON.stringify`**: Converts a JavaScript object or array into a JSON string.
// This allows you to store complex data structures (like objects or arrays) in `localStorage` as a text format that retains
// the data structure.

//   - In your example:
//     ```javascript
//     JSON.stringify({ email: value.email });
//     ```
//     This converts `{ email: value.email }` into a JSON string like `"{\"email\":\"user@example.com\"}"`,
//     which `localStorage` can store correctly.

// - **`JSON.parse`**: Converts a JSON string back into a JavaScript object or array.
// When you retrieve the data from `localStorage`, it will be in string format, so `JSON.parse` is used to
// transform it back into an object or array that JavaScript can work with directly.

//   - To retrieve the email back from `localStorage`:
//     ```javascript
//     const savedLoginForm = JSON.parse(localStorage.getItem('saved-login-form'));
//     console.log(savedLoginForm.email);
//     ```
//     Here, `JSON.parse` will turn the stored JSON string back into an object with the email property you saved.

// Using `JSON.stringify` and `JSON.parse` together ensures that data stored in `localStorage` retains its structure and
// can be read back in its original form.

// Templete driven Form

// import {
//   AfterViewInit,
//   Component,
//   ViewChild,
//   DestroyRef,
//   inject,
// } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent implements AfterViewInit {
//   @ViewChild('form') form!: NgForm; // Ensure correct ViewChild syntax
//   private destroyRef = inject(DestroyRef);

//   constructor() {}

//   ngAfterViewInit() {
//     const savedForm = window.localStorage.getItem('saved-login-form');
//     if (savedForm) {
//       const loadedFormData = JSON.parse(savedForm);
//       const savedEmail = loadedFormData.email;
//       this.form.setValue({ email: savedEmail, password: '' });
//     }

//     const subscription = this.form.valueChanges?.pipe(debounceTime(300)).subscribe({
//       next: (value) => console.log(value)
//         // window.localStorage.setItem(
//         //   'saved-login-form',
//         //   JSON.stringify({ email: value.email })
//         // ),
//     });

//     this.destroyRef.onDestroy(() => subscription?.unsubscribe());
//   }

//   onSubmit(formData: NgForm) {
//     const enteredEmail = formData.form.value.email;
//     const enteredPassword = formData.form.value.password;
//     console.log(enteredEmail, enteredPassword);

//     formData.form.reset();
//   }
// }
