import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
public show :boolean = true
  ngOnInit(): void {    
 this.show =   JSON.parse(localStorage.getItem('user'))
  }

  onLogout(){
    
    localStorage.clear();
  }
}

