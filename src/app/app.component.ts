import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private service : AuthService) {}

  ngOnInit(): void {
    this.getUserDate()
  }
  
  getUserDate() {
    this.service.getRole().subscribe((res:any) => {
      this.service.user.next(res)
    })
  }

}
