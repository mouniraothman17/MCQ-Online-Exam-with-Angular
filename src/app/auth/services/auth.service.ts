import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  user = new Subject()
  createUser(model:any) {
    return this.http.post(environment.baseApi+'students' , model)
  }

  login(model:any) {
    return this.http.put(environment.baseApi+'login/ed90' , model)
  }

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }

  getStudent(id:any) {
    return this.http.get(environment.baseApi+"students/"+id)
  }

  updateStudent(id:any , model:any) {
    return this.http.put(environment.baseApi+"students/"+id , model)
  }

  getRole() {
    return this.http.get(environment.baseApi+'login/ed90')
  }
}
