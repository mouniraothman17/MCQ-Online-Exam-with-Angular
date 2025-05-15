import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.getLogedInUser();
  }
  userRole: any;
  user:any;


  getLogedInUser() {
    this.auth.getRole().subscribe(res=> {
      this.user = res
      console.log(this.user.role);
      this.userRole = this.user.role;
      console.log(this.userRole);


    })
  }
}
