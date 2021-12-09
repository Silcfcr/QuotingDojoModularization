import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  newCraft: any;
  errorMessage: string = "";

  constructor(private _HttpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let observable = this._HttpService.validateUser();
    observable.subscribe((data: any) => {
      console.log("This is session data ", data);
      this.currentUser = data;
      console.log(this.currentUser.email)
    },
      (error: any) => {
        console.log(error.statusText);
        this._router.navigate(['/login']);
      })
    // this.getUser();

    this.newCraft = {
      title: "",
      description: "",
      category: "",
      imageUrl: ""
    }
  }

  addCraft(event: any): void {
    event.preventDefault();
    console.log(this.newCraft)
    let observable = this._HttpService.CreateOneCraft(this.currentUser.email, this.newCraft);
    observable.subscribe((data: any) => {
      console.log(data);
      this._router.navigate(['/home']);
    },
      (error: any) => {
        console.log(error);
        this.errorMessage = error.statusText;
      });
  }

  // getUser(): void {
  //   console.log( "We are going to fetch one user!" );
  //   let observable = this._HttpService.getOne(this.currentUser.id);;
  //   observable.subscribe((data: any) => {
  //     console.log(data);
  //     this.currentUser = data;
  //   })
  //   console.log("i got here")
  // }

}

