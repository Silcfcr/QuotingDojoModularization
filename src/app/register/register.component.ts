import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any;
  errorMessage: string = "";
  constructor(private _HttpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newUser = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  registerHandler(event: any): void {
    event.preventDefault();
    console.log("registering");

    let observable = this._HttpService.CreateOne(this.newUser);
    observable.subscribe((data: any) => {
      this._router.navigate(['/home']);
    },
      (error: any) => {
        console.log(error);
        this.errorMessage = error.statusText;
      });
  }


}
