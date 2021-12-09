import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { FormComponent } from '../form/form.component';
// import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    // here we can use socket events and listeners using socketService
  }
  sendMessage(event: any): void {
    event.preventDefault();
  }


}
