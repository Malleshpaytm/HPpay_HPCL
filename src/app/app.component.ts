import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './services/admin/admin.service';
import { LoginService } from './services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private loginService: LoginService) {
    localStorage.removeItem('token')
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    this.loginService.getToken(getTokenData).subscribe(data => {
      if (data.success === true) {
        
        localStorage.setItem('token', data.token)
      }
    })
  }
  title = 'HPCL HP PAY';
  ngOnChanges(changes: SimpleChanges): void {
    localStorage.removeItem('token')
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    this.loginService.getToken(getTokenData).subscribe(data => {
      if (data.success === true) {
        
        localStorage.setItem('token', data.token)
      }
    })
  }
  ngOnInit(): void {
    localStorage.removeItem('token')
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    this.loginService.getToken(getTokenData).subscribe(data => {
      if (data.success === true) {
        
        localStorage.setItem('token', data.token)
      }
    })
  }


}
