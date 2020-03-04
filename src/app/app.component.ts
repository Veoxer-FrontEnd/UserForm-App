import { Component, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
=======
import {NgForm} from '@angular/forms';
>>>>>>> d26dad5e2ed449c71fcae90c82f9fd68b44bad0a

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD

  @ViewChild('f', {static: true}) signupForm: NgForm;
=======
  @ViewChild('f', {static: true}) singupForm: NgForm;
  answer: string = '';
  genders: string[] = ['Male', 'Female']
  isSubmitted: boolean = false;
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
>>>>>>> d26dad5e2ed449c71fcae90c82f9fd68b44bad0a

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.singupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'Female'
    // });

    this.singupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onReset(){
    this.singupForm.reset();
  }

  onSubmit(){
    // console.log(this.singupForm);
    this.isSubmitted = true;
    this.user.userName = this.singupForm.value.userData.userName;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.answer;
    this.user.gender = this.singupForm.value.gender;
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
