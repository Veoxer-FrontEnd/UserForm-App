import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: true}) signupForm: NgForm;

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
