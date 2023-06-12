import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpForm} from "../../model/SignUpForm";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    status = 'Please  fill in the form to register';
    form: any = {};
    signUpForm: SignUpForm;
    emailFormValidate = new FormControl('',[
        Validators.required,
        Validators.email
        ]);
    hide = true;
    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }



    register() {
     this.signUpForm = new SignUpForm(
         this.form.name,
         this.form.username,
         this.form.email,
         this.form.password
     )
        console.log("this signUpForm--> ", this.signUpForm);
        this.authService.signUp(this.signUpForm).subscribe(data =>{
            console.log('data--->', data);
            if (data.message=='no_user'){
                this.status = 'The username is existed ! Please try again !'
            }else if (data.message=='no_email'){
                this.status='The email is existed ! Please try again !'
            }else if (data.message == 'yes'){
                this.status = 'Create account success !'
            }
        })
    }

    protected readonly statusbar = statusbar;
}
