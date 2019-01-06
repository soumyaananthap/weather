import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  city:string;
  code:string;

  // constructor(private: route:Router) { }
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  save(){
    let location = {
      city:this.city,
      code:this.code
    };
    localStorage.setItem('location',JSON.stringify(location));
    this.router.navigate(['home']);
  }

}
