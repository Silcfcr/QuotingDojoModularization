import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  CreateOne(newUser: any) {
    return this._http.post('http://localhost:5000/user/', newUser)
  }
  getAll() {
    return this._http.get('http://localhost:5000/user/');
  }
  getOne(id: string) {
    return this._http.get(`http://localhost:5000/user/${id}`);
  }
  getOneByEmail(id: string) {
    return this._http.get(`http://localhost:5000/user/${id}/email`);
  }
  loginUser(currentUser: any) {
    console.log(currentUser);
    return this._http.post("http://localhost:5000/user/login", currentUser);
  }
  UpdateOne(id: string, updateTask: any) {
    return this._http.put(`http://localhost:5000/user/${id}`, updateTask)
  }

  DeleteOne(id: string) {
    return this._http.delete(`http://localhost:5000/user/${id}`)
  }
  validateUser(): any {
    return this._http.get("http://localhost:5000/user/validate");
  }

  logoutUser(): any {
    return this._http.get('http://localhost:5000/user/logout');
  }

  CreateOneCraft(email: string, newCraft: any) {
    console.log("service", newCraft)
    return this._http.post(`http://localhost:5000/craft/${email}`, newCraft)
  }
  DeleteBike(id: string, currentUserEmail: string) {
    return this._http.delete(`http://localhost:5000/api/bike/${id}`, {
      body: {
        userEmail: currentUserEmail
      }
    })
  }


}
