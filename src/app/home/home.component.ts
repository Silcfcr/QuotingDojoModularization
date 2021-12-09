import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  constructor(private _HttpService: HttpService,
    private _router: Router,
    // private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let observable = this._HttpService.validateUser();
    observable.subscribe((data: any) => {
      console.log("This is session data from home", data);
      this.currentUser = data;
      console.log(this.currentUser.email)
    },
      (error: any) => {
        console.log(error.statusText);
        this._router.navigate(['/login']);
      })
  }

  logout(): void {
    let observable = this._HttpService.logoutUser()
    observable.subscribe((data: any) => {
      console.log(data);
      this._router.navigate(['/login'])
    })
  }


}
