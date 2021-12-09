import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private _socket: Socket) { }


  getAll() {
    return this._socket.emit('http://localhost:5000/chatTest/');
  }
  CreateOne(newComment: any) {
    return this._socket.fromEvent('http://localhost:5000/chat/', newComment)
  }

  // emit event
  // fetchMovies() {
  //   this.socket.emit('fetchMovies');
  // }

  // // listen event
  // OnFetchMovies() {
  //   return this.socket.fromEvent('fetchMovies');
  // }
}
