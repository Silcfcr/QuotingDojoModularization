import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  craftCategory: string = "";
  allMessages: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _socketService: SocketService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.craftCategory = params['craft'];
      console.log(this.craftCategory)
      // this.fetchCity(this.city);
      // this.getImage(this.city);
    });
  }
  sendMessage(event: any): void {
    event.preventDefault();
  }

  getAllMessages(): void {
    console.log("Getting al messages");
    let observable = this._socketService.getAll();;
    observable.subscribe((data: any) => {
      console.log(data);
      this.allMessages = data;
    })
    console.log("i got here")

  }


}
